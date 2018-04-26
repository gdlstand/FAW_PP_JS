/// model cut-off ///

var reincl_v = 20;
var reincl_h = -64;

var offset_x = -64;
var offset_y = 13;//20

var rigid_patch_h = 80-32;
var rigid_patch_v = 5;//12

var orient_h = -64;
var orient_v = 49;//56
var cutoff_h = -64+3;
var cutoff_v = 57;//64
var PSC_h = -64+3;
var PSC_v = 122;//129


//BOX 2
tabs_p[0][71] = New_widget(w_main_p[0], Widget.TEXTBOX,  67+rigid_patch_h,  105+rigid_patch_h,  25+rigid_patch_v,  63+rigid_patch_v, Widget.WHITE, Widget.DARKGREEN, '', Widget.LEFT, false);
tabs_p[0][69] = New_widget(w_main_p[0], Widget.LABEL,    70+rigid_patch_h,  100+rigid_patch_h,  21+rigid_patch_v,  28+rigid_patch_v, Widget.RED, Widget.GREY, " Rigid Patch", Widget.LEFT); 
tabs_p[0][44] = New_widget(w_main_p[0], Widget.BUTTON,   70+rigid_patch_h,  100+rigid_patch_h,  54+rigid_patch_v,  61+rigid_patch_v, Widget.WHITE, Widget.DARKRED, " Create Rigid Link", Widget.LEFT);  
tabs_p[0][44].onClick = rigid_patch_link;                                                            
tabs_p[0][51] = New_widget(w_main_p[0], Widget.BUTTON,   70+rigid_patch_h,  100+rigid_patch_h,  29+rigid_patch_v,  36+rigid_patch_v, Widget.WHITE, Widget.DARKGREEN, " Select Rigid Mat", Widget.LEFT);                                                                              
tabs_p[0][51].onClick = rig_mat_select;
tabs_p[0][70] = New_widget(w_main_p[0], Widget.BUTTON,   70+rigid_patch_h,  100+rigid_patch_h,  44+rigid_patch_v,  51+rigid_patch_v,  Widget.WHITE, Widget.DARKRED, " Rigidify Shells", Widget.LEFT);
tabs_p[0][70].onClick = rigid_patch_create;

//BOX 3 
tabs_p[0][32] = New_widget(w_main_p[0], Widget.TEXTBOX,    67+orient_h,  217+orient_h,  25+orient_v,  40+orient_v, Widget.WHITE, Widget.DARKGREEN, '', Widget.LEFT, false);
tabs_p[0][35] = New_widget(w_main_p[0], Widget.LABEL,      70+orient_h,  100+orient_h,  21+orient_v,  28+orient_v, Widget.RED, Widget.GREY, " Model Orient", Widget.LEFT); 
tabs_p[0][29] = New_widget(w_main_p[0], Widget.LABEL,      70+orient_h,  179+orient_h,  29+orient_v,  36+orient_v, Widget.RED, Widget.LIGHTGREY, " Vehicle model must be facing the -X Direction", Widget.LEFT);
tabs_p[0][23] = New_widget(w_main_p[0], Widget.BUTTON,    182+orient_h,  212+orient_h,  29+orient_v,  36+orient_v, Widget.WHITE, Widget.DARKRED, " Orient Model", Widget.LEFT);
tabs_p[0][23].onClick = Orient_Macro;

//BOX 4

tabs_p[0][74] = New_widget(w_main_p[0], Widget.TEXTBOX,    67+cutoff_h-3,  217+cutoff_h-3,  35+cutoff_v,  150+cutoff_v, Widget.WHITE, Widget.DARKGREEN, '', Widget.LEFT, false);

