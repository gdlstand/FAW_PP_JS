/// include new files ///
var new_incl_v = -7;//0
var new_incl_h = -64;

tabs_p[0][66] = New_widget(w_main_p[0], Widget.TEXTBOX,    67+new_incl_h, 175+new_incl_h,  37+new_incl_v,  75+new_incl_v, Widget.WHITE, Widget.DARKGREEN, '', Widget.LEFT, false);
tabs_p[0][67] = New_widget(w_main_p[0], Widget.LABEL,      70+new_incl_h, 100+new_incl_h,  33+new_incl_v,  40+new_incl_v,  Widget.RED, Widget.GREY, " New Incl/Part", Widget.LEFT); 

tabs_p[0][26] = New_widget(w_main_p[0], Widget.BUTTON,    140+new_incl_h, 170+new_incl_h,  66+new_incl_v,  73+new_incl_v, Widget.WHITE, Widget.DARKRED, " Select Include", Widget.LEFT);
tabs_p[0][26].onClick = add_new_incl;

//tabs_p[0][120] = New_widget(w_main_p[0], Widget.LABEL,   220+new_incl_h,  269+new_incl_h, 36+new_incl_v,  156+new_incl_v, Widget.WHITE, Widget.GREY, '', Widget.LEFT);
//tabs_p[0][120].ReadImageString(setup_logo, Widget.TOP|Widget.CENTRE);

function add_new_incl()
{
	w_main_p[0].Show(true);
	Add_include();
	w_main_p[0].Show(false);
	tabs_p[0][67].foreground = Widget.DARKGREEN;
	if(tabs_p[0][14].foreground==Widget.DARKGREEN) tabs_p[0][212].background = Widget.DARKGREEN;
	
	proj_operate[proj_operate.length] = '# new include';

}

tabs_p[0][63] = New_widget(w_main_p[0], Widget.LABEL,      70+new_incl_h, 160+new_incl_h,  40+new_incl_v,  47+new_incl_v, Widget.BLACK, Widget.GREY, 
				" New Part", Widget.LEFT);
tabs_p[0][41] = New_widget(w_main_p[0], Widget.CHECKBOX,  110+new_incl_h, 117+new_incl_h,  40+new_incl_v,  47+new_incl_v, Widget.WHITE, Widget.GREY, '', Widget.LEFT);
tabs_p[0][121] = New_widget(w_main_p[0], Widget.LABEL,    117+new_incl_h, 139+new_incl_h,  40+new_incl_v,  47+new_incl_v, Widget.BLACK, Widget.GREY, " Parts", Widget.LEFT);
tabs_p[0][42] = New_widget(w_main_p[0], Widget.CHECKBOX,  140+new_incl_h, 147+new_incl_h,  40+new_incl_v,  47+new_incl_v, Widget.WHITE, Widget.GREY, '', Widget.LEFT);
tabs_p[0][42].pushed = true;                                       
tabs_p[0][122] = New_widget(w_main_p[0], Widget.LABEL,    147+new_incl_h, 165+new_incl_h,  40+new_incl_v,  47+new_incl_v, Widget.BLACK, Widget.GREY, " Include", Widget.LEFT);
tabs_p[0][41].onClick = new_include_switch;
tabs_p[0][42].onClick = new_include_switch;
function new_include_switch()
{
	tabs_p[0][41].pushed = false;
	tabs_p[0][42].pushed = false;
	this.pushed = true;	
}

tabs_p[0][64] = New_widget(w_main_p[0], Widget.LABEL,      70+new_incl_h,  160+new_incl_h,  48+new_incl_v, 55+new_incl_v, Widget.BLACK, Widget.GREY, 
				" Option", Widget.LEFT);
