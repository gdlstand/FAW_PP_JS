// model setup //

// option tabs
tabs_p[0][201] = New_widget(w_main_p[0], Widget.BUTTON,  1,  40,  15,  22, Widget.BLACK, Widget.LIGHTGREY, "  Select Include Files", Widget.LEFT); tabs_p[0][201].background = Widget.GREY;
tabs_p[0][201].onClick = frbc_tabs_switch;
tabs_p[0][201].toggle = true;
tabs_p[0][201].pushed = true;
tabs_p[0][211] = New_widget(w_main_p[0], Widget.BUTTON,  1,  40,  22,  24, Widget.BLACK, Widget.RED, "", Widget.LEFT); 
tabs_p[0][202] = New_widget(w_main_p[0], Widget.BUTTON,  40,  80,  15,  22, Widget.BLACK, Widget.LIGHTGREY, " Modify Model ", Widget.LEFT);
tabs_p[0][202].onClick = frbc_tabs_switch;
tabs_p[0][202].toggle = true;
tabs_p[0][212] = New_widget(w_main_p[0], Widget.BUTTON,  40,  80,  22,  24, Widget.BLACK, Widget.RED, "", Widget.LEFT);

tabs_p[0][207] = New_widget(w_main_p[0], Widget.BUTTON, 100,  125,  15, 22, Widget.WHITE, Widget.DARKGREEN, " Save model", Widget.LEFT);
tabs_p[0][207].onClick = Save_deck;
tabs_p[0][208] = New_widget(w_main_p[0], Widget.BUTTON, 130,  155,  15, 22, Widget.WHITE, Widget.DARKGREEN, " Reload deck", Widget.LEFT);
tabs_p[0][208].onClick = Reload_deck;