tabs_p[0][60] = New_widget(w_main_p[0], Widget.TEXTBOX,    67+cutoff_h,  211+cutoff_h,  42+cutoff_v,  97+cutoff_v, Widget.WHITE, Widget.DARKGREEN, '', Widget.LEFT, false);
tabs_p[0][14] = New_widget(w_main_p[0], Widget.LABEL,      70+cutoff_h,  100+cutoff_h,  38+cutoff_v,  45+cutoff_v, Widget.RED, Widget.GREY, " Model Cut Off", Widget.LEFT);     
tabs_p[0][21] = New_widget(w_main_p[0], Widget.BUTTON,     70+cutoff_h,  100+cutoff_h,  67+cutoff_v,  74+cutoff_v, Widget.WHITE, Widget.DARKGREEN, " Pick 2 nodes", Widget.LEFT);
tabs_p[0][21].onClick = find_node;
tabs_p[0][43] = New_widget(w_main_p[0], Widget.LABEL,     172+cutoff_h,  209+cutoff_h,  48+cutoff_v,  54+cutoff_v, Widget.WHITE, Widget.DARKGREY, "0", Widget.LEFT);
tabs_p[0][52] = New_widget(w_main_p[0], Widget.LABEL,      70+cutoff_h,  100+cutoff_h,  48+cutoff_v,  55+cutoff_v, Widget.BLACK, Widget.GREY, " Angle", Widget.LEFT);
tabs_p[0][22] = New_widget(w_main_p[0], Widget.BUTTON,    172+cutoff_h,  209+cutoff_h,  67+cutoff_v,  74+cutoff_v, Widget.WHITE, Widget.DARKGREEN, ' Sketch', Widget.LEFT);
tabs_p[0][22].onClick = global_xcoord_sketch;
tabs_p[0][53] = New_widget(w_main_p[0], Widget.LABEL,      70+cutoff_h,  100+cutoff_h,  56+cutoff_v,  63+cutoff_v, Widget.BLACK, Widget.GREY, " Offset Distance", Widget.LEFT);
tabs_p[0][25] = New_widget(w_main_p[0], Widget.TEXTBOX,   172+cutoff_h,  209+cutoff_h,  56+cutoff_v,  63+cutoff_v, Widget.WHITE, Widget.DARKBLUE, '100.0');
tabs_p[0][25].onChange = offset_dis_check;
tabs_p[0][15] = New_widget(w_main_p[0], Widget.BUTTON,    172+cutoff_h,  209+cutoff_h,  87+cutoff_v,  94 +cutoff_v, Widget.WHITE, Widget.DARKRED, " Apply", Widget.LEFT);
tabs_p[0][15].onClick = entity_cut_off;
tabs_p[0][16] = New_widget(w_main_p[0], Widget.BUTTON,    70+cutoff_h,   110+cutoff_h,  77+cutoff_v,  84+cutoff_v, Widget.WHITE, Widget.DARKGREEN, " Include File for SPC", Widget.LEFT);
tabs_p[0][16].onClick = include_select;
tabs_p[0][17] = New_widget(w_main_p[0], Widget.TEXTBOX,    172+cutoff_h,  209+cutoff_h,  77+cutoff_v,  84+cutoff_v, Widget.WHITE, Widget.DARKBLUE, " Master File" , Widget.LEFT);

tabs_p[0][43].hover = tabs_p[0][43].text;
tabs_p[0][25].hover = tabs_p[0][25].text;
tabs_p[0][17].hover = tabs_p[0][17].text;
//BOX 5
tabs_p[0][24] = New_widget(w_main_p[0], Widget.TEXTBOX,    67+PSC_h,  211+PSC_h,  37+PSC_v,  70+PSC_v, Widget.WHITE, Widget.DARKGREEN, '', Widget.LEFT, false);
tabs_p[0][47] = New_widget(w_main_p[0], Widget.LABEL,      70+PSC_h,  120+PSC_h,  33+PSC_v,  40+PSC_v, Widget.RED, Widget.GREY, " Contact Part Set Create", Widget.LEFT); 
tabs_p[0][45] = New_widget(w_main_p[0], Widget.LABEL,     70+PSC_h,  140+PSC_h,  40+PSC_v,  47+PSC_v, Widget.BLACK, Widget.GREY, ' Part Set ID for vehicel & impactor Contact', Widget.LEFT);    
tabs_p[0][46] = New_widget(w_main_p[0], Widget.TEXTBOX,   172+PSC_h,  209+PSC_h,  40+PSC_v,  47+PSC_v, Widget.WHITE, Widget.DARKBLUE,'1', Widget.LEFT);
tabs_p[0][46].onChange = change_set_ID;
tabs_p[0][48] = New_widget(w_main_p[0], Widget.BUTTON,    172+PSC_h,  209+PSC_h,  59+PSC_v,  66+PSC_v, Widget.WHITE, Widget.DARKRED, ' Apply', Widget.LEFT);
tabs_p[0][48].onClick = Contact_Parts_Create;
tabs_p[0][18] = New_widget(w_main_p[0], Widget.BUTTON,    70+PSC_h,  110+PSC_h,  49+PSC_v,  56+PSC_v, Widget.WHITE, Widget.DARKGREEN, " Include File for Part Set", Widget.LEFT);
tabs_p[0][18].onClick = include_select_PS;
tabs_p[0][19] = New_widget(w_main_p[0], Widget.TEXTBOX,    172+PSC_h,  209+PSC_h,  49+PSC_v,  56+PSC_v, Widget.WHITE, Widget.DARKBLUE, "Master File", Widget.LEFT);
tabs_p[0][46].hover = tabs_p[0][46].text;
tabs_p[0][19].hover = tabs_p[0][19].text;
// Box 6
tabs_p[0][72] = New_widget(w_main_p[0], Widget.BUTTON,  98+PSC_h,  128+PSC_h,  73+PSC_v,  80+PSC_v, Widget.WHITE, Widget.DARKGREEN, " Write", Widget.LEFT);
tabs_p[0][72].onClick = Write_Model_Modify_Settings;                                           
tabs_p[0][73] = New_widget(w_main_p[0], Widget.BUTTON,   67+PSC_h,  97+PSC_h,  73+PSC_v,  80+PSC_v, Widget.WHITE, Widget.DARKGREEN, " Import", Widget.LEFT);
tabs_p[0][73].onClick = Load_Model_Modify_Settings;

