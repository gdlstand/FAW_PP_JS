//memory:1024 
//version check
var version = Utils.Version();
var vercheck = 14.1
if(version < vercheck) 
{
  Window.Error("", "\nThis demo script for FAW RDC only works with Primer v" + vercheck + " or newer.\nPlease contact de-long.ge@arup.com\n");
  Exit();
}

var today = Date.now();
var expDate = Date.parse('28 April 2018');
if (today > expDate) {
	Window.Error("", "\nThis demo script for FAW RDC has expired.\nPlease contact de-long.ge@arup.com\n");
	Exit();
}
//Objects.max_widget=2000;
// images
Use("FAW_PP_scripts_SUB\\02_FAW_PP_GUI_image.js");
//
//
//   USER: EDIT THESE BEFORE USING
//
var oasys_path = 'C:\\Program Files\\Ove Arup\\v14.1_x64';
var temp_path = 'C:\\TEMP';
//
//
var shell = oasys_path+'\\shell14_1_x64.exe';
var report = oasys_path+'\\reporter14_1_x64.exe';
var script_location =  oasys_path.replace(/\\/g, '\\\\') + '\\\\primer_library\\\\scripts\\\\pedestrian_impact_marking_program.js';
//
//
// deck model 
var m_p; //model to work on
// model size init
var	X_max = -1e10; 
var	X_min = 1e10;
var	Y_max = -1e10;
var	Y_min = 1e10;
var	Z_max = -1e10;
var	Z_min = 1e10;
// 
var proj_flag = false; // project is created/loaded already or not 
var proj_operate = new Array(); // record operations
var Quick_scan = false;	// model is read in using quick scan or not
//var create_reload_mark = true; 
// project obj
var Project_cur = Object();
	Project_cur.name = 'new_project';
	Project_cur.owner = '';	
	Project_cur.path = '';
	Project_cur.sub = new Array();	
// project sub obj
var Project_tmp = Object();
	Project_tmp.name = 'new_project'; //default project name';
	Project_tmp.path = '';
	Project_tmp.deck = '';
	Project_tmp.owner ='';
//	Project_tmp.netpath_1 = '';
//	Project_tmp.netpath_2 = '';
	Project_tmp.date = '';
	Project_tmp.comment = new Array();
	Project_tmp.keyword_name = 'new_project';
// model re-include 
var Include_Old;
var Include_Map; // relationship of include files 
// markup variable
var _oMarkupVariables = new Object(); //
	// necessary properties, rest will be definded later
	_oMarkupVariables.protocol = new Array();
	_oMarkupVariables.outer_parts = new Array();
	_oMarkupVariables.bonnet_parts = new Array();
	_oMarkupVariables.windscreen_parts = new Array();
	_oMarkupVariables.offdis_ble = new Array();

//

var i; var j; var k; var l; 