tabs_p[0][123] = New_widget(w_main_p[0], Widget.LABEL, 	  117+new_incl_h,  139+new_incl_h,  48+new_incl_v, 55+new_incl_v, Widget.BLACK, Widget.GREY, ' By Rigid', Widget.LEFT);
tabs_p[0][27] = New_widget(w_main_p[0], Widget.CHECKBOX,  110+new_incl_h,  117+new_incl_h,  48+new_incl_v, 55+new_incl_v);
tabs_p[0][27].pushed = true;	
tabs_p[0][27].onClick = byrigid_manually_together;	
tabs_p[0][124] = New_widget(w_main_p[0], Widget.LABEL,    147+new_incl_h,  165+new_incl_h,  48+new_incl_v, 55+new_incl_v, Widget.BLACK, Widget.GREY,' Manually', Widget.LEFT);
tabs_p[0][31] = New_widget(w_main_p[0], Widget.CHECKBOX,  140+new_incl_h,  147+new_incl_h,  48+new_incl_v, 55+new_incl_v);
tabs_p[0][31].pushed = true;
function byrigid_manually_together()
{
	if(tabs_p[0][27].pushed==true) tabs_p[0][31].pushed = true;
	else tabs_p[0][31].pushed = false;
}

tabs_p[0][65] = New_widget(w_main_p[0], Widget.LABEL,     70+new_incl_h,   100+new_incl_h,  56+new_incl_v,  63+new_incl_v, Widget.BLACK, Widget.GREY, ' Search Distance', Widget.LEFT);
tabs_p[0][28] = New_widget(w_main_p[0], Widget.TEXTBOX,   140+new_incl_h,  170+new_incl_h,  56+new_incl_v,  63+new_incl_v, Widget.WHITE, Widget.DARKBLUE,'10', Widget.LEFT);
var err_c = 100.0;
tabs_p[0][28].onChange = Search_distance;
tabs_p[0][28].hover = tabs_p[0][28].text;
function Search_distance()
{
	if(Number(tabs_p[0][28].text)>0.0)
	{
		tabs_p[0][28].text = Number(tabs_p[0][28].text);
		err_c = Number(tabs_p[0][28].text); 
	}
	else
	{
		tabs_p[0][28].text = 100.0;
	}
	tabs_p[0][28].hover = tabs_p[0][28].text;
}