function frbc_tabs_switch()
{

	tabs_p[0][201].background = Widget.LIGHTGREY;
	tabs_p[0][201].pushed = false;
	tabs_p[0][202].background = Widget.LIGHTGREY;
	tabs_p[0][202].pushed = false;
		
	this.background = Widget.GREY;
	this.pushed = true;
	// hide all
	frb_tabs_hide();	
	tabs_p[0][100].Show();	
	switch (this)
	{
		// reinclude
		case tabs_p[0][201]:
		{
			tabs_p[0][6].Show();
			tabs_p[0][9].Show();
			tabs_p[0][10].Show();
			tabs_p[0][11].Show();
			tabs_p[0][12].Show();
			tabs_p[0][13].Show();
			tabs_p[0][30].Show();
			tabs_p[0][36].Show();
			tabs_p[0][7].Show();
			tabs_p[0][8].Show();
			//
			tabs_p[0][81].Show();
			tabs_p[0][82].Show();
			tabs_p[0][83].Show();
			tabs_p[0][86].Show();
			tabs_p[0][87].Show();
			tabs_p[0][88].Show();
			tabs_p[0][91].Show();
			tabs_p[0][92].Show();
			tabs_p[0][93].Show();
			tabs_p[0][96].Show();
			tabs_p[0][97].Show();
			tabs_p[0][98].Show();
			tabs_p[0][101].Show();
			tabs_p[0][102].Show();
			tabs_p[0][103].Show();
			tabs_p[0][106].Show();
			tabs_p[0][107].Show();
			tabs_p[0][108].Show();
			//
			Include_old_get();
			w_main_p[0].Redraw();
			break;
		}
		// build
		case tabs_p[0][202]:
		{
			// cut-off
			tabs_p[0][74].Show();
			tabs_p[0][60].Show();
			tabs_p[0][14].Show();
			tabs_p[0][15].Show();
			tabs_p[0][21].Show();
			tabs_p[0][22].Show();
			tabs_p[0][25].Show();			
			tabs_p[0][32].Show();		
			tabs_p[0][35].Show();
			tabs_p[0][43].Show();
			tabs_p[0][52].Show();
			tabs_p[0][53].Show();
			tabs_p[0][23].Show();
			tabs_p[0][24].Show();
			tabs_p[0][45].Show();
			tabs_p[0][46].Show();			
			tabs_p[0][47].Show();
			tabs_p[0][48].Show();
			tabs_p[0][66].Show();		
			tabs_p[0][63].Show();
			tabs_p[0][64].Show();
			tabs_p[0][26].Show();
			tabs_p[0][27].Show();
			tabs_p[0][28].Show();
			tabs_p[0][31].Show();
			tabs_p[0][41].Show();
			tabs_p[0][42].Show();
			tabs_p[0][65].Show();
			tabs_p[0][67].Show();
			tabs_p[0][121].Show();
			tabs_p[0][122].Show();
			tabs_p[0][123].Show();
			tabs_p[0][124].Show();
			//tabs_p[0][120].Show(); 
			tabs_p[0][29].Show();
			tabs_p[0][16].Show();
			tabs_p[0][17].Show();
			tabs_p[0][18].Show();
			tabs_p[0][19].Show();
			tabs_p[0][71].Show();		
			tabs_p[0][51].Show();
			tabs_p[0][44].Show();
			tabs_p[0][70].Show();
			tabs_p[0][69].Show();
			tabs_p[0][72].Show();
			tabs_p[0][73].Show();
			
			w_main_p[0].Redraw();
			break;
		}
		default: break;
	}
		
}
//
function Save_deck()
{
	if(Quick_scan != true) 
	{

		if(proj_flag)
		{
			var answer = Window.Message("model saving", "save to default directory...", Window.YES |Window.NO);
			if (answer == Window.YES) 
			{
				Model_write_out(m_p, Project_tmp.path+'\\'+Project_tmp.name+'\\01_Model\\');
			}
			else
			{
				var fo = Window.GetFile(".key");
				Window.Warning('Warning', "Manually input *INCLUDE_PATH_RELATIVE and directory", Window.OK);				
				if(fo!=undefined) m_p.Write(fo, Include.SUBDIR, Include.RELATIVE, Include.WINDOWS);
			}	
			//var fo = new File(Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\'+Project_tmp.name+'.oper', File.APPEND);
			var fo = new File(Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\'+Project_tmp.name+'.oper', File.APPEND);
			for(var i=0;i<proj_operate.length;i++) fo.Writeln(proj_operate[i]);
			fo.Writeln('# save model');
			fo.Close('');			
			proj_operate = new Array();
			
					
		}
		else
		{
			var fo = Window.GetFile(".key");
				Window.Warning('Warning', "Manually include *INCLUDE_PATH_RELATIVE and directory", Window.OK);
			if(fo!=undefined) m_p.Write(fo, Include.SUBDIR, Include.RELATIVE, Include.WINDOWS);			
		}

		
	}
	else Window.Warning("Warning", "apply re-include or read in a full model...", Window.OK);
}
//
function Reload_deck()
{	
	var fo = Project_tmp.path+'\\'+Project_tmp.name+'\\01_Model\\'+Project_tmp.keyword_name;
	if(File.IsFile(fo)) 
	{
		map_clean();
		if(m_p!=undefined) m_p.Delete();
		m_p = Model.Read(fo);
		//
		create_reload_mark = false;	
		Include_Old = Include.GetAll(m_p);
		Include_old_get();
		Up_Down_page();
		//		
		//tabs_p[4][9].active = true;
		//tabs_p[4][10].active = true;
		//tabs_p[4][12].active = true;
		
		//done convert operation
		var fo = Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\'+Project_tmp.name+'.oper';
		if(File.IsFile(fo))
		{
			Message('oper file load...');
			fo = new File(fo, File.READ);
			while((line=fo.ReadLongLine())!=undefined)
			{
				switch (line)
				{
					case '# reinclude': 
					{
						tabs_p[0][211].background = Widget.DARKGREEN;
						break;
					}
					case '# cut-off': 
					{
						tabs_p[0][14].foreground = Widget.DARKGREEN;
						break;
					}					
					case '# new include': 
					{
						tabs_p[0][67].foreground = Widget.DARKGREEN;
						break;
					}
					default: break;
			
				}
			}
			fo.Close();
			if(tabs_p[0][14].foreground == Widget.DARKGREEN && tabs_p[0][67].foreground == Widget.DARKGREEN)
			{tabs_p[0][212].background = Widget.DARKGREEN;}
		}			
		

	}	
	else 
	{
		Message('model for markup missing');
		if(File.IsFile(Project_tmp.deck))
		{	
			map_clean();
			if(m_p!=undefined) m_p.Delete();
							
			mes = Window.Information("Reload the FRB deck", "Choose [Yes] if you just want a quick scan", Window.YES|Window.NO);
			if(mes == Window.YES)
			{
				Model_Scan_macro(Project_tmp.deck, 0);
				m_p = Model.Last();
				Quick_scan = true;
			}
			else
			{
				m_p = Model.Read(Project_tmp.deck);
				Quick_scan = false;
			}
			//
			create_reload_mark = false;	
			//
			Include_Old = Include.GetAll(m_p);
			Include_old_get();
			Up_Down_page();
			//
			//tabs_p[4][9].active = true; 
			//tabs_p[4][10].active = true; 
			//tabs_p[4][12].active = true;
	
		}
		else
		{
			Window.Warning('Warning', "no model or input deck found...", Window.OK);
		}
	
	}
	
	
	frb_tabs_hide();
	tabs_p[0][6].Show();
	tabs_p[0][9].Show();
	tabs_p[0][10].Show();
	tabs_p[0][11].Show();
	
	
	tabs_p[0][12].Show();
	tabs_p[0][13].Show();
	tabs_p[0][30].Show();
	tabs_p[0][36].Show();
	tabs_p[0][7].Show();
	tabs_p[0][8].Show();
	for(var i=0;i<map_disp_column;i++)
	{
		if(i<Include_Old.length)
		{
			map_disp[i][0].Show();
			map_disp[i][2].Show();
		}
	}	
	for(i=201;i<207;i++) 
	{
		if(tabs_p[i]!=undefined)
		{
			tabs_p[0][i].background = Widget.LIGHTGREY;
			tabs_p[0][i].pushed = false;			
		}
	}
	tabs_p[0][201].background = Widget.GREY;
	tabs_p[0][201].pushed = true;	
	

}
//

//use
Use('04_FAW_PP_GUI_model_setup_reincl.js');
Use('04_FAW_PP_GUI_model_setup_modi.js');
Use('04_FAW_PP_GUI_model_setup_newincl.js');

// hide 
frb_tabs_hide();
// init display
tabs_p[0][6].Show();
tabs_p[0][9].Show();
tabs_p[0][10].Show();
tabs_p[0][11].Show();
tabs_p[0][12].Show();
tabs_p[0][13].Show();
tabs_p[0][30].Show();
tabs_p[0][36].Show();
tabs_p[0][7].Show();
tabs_p[0][8].Show();
tabs_p[0][81].Show();
tabs_p[0][82].Show();
tabs_p[0][83].Show();
tabs_p[0][86].Show();
tabs_p[0][87].Show();
tabs_p[0][88].Show();
tabs_p[0][91].Show();
tabs_p[0][92].Show();
tabs_p[0][93].Show();
tabs_p[0][96].Show();
tabs_p[0][97].Show();
tabs_p[0][98].Show();
tabs_p[0][100].Show();
tabs_p[0][101].Show();
tabs_p[0][102].Show();
tabs_p[0][103].Show();
tabs_p[0][106].Show();
tabs_p[0][107].Show();
tabs_p[0][108].Show();

function frb_tabs_hide()
{
	for(var i=6;i<200;i++)
	{
		if(tabs_p[0][i]) tabs_p[0][i].Hide();
	}
	for(var j=0;j<5;j++)
	{
		for(var k=0;k<10;k++)
		{
			map_disp[j*10+k][0].Hide();
			map_disp[j*10+k][2].Hide();						
		}
	}
}
