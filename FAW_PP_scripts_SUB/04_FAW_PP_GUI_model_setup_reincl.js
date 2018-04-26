// Reinclude //

var reincl_v = 25;
var reincl_h = 0;


tabs_p[0][10] = New_widget(w_main_p[0], Widget.TEXTBOX, 1+reincl_h, 159+reincl_h,  4+reincl_v, 164+reincl_v, Widget.WHITE, Widget.DARKGREEN, '', Widget.LEFT, false);
//tabs_p[0][10].Line(Widget.LIGHTGREY, 50, 0, 50, 100);
tabs_p[0][11] = New_widget(w_main_p[0], Widget.LABEL,  10+reincl_h, 70+reincl_h,  0+reincl_v,  7+reincl_v, Widget.BLACK, Widget.GREY, 'Include Files From Vehicle Model', false);
tabs_p[0][13] = New_widget(w_main_p[0], Widget.LABEL,  90+reincl_h, 150+reincl_h,  0+reincl_v,  7+reincl_v, Widget.BLACK, Widget.GREY, 'Include Files Selected in Pedestrian', false);
//	left side menu button
tabs_p[0][81] = New_widget(w_main_p[0], Widget.CHECKBOX, 2+reincl_h, 9+reincl_h, 7+reincl_v, 14+reincl_v);
tabs_p[0][101] = New_widget(w_main_p[0], Widget.LABEL, 9+reincl_h, 22+reincl_h, 7+reincl_v, 14+reincl_v, Widget.BLACK, Widget.GREY, ' All', Widget.LEFT);
tabs_p[0][82] = New_widget(w_main_p[0], Widget.CHECKBOX, 22+reincl_h, 29+reincl_h, 7+reincl_v, 14+reincl_v);
tabs_p[0][102] = New_widget(w_main_p[0], Widget.LABEL, 29+reincl_h, 40+reincl_h, 7+reincl_v, 14+reincl_v, Widget.BLACK, Widget.GREY, ' RE-', Widget.LEFT);
tabs_p[0][103] = New_widget(w_main_p[0], Widget.LABEL, 40+reincl_h, 50+reincl_h, 7+reincl_v, 14+reincl_v, Widget.BLACK, Widget.GREY, 'Sort : ', Widget.RIGHT);
tabs_p[0][83] = New_widget(w_main_p[0], Widget.COMBOBOX, 50+reincl_h, 75+reincl_h, 7+reincl_v, 14+reincl_v);
//	right side menu button
tabs_p[0][86] = New_widget(w_main_p[0], Widget.CHECKBOX, 2+reincl_h+80, 9+reincl_h+80, 7+reincl_v, 14+reincl_v);
tabs_p[0][106] = New_widget(w_main_p[0], Widget.LABEL, 9+reincl_h+80, 22+reincl_h+80, 7+reincl_v, 14+reincl_v, Widget.BLACK, Widget.GREY, ' All', Widget.LEFT);
tabs_p[0][87] = New_widget(w_main_p[0], Widget.CHECKBOX, 22+reincl_h+80, 29+reincl_h+80, 7+reincl_v, 14+reincl_v);
tabs_p[0][107] = New_widget(w_main_p[0], Widget.LABEL, 29+reincl_h+80, 40+reincl_h+80, 7+reincl_v, 14+reincl_v, Widget.BLACK, Widget.GREY, ' RE-', Widget.LEFT);
tabs_p[0][108] = New_widget(w_main_p[0], Widget.LABEL, 40+reincl_h+80, 50+reincl_h+80, 7+reincl_v, 14+reincl_v, Widget.BLACK, Widget.GREY, 'Sort : ', Widget.RIGHT);
tabs_p[0][88] = New_widget(w_main_p[0], Widget.COMBOBOX, 50+reincl_h+80, 75+reincl_h+80, 7+reincl_v, 14+reincl_v);

var sort = new Object();
	sort.sort_items = ["As Number", "As Alphabet"];
	sort.left = new Array();
	sort.right = new Array();
for (i=0;i<sort.sort_items.length;i++)
{
	sort.left[i] = new WidgetItem(tabs_p[0][83], sort.sort_items[i]);
	sort.right[i] = new WidgetItem(tabs_p[0][88], sort.sort_items[i]);
}