var Boundary_X = 0.0;
var Boundary_Z = 0.0;
var Boundary_X_2 = 0.0;
var Boundary_Z_2 = 0.0;


var N_tmp;
var N_tmp_2;


function change_set_ID()
{
	tabs_p[0][46].hover = tabs_p[0][46].text;
}


function find_node()
{
	N_tmp = Node.Pick('pick first node', m_p);	
	if(N_tmp) 
	{
		Boundary_X = N_tmp.x;
		Boundary_Z = N_tmp.z;
		tabs_p[0][15].active = true;
	}
	N_tmp_2 = Node.Pick('pick second node', m_p);	
	if(N_tmp_2) 
	{
		Boundary_X_2 = N_tmp_2.x;
		Boundary_Z_2 = N_tmp_2.z;
		
		tabs_p[0][43].text = Math.floor(Math.atan((N_tmp.x-N_tmp_2.x)/(N_tmp.z-N_tmp_2.z))/3.14159*180*100)/100;
	}	
	tabs_p[0][43].hover = tabs_p[0][43].text;
}


function Orient_Macro()
{
	var temp_macro = new File('temp_macro_OM.prm', File.WRITE);
    temp_macro.Writeln('Window("Main_Tab").Minimise()');
    temp_macro.Writeln('Window("Tools/Keywords").Button("Orient")');
    temp_macro.Writeln('Window("Orient").Button("Rotate")');
    temp_macro.Writeln('MasterWindow().Menu("ORIENT ITEMS").Select1("MODEL...")');
	temp_macro.Close();
	
	PlayMacro(temp_macro.filename, true, true, 0, null, false);

	File.Delete(temp_macro.filename);
}



function global_xcoord_sketch()
{
	Message('plate sketch: ', tabs_p[0][22].text,' results=',tabs_p[0][22].text==' Sketch');
	
	if(tabs_p[0][22].text==' Sketch') 
	{
		tabs_p[0][22].text=' Unsketch';
		Graphics.DrawingFunction(draw_x_surface);
		
	}
	else 
	{
		tabs_p[0][22].text=' Sketch';
		Graphics.DrawingFunction(clean_surface);	
	}
	
    View.Redraw();
}


var Flag_m_weld_pre = AllocateFlag(); 



function offset_dis_check()
{
	if(!Number(this.text)>1e-3) this.text = 0.0;
	tabs_p[0][25].hover = tabs_p[0][25].text;
}



var ECO_layer;

function include_select()
{
	tabs_p[0][17].text="Master File";
	var i_incl;
    var Flag_Incl_Sel = AllocateFlag(); m_p.ClearFlag(Flag_Incl_Sel);
    var total_incl = Include.Total(m_p);
    var sel_num=2;
    

    while (sel_num !== 1 & sel_num !== 0) {
	sel_num = Include.Select(Flag_Incl_Sel,'Select Write Location for SPC', m_p);
	}
	
	for (i_incl=1; i_incl<=total_incl; i_incl++)
	{
		include_name = Include.GetFromID(m_p, i_incl);
		var test_incl=include_name.Flagged(Flag_Incl_Sel);
	if  (test_incl)
	{
		ECO_layer=include_name.label;
 		var temp_incl=include_name.name;
		tabs_p[0][17].text=temp_incl;	
	} 
	}
	tabs_p[0][17].hover = tabs_p[0][17].text;
}



function entity_cut_off()
{
	m_p.layer=0;
	if(ECO_layer!=undefined) m_p.layer=ECO_layer;
	w_main_p[0].Show(true);
	Obj_delete_test();
	w_main_p[0].Show(false);
	tabs_p[0][14].foreground = Widget.DARKGREEN;
	if(tabs_p[0][67].foreground==Widget.DARKGREEN) tabs_p[0][212].background = Widget.DARKGREEN;
	
	proj_operate[proj_operate.length] = '# cut-off';

	m_p.layer=0;
}

// sub function // 

var Dir_auto = -1;                                                       