//
function Add_include()
{
	
	/* No model selected so just exit the script*/
	if(!m_p) 
	{ 
		Window.Warning('Warning', "Model missing...", Window.OK);
		Exit(); 
	}
	

	//select the target if necessary
	if(tabs_p[0][41].pushed == true)
	{
		var Flag_m_target_include = AllocateFlag(); m_p.ClearFlag(Flag_m_target_include);
		Include.Select(Flag_m_target_include, 'Select include', m_p);
		var Incl_tar = Include.First(m_p);
		while(Incl_tar)
		{
			if(Incl_tar.Flagged(Flag_m_target_include))
			{
				break;
			}
			Incl_tar = Incl_tar.Next();
		}
		ReturnFlag(Flag_m_target_include);
		
	}
	
	// find original rigid parts
	var Ps_rigid_ori = new Array();
	var P_tmp = Part.First(m_p);
	var M_tmp;
	while(P_tmp)
	{
		M_tmp = Material.GetFromID(m_p, P_tmp.mid);
		if(M_tmp!=undefined && M_tmp.type =='RIGID') 
		{
			if(P_tmp.inertia == false)
			{
				Ps_rigid_ori[Ps_rigid_ori.length] = new Array(P_tmp.pid, P_tmp.CentreOfGravity(), P_tmp.include);
				//Message('old: ', P_tmp.pid, P_tmp.CentreOfGravity());
			}
			else
			{
				var tmp = new Array(P_tmp.xc, P_tmp.yc, P_tmp.zc);
				Ps_rigid_ori[Ps_rigid_ori.length] = new Array(P_tmp.pid, tmp, P_tmp.include);
			}
		}
		P_tmp = P_tmp.Next();
	}



	// import new include file into current model 
	var fi = Window.GetFile(".key"); 
	var result_inc = true;
	if(fi!=undefined && tabs_p[0][41].pushed!=true)
	{
		var i = 0;
		while(fi.slice(-1-i,-i)!='\\' && i<fi.length) {i++;}
		var fi_name = fi.slice(-i,fi.length);
		Message(fi_name);
		
		for(var i=0;i<Include_Old.length;i++)
		{
			if(fi_name.trim()==Include_Old[i].name)
			{
				var answer = Window.Warning("", "Include name already exists, please change the name", Window.OK);	
				result_inc = false;		
			}	
		}
		
	}

	
	if(result_inc)
	{	
		if(fi!=undefined && (Incl_new = m_p.ImportInclude(fi))!=undefined && Quick_scan == false)
		{
	
			if(tabs_p[0][41].pushed == true)
			{
				Incl_new.parent = Incl_tar.label;
				var Incl_new_name = Incl_new.name;
			}
			
			var Flag_m_new = AllocateFlag(); m_p.ClearFlag(Flag_m_new);
			Incl_new.SetFlag(Flag_m_new); m_p.PropagateFlag(Flag_m_new);
			
			
			// find new rigid part 
			var Ps_rigid_new = new Array();
			P_tmp = Part.First(m_p);
			while(P_tmp)
			{
				M_tmp = Material.GetFromID(m_p, P_tmp.mid);
				if(M_tmp!=undefined && M_tmp.type=='RIGID' && P_tmp.Flagged(Flag_m_new)) 
				{
					if((S_tmp = Section.GetFromID(m_p, P_tmp.secid))!=undefined)
					{
						//CG_tmp = P_tmp.CentreOfGravity();
						if(P_tmp.inertia == false)
						{
							Ps_rigid_new[Ps_rigid_new.length] = new Array(P_tmp.pid, P_tmp.CentreOfGravity());
							//Message('new: ', P_tmp.pid, P_tmp.CentreOfGravity());
						}
						else
						{
							var tmp = new Array(P_tmp.xc, P_tmp.yc, P_tmp.zc);
							Ps_rigid_new[Ps_rigid_new.length] = new Array(P_tmp.pid, tmp);
						}						
					}
					else
					{
						Message('Part ',P_tmp.pid,'\'s Section Card is missing...');
					}

					
				}
				P_tmp = P_tmp.Next();
			}
			//return flag
			ReturnFlag(Flag_m_new);
			
			
			// find the include to put new connection info 
			var Incl_c_n = 0; //connect include id , default is 0 master file
			if(Include_Map!=undefined)
			{
				for(var i=0; i<Include_Map.length;i++)
				{
					if(Include_Map[i].type=='c' || Include_Map[i].type=='C')
					{
						Incl_c_n = Include_Map[i].id;
						break;
					}
				}			
				
			}
			
				
			// build new rigid patches	
			if(tabs_p[0][27].pushed == true) //build connection by rigid parts in searching range
			{
				for(var i=0;i<Ps_rigid_new.length;i++)
				{
					for(var j=0;j<Ps_rigid_ori.length;j++)
					{
						var dis2 = Math.pow((Ps_rigid_new[i][1][0]-Ps_rigid_ori[j][1][0]),2) +
								   Math.pow((Ps_rigid_new[i][1][1]-Ps_rigid_ori[j][1][1]),2) +
								   Math.pow((Ps_rigid_new[i][1][2]-Ps_rigid_ori[j][1][2]),2);	   
						Message(i,'::',j,'::',dis2,'::',Math.pow(err_c,2));
						if(dis2<Math.pow(err_c,2))
						{
							if(tabs_p[0][31].pushed == true) //stop and ask user whether to build connect every pair
							{
								var P_tmp_a = Part.GetFromID(m_p, Math.floor(Ps_rigid_new[i][0])); P_tmp_a.Sketch();
								var P_tmp_b = Part.GetFromID(m_p, Math.floor(Ps_rigid_ori[j][0])); P_tmp_b.Sketch();
								//
								m_p.Blank();
								P_tmp_b.Unblank();
								P_tmp_a.Unblank();
								search_attached_part();
								
								//
								var mes = Window.Information("Check Rigid Parts", "Connect Part A & B ?", Window.YES|Window.NO);
								if (mes == Window.YES) 	
								{
									var r = new RigidBodies(m_p, Math.floor(Ps_rigid_new[i][0]), Math.floor(Ps_rigid_ori[j][0]));
									if(tabs_p[0][41].pushed == true && Ps_rigid_ori[j][2] == Incl_tar.label) r.include = Incl_tar.label;
									else r.include = Math.floor(Incl_c_n);	
								}
								Part.UnsketchAll(m_p);
							}
							else
							{
								var r = new RigidBodies(m_p, Math.floor(Ps_rigid_new[i][0]), Math.floor(Ps_rigid_ori[j][0]));
								if(tabs_p[0][41].pushed == true && Ps_rigid_ori[j][2] == Incl_tar.label) r.include = Incl_tar.label;
								else r.include = Math.floor(Incl_c_n);						
							}
					
						}
					}
				}
				
				m_p.Unblank();		
			}
			if(tabs_p[0][41].pushed == true)
			{
				m_p.Write(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Project_tmp.keyword_name, Include.MASTER_ONLY, Include.RELATIVE);
				Model_write_out(m_p, Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\');
				Incl_tar.Write(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Incl_tar.name, Include.ABSOLUTE);//Incl_tar.Write(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\INCL\\'+Incl_tar.name, Include.ABSOLUTE);
				m_p.Delete();
				m_p = Model.Read(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Incl_tar.name); //m_p = Model.Read(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\INCL\\'+Incl_tar.name);
				m_p.Write(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Incl_tar.name, Include.MERGE); //m_p.Write(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\INCL\\'+Incl_tar.name, Include.MERGE);
				m_p.Delete();
				m_p = Model.Read(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Project_tmp.keyword_name);
				//
				Include_Old = Include.GetAll(m_p);
				if(File.IsFile(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Project_tmp.keyword_name)) File.Delete(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Project_tmp.keyword_name);
				for(var i=0;i<Include_Old.length;i++)
				{
					if(File.IsFile(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Include_Old[i].name)) File.Delete(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Include_Old[i].name);  //if(File.IsFile(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\INCL\\'+Include_Old[i].name)) File.Delete(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\INCL\\'+Include_Old[i].name);
				}
				if(File.IsFile(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Incl_new_name)) File.Delete(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\'+Incl_new_name); //if(File.IsFile(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\INCL\\'+Incl_new_name)) File.Delete(Project_tmp.path+'\\'+Project_tmp.name+'\\Model\\INCL\\'+Incl_new_name);
				
			}
			
			
			map_clean();
			Include_Old = Include.GetAll(m_p);
			Include_old_get();
			
			for(var i=0;i<map_disp_column;i++)
			{
				if(i<Include_Old.length)
				{
					map_disp[i][0].Hide();
					map_disp[i][2].Hide();
				}
			}
			
			
			//
			C_macro();
			
		}
		
	}
	else
	{
		Window.Warning('Warning', "fail to import new include...", Window.OK);
	}	
	
	
	
}
//
function search_attached_part()
{
	Attached.Recursive(false);
	Attached.Deformable(Attached.WHOLE);
	Attached.Beam3rdNodes(false);
	Attached.BeamPid(false);
	Attached.SetEntity("SHELL", true);
	Attached.SetEntity("BEAM", false);
	Attached.TiedContacts(false);
	
	var temp_macro = new File('temp_macro.prm', File.WRITE);
	temp_macro.Writeln('Window("Tools/Keywords").Button("Attached")');
	temp_macro.Writeln('In Window("Attached")');
	temp_macro.Writeln('.Button("Apply")');
	temp_macro.Writeln('.Button("Apply")');	
	temp_macro.Writeln('End In');
	//
	temp_macro.Close();    	 
	PlayMacro(temp_macro.filename, true, true, 0, null, false);	
	File.Delete(temp_macro.filename);
	
}