// map disp table
var map_disp = new Array();
var w_remove_combox; //new include //new WidgetItem(w_remove_combox, 'None');
var Incl_c; // name of the connection include file
var include_map_page_total;
var map_disp_column = 18;
for(i=0;i<5;i++)
{
	for(var j=0;j<map_disp_column;j++)
	{

		map_disp[i*map_disp_column+j] = new Array();
		map_disp[i*map_disp_column+j][0] = New_widget(w_main_p[0], Widget.BUTTON, 2+reincl_h,  75+reincl_h, 16+j*7+reincl_v, 24+j*7+reincl_v, Widget.WHITE, Widget.DARKGREY, 'None', Widget.LEFT);
		map_disp[i*map_disp_column+j][0].onPopup = map_disp_onpopup;
		map_disp[i*map_disp_column+j][0].onClick = map_disp_create_shortcut;
		map_disp[i*map_disp_column+j][0].Hide();
		map_disp[i*map_disp_column+j][2] = New_widget(w_main_p[0], Widget.BUTTON, 82+reincl_h, 155+reincl_h, 16+j*7+reincl_v, 24+j*7+reincl_v, Widget.WHITE, Widget.DARKGREY, 'None', Widget.LEFT);
		map_disp[i*map_disp_column+j][2].onPopup = map_disp_onpopup;
		map_disp[i*map_disp_column+j][2].onClick = map_disp_delete_shortcut;		
		map_disp[i*map_disp_column+j][2].Hide();						
	}
}
function map_disp_create_shortcut()
{
	for(var i=0;i<Include_Old.length;i++)
	{
		if(map_disp[i][0]==this)
		{
			var result_1 = 1;
			var w_tmp = w_remove_combox.WidgetItems();
			if(w_tmp)
			{
				for(var j=1;j<w_tmp.length;j++)
				{
					if(map_disp[i][0].text == w_tmp[j].text)
					{
						Window.Warning('Warning', "include already exists", Window.OK);
						result_1 = 0;
						break;
					}
				}	
			}
			if(result_1)
			{
				new WidgetItem(w_remove_combox, map_disp[i][0].text);
				map_disp[i][2].text = map_disp[i][0].text;
				map_color_update();			
			}
			break;
			
		}
	}
	Update_Map();
		
}
function map_disp_delete_shortcut()
{
	var name_tmp = this.text;
	for(var i=0;i<Include_Old.length;i++)
	{
		if(map_disp[i][2]==this)
		{
			//
			map_disp[i][2].text = 'None';
			map_color_update();			
			break;
		}
	}
	Update_Map();
	for(i=0;i<Include_Old.length;i++)
	{
		if(map_disp[i][2].text==name_tmp) break;
		
	}	
	Message('i=',i,' Inc_length=',Include_Old.length, ' name=',name_tmp);
	if(i==Include_Old.length)
	{
		var tmp = w_remove_combox.WidgetItems();
		for(var j=0;j<tmp.length;j++)
		{
			if(tmp[j].text == name_tmp) w_remove_combox.RemoveWidgetItem(tmp[j]);
		}
	}
		
}	

// disp map popup table function
var map_disp_tmp;
//
function map_disp_onpopup()
{
	map_disp_tmp = this;
	pw_map_old_show.text = map_disp_tmp.text;
	Message(map_disp_tmp.text);
}
/// popup windows to add, show full name of old scripts
var pw_map_old = new PopupWindow();
for (i=0;i<map_disp.length;i++)
{
	map_disp[i][0].popupWindow = pw_map_old;
}
var pw_map_old_show = New_widget(pw_map_old, Widget.BUTTON, 1, 70, 7, 13, Widget.BLACK, Widget.GREY, '???', Widget.LEFT);

pw_map_old_show.onClick = map_disp_only;
function map_disp_only() 
{
	if(Quick_scan == false)
	{
		for(var i=0;i<Include_Old.length;i++)
		{
			if(map_disp[i][0]==map_disp_tmp)
			{
				var Flag_m = AllocateFlag(); m_p.ClearFlag(Flag_m);
				var tmp = Include.GetFromID(m_p, i+1);
				tmp.SetFlag(Flag_m);
				m_p.PropagateFlag(Flag_m);
				Include.BlankAll(m_p);
				Include.UnblankFlagged(m_p, Flag_m);
				ReturnFlag(Flag_m);
				View.Ac();
				break;
				
			}
		}		
	}
	function part_sketch(p_tmp)
	{
		if(p_tmp.Flagged(Flag_m)) p_tmp.Sketch();
	}
}