function Obj_delete_test()
{
	var i = 0; var j = 0; var k = 0; var l = 0;

	if(!m_p) 
	{ 
		Window.Warning('Warning', "Model missing...", Window.OK);
		Exit(); 
	}
	
	tabs_p[0][22].text=' Sketch';
	Graphics.DrawingFunction(clean_surface);		
    View.Redraw();
	//var mcopy = m_p.Copy();
    //mcopy.Blank();
	
	
	var Ang_cutoff = Number(tabs_p[0][43].text);
	
	var Flag_m_del = AllocateFlag(); m_p.ClearFlag(Flag_m_del);
	var Flag_m_fix = AllocateFlag(); m_p.ClearFlag(Flag_m_fix);
	var Flag_m_rig = AllocateFlag(); m_p.ClearFlag(Flag_m_rig);
	// mark weld and rigid elements 
	var Flag_m_weld = AllocateFlag(); m_p.ClearFlag(Flag_m_weld);
	var P_tmp = Part.First(m_p);
	while(P_tmp)
	{
		var M_tmp = Material.GetFromID(m_p, P_tmp.mid);
		if(M_tmp!=undefined)
		{
			if(M_tmp.type == 'SPOTWELD' || M_tmp.type == 'SPOTWELD_DAMAGE-FAILURE' || P_tmp.Flagged(Flag_m_weld_pre))
			{
				P_tmp.SetFlag(Flag_m_weld);
				//Message('weld part ', P_tmp.pid);
			}
			else if(M_tmp.type == 'RIGID')
			{
				P_tmp.SetFlag(Flag_m_rig);
			}
		}

		P_tmp = P_tmp.Next();
	}
	m_p.PropagateFlag(Flag_m_weld);
	m_p.PropagateFlag(Flag_m_rig);

	var Offset = Number(tabs_p[0][25].text);
	//var Boundary_X = X_cord;
	
	// element check
	/// loop shell
	var E_tmp = Shell.First(m_p);
	while(E_tmp!=undefined)
	{
		var N_tmp =  E_tmp.GetNodes();
		//
		//Message('Shell ',E_tmp.eid);
		check_x_range(m_p,E_tmp,N_tmp,Boundary_X,Flag_m_del,Flag_m_fix, Ang_cutoff, Boundary_Z);	
		//
		E_tmp = E_tmp.Next();
	}
	
	///loop solid
	var E_tmp = Solid.First(m_p);
	while(E_tmp!=undefined)
	{
		
		var N_tmp = new Array(); 
		N_tmp[0] = Node.GetFromID(m_p, E_tmp.n1);
		N_tmp[1] = Node.GetFromID(m_p, E_tmp.n2);
		N_tmp[2] = Node.GetFromID(m_p, E_tmp.n3);
		N_tmp[3] = Node.GetFromID(m_p, E_tmp.n4);
		

		if(Node.GetFromID(m_p, E_tmp.n5)!=undefined) N_tmp[4] = Node.GetFromID(m_p, E_tmp.n5);
		if(Node.GetFromID(m_p, E_tmp.n6)!=undefined) N_tmp[5] = Node.GetFromID(m_p, E_tmp.n6);		
		if(Node.GetFromID(m_p, E_tmp.n7)!=undefined) N_tmp[6] = Node.GetFromID(m_p, E_tmp.n7);
		if(Node.GetFromID(m_p, E_tmp.n8)!=undefined) N_tmp[7] = Node.GetFromID(m_p, E_tmp.n8);
					
		//
		if(E_tmp.Flagged(Flag_m_weld))
		{
			//Message('Solid ',E_tmp.eid);
			check_x_range(m_p,E_tmp,N_tmp,Boundary_X+Dir_auto*Offset,Flag_m_del,Flag_m_weld, Ang_cutoff, Boundary_Z);	
		}
		else
		{
			check_x_range(m_p,E_tmp,N_tmp,Boundary_X,Flag_m_del,Flag_m_fix, Ang_cutoff, Boundary_Z);		
		}

		//
		E_tmp = E_tmp.Next();
	}
	
	///loop Beam
	var E_tmp = Beam.First(m_p);
	while(E_tmp!=undefined)
	{
		var N_tmp = new Array(); 
		N_tmp[0] = Node.GetFromID(m_p, E_tmp.n1);
		N_tmp[1] = Node.GetFromID(m_p, E_tmp.n2);
		//
		//Message('Beam ',E_tmp.eid);
		if(E_tmp.Flagged(Flag_m_weld))
		{
			check_x_range(m_p,E_tmp,N_tmp,Boundary_X+Dir_auto*Offset,Flag_m_del,Flag_m_weld, Ang_cutoff, Boundary_Z);	
		}
		else
		{
			check_x_range(m_p,E_tmp,N_tmp,Boundary_X,Flag_m_del,Flag_m_fix, Ang_cutoff, Boundary_Z);		
		}

		//
		E_tmp = E_tmp.Next();
	}
	
	///loop Discrete
	var E_tmp = Discrete.First(m_p);
	while(E_tmp!=undefined)
	{
		var N_tmp = new Array(); 
		N_tmp[0] = Node.GetFromID(m_p, E_tmp.n1);
		N_tmp[1] = Node.GetFromID(m_p, E_tmp.n2);
		//
		//Message('Discrete ',E_tmp.eid);
		check_x_range(m_p,E_tmp,N_tmp,Boundary_X,Flag_m_del,Flag_m_fix, Ang_cutoff, Boundary_Z);
		//
		E_tmp = E_tmp.Next();
	}
	
	///loop Mass 

	Message("START")
	var E_tmp = Mass.First(m_p);
	while(E_tmp!=undefined)
	{
		if(E_tmp.node_set == false)
		{
			var N_tmp = Node.GetFromID(m_p, E_tmp.id);
			if((N_tmp.x - Boundary_X)*Dir_auto<0) E_tmp.SetFlag(Flag_m_del);		
		}			
		else
		{
				var S_tmp_index = Set.First(m_p, Set.NODE);			
				while(S_tmp_index!=undefined)
				{
					if(S_tmp_index.sid == E_tmp.id)
					{ 
						var S_tmp = S_tmp_index;
					}
				if (S_tmp_index == S_tmp_index.Next())
				{
					S_tmp_index==undefined
				}
				else
				{
					S_tmp_index = S_tmp_index.Next()
				}
				}


			S_tmp.RemoveFlagged(Flag_m_del);
		}

		//
		//Message('Mass ',E_tmp.eid);
		check_x_range(m_p,E_tmp,N_tmp,Boundary_X,Flag_m_del,Flag_m_fix, Ang_cutoff, Boundary_Z);
		//
		E_tmp = E_tmp.Next();
	}

Message("FINISH");




	// constained check
	///nodal rigid body
	var E_tmp = Nrb.First(m_p);
	while(E_tmp!=undefined)
	{
		var N_tmp = new Array();
		var Set_tmp = Set.GetFromID(m_p, E_tmp.nsid, Set.NODE);
		var id;
		Set_tmp.StartSpool();
		while (id == Set_tmp.Spool() )
		{
			N_tmp[N_tmp.length] = Node.GetFromID(m_p, id);
		}
		var Mark_Del = 0;
		for(i=0;i<N_tmp.length;i++)
		{
			if((N_tmp.x - Boundary_X)*Dir_auto<0) Mark_Del++;
		}
		if(Mark_Del>N_tmp.length-2) 
		{			
			E_tmp.SetFlag(Flag_m_del);
		}	
		else
		{
			E_tmp.SetFlag(Flag_m_rig);
		}

		E_tmp = E_tmp.Next();	
	}	
	///loop Joint
	var E_tmp = Joint.First(m_p);
	while(E_tmp!=undefined)
	{
		var N_tmp = new Array();
		N_tmp[0] = Node.GetFromID(m_p, E_tmp.n1);
		N_tmp[1] = Node.GetFromID(m_p, E_tmp.n2);
		if(Node.GetFromID(m_p, E_tmp.n3)!=null) N_tmp[2] = Node.GetFromID(m_p, E_tmp.n3);
		if(Node.GetFromID(m_p, E_tmp.n4)!=null) N_tmp[3] = Node.GetFromID(m_p, E_tmp.n4);
		if(Node.GetFromID(m_p, E_tmp.n5)!=null) N_tmp[4] = Node.GetFromID(m_p, E_tmp.n5);
		if(Node.GetFromID(m_p, E_tmp.n6)!=null) N_tmp[5] = Node.GetFromID(m_p, E_tmp.n6);
		//
		var Mark_Del = 0;
		for(i=0;i<N_tmp.length;i++)
		{
			if((N_tmp.x - Boundary_X)*Dir_auto<0) Mark_Del++;
		}
		if(Mark_Del==N_tmp.length) 
		{			
			E_tmp.SetFlag(Flag_m_del);
			
		}	
		
		E_tmp = E_tmp.Next();	
		
	}
	
	// delete entities those marked using Flag_m_del
	m_p.DeleteFlagged(Flag_m_del);
	
	// do the clean-up
	Clean_macro(5);
	C_macro();
	
	// constrain the nodes, rigid parts those marked using Flag_m_fix
	// rigid parts
	var P_tmp = Part.First(m_p);
	while(P_tmp!=undefined)
	{
		if(P_tmp.Flagged(Flag_m_fix))
		{
			var M_tmp = Material.GetFromID(m_p,P_tmp.mid);
			var M_tmp_last = Material.Last(m_p);
			var M_tmp_2 = new Material(m_p, M_tmp_last.mid+1, "RIGID");
			M_tmp_2.include = P_tmp.include;
			M_tmp_2.SetPropertyByName("RO", M_tmp.GetPropertyByName("RO"));	
			M_tmp_2.SetPropertyByName("E", M_tmp.GetPropertyByName("E"));	
			M_tmp_2.SetPropertyByName("PR", M_tmp.GetPropertyByName("PR"));	
			M_tmp_2.SetPropertyByName("CMO", 1);	
			M_tmp_2.SetPropertyByName("CON1", 7);	
			M_tmp_2.SetPropertyByName("CON2", 7);
		}	
		P_tmp = P_tmp.Next();
	}
	// Nodes spc
	m_p.PropagateFlag(Flag_m_rig);
	var Set_tmp = new Set(m_p, Set.LastFreeLabel(m_p, Set.NODE), Set.NODE);
	var N_tmp = Node.First(m_p);
	while(N_tmp!=undefined)
	{
		if(N_tmp.Flagged(Flag_m_fix) && !(N_tmp.Flagged(Flag_m_rig)))
		{
			Set_tmp.Add(N_tmp.nid);
		}
		N_tmp = N_tmp.Next();
	}
	new Spc(m_p, Set_tmp.sid, 0, 1, 1, 1, 1, 1, 1, Spc.SET);
	
	// return flag
	ReturnFlag(Flag_m_del); 
	ReturnFlag(Flag_m_fix); 
	ReturnFlag(Flag_m_rig);
	ReturnFlag(Flag_m_weld);
	
	C_macro();
	w_main_p[0].Show(false);	
	
	Message('End Cut-off...');

}
	
