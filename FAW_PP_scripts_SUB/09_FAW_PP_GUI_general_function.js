
// clean up model
function Clean_macro(n)
{
	// do the clean-up v11.1 version used.
	// write out a temporary macro file
	var temp_macro = new File('temp_macro.prm', File.WRITE);
		/* 
		//v11
		temp_macro.Writeln('Window("Tools/Keywords").Button("Remove")');
		temp_macro.Writeln('In Window("Remove")');
		temp_macro.Writeln('    .Button("Cleanup")');
		temp_macro.Writeln('    .Button("Apply")');
		temp_macro.Writeln('End In');
		temp_macro.Writeln('In Window("Remove").Window("CLEANUP MODEL")');
		temp_macro.Writeln('    .Button("Delete sel")');
		temp_macro.Writeln('    .Button("Continue")');
		temp_macro.Writeln('End In');
		*/
		//v12
		temp_macro.Writeln('Window("Tools/Keywords").Button("Remove")');
		//temp_macro.Writeln('In Window("Remove")');
		temp_macro.Writeln('Window("Remove").Button("Cleanup")');
		temp_macro.Writeln('In MasterWindow().Menu("CLEANUP UNUSED")');
		temp_macro.Writeln('    .Select1("MODEL...")');
		Message('Model unmber is ', m_p.number);
		temp_macro.Writeln('    .Select2("M', m_p.number,' : Neon model for Primer Demo")');
		temp_macro.Writeln('End In');
		temp_macro.Writeln('Window("Remove").Button("Apply")');
		temp_macro.Writeln('In Window("Remove").Window("CLEANUP MODEL")');
		temp_macro.Writeln('    .Button("MATERIAL|DELETE_TOGGLE") = Off'); 
		temp_macro.Writeln('    .Button("Delete sel")');
		temp_macro.Writeln('    .Button("Continue")');
		temp_macro.Writeln('End In');	
		//temp_macro.Writeln('ShortcutKey(c)');		
		//
	    temp_macro.Close();

	if(n) {for(i=0;i<n;i++) PlayMacro(temp_macro.filename, true, true, 0, null, false);}
	else PlayMacro(temp_macro.filename, true, true, 0, null, false);
	File.Delete(temp_macro.filename);
}
// short cut 'c'
function C_macro()
{
	// do the clean-up v11.1 version used.
	// write out a temporary macro file
	var temp_macro = new File('temp_macro.prm', File.WRITE);
	temp_macro.Writeln('ShortcutKey(c)');		
	temp_macro.Close();
	
	PlayMacro(temp_macro.filename, true, true, 0, null, false);

	File.Delete(temp_macro.filename);
}
// quick scan
function Model_Scan_macro(file_name, type)
{
	var tmp;
	var temp_macro = new File(temp_dir + '\\temp_macro_scan.prm', File.WRITE);
	temp_macro.Writeln('Window("Model functions").Button("Read")');
	temp_macro.Writeln('In Window("READ FILE")');	
	temp_macro.Writeln('	.Textbox("File:") ="' + file_name + '"'); 
	//temp_macro.Write(file_name,'\"\n');
    temp_macro.Writeln('    .Button("Scan all")');
   	temp_macro.Writeln('End In');
    temp_macro.Writeln('In Window("SELECT INCLUDE FILES TO READ")');
    temp_macro.Writeln('	.Button("TOGGLE|Root file") = On');
    if(type == 1)
    {
    	for(var i=1;i<Include_Map.length-1;i++)
    	{
    		for(var j=0;j<Include_Map[i].map.length;j++)
    		{
     			temp_macro.Write('	.Button("TOGGLE|Root file'); 
     			for(var k=2;k<Include_Map[i].map[j].length;k++) temp_macro.Write('|I'+Include_Map[i].map[j][k]);
     			temp_macro.Write('|I'+Include_Map[i].map[j][0]+'") = On\n');
     				//temp_macro.Writeln('	.Button("TOGGLE|Root file|I'+Include_Map[i].map[j][0]+'") = On');   				


    		}
    	} 	
    }
    
    temp_macro.Writeln('	.Button("Apply")');
	temp_macro.Writeln('End In');
	temp_macro.Writeln('ShortcutKey(c)');	
	//
	temp_macro.Close();    	 
	PlayMacro(temp_macro.filename, true, true, 0, null, false);
	//File.Delete(temp_macro.filename);
	

}
// model check
function Model_check_marco()
{
	var temp_macro = new File('temp_macro.prm', File.WRITE);
	temp_macro.Writeln('Window("Tools/Keywords").Button("Check")');
	temp_macro.Writeln('Window("Check").Button(". . .")');
	temp_macro.Writeln('Window("Check").Menu("MODELS").Select1("', m_p.number,' :")');
	temp_macro.Writeln('Window("Check").Button("Apply")');
	temp_macro.Writeln('Window("Error tree viewer").Expand("TREE|ERROR|SHELL")');
	//
	temp_macro.Close();    	 
	PlayMacro(temp_macro.filename, true, true, 0, null, false);
	File.Delete(temp_macro.filename);
}
// 
function draw_x_surface()
{
	Node.ForEach(m_p, Boundary_find);
	function Boundary_find(N_tmp)
	{
		if(N_tmp.y>Y_max) {Y_max = N_tmp.y;}
		if(N_tmp.y<Y_min) {Y_min = N_tmp.y;}		
		if(N_tmp.z>Z_max) {Z_max = N_tmp.z;}		
		if(N_tmp.z<Z_min) {Z_min = N_tmp.z;}	
	}

/* Sketches the ground level for the bumper reference lines */
	Graphics.Start(); 
	
/*	old method code
// Draw a rectangle //
	var Ang_cutoff = Number(tabs_p[0][43].text); 
	Graphics.FillColour(Colour.WHITE);
	Graphics.MoveTo(Boundary_X-(Boundary_Z-Z_min)*Math.tan(Ang_cutoff/180*3.14159), (Y_max+Y_min)/2-(Y_max-Y_min)/2, (Z_max+Z_min)/2-(Z_max-Z_min)/2);
	Graphics.PolygonStart();                                   
	Graphics.MoveTo(Boundary_X-(Boundary_Z-Z_min)*Math.tan(Ang_cutoff/180*3.14159), (Y_max+Y_min)/2+(Y_max-Y_min)/2, (Z_max+Z_min)/2-(Z_max-Z_min)/2);
	Graphics.MoveTo(Boundary_X+(Z_max-Boundary_Z)*Math.tan(Ang_cutoff/180*3.14159), (Y_max+Y_min)/2+(Y_max-Y_min)/2, (Z_max+Z_min)/2+(Z_max-Z_min)/2);
	Graphics.MoveTo(Boundary_X+(Z_max-Boundary_Z)*Math.tan(Ang_cutoff/180*3.14159), (Y_max+Y_min)/2-(Y_max-Y_min)/2, (Z_max+Z_min)/2+(Z_max-Z_min)/2); 
	Graphics.PolygonFinish();
*/

	/*Draw 3 rectangle*/
	Graphics.FillColour(Colour.RED);
	Graphics.MoveTo(Boundary_X_2, (Y_max+Y_min)/2-(Y_max-Y_min)/2, (Z_max+Z_min)/2-(Z_max-Z_min)/2);
	Graphics.PolygonStart(); 
	Graphics.MoveTo(Boundary_X_2, (Y_max+Y_min)/2+(Y_max-Y_min)/2, (Z_max+Z_min)/2-(Z_max-Z_min)/2);
	Graphics.MoveTo(Boundary_X_2, (Y_max+Y_min)/2+(Y_max-Y_min)/2, (Boundary_Z+Boundary_Z_2)/2);
	Graphics.MoveTo(Boundary_X_2, (Y_max+Y_min)/2-(Y_max-Y_min)/2, (Boundary_Z+Boundary_Z_2)/2);
	Graphics.PolygonFinish();
	Graphics.FillColour(Colour.BACKGROUND);
	Graphics.MoveTo(Boundary_X_2, (Y_max+Y_min)/2+(Y_max-Y_min)/2, (Boundary_Z+Boundary_Z_2)/2);
	Graphics.PolygonStart(); 
	Graphics.MoveTo(Boundary_X, (Y_max+Y_min)/2+(Y_max-Y_min)/2, (Boundary_Z+Boundary_Z_2)/2);
	Graphics.MoveTo(Boundary_X, (Y_max+Y_min)/2-(Y_max-Y_min)/2, (Boundary_Z+Boundary_Z_2)/2);
	Graphics.MoveTo(Boundary_X_2, (Y_max+Y_min)/2-(Y_max-Y_min)/2, (Boundary_Z+Boundary_Z_2)/2);
	Graphics.PolygonFinish();
	Graphics.FillColour(Colour.RED);
	Graphics.MoveTo(Boundary_X, (Y_max+Y_min)/2+(Y_max-Y_min)/2, (Boundary_Z+Boundary_Z_2)/2);
	Graphics.PolygonStart(); 
	Graphics.MoveTo(Boundary_X, (Y_max+Y_min)/2+(Y_max-Y_min)/2, (Z_max+Z_min)/2+(Z_max-Z_min)/2);
	Graphics.MoveTo(Boundary_X, (Y_max+Y_min)/2-(Y_max-Y_min)/2, (Z_max+Z_min)/2+(Z_max-Z_min)/2);
	Graphics.MoveTo(Boundary_X, (Y_max+Y_min)/2-(Y_max-Y_min)/2, (Boundary_Z+Boundary_Z_2)/2);
	Graphics.PolygonFinish();
  
/* Write the name of the first line */
  //Graphics.TextColour(Colour.SKETCH);
  //Graphics.MoveTo((front_bump+back_bump)/2,0.0,href_bump);
  //Graphics.Text("Ground Level");
  //
	Graphics.Finish();
}
//
function draw_z_surface()
{
	Node.ForEach(m_p, Boundary_find);
	function Boundary_find(N_tmp)
	{
		if(N_tmp.y>Y_max) {Y_max = N_tmp.y;}
		if(N_tmp.y<Y_min) {Y_min = N_tmp.y;}		
		if(N_tmp.x>X_max) {X_max = N_tmp.x;}		
		if(N_tmp.x<X_min) {X_min = N_tmp.x;}	
	}

/* Sketches the ground level for the bumper reference lines */
	Graphics.Start(); 

/* Draw a rectangle */ 
	Graphics.FillColour(Colour.WHITE);
	Graphics.MoveTo((X_max+X_min)/2+(X_max-X_min)/2*1.2, (Y_max+Y_min)/2-(Y_max-Y_min)/2*1.2,  Number(tabs_p[1][30].text));
	Graphics.PolygonStart();                                              
	Graphics.MoveTo((X_max+X_min)/2+(X_max-X_min)/2*1.2, (Y_max+Y_min)/2+(Y_max-Y_min)/2*1.2,  Number(tabs_p[1][30].text));
	Graphics.MoveTo((X_max+X_min)/2-(X_max-X_min)/2*1.2, (Y_max+Y_min)/2+(Y_max-Y_min)/2*1.2,  Number(tabs_p[1][30].text));
	Graphics.MoveTo((X_max+X_min)/2-(X_max-X_min)/2*1.2, (Y_max+Y_min)/2-(Y_max-Y_min)/2*1.2,  Number(tabs_p[1][30].text)); 
	Graphics.PolygonFinish();
  
	Graphics.Finish();
}
//
function clean_surface()
{

/* Sketches the ground level for the bumper reference lines */
	Graphics.Start(); 
	Graphics.Finish();
}
//
function New_widget(window,type,x1,x2,y1,y2,foreground,background,label,justify,active)
{
	var vertical_off = 50;
	var tmp = new Widget(window, type, x1, x2, y1+vertical_off, y2+vertical_off);
	if(foreground) tmp.foreground = foreground;
	if(background) tmp.background = background; //back;
	if(type!=Widget.CHECKBOX) 
	{
		if(label) tmp.text = label;
		if(justify) tmp.justify = justify;
		//Message(active);
		if(active==false) tmp.active = false;
	}
	
	return tmp;
	
}
//
function MakeDir(path)
{
    if(!File.IsDirectory(path)) //if the directory doesnt exist try to make it
    {
        try //try to make it
        {
            if(!File.Mkdir(path)) throw path; //if primer says it couldnt be made throw the error
        }
        catch(err) //if theres any problem
        {
            Window.Error('', "Could not create essential folder: " + path);
            //NormalTermination();
        }
    }     
}
//
function Model_write_out(m, path)
{

			var tmp = Include.GetAll(m);
			for(var i=0;i<tmp.length;i++)
			{
				tmp[i].path = path+'\\'; //tmp[i].path = path+'\\INCL\\'; //+tmp[i].name;
				tmp[i].Write(tmp[i].file, Include.RELATIVE, Include.WINDOWS);
			}	
			m.Write(path+'\\'+Project_tmp.keyword_name, Include.MASTER_ONLY, Include.RELATIVE, Include.WINDOWS);		


			var fra = new File(path+'\\temp.txt',File.WRITE);
				fra.Close();	
			var rline;
			var f_addrel = new File(path+'\\'+Project_tmp.keyword_name, File.READ);
			while((rline=f_addrel.ReadLongLine())!=undefined)
			{
				if(rline=='$ INCLUDE cards')
				{
				fra = new File(path+'\\temp.txt',File.APPEND);
				fra.Writeln('$ INCLUDE PATH cards');
				fra.Writeln('$ ==================');
				fra.Writeln('$');
				fra.Writeln('$');
				fra.Writeln('$');
				fra.Writeln('*INCLUDE_PATH_RELATIVE');
				fra.Writeln('..'+"\\"+'..'+"\\"+'01_Model');
				fra.Writeln('$');
				fra.Writeln('$ ==================');
				fra.Writeln('$ INCLUDE  cards');
				fra.Close();
				}
				else {
				fra = new File(path+'\\temp.txt',File.APPEND);	
				fra.Writeln(rline);
				fra.Close();
				}
			}
			f_addrel.Close();
			
			var deleted = File.Delete(path+'\\'+Project_tmp.keyword_name);
			var rename = File.Rename(path+'\\temp.txt',path+'\\'+Project_tmp.keyword_name);
}
//
function Model_show_only(m)
{
	var tmp = Model.GetAll();
	for(var i=0;i<tmp.length;i++)
	{
		tmp[i].Hide();
	}
	m.Show();
	
}
//
function Num_convert(num, n, nmax, nmin)
{
	//
	if(Number(n)>=0) n=Math.floor(n)
	else n=3;
	if(Number(nmax)>=0) nmax=Math.floor(nmax)
	else nmax=5;
	if(Number(nmin)<=0) nmin=Math.floor(nmin)
	else nmin=-5;
	//
	if(Number(num)>Math.pow(10,nmax) || Number(num)<Math.pow(10,nmin))
	{
		var x = Math.abs(num);
		var e = 1;
		var result = true;
		while(result)
		{
			if(x*e>=10) e=e/10;
			else if(x*e<1) e=e*10;
			else (result = false);
		}
		x = Math.floor(x*e*Math.pow(10,n))/Math.pow(10,n);
		if(num>0) return(String(x)+'E'+String(-Math.floor(Math.log(e)/Math.log(10))));
		else return(String(-x)+'E'+String(-Math.floor(Math.log(e)/Math.log(10))));
	}
	else 
	{
		return(Math.floor(num*Math.pow(10,-nmin))/Math.pow(10,-nmin));
	}
	
}
//
function model_control_remove()
{
	//missing: UNITS, IMPLICIT_MODAL_DYNAMIC, IMPLIC_MODAL_DYNAMIC_MODAL
	//missing: MPP_IO_NOBEAMOUT, MPP_MAT_MODAL_DRIVER 
	//missing: THERMAL_EIGENVALUE, THERMAL_EIGENVALUE,
	//missing: FORMING_INITIAL_THICKNESS, FORMING_MAXID, FORMING_PARAMETER_READ, FORMING_STONING, FORMING_TRIM_MERGE
	//missing: SUBCYCLE
	m_p.control.accuracy.exists = false; 
	m_p.control.adapstep.exists = false; 
	m_p.control.adaptive.exists = false; 
	m_p.control.adaptive_curve.exists = false; 
	m_p.control.ale.exists = false; 
	m_p.control.bulk_viscosity.exists = false;
	m_p.control.check.exists = false;
	m_p.control.coarsen.exists = false;
	m_p.control.contact.exists = false;
	m_p.control.coupling.exists = false;
	m_p.control.cpm.exists = false;
	m_p.control.cpu.exists = false;
	m_p.control.debug.exists = false;
	m_p.control.discrete_element.exists = false;
	m_p.control.dynamic_relaxation.exists = false;
	m_p.control.efg.exists = false;
	m_p.control.energy.exists = false;
	m_p.control.explosive_shadow.exists = false;
	m_p.control.forming_position.exists = false;
	m_p.control.forming_pre_bending.exists = false;
	m_p.control.forming_projection.exists = false;
	m_p.control.forming_template.exists = false;
	m_p.control.forming_travel.exists = false;
	m_p.control.forming_unflanging.exists = false;
	m_p.control.forming_user.exists = false;
	m_p.control.frequency_response_function.exists = false;
	m_p.control.hourglass.exists = false;
	m_p.control.implicit_auto.exists = false;
	m_p.control.implicit_buckle.exists = false;
	m_p.control.implicit_consistent_mass.exists = false;
	m_p.control.implicit_dynamics.exists = false;
	m_p.control.implicit_eigenvalue.exists = false;
	m_p.control.implicit_explicit_hybrid.exists = false;
	m_p.control.implicit_forming.exists = false;
	m_p.control.implicit_general.exists = false;
	m_p.control.implicit_inertia_relief.exists = false;
	m_p.control.implicit_joints.exists = false;
	m_p.control.implicit_modes.exists = false;
	m_p.control.implicit_solution.exists = false;
	m_p.control.implicit_solver.exists = false;
	m_p.control.implicit_stabilization.exists = false;
	m_p.control.implicit_static_condensation.exists = false;
	m_p.control.implicit_termination.exists = false;
	m_p.control.mpp_contact_groupable.exists = false;
	m_p.control.mpp_decomposition_automatic.exists = false;
	m_p.control.mpp_decomposition_bagref.exists = false;
	m_p.control.mpp_decomposition_check_speed.exists = false;
	m_p.control.mpp_decomposition_contact_distribute.exists = false;
	m_p.control.mpp_decomposition_contact_isolate.exists = false;
	m_p.control.mpp_decomposition_disable_unref_curves.exists = false;
	m_p.control.mpp_decomposition_distribute_ale_elements.exists = false;
	m_p.control.mpp_decomposition_distribute_sph_elements.exists = false;
	m_p.control.mpp_decomposition_elcost.exists = false;
	m_p.control.mpp_decomposition_file.exists = false;
	m_p.control.mpp_decomposition_method.exists = false;
	m_p.control.mpp_decomposition_numproc.exists = false;
	m_p.control.mpp_decomposition_outdecomp.exists = false;
	m_p.control.mpp_decomposition_parts_distribute.exists = false;
	m_p.control.mpp_decomposition_partset_distribute.exists = false;
	m_p.control.mpp_decomposition_rcblog.exists = false;
	m_p.control.mpp_decomposition_scale_contact_cost.exists = false;
	m_p.control.mpp_decomposition_scale_factor_sph.exists = false;	
	m_p.control.mpp_decomposition_show.exists = false;
	m_p.control.mpp_decomposition_transformation.exists = false;
	m_p.control.mpp_io_binoutonly.exists = false;
	m_p.control.mpp_io_lstc_reduce.exists = false;
	m_p.control.mpp_io_nod3dump.exists = false;
	m_p.control.mpp_io_nodump.exists = false;
	m_p.control.mpp_io_nofail.exists = false;
	m_p.control.mpp_io_nofull.exists = false;
	m_p.control.mpp_io_swapbytes.exists = false;
	m_p.control.nonlocal.exists = false;
	m_p.control.output.exists = false;
	m_p.control.parallel.exists = false;
	m_p.control.pore_air.exists = false;
	m_p.control.pore_fluid.exists = false;
	m_p.control.pwp_auto_tmf.exists = false;
	m_p.control.remesh.exists = false;
	m_p.control.rigid.exists = false;
	m_p.control.shell.exists = false;
	m_p.control.solid.exists = false;
	m_p.control.solution.exists = false;
	m_p.control.sph.exists = false;
	m_p.control.spotweld_beam.exists = false;
	m_p.control.staged_construction.exists = false;
	m_p.control.start.exists = false;
	m_p.control.steady_state_rolling.exists = false;
	m_p.control.structured.exists = false;
	m_p.control.termination.exists = false;
	m_p.control.thermal_eigenvalue.exists = false;
	m_p.control.thermal_nonlinear.exists = false;
	m_p.control.thermal_solver.exists = false;
	m_p.control.thermal_timestep.exists = false;
	m_p.control.timestep.exists = false;
	m_p.control.vibro_acoustic.exists = false;
		
}
//
function model_database_remove()
{
	//
	m_p.database.abstat.exists = false;
	m_p.database.atdout.exists = false;
	//m_p.database.binary.exists = false;
	m_p.database.bndout.exists = false;
	m_p.database.dcfail.exists = false;
	m_p.database.defgeo.exists = false;
	m_p.database.deforc.exists = false;
	m_p.database.elout.exists = false;
	m_p.database.extent_binary.exists = false;
	m_p.database.extent_d3part.exists = false;
	m_p.database.extent_intfor.exists = false;
	m_p.database.format.exists = false;
	m_p.database.gceout.exists = false;
	m_p.database.glstat.exists = false;
	m_p.database.h3out.exists = false;
	m_p.database.jntforc.exists = false;
	m_p.database.matsum.exists = false;
	m_p.database.ncforc.exists = false;
	m_p.database.nodfor.exists = false;
	m_p.database.nodout.exists = false;
	m_p.database.pllyout.exists = false;
	m_p.database.rbdout.exists = false;
	m_p.database.rcforc.exists = false;
	m_p.database.rwforc.exists = false;
	m_p.database.sbtout.exists = false;
	m_p.database.secforc.exists = false;
	m_p.database.sleout.exists = false;
	m_p.database.spcforc.exists = false;
	m_p.database.sphout.exists = false;
	m_p.database.swforc.exists = false;
	m_p.database.tprint.exists = false;
	m_p.database.trhist.exists = false;
	//
	/*
	m_p.database.binary.blstfor.exists = false;
	m_p.database.binary.cpmfor.exists = false;
	m_p.database.binary.d3crack.exists = false;
	m_p.database.binary.d3drlf.exists = false;
	m_p.database.binary.d3dump.exists = false;
	m_p.database.binary.d3mean.exists = false;
	m_p.database.binary.d3part.exists = false;
	m_p.database.binary.d3plot.exists = false;
	m_p.database.binary.d3prop.exists = false;
	m_p.database.binary.d3thdt.exists = false;
	m_p.database.binary.fsifor.exists = false;
	m_p.database.binary.intfor.exists = false;
	m_p.database.binary.runrsf.exists = false;
	m_p.database.binary.xtfile.exists = false;
	*/
	//
	var Flag_m_del = AllocateFlag(); m_p.ClearFlag(Flag_m_del);
	//
	var history = History.First(m_p);
	while(history)
	{
		history.SetFlag(Flag_m_del);
		history = history.Next();
	}
	var crosssection = CrossSection.First(m_p);
	while(crosssection)
	{
		crosssection.SetFlag(Flag_m_del);
		crosssection = crosssection.Next();
	}
	m_p.DeleteFlagged(Flag_m_del);

	ReturnFlag(Flag_m_del);
	
}
//
function model_initial_velocity_remove()
{
	var Flag_m_del = AllocateFlag(); m_p.ClearFlag(Flag_m_del);	
	var init_vel = Velocity.First(m_p);
	while(init_vel)
	{
		init_vel.SetFlag(Flag_m_del);
		init_vel = init_vel.Next();
	}
	var init_vel_g = VelocityGeneration.First(m_p);
	while(init_vel_g)
	{
		init_vel_g.SetFlag(Flag_m_del);
		init_vel_g = init_vel_g.Next();
	}	
	
	m_p.DeleteFlagged(Flag_m_del);

	ReturnFlag(Flag_m_del);
			
}
//
function model_rigidwall_remove()
{
	var Flag_m_del = AllocateFlag(); m_p.ClearFlag(Flag_m_del);		
	var rw = Rigidwall.First(m_p);
	while(rw)
	{
		rw.SetFlag(Flag_m_del);
		rw = rw.Next();
	}	
	
	m_p.DeleteFlagged(Flag_m_del);

	ReturnFlag(Flag_m_del);	
	
}
//
function SS_contact_setup()
{
	//find/create part set
	var sp_tmp = Set.First(m_p, Set.PART); var s_tmp; var m_tmp;
	while(sp_tmp)
	{
		if(sp_tmp.title =='Auto build Single Surface Contact') break;
		sp_tmp = sp_tmp.Next();	
	}
	Message(sp_tmp,'::',sp_tmp==undefined)
	if(sp_tmp==undefined)
	{
		sp_tmp = new Set(m_p, Set.LastFreeLabel(m_p, Set.PART), Set.PART, 'Auto build Single Surface Contact');
	}
	Part.ForEach(m_p, part_set_add);
	function part_set_add(p_tmp)
	{
		if(s_tmp == Section.GetFromID(m_p, p_tmp.secid))
		{
			if(s_tmp.type==Section.SHELL)
			{
				if(m_tmp == Material.GetFromID(m_p, p_tmp.mid))
				{
					if(m_tmp.type!='NULL') sp_tmp.Add(p_tmp.pid);
				}
			}
		}
	}
	
	var cont_tmp = Contact.First(m_p);
	while(cont_tmp)
	{
		if (cont_tmp.heading=='Auto build Single Surface Contact') break;
		cont_tmp = cont_tmp.Next();
	}
	if(cont_tmp==undefined)
	{
		cont_tmp = new Contact(m_p, 'AUTOMATIC_SINGLE_SURFACE', Contact.LastFreeLabel(m_p), 'Auto build Single Surface Contact');
	}	
	cont_tmp.sstyp = 2; cont_tmp.ssid = sp_tmp.sid;
	//cont_tmp.sfs =
	//cont_tmp.sst = 
	//cont_tmp.sfst = 
	//cont_tmp.fs = 
	//cont_tmp.fd =
	//cont_tmp.dc
	
	//sp_tmp.include = ??;
	//cont_tmp.include = ??;		

}
//
function exit_markup_macro()
{
	var temp_macro = new File('temp_macro.prm', File.WRITE);
		temp_macro.Writeln('In Window("Pedestrian Impact Reference Line Mark-up Program")');	
		temp_macro.Writeln('.Button("Quit")');
		temp_macro.Writeln('End In');
	temp_macro.Close();
	
	PlayMacro(temp_macro.filename, true, true, 0, null, false);

	File.Delete(temp_macro.filename);
}
//
function beam2iges(m, fname)
{
	
	/* No model selected so just exit the script*/
	if(m && fname) 
	{
		// Select parts
		var f = AllocateFlag();
		var p = Part.GetAll(m);
		for(var i=0;i<p.length;i++) p[i].SetFlag(f);
		
		// Propagte flag
		m.PropagateFlag(f);
	
		var pd_line = new Array();  // Array to hold Parameter Data start lines for each entity
		// Write the file
		write_iges(fname, f);

	}
		
	
	function write_iges(fname, f)
	{
	
	// Open the file to write to
	  var fIGES = new File(fname, File.WRITE);
	
	//Write each section
	
	  Message("Writing...");
	
	  var lines_S = write_iges_S(fIGES);
	  var lines_G = write_iges_G(fIGES, f, fname);
	  var lines_D = write_iges_D(fIGES, f);
	  var lines_P = write_iges_P(fIGES, f, false);
	  write_iges_T(fIGES, lines_S, lines_G, lines_D, lines_P);
	
	// Close the file 
	  fIGES.Close();
	
	  Message("Finished!");
	}
	
	function write_iges_S(fIGES)
	{
	// Write the free form header
	  fIGES.Writeln("                                                                        S      1");
	  return 1;
	}
		
	function write_iges_G(fIGES, f, fname)
	{
	// Writes the global section to file
	
	  Message("  Writing Global section");
	
	  var sec = "G";
	  var last_col = 72;
	
	  var oCounter = new Object();  // Create object to store current line and column
	  oCounter.col = 1;
	  oCounter.line = 1;
	
	  var str;
	  
	// Parameter Delimiter character
	  str = "1H,,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Record Delimiter character
	  str = "1H;,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Product Identification From Sender
	  str = "19HPRIMER_BEAM_CONVERT,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// File Name
	  var c = getFileFromPath(fname);
	  len = c.length;
	  str = len + "H" + c + ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Native System ID
	  str = "13H{unspecified},";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Preprocessor Version
	  str = "13H{unspecified},";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Number of Binary Bits for Integer Representation
	  str = "32,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Single-Precision Magnitude
	  str = "38,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Single-Precision Significance
	  str = "15,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Double-Precision Magnitude
	  str = "308,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Double-Precision Significance
	  str = "15,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Product Identification for the Receiver (default)
	  str = ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Model Space Scale (default)
	  str = ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Units Flag (mm)
	  str = "2,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Units Name (MM)
	  str = "2HMM,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Maximum Number of Line Weight Gradations (default)
	  str = ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Width of Maximum Line Weight in Units
	  str = "1,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Date and Time of Exchange File Generation (dummy date)
	  str = "15H20100910.180000,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Minimum User-Intended Resolution
	  str = ".0001,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Approximate Maximum Coordinate Value (default)
	  str = ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Name of Author (default)
	  str = ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Author鎶?Organization (default)
	  str = ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Version Flag (11 is v5.3)
	  str = "11,";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Drafting Standard Flag (default)
	  str = ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	  
	// Date and Time Model was Created or Modified (default)
	  str = ",";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Finish off 
	
	// End of record 
	  str = ";";
	  write_delimited(fIGES, str, sec, oCounter, last_col);
	
	// Write section type 
	  var spaces = 73 - oCounter.col;
	  for (var i=0; i<spaces; i++) fIGES.Write(" ");
	  fIGES.Write(sec);
	
	// Write the line number
	  var c = oCounter.line.toString();
	  var spaces = 7 - c.length;
	  for (var i=0; i<spaces; i++) fIGES.Write(" ");
	  fIGES.Writeln(c);
	 
	  return oCounter.line;
	}
	
	function write_iges_D(fIGES, f)
	{
	// Writes the Directory Entries
	
	  Message("  Writing Directory Entry section");
	
	  var icolour = 2   // Colour index (loop over 2-7 for each part)
	  var iline = 0;    // Line counter
	  
	// First store the Parameter Data start lines for each entity in the <pd_line> array 
	// by writing the section it to a temporary file (we need these for the second field)
	  var ftempname = File.Mktemp();
	
	// Open a temp file
	  var ftemp = new File(ftempname, File.WRITE);
	
	  write_iges_P(ftemp, f, true);
	
	// Close the temp file and delete it
	  ftemp.Close();
	  File.Delete(ftempname);
	  
	  
	// Now we have the required data - write it
	  var ipd = 1;    // Index for global array <pd_line>
	  
	// Loop over parts
	  var p = Part.First(m);
	  while(p)
	  {
	    if(p.Flagged(f))
	    {
	// Loop over the beams and count how many are in this part
	      var nbeam = 0;
	      var b = Beam.First(m);
	      while(b)
	      {
	        if(b.pid == p.pid) nbeam++;
	        b = b.Next();
	      }
	
	// There are some beams in this part so write the data
	      if(nbeam != 0)
	      {
	
	// Next line
	        iline++;
	        
	// Entity type (106 - polyline)
	        fIGES.Write("     106");
	        
	// Parameter Data line
	        pd = pd_line[ipd];
	        ipd++;
	
	        var c = pd.toString();
	        var spaces = 8 - c.length;
	        for (var i=0; i<spaces; i++) fIGES.Write(" ");
	        fIGES.Write(pd);
	        
	// Other stuff on the first line
	        fIGES.Write("       0       1       0       0       0       0       1D");
	
	// Line number
	        var c = iline.toString();
	        var spaces = 7 - c.length;
	        for (var i=0; i<spaces; i++) fIGES.Write(" ");
	        fIGES.Writeln(iline);
	
	// Next line
	        iline++;
	
	// Entity and line weight
	        fIGES.Write("     106       1");
	        
	// Colour
	        var c = icolour.toString();
	        var spaces = 8 - c.length;
	        for (var i=0; i<spaces; i++) fIGES.Write(" ");
	        fIGES.Write(icolour);
	        
	        icolour++;
	        if(icolour > 7) icolour = 2;
	        
	// Other stuff on the first line
	        fIGES.Write("       1      12                               0D");
	        
	// Line number
	        var c = iline.toString();
	        var spaces = 7 - c.length;
	        for (var i=0; i<spaces; i++) fIGES.Write(" ");
	        fIGES.Writeln(iline);
	      }
	    
	    }
	
	    p = p.Next();
	  }
	  
	  return iline;
	}
	
	function write_iges_P(fIGES, f, silent)
	{
	// Writes the Parameter Data entries.
	// One per part
	
	  if(!silent) Message("  Writing Parameter Data section");
	
	  var sec = "P";
	  var last_col = 64;
	  
	  var oCounter = new Object();  // Create object to store current line and column
	  oCounter.col = 1;
	  oCounter.line = 1;
	
	  var de_line = 1;  // Directory Entry line
	  var ipd = 1;   //Index into global <pd_line> array
	  
	// Loop over parts
	  var p = Part.First(m);
	  while(p)
	  {
	    if(p.Flagged(f))
	    {
	// Loop over the beams and count how many are in this part
	      var nbeam = 0;
	      var b = Beam.First(m);
	      while(b)
	      {
	        if(b.pid == p.pid) nbeam++;
	        b = b.Next();
	      }      
	
	// There are some beams in this part so write the data
	      if(nbeam != 0)
	      {
	        pd_line[ipd] = oCounter.line;
	        ipd++;
	      
	// Entity type, flag (2 = x,y,z coords) and number of points
	        var npoints = nbeam * 2;
	        var str = "106,2," + npoints + ",";
	        
	        write_delimited_P(fIGES, str, sec, oCounter, last_col, de_line)
	      
	        var b = Beam.First(m);
	        while(b)
	        {
	          if(b.pid == p.pid)
	          {
	// Write the two co-ords of the beam
	            var n, nid;
	            for(var i=0; i<2; i++)
	            {
	              if(i==0) nid = b.n1;
	              if(i==1) nid = b.n2;
	              
	              n = Node.GetFromID(m, nid);
	              str = n.x.toFixed(2) + "," + n.y.toFixed(2) + "," + n.z.toFixed(2) + ",";
	              write_delimited_P(fIGES, str, sec, oCounter, last_col, de_line);
	            }
	          }
	
	          b = b.Next();
	        }
	
	// Write the record end
	        write_delimited_P(fIGES, ";", sec, oCounter, last_col, de_line);
	        
	// Write the Directory Entry line number
	        var c = de_line.toString();
	        var spaces = 73 - oCounter.col - c.length;
	        for (var i=0; i<spaces; i++) fIGES.Write(" ");
	        fIGES.Write(de_line);
	
	// Write the section type
	        fIGES.Write(sec);
	
	// Write the line number
	        var c = oCounter.line.toString();
	        var spaces = 7 - c.length;
	        for (var i=0; i<spaces; i++) fIGES.Write(" ");
	        fIGES.Writeln(c);
	        
	// Setup line and column counters
	        oCounter.col = 1;
	        oCounter.line++;
	        
	        de_line += 2;  // Increment to next Directory Entry
	      }
	    
	    }
	
	    p = p.Next();
	  }
	
	  oCounter.line--;
	  return oCounter.line;
	}
	
	function write_iges_T(fIGES, lines_S, lines_G, lines_D, lines_P)
	{
	// Writes the Termination section
	
	  Message("  Writing Global section");
	
	  var section = new Array();
	
	  section[0] = "S";
	  section[1] = "G";
	  section[2] = "D";
	  section[3] = "P";
	  
	  for(var i=0; i<section.length; i++)
	  {
	    fIGES.Write(section[i]);
	    
	    if(section[i] == "S") var c = lines_S.toString();
	    if(section[i] == "G") var c = lines_G.toString();
	    if(section[i] == "D") var c = lines_D.toString();
	    if(section[i] == "P") var c = lines_P.toString();
	    
	    var spaces = 7 - c.length;
	    for(var j=0; j<spaces; j++) fIGES.Write(" ");
	    fIGES.Write(c);
	  }
	  
	  fIGES.Writeln("                                        T      1");
	
	}
	
	function write_delimited(fIGES, str, sec, counter, last_col)
	{
	// Writes the string <str> to the file <fIGES>.  If it can't fit it on the
	// current line (saved in <counter.line>) it will go to the next line, adding the
	// section type <sec> at column 73 and the line number
	
	
	// Check we can fit the string on the current line
	  var len = str.length;
	  if(len+counter.col < last_col)
	  {
	// Write the string
	    fIGES.Write(str);
	
	// Update the column counter
	    counter.col += len;
	  }
	  else
	  {
	// Doesn't fit on the line so...
	// Write the section type
	    var spaces = 73 - counter.col;
	    for (var i=0; i<spaces; i++) fIGES.Write(" ");
	    fIGES.Write(sec);
	
	// Write the line number
	    var c = counter.line.toString();
	    var spaces = 7 - c.length;
	    for (var i=0; i<spaces; i++) fIGES.Write(" ");
	    fIGES.Writeln(c);
	
	// Now write the string 
	    fIGES.Write(str);
	
	// Update the column and line counter
	    counter.col = len+1;
	    counter.line++;
	  }
	}
	
	function write_delimited_P(fIGES, str, sec, counter, last_col, de_line)
	{
	// Same as above, but writes the <de_line>
	
	
	// Check we can fit the string on the current line
	  var len = str.length;
	  if(len+counter.col < last_col)
	  {
	// Write the string
	    fIGES.Write(str);
	
	// Update the column counter
	    counter.col += len;
	  }
	  else
	  {
	// Doesn't fit on the line so...
	// Write the Directory Entry line number
	    var c = de_line.toString();
	    var spaces = 73 - counter.col - c.length;
	    for (var i=0; i<spaces; i++) fIGES.Write(" ");
	    fIGES.Write(de_line);
	
	// Write the section type
	    fIGES.Write(sec);
	
	// Write the line number
	    var c = counter.line.toString();
	    var spaces = 7 - c.length;
	    for (var i=0; i<spaces; i++) fIGES.Write(" ");
	    fIGES.Writeln(c);
	
	// Now write the string 
	    fIGES.Write(str);
	
	// Update the column and line counter
	    counter.col = len+1;
	    counter.line++;
	  }
	}
	
	function getFileFromPath(strFilepath)
	{
	// Extracts the File from a file path
	
	  var strFile = "";
	
	// Return blank string if path not defined
	  if (strFilepath == undefined)
	  {
	    Warning("<strFilepath> undefined in <getFileFromPath>");
	    return strFile;
	  }
	  
	// Get the file from strFilepath - try Windows first "\"
	  var strFolders = strFilepath.split("\\");
	
	// Try Unix "/" if that didn't split the path 
	  if(strFolders[0] == strFolders) strFolders = strFilepath.split("/");
	
	// Extract the file
	  strFile = strFolders[strFolders.length - 1];
	  
	  return strFile;
	
	}

}
// 
function Unsketch_all() {Part.UnsketchAll(m_p);}
//
function fun_null() {}
//