/// popup windows to add, remove and change new include
var pw_map = new PopupWindow();
for (i=0;i<map_disp.length;i++)
{
	map_disp[i][2].popupWindow = pw_map;
}
//// select the include
var pw_map_select = new Widget(pw_map, Widget.BUTTON, 1, 30, 7, 13, "select");
var w_pw = new Window("Include Option",0.5, 0.7, 0.5, 0.65);
var w_pw_exit = new Widget(w_pw, Widget.BUTTON,  35, 65 , 12, 21, 'Quit'); 
w_pw_exit.onClick = w_pw_hide;
var w_select_confirm = new Widget(w_pw, Widget.BUTTON,  0, 30 , 12, 21, 'Select'); 
pw_map_select.onClick = map_select_show;
w_select_confirm.onClick = map_select_confirm;
function w_pw_hide() {w_pw.Hide();}
function map_select_show()
{
	w_pw_exit.Show();
	w_select_confirm.Show();

	w_add_combox.Hide();
	w_add_text.Hide();
	w_add_confirm.Hide();
	w_remove_combox.Show();
	w_remove_confirm.Hide();
	w_set_cl_confirm.Hide();
	w_pw.Show();
}
function map_select_confirm()
{
	map_disp_tmp.text = w_remove_combox.selectedItem.text;
	map_color_update();
	w_pw.Hide();
	Update_Map();
}