function check_x_range(m,E_tmp,N_tmp,X,Flag_del,Flag_fix,Ang,Z)
{

	//Message(N_tmp.length);
	var Mark_Del = 0;
	for(var i=0;i<N_tmp.length;i++)
	{
		//if(N_tmp[i]!=undefined &&  (N_tmp[i].x - X + (Z-N_tmp[i].z)*Math.tan(Ang/180*3.14159))*Dir_auto<0) Mark_Del++;
		if(N_tmp[i]!=undefined)
		{
			if ((N_tmp[i].z - (Boundary_Z + Boundary_Z_2)/2)>0 && (N_tmp[i].x - Boundary_X)*Dir_auto<0 ) Mark_Del++;
			else if ((N_tmp[i].z - (Boundary_Z + Boundary_Z_2)/2)<0 && (N_tmp[i].x - Boundary_X_2)*Dir_auto<0) Mark_Del++;
			else continue;
		}
	}
	if(Mark_Del>0) 
	{
		E_tmp.SetFlag(Flag_del);
		if(Mark_Del!=N_tmp.length)
		{
			var P_tmp = Part.GetFromID(m, E_tmp.pid);
			var M_tmp = Material.GetFromID(m, P_tmp.mid);
			if(M_tmp!=undefined)
			{
				if(M_tmp.type == 'RIGID')
				{
					P_tmp.SetFlag(Flag_fix);
					E_tmp.ClearFlag(Flag_del);
				}
				else
				{
					for(var i=0;i<N_tmp.length;i++) N_tmp[i].SetFlag(Flag_fix);
				}					
			}
			else
			{
				for(var i=0;i<N_tmp.length;i++) N_tmp[i].SetFlag(Flag_fix);
			}
		}
	}
	
}