// main windows //
var w_main_p = new Array();
var h_button = new Array();
var tabs_p = new Array();
var lblTabArea = new Array();
var lblCoverTabBottom = new Array();
//four tabs_p of main window
Options.max_widgets = 1200;
for(i=0;i<5;i++)
{
	w_main_p[i] = new Window("Main_Tab",0.35,Window.RightBorder(),Window.BottomBorder(),0.95);  
	w_main_p[i].onClose = window_quit;
	
	tabs_p[i] = new Array();
	tabs_p[i][100] = New_widget(w_main_p[i], Widget.LABEL, 0, 160,-50, 0, Widget.BLACK, Widget.WHITE,  "");         
	tabs_p[i][100].ReadImageString(Login_shell_logo, Widget.LEFT|Widget.CENTER|Widget.SCALE);
	tabs_p[i][0] = New_widget(w_main_p[i], Widget.BUTTON, 0,  29,  1, 10, Widget.BLACK, Widget.GREY, " Baseline Model",  Widget.CENTRE);
	tabs_p[i][1] = New_widget(w_main_p[i], Widget.BUTTON, 29,  58,  1, 10, Widget.BLACK, Widget.GREY, " Optimize Model", Widget.CENTRE);
	tabs_p[i][2] = New_widget(w_main_p[i], Widget.BUTTON, 58, 87,  1, 10, Widget.BLACK, Widget.GREY, " Submit", Widget.CENTRE);
	tabs_p[i][3] = New_widget(w_main_p[i], Widget.BUTTON, 87, 116,  1, 10, Widget.BLACK, Widget.GREY, " Post-processing", Widget.CENTRE);                                                                                           
	//tabs_p[i][4] = New_widget(w_main_p[i], Widget.BUTTON, 0,   24,  1, 10, Widget.BLACK, Widget.GREY, " Project", Widget.CENTRE);
	tabs_p[i][4] = New_widget(w_main_p[i], Widget.BUTTON, 116,  145,  1, 10, Widget.BLACK, Widget.GREY, " CAS Correlation", Widget.CENTRE);
	
	lblTabArea[i] = New_widget(w_main_p[i], Widget.LABEL, 0,  160,  12,220, Widget.BLACK, Widget.GREY, "");
    lblTabArea[i].Line(Widget.LIGHTGREY,   0,   0, 100,   0);
    lblTabArea[i].Line(Widget.DARKGREY,  100,   0, 100,  90);
    lblTabArea[i].Line(Widget.DARKGREY,  100,  90,   0,  90);
    lblTabArea[i].Line(Widget.LIGHTGREY,   0,  90,   0,   0);
    //lblTabArea[i].Line(Widget.WHITE,      12,   0,  12,  90); 

}
//
function window_quit()
{
	var answer = Window.Warning("", "Exit the Script?", Window.YES |Window.NO);
	if (answer == Window.YES) Exit();
}
//
//switch tabs_p of main window
for(i=0;i<5;i++)
{
	tabs_p[i][0].onClick = dosth1;
	tabs_p[i][1].onClick = dosth2;
	tabs_p[i][2].onClick = dosth3;
	tabs_p[i][3].onClick = dosth4;
	tabs_p[i][4].onClick = dosth5;
	//tabs_p[i][5].onClick = dosth6;
}
// swith tabs_p
function quit()
{
	Message('End...');
	Exit();
}
//
function dosth1()
{
	switch_tab(0, w_main_p);
}	
//
function dosth2()
{	
	switch_tab(1, w_main_p);
}
//
function dosth3()
{	
	switch_tab(2, w_main_p);
}
//
function dosth4()
{	
	switch_tab(3, w_main_p);
}
//
function dosth5()
{	
	switch_tab(4, w_main_p);
}
//
/*
function dosth6()
{	
	switch_tab(5, w_main_p);
}
*/
//
function switch_tab(n,windows)
{
	for(var i=0;i<windows.length;i++)
	{
		windows[i].Hide();
	}
	windows[n].bottom = windows[Current_w].bottom;
	windows[n].left = windows[Current_w].left;
	windows[n].right = windows[Current_w].right;
	windows[n].top = windows[Current_w].top;
	Current_w = n;
	tabs_p[n][0].background = Widget.LIGHTGREY;
	tabs_p[n][1].background = Widget.LIGHTGREY;
	tabs_p[n][2].background = Widget.LIGHTGREY;
	tabs_p[n][3].background = Widget.LIGHTGREY;
	tabs_p[n][4].background = Widget.LIGHTGREY;	
	//tabs_p[n][5].background = Widget.LIGHTGREY;		
	tabs_p[n][n].background = Widget.GREY;
	
	windows[n].Show(false);

}

//initial setup
var Current_w = 0;

//Use 
Use('FAW_PP_scripts_SUB\\04_FAW_PP_GUI_model_setup.js');
Use("FAW_PP_scripts_SUB\\09_FAW_PP_GUI_general_function.js");
//Use('FAW_PP_scripts_SUB\\06_FAW_PP_GUI_submit.js');
//Use('FAW_PP_scripts_SUB\\07_FAW_PP_GUI_post.js');
Use('FAW_PP_scripts_SUB\\00_FAW_PP_GUI_shell.js');

//dosth1();//	if want to start from login, comment this line out and turn to shell to um-comment: w_shell[5].Show(false);;
//w_main_p[0].Show(false);

//
Message('End...');
Exit();