//// add new include
var pw_map_add = new Widget(pw_map, Widget.BUTTON, 1, 30, 14, 20, "add");
var w_add_combox = new Widget(w_pw, Widget.COMBOBOX,  15,  72, 1, 10); 
w_add_combox.onChange = w_add_combox_change;
function w_add_combox_change()
{
	w_add_text.text = w_add_combox.text;
}
var w_add_text = new Widget(w_pw, Widget.TEXTBOX, 0, 65, 1, 10,'');
w_add_text.onChange = w_add_text_trim;
function w_add_text_trim()
{
	w_add_text.text = w_add_text.text.trim();
	//Message(w_add_text.text.slice(w_add_text.text.length-4));
	if(w_add_text.text!='' && w_add_text.text.slice(w_add_text.text.length-4)!='.key' && w_add_text.text.slice(w_add_text.text.length-2)!='.k')
	{
		w_add_text.text = w_add_text.text + '.key';
	}
}
var w_add_confirm = new Widget(w_pw, Widget.BUTTON,  0, 30 , 12, 21, 'Add'); 
pw_map_add.onClick = map_add_show;
w_add_confirm.onClick = map_add_confirm;
function map_add_show()
{
	w_pw_exit.Show();
	w_select_confirm.Hide();
	w_add_combox.Hide();
	w_add_text.Show(); 
	if(map_disp_tmp.background != Widget.DARKGREY) 
	{
		for(var i=0;i<map_disp.length;i++)
		{
			if(map_disp[i][2]==map_disp_tmp)
			{
				w_add_text.text = map_disp[i][0].text;
				break;
			}
		}
	}
	w_add_confirm.Show();
	w_remove_combox.Hide();
	w_remove_confirm.Hide();
	w_set_cl_confirm.Hide();
	w_pw.Show();
}
function map_add_confirm()
{
	if(w_add_text.text != '')
	{
		var result_1 = true;
		var w_tmp = w_remove_combox.WidgetItems();
		if(w_tmp)
		{
			for(var i=0;i<w_tmp.length;i++)
			{
				if(w_add_text.text == w_tmp[i].text)
				{
					Window.Warning('Warning', "include already exists", Window.OK);
					result_1 = false;
					break;
				}
			}	
		}
		if(result_1)
		{
			new WidgetItem(w_remove_combox, w_add_text.text);
			map_disp_tmp.text = w_add_text.text;
			map_color_update();
			
		}
	}
	else
	{
		Window.Warning('Warning', 'please input a name for new include', Window.OK);
	}
	//
	Update_Map();
}
//// remove a include
var pw_map_remove = new Widget(pw_map, Widget.BUTTON, 1, 30, 21, 27, "remove");
w_remove_combox = new Widget(w_pw, Widget.COMBOBOX,  0,  65, 1, 10); 
new WidgetItem(w_remove_combox, 'None');
var w_remove_confirm = new Widget(w_pw, Widget.BUTTON,  0, 30 , 12, 21, 'Remove'); 
pw_map_remove.onClick = map_remove_show;
w_remove_confirm.onClick = map_remove_confirm;
function map_remove_show()
{

	w_pw_exit.Show();
	w_select_confirm.Hide();

	w_add_combox.Hide();
	w_add_text.Hide();
	w_add_confirm.Hide();
	w_remove_combox.Show(); //w_remove_combox.text = map_disp_tmp.text;
	w_remove_confirm.Show();
	w_set_cl_confirm.Hide();
	w_pw.Show();
}
function map_remove_confirm()
{
	if(w_remove_combox.selectedItem.text != 'None')
	{

			for(var i=0;i<map_disp.length;i++)
			{
				if(map_disp[i][2].text==w_remove_combox.selectedItem.text) map_disp[i][2].text= 'None';	
			}
			w_remove_combox.RemoveWidgetItem(w_remove_combox.selectedItem);
			map_color_update();
			
			w_pw.Hide();
		Update_Map();		
	}
	

}
//// select the include to put new connection 
var pw_map_set_cl = new Widget(pw_map, Widget.BUTTON, 1, 30, 27, 34, "set connection include");
var w_set_cl_confirm = new Widget(w_pw, Widget.BUTTON,  0, 30 , 12, 21, 'Set'); 
pw_map_set_cl.onClick = map_set_cl_show;
w_set_cl_confirm.onClick = map_set_cl_confirm;
function map_set_cl_show()
{

	w_pw_exit.Show();
	w_select_confirm.Hide();

	w_add_combox.Hide();
	w_add_text.Hide();
	w_add_confirm.Hide();
	w_remove_combox.Show(); 
	if(map_disp_tmp.text!='None') w_remove_combox.text = map_disp_tmp.text;
	w_remove_confirm.Hide();
	w_set_cl_confirm.Show();
	w_pw.Show();
}
function map_set_cl_confirm() 
{
		Incl_c = w_remove_combox.selectedItem.text;
		Message('select ',Incl_c,'as the connection include');
		map_color_update();
		
		w_pw.Hide();
	//}
	//
	Update_Map;
}
//
function map_color_update()
{
	for(var i=0;i<map_disp.length;i++)
	{
		if(map_disp[i][2].text!='None')
		{
			map_disp[i][0].background= Widget.DARKBLUE;
			if(map_disp[i][2].text==Incl_c) map_disp[i][2].background = Widget.BLUE;
			else map_disp[i][2].background = Widget.DARKBLUE;				
			w_pw_hide();
		}
		else
		{
			map_disp[i][0].background= Widget.DARKGREY;
			map_disp[i][2].background= Widget.DARKGREY;
		}
	}
}
//
function map_change()
{
	//Message(pw_map_combo[0].text);
	map_disp_tmp.text = pw_map_combo[0].selectedItem.text;
}
//
function Include_old_get()
{

	var i = 0;
	include_map_page_total = Math.floor((Include_Old.length+map_disp_column-1)/map_disp_column);
	while(Include_Old.length>i*map_disp_column)
	{
		for(var j=0;j<map_disp_column;j++)
		{
			if(Include_Old[i*map_disp_column+j])
			{
				map_disp[i*map_disp_column+j][0].text = Include_Old[i*map_disp_column+j].name;
				map_disp[i*map_disp_column+j][0].Hide();
				map_disp[i*map_disp_column+j][2].text = 'None';
				map_disp[i*map_disp_column+j][2].Hide();					
			}
			else break;
		}
		i++;
	}
	//
	for(i=0;i<Include_Old.length;i++)
	{
		new WidgetItem(w_add_combox, map_disp[i][0].text);
	
	}
	//
	for(var i=0;i<map_disp_column;i++)
	{
		if(i<Include_Old.length)
		{
			map_disp[i][0].Show();
			map_disp[i][2].Show();
		}
	}
	
}
//
var current_disp_map = 0;
for(i=5;i<map_disp.length;i++) 
{
	map_disp[i][0].Hide(); //map_disp[i][1].Hide();
	map_disp[i][2].Hide();
}
//                                         
tabs_p[0][7] = New_widget(w_main_p[0], Widget.BUTTON,  18+reincl_h,  25+reincl_h, -20+reincl_v+164, -13+reincl_v+164, Widget.WHITE, Widget.DARKGREEN, "<", Widget.CENTRE);
tabs_p[0][7].active = false;                                      
tabs_p[0][7].onClick = Up_disp;                                   
tabs_p[0][8] = New_widget(w_main_p[0], Widget.BUTTON,  25+30+reincl_h,  32+30+reincl_h, -20+reincl_v+164, -13+reincl_v+164, Widget.WHITE, Widget.DARKGREEN, ">", Widget.CENTRE);
tabs_p[0][8].onClick = Down_disp;                                   
tabs_p[0][30] = New_widget(w_main_p[0], Widget.LABEL,  25+reincl_h,  25+30+reincl_h, -20+reincl_v+164, -13+reincl_v+164, Widget.BLACK, Widget.GREY, 'Page 1', Widget.CENTRE);