var Cont_PS_Layer;

function include_select_PS()
{
//	m_p.layer=0;
	tabs_p[0][19].text="Master File";
    var Flag_Incl_PS_Sel = AllocateFlag(); m_p.ClearFlag(Flag_Incl_PS_Sel);
    var total_incl = Include.Total(m_p);
    sel_num=2;
    

    while (sel_num !== 1 & sel_num !== 0) {
	sel_num = Include.Select(Flag_Incl_PS_Sel,'Select Write Location for Contact Part Set', m_p);
	}
	
	for (i_incl=1; i_incl<=total_incl; i_incl++)
	{
		include_name_PS = Include.GetFromID(m_p, i_incl);
		var test_incl=include_name_PS.Flagged(Flag_Incl_PS_Sel);
	if  (test_incl)
	{
		tabs_p[0][19].text=include_name_PS.name;
		Cont_PS_Layer=include_name_PS.label;
	}
	}
	tabs_p[0][19].hover = tabs_p[0][19].text;
}



function Contact_Parts_Create()
{
	m_p.layer=0;
	if(Cont_PS_Layer!=undefined) m_p.layer=Cont_PS_Layer;
	var set_id = Number(tabs_p[0][46].text);
	var sp_tmp = Set.GetFromID(m_p, set_id, Set.PART);
	if(sp_tmp==undefined) 
		{
		sp_tmp = new Set(m_p, set_id, Set.PART);
	
		var Flag_m_contact_parts = AllocateFlag(); 
		tmp_contact_parts = new Array();
		Part.Select(Flag_m_contact_parts, 'Select parts', m_p);
		Part.ForEach(m_p, Part_find);
		}

	else Window.Warning('Warning', "A Part Set with that number already exists!", Window.OK);
	
		function Part_find(P_tmp)
	{
		if(P_tmp.Flagged(Flag_m_contact_parts)) sp_tmp.Add(P_tmp.pid);
	}
	
	
	m_p.layer=0;    
}	