tabs_p[0][91] = New_widget(w_main_p[0], Widget.BUTTON,  18+reincl_h+80,  25+reincl_h+80, -20+reincl_v+164, -13+reincl_v+164, Widget.WHITE, Widget.DARKGREEN, "<", Widget.CENTRE);
tabs_p[0][91].active = false;                                      
tabs_p[0][91].onClick = Up_disp;                                   
tabs_p[0][92] = New_widget(w_main_p[0], Widget.BUTTON,  25+30+reincl_h+80,  32+30+reincl_h+80, -20+reincl_v+164, -13+reincl_v+164, Widget.WHITE, Widget.DARKGREEN, ">", Widget.CENTRE);
tabs_p[0][92].onClick = Down_disp;                                   
tabs_p[0][93] = New_widget(w_main_p[0], Widget.LABEL,  25+reincl_h+80,  25+30+reincl_h+80, -20+reincl_v+164, -13+reincl_v+164, Widget.BLACK, Widget.GREY, 'Page 1', Widget.CENTRE);

tabs_p[0][96] = New_widget(w_main_p[0], Widget.BUTTON, 18+reincl_h, 40+reincl_h, -10+reincl_v+164, -3+reincl_v+164, Widget.WHITE, Widget.DARKBLUE, "Pick in Win", Widget.CENTRE);
tabs_p[0][97] = New_widget(w_main_p[0], Widget.BUTTON, 40+reincl_h, 62+reincl_h, -10+reincl_v+164, -3+reincl_v+164, Widget.WHITE, Widget.DARKBLUE, "Sketch Sel", Widget.CENTRE);
tabs_p[0][98] = New_widget(w_main_p[0], Widget.BUTTON, 40+reincl_h+80, 62+reincl_h+80, -10+reincl_v+164, -3+reincl_v+164, Widget.WHITE, Widget.DARKBLUE, "Sketch Sel", Widget.CENTRE);