var Flag_m_rig = AllocateFlag(); 

function rig_mat_select()
{
	if(m_p) 
	{
		m_p.ClearFlag(Flag_m_rig);
		Material.Select(Flag_m_rig, 'Select material', m_p);
		var m_tmp = Material.First(m_p);
		while(m_tmp)
		{
			if(m_tmp.Flagged(Flag_m_rig))
			{
				this.text = m_tmp.mid;
				if(this == tabs_p[0][37]) tabs_p[0][38].text = m_tmp.mid;
				break;
			}
			m_tmp = m_tmp.Next();
		}
	}
}
//


function rigid_patch_create()
{
		var Flag_p1 = AllocateFlag(); m_p.ClearFlag(Flag_p1);
		Shell.Select(Flag_p1, 'shell of first part', m_p);
		var s_p1 = new Array();	
		var p1_old; var s1_old; var m1_old;
		Shell.ForEach(m_p, new_part_check1);
		
		if(s_p1.length>0)
		{
			//
			var s1_tmp = new Section(m_p, Section.LastFreeLabel(m_p), Section.SHELL);
			if(Number(tabs_p[0][51].text)>0) var m1_tmp = Material.GetFromID(m_p, Number(tabs_p[0][51].text));
			else var m1_tmp = new Material(m_p, Material.LastFreeLabel(m_p), "RIGID");
			var p1_tmp = new Part(m_p, Part.LastFreeLabel(m_p),s1_tmp.secid,m1_tmp.mid);

			if(p1_old == Part.GetFromID(m_p, p1_old))
			{
				p1_tmp.include = p1_old.include;
				s1_tmp.include = p1_old.include;
				m1_tmp.include = p1_old.include;
				if(s1_old == Section.GetFromID(m_p, p1_old.secid))
				{
					s1_tmp.include = s1_old.include;
					s1_tmp.t1 = s1_old.t1; 
					s1_tmp.t2 = s1_old.t2; 
					s1_tmp.t3 = s1_old.t3; 
					s1_tmp.t4 = s1_old.t4;
				}
				if(m1_old == Material.GetFromID(m_p, p1_old.mid))
				{
					m1_tmp.include = m1_old.include;
					if(m1_old.GetPropertyByName("RO")) m1_tmp.SetPropertyByName("RO", m1_old.GetPropertyByName("RO"));
					else m1_tmp.SetPropertyByName("RO", 1e-9);	
					if(m1_old.GetPropertyByName("E")) m1_tmp.SetPropertyByName("E", m1_old.GetPropertyByName("E"));
					else m1_tmp.SetPropertyByName("E", 1);				
				}
			} 
			
				
			//	
			var s_tmp;
			for(var i=0;i<s_p1.length;i++) 
			{
					s_tmp = Shell.GetFromID(m_p, s_p1[i]);	
					s_tmp.pid = p1_tmp.pid;	
			}

			//
			View.Redraw();		
			
		}		



	///////////////////////////////////////
	function new_node_set(ns_p, n)
	{
		var n_tmp = Node.Pick('Pick '+ String(ns_p.length+1) +' node for part '+n, m_p);
		while(n_tmp)
		{
			ns_p[ns_p.length] = Node.GetFromID(m_p, n_tmp.nid);
			n_tmp = Node.Pick('Pick '+ String(ns_p.length+1) +' node for part '+n, m_p);
		}
		
		
	}	

	function new_part_check1(s_tmp)
	{
		if(s_tmp.Flagged(Flag_p1))
		{
			p1_old = s_tmp.pid;
			s_p1[s_p1.length] = s_tmp.eid;
			//s_tmp.pid = p1_tmp.pid;
		}
	
	}	
	function new_part_check2(n_tmp)
	{
		if(n_tmp.Flagged(Flag_p1)) ns_p1[ns_p1.length] = Node.GetFromID(m_p, n_tmp.nid);
	}			
			
}

function rigid_patch_link()
{
	var p1_old = Part.Pick('Pick the first rigid part', m_p); 
	var p2_old = Part.Pick('Pick the second rigid part', m_p);
	if(p1_old!=undefined && p2_old!=undefined)
	{
		var m1_old = Material.GetFromID(m_p, p1_old.mid);
		var m2_old = Material.GetFromID(m_p, p2_old.mid);
		if(m1_old!=undefined && m2_old!=undefined)
		{
			if(m1_old.type=='RIGID' && m2_old.type=='RIGID')
			{
				var r = new RigidBodies(m_p, p1_old.pid, p2_old.pid);
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
				if(p1_old.include!=p2_old.include) r.include = Math.floor(Incl_c_n);	
				else r.include = p1_old.include;	
					
			}
			else {Message('Mat is not rigid...');}
		}	
		else {Message('Mat undefined...');}			
	}
	else {Message('Part undefined...');}
}	
		

//////////// Import/Save/Clear

//

var MMS;
var PSA = new Array();
function Write_Model_Modify_Settings()
{
	
		if(N_tmp != undefined &  N_tmp_2!=undefined)
		{
				
					var set_id = Number(tabs_p[0][46].text);
					var sp_tmp = Set.GetFromID(m_p, set_id, Set.PART);
					if(sp_tmp != undefined)
					{
						if (ECO_layer == undefined) var ECO_layer = 0;
						if (Cont_PS_Layer == undefined) var Cont_PS_Layer = 0;		
					
					if(Project_tmp.path !== '')         var MMS_Location = Window.GetDirectory(Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\');
					else                       	        var MMS_Location = Window.GetDirectory();
					
							if (MMS_Location != undefined) 
							{
							MMS = new File(MMS_Location+'\\'+'Model_Modify_Settings.csv', File.WRITE);
							MMS.Writeln(' Node 1, Node 2, SPC Include, Contact Part Set Include, Contact Part Set Number, Offset Distance');
							MMS.Writeln(N_tmp.label,",", N_tmp_2.label,",",ECO_layer,",",Cont_PS_Layer,',',Number(tabs_p[0][46].text),',',Number(tabs_p[0][25].text));
							
							var p = Part.First(m_p);
							while (p)
							{
    						if (sp_tmp.Contains(p.pid)) MMS.Writeln(p.pid);
    						p = p.Next();
							}
 							MMS.Close();
							}
						}
					else Window.Warning('Warning', "Contact Part Set not created", Window.OK);
				}
		else Window.Warning('Warning', "Model Cutoff Nodes Not Defined", Window.OK);
}

function Load_Model_Modify_Settings()
{
	if(Project_tmp.path !== '')         var MMSRF = Window.GetFile(".csv", false, Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\');
	else                       	        var MMSRF = Window.GetFile(".csv");
	
	if (MMSRF != undefined) 
	{
		MMSR=new File(MMSRF, File.READ);
		var line1=MMSR.ReadLongLine();
		var line2=MMSR.ReadLongLine();
		var Settings1 = Array();
		Settings1=line2.split(',');
		var n = Node.First(m_p);
			while (n)
			{
    		if (n.nid == Number(Settings1[0])) N_tmp = n;
       		if (n.nid == Number(Settings1[1])) N_tmp_2 = n;
    		n = n.Next();
			}
			
		if(N_tmp != undefined &  N_tmp_2!=undefined)
		{
		ECO_layer = Number(Settings1[2]);
		Cont_PS_Layer = Number(Settings1[3]);
		tabs_p[0][46].text = Number(Settings1[4]);
		tabs_p[0][25].text = Number(Settings1[5]);
		if (ECO_layer == 0)
		{
		tabs_p[0][17].text = "Master.key";	
		}	
		else tabs_p[0][17].text = Include.GetFromID(m_p, ECO_layer).name;
		if (Cont_PS_Layer == 0)
		{
		tabs_p[0][19].text = "Master.key";	
		}	
		else tabs_p[0][19].text = Include.GetFromID(m_p, Cont_PS_Layer).name;

		
		if(N_tmp) 
		{
		Boundary_X = N_tmp.x;
		Boundary_Z = N_tmp.z;
		tabs_p[0][15].active = true;
		}	
		if(N_tmp_2) 
		{
		tabs_p[0][43].text = Math.floor(Math.atan((N_tmp.x-N_tmp_2.x)/(N_tmp.z-N_tmp_2.z))/3.14159*180*100)/100;
		}	
		

		entity_cut_off();		
		
		m_p.layer=0;
		if(Cont_PS_Layer!=undefined)
		{
		m_p.layer=Cont_PS_Layer;
		}
		var set_id = Number(tabs_p[0][46].text);
		Message(set_id);
		var part_set_tmp;
		part_set_tmp = Set.GetFromID(m_p,set_id, Set.PART);
		Message(part_set_tmp);
		if(part_set_tmp == undefined) 
			{
			Message('Must not be a part set with that number..');
			part_set_tmp = new Set(m_p, set_id, Set.PART);
			Message(part_set_tmp);
			while((lineRest=MMSR.ReadLongLine())!=undefined)
			{
			part_set_tmp.Add(Number(lineRest));
			}
					var part_set_teemp = Set.GetFromID(m_p,set_id, Set.PART);
			Message(part_set_teemp);
		}
			else Window.Warning('Warning', "A Part Set with that number already exists!", Window.OK);
		
		m_p.layer=0;    
	}
	else Window.Warning('Warning', "One or both of the model cut off reference nodes do not exist in this model", Window.OK);

	}
}	