//
function Up_disp()
{
	if(current_disp_map!=0)
	{
		for(var i=0;i<map_disp_column;i++)
		{
			if(map_disp[current_disp_map*map_disp_column+i])
			{
				map_disp[current_disp_map*map_disp_column+i][0].Hide();
				map_disp[current_disp_map*map_disp_column+i][2].Hide();
			}
			if((current_disp_map-1)*map_disp_column+i<Include_Old.length)
			{
				map_disp[(current_disp_map-1)*map_disp_column+i][0].Show();
				map_disp[(current_disp_map-1)*map_disp_column+i][2].Show();					
			}
	
		}	
		current_disp_map--;
	}
	Up_Down_page();
}
//
function Down_disp()
{
	if(current_disp_map*map_disp_column+map_disp_column<Include_Old.length)
	{
		for(var i=0;i<map_disp_column;i++)
		{
			map_disp[current_disp_map*map_disp_column+i][0].Hide();
			map_disp[current_disp_map*map_disp_column+i][2].Hide();
			if((current_disp_map+1)*map_disp_column+i<Include_Old.length)
			{
				map_disp[(current_disp_map+1)*map_disp_column+i][0].Show();
				map_disp[(current_disp_map+1)*map_disp_column+i][2].Show();
			}	
		}	
		current_disp_map++;
	}
	Up_Down_page();	
}
//
function Up_Down_page()
{
	tabs_p[0][30].text = 'Page ' + String(current_disp_map+1) + '/'+include_map_page_total;
	if(current_disp_map!=0) tabs_p[0][7].active = true;
	else tabs_p[0][7].active = false;
	if(current_disp_map*map_disp_column+map_disp_column<Include_Old.length) tabs_p[0][8].active = true;
	else tabs_p[0][8].active = false;
}
//
tabs_p[0][6] = New_widget(w_main_p[0], Widget.BUTTON,  2, 25,  1+reincl_v+164,  8+reincl_v+164, Widget.WHITE, Widget.DARKGREEN, " Import", Widget.LEFT);
tabs_p[0][6].onClick = map_view;  
tabs_p[0][9] = New_widget(w_main_p[0], Widget.BUTTON,   25,  50,  1+reincl_v+164,  8+reincl_v+164, Widget.WHITE, Widget.DARKGREEN, " Write", Widget.LEFT);
tabs_p[0][9].onClick = Write_out_Map;
function Write_out_Map()
{

		if(Project_tmp.path !== '')         var fo = Window.GetFile(".csv", false, Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\');
		else                       	        var fo = Window.GetFile(".csv"); 
		if(fo!=undefined) Write_Map(fo);
}
//
function Update_Map()
{
	//writeout a tmp map file
	Write_Map("inc_tmp.csv");
	var fo = new File("inc_tmp.csv", File.READ);
	Include_Map = Include_Map_From_CSV(fo);
	fo.Close();
	File.Delete(fo.filename);

}
//
tabs_p[0][12] = New_widget(w_main_p[0], Widget.BUTTON,  130, 155,  1+reincl_v+164,  8+reincl_v+164, Widget.WHITE, Widget.DARKRED, " Apply", Widget.LEFT);
tabs_p[0][12].onClick = map_include;
tabs_p[0][36] = New_widget(w_main_p[0], Widget.BUTTON,  50, 75,  1+reincl_v+164,  8+reincl_v+164, Widget.WHITE, Widget.DARKGREEN, " Clean", Widget.LEFT);
tabs_p[0][36].onClick = map_clean;
function map_clean()
{
	//clean the old data
	w_remove_combox.RemoveAllWidgetItems(); 
	new WidgetItem(w_remove_combox, 'None');
	for(var i=0;i<map_disp.length;i++)
	{
		map_disp[i][0].background= Widget.DARKGREY;
		map_disp[i][0].Hide();
		map_disp[i][2].background= Widget.DARKGREY;
		map_disp[i][2].text= 'None';
		map_disp[i][2].Hide();
	}	
	//assign new data
	Message(m_p,'#',typeof(m_p));
	if(m_p!=undefined) Include_Old = Include.GetAll(m_p);
	
	current_disp_map = 0;
	for(var i=0;i<map_disp_column;i++)
	{
		if(Include_Old && i<Include_Old.length)
		{
			map_disp[i][0].Show();
			map_disp[i][2].Show();
		}
	}
//	Check_tab_up_down();
}
//
function map_view()
{
	//
	map_clean();	
	if(Project_tmp.path !== '')         var f = Window.GetFile(".csv", false, Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\');
	else                       	        var f = Window.GetFile(".csv");
	
	if(f!=undefined)
	{ 
		f = new File(f, File.READ);
		Include_Map = Include_Map_From_CSV(f);
		for(var i=1;i<Include_Map.length-1;i++)
		{
			if(Include_Map[i].type=='c' || Include_Map[i]=='C') Incl_c = Include_Map[i].name;
			new WidgetItem(w_remove_combox, Include_Map[i].name);
			for(var j=0;j<Include_Old.length;j++)
			{
				for(var k=0;k<Include_Map[i].map.length;k++)
				{
					if(j+1==Include_Map[i].map[k][0])
					{
						map_disp[j][2].text = Include_Map[i].name;
					}
				}
			}
		}
		map_color_update();
	}
	//
	for(var i=0;i<map_disp_column;i++)
	{
		if(i<Include_Old.length)
		{
			map_disp[i][0].Show();
			map_disp[i][2].Show();
		}
	}
	
}
//
function map_include()
{
	//No model selected so just exit the script
	if(Include_Map!=undefined && Include_Map.length>2) 
	{
		w_main_p[0].Show(true);
		//
		if(proj_flag) Write_Map(Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\'+
								Project_tmp.name+'_include_map.csv'); 					
		ReInclude_test();
		//
		map_clean();
		Include_Old = Include.GetAll(m_p);
		Include_old_get();
		//
		//tabs_p[4][9].active = false;
		//tabs_p[4][10].active = false;
		//tabs_p[4][12].active = false;	
		//
		w_main_p[0].Show(false);
		Up_Down_page();
		//
		tabs_p[0][211].background = Widget.DARKGREEN;
		//
		proj_operate[proj_operate.length] = '# reinclude';
		//
		Save_deck();
		
	}
	else
	{
		Window.Warning("Warning", "Please set/update the proper new include information.", Window.OK);
	}

}
//
function Write_Map(fo)
{
	if(fo!=undefined)
	{
		fo = new File(fo, File.WRITE);
		var w_tmp = w_remove_combox.WidgetItems();
		if(w_tmp!=null)
		{
			fo.Writeln('old id,old name, new id,new name,connection');
			for(var i=0;i<Include_Old.length;i++)
			{
				for(var j=1;j<w_tmp.length;j++)
				{
					if(map_disp[i][2].text==w_tmp[j].text)
					{	
						fo.Write(i+1,',',map_disp[i][0].text,',',j,',',map_disp[i][2].text,',');
						if(map_disp[i][2].text!=Incl_c) fo.Write('/');
						else fo.Write('c');
						//
						sub_parent_find(Include_Old[i]);
						//
						fo.Write('\n');
					}
				}
			}
		}
		else
		{
			fo.Writeln('old id,old name, new id,new name,connection');
			Window.Warning("Warning", "New include is empty...", Window.OK);
		}
		
		fo.Close();
	}	
	
	function sub_parent_find(tmp)
	{
		var label;
		if(tmp.parent!=0)
		{
			sub_parent_find(Include.GetFromID(m_p, tmp.parent));
			fo.Write(',', tmp.parent);
		}
	}

}
//
//sub function //
function read_test()
{

		var f = m.path +'\\' + m.filename;
		var f_n= m.number;
		m.Delete();
		Message('f_n = ',f_n);
		//Model_Scan_macro(f, 1);
		m = Model.Last();
		m.number = 100;
		Message('now f_n = ',f_n);
		//if(m.number != f_n) m.number=f_n;
}
//
function ReInclude_test()
{
	
	/* No model selected so just exit the script*/
	if(!m_p) 
	{ 
		Window.Warning('Warning', "Model missing...", Window.OK);
		Exit(); 
	}
	
	// re-read the model
	var f = m_p.path +'\\' + m_p.filename;
	var f_n= m_p.number;

	m_p.Delete();
	Model_Scan_macro(f, 1); // Model.Read(f);
	Quick_scan = false;
	m_p = Model.Last();	
	
	
	if(m_p!=undefined)
	{
		
		if(m_p.number != f_n) m_p.number=f_n;	
				
		// reinclude model flag
		var Flag_del = AllocateFlag(); m_p.ClearFlag(Flag_del);
		var Flag_lef = AllocateFlag(); m_p.ClearFlag(Flag_lef);
		var i = 0; var j = 0; var k = 0; var l = 0;
		var tmp; //supper variable
	
		// old include files
		var Include_Old = Include.GetAll(m_p);
		
		// build and display new include files
		Message('length:',Include_Map.length);
		for(i=1;i<Include_Map.length-1;i++)
		{
			Include_Map[i].show();
			Include_Map[i].incl = new Include(m_p, Include_Map[i].name);
			for(j=0;j<Include_Map[i].map.length;j++)
			{
				tmp = Include.GetFromID(m_p, Math.floor(Include_Map[i].map[j][0]));
				tmp.parent = Include_Map[i].incl.label;
				tmp.SetFlag(Flag_lef);
				
			}
		}
		m_p.PropagateFlag(Flag_lef);
		
		//delete old include // is there anyway to check the include is empty or not?
		for(i=0;i<Include_Old.length;i++)
		{
			if(!Include_Old[i].Flagged(Flag_lef)) 
			{
				Include_Old[i].SetFlag(Flag_del);
				Message('Del ',Include_Old[i].label);
			}
		}
		m_p.PropagateFlag(Flag_del);
		m_p.DeleteFlagged(Flag_del);
		for(i=0;i<Include_Old.length;i++)
		{
			if(!Include_Old[i].Flagged(Flag_lef)) 
			{
				m_p.DeleteInclude(Include_Old[i].label, 1);
			}
		}
		
		var reincl_goon = true;
		if(proj_flag) 
		{
			var path_tmp = Project_tmp.path+'\\'+ Project_tmp.name;
			var file_name = Project_tmp.path+'\\'+Project_tmp.name+'\\01_Model\\'+Project_tmp.keyword_name;
		}
		else 
		{
			var path_tmp = Window.GetDirectory();
			if(path_tmp!=undefined)
			{
				var file_name = path_tmp+'\\tmp.key';		
			}
			else
			{
				Window.Warning('Warning', "please select a directory for the model saving ...", Window.OK);
				reincl_goon=false;
				
			}
				
		}
		if(reincl_goon)
		{
			for(i=1;i<Include_Map.length-1;i++)
			{

				Include_Map[i].incl.Write(path_tmp+'\\'+Include_Map[i].name); 
			}	
			m_p.Write(file_name, Include.MASTER_ONLY);
			//delete current file
			m_p.Delete(); 
			for(i=1;i<Include_Map.length-1;i++)
			{
				m_p = Model.Read(path_tmp+'\\'+Include_Map[i].name); 
				m_p.Write(path_tmp+'\\'+Include_Map[i].name, Include.MERGE); 
				m_p.Delete();

			}	
			Model.Read(file_name);
			
			for(i=1;i<Include_Map.length-1;i++)
			{
				File.Delete(path_tmp+'\\'+Include_Map[i].name); 
			}		
			File.Delete(file_name);
			
			
			//give back the m model
			m_p = Model.Last();
			Message('nearly finished and F_n = ',f_n);
			if(m_p.number != f_n) m_p.number=f_n;
			
			//do the clean up 
			Clean_macro(5);
			C_macro();
			//end of funciton
			Message('End Re-include...');	
			
			//return flag
			ReturnFlag(Flag_del);
			ReturnFlag(Flag_lef);
			
			//
			C_macro();
			w_main_p[0].Show(false);	
		}

	}
	else 
	{
		Window.Warning('Warning', "no model or input deck found...", Window.OK);
		// clean up everything
		map_clean();
		Project_delete();
		w_main_p[4].Show(false);
		
	}
	
	

}
//
function Array_Insert(A_ori,A_ins,n)
{
	// insert element A_ins into A_ori before A_ori's nth element
	var A_1 = A_ori.slice(0, n); 
	var A_2 = A_ori.slice(n);
	return A_1.concat(A_ins, A_2);
}
//
function Reinclude(Entity, Map)
{
	while(Entity!=undefined)
	{
		var Out_mark = false;
		for(var i=1;i<Map.length-1;i++)
		{
			for(var j=0;j<Map[i].map.length;j++)
			{
				if(Entity.include == Map[i].map[j][0])
				{
					Entity.include = Math.floor(Map[i].incl.label); 	
					//Message(S_tmp.eid,'->',Map[i].id)
					Out_mark = true;
					break;
				}
			}
			if(Out_mark) break;
		}
		Entity = Entity.Next();		
	}
}
// object
function Inc(id, name, type) 
{
	//property
	this.incl;
	this.id = id;
	this.name = name;
	this.map = new Array(); 
	this.map_add = fun_1;	
	this.type = String(type);
	function fun_1(tmp)
	{
		this.map[this.map.length] = tmp; //id, name, parent path()
	}

	this.show = fun_2;
	function fun_2()
	{
		Message('new include: ',this.id,' - ',this.name, ' | ',this.map.length, ' old include');
		for(var i=0;i<this.map.length;i++)
		{
			Message('old include: ', this.map[i][0],' - ',this.map[i][1]);
		}
	}
    
}
//
function Include_Map_From_CSV(f)
{
	var line = f.ReadLongLine(); // ignore first line
	var Include_Map = new Array(); // info for new include
	    Include_Map[0] = new Inc(0, 'lowest', 'fake');
	    Include_Map[1] = new Inc(1e10, 'highest', 'fake');
	while ((line = f.ReadLongLine())!=undefined)
	{
		var tmp = line.split(','); // [old id, old name, new id, new name, connection or not] 
		for(var i=0;i<Include_Map.length-1;i++)
		{
			var tmp_map = new Array(); tmp_map[0] =tmp[0]; tmp_map[1] = tmp[1];
			for(var j=5;j<tmp.length;j++) tmp_map[tmp_map.length] = tmp[j];
			if((tmp[2]-Include_Map[i].id)*(tmp[2]-Include_Map[i+1].id)==0) 
			{
				//Message('no new');
				Include_Map[i+1].map_add(tmp_map);
				break;
			}
			else if((tmp[2]-Include_Map[i].id)*(tmp[2]-Include_Map[i+1].id)<0) 
			{
				Include_Map = Array_Insert(Include_Map, new Inc(tmp[2], tmp[3], tmp[4]), i+1);
				Include_Map[i+1].map_add(tmp_map);
				
				break;
			}
		}
	}
	f.Close();
	
	return Include_Map;
}
