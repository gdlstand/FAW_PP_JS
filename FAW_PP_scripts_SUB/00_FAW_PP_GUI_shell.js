/*
var user = new Array();
	user[0] = new Array('FAW_user01', '12345');
	user[1] = new Array('FAW_user02', '54321');
var user_history = new Array();
*/
Use('FAW_PP_scripts_SUB\\001_FAW_PP_Admin.js');

var w_shell = new Array();
var tabs_shell = new Array();
var Shell_Ped_bttn_access = 0;

	//
	//	Window definition
	//
	//	main entrances window, Project management/ ped analysis/ vehicle crash/component crash
	w_shell[0] = new Window("FAW CAE Platform(demo)", 0.4, Window.RightBorder(), Window.MiddleBorder(),0.95);
	w_shell[0].onClose = window_quit;
	w_shell[0].Hide();
	//	right click on "User Name :" textbox, popup window
	w_shell[3] = new PopupWindow();
	//	left click on "Project Management" button
	w_shell[1] = new Window("Project Management", 0.4, Window.RightBorder(), Window.BottomBorder(), Window.MiddleBorder());
	w_shell[1].Hide();
	//	right click on "Project Management" button, popup window
	w_shell[2] = new PopupWindow();
		
	//	login window, appear before w_shell[0], 
	w_shell[5] = new Window("FAW CAE Platform(demo)", 0.4, Window.RightBorder(), Window.MiddleBorder(),0.95);
	w_shell[5].onClose = window_quit;
	
	//
	//	tabs definition
	//
	//	login window tabs, with user name&password text box, login and Exit button 
	tabs_shell[5] = new Array();
	
	tabs_shell[5][10] = New_widget(w_shell[5], Widget.LABEL, 1, 150, -50, 0, Widget.BLACK, Widget.GREY, "");//	check "-50" should be identical with "general function.js"-New_widget function-var vertical_off = 50;
	tabs_shell[5][10].ReadImageString(Login_shell_logo, Widget.LEFT|Widget.CENTRE|Widget.SCALE);
	tabs_shell[5][11] = New_widget(w_shell[5], Widget.LABEL, 1, 148, 1, 65, Widget.BLACK, Widget.GERY, "");//	Biggest frame below logo page
	tabs_shell[5][11].Line(Widget.WHITE, 1, 1, 100, 1);
	tabs_shell[5][11].Line(Widget.BLACK, 100, 1, 100, 100);
	tabs_shell[5][11].Line(Widget.BLACK, 100, 100, 1, 100);
	tabs_shell[5][11].Line(Widget.WHITE, 1, 100, 1, 1);
	
					   New_widget(w_shell[5], Widget.LABEL, 20, 40, 10, 20, Widget.BLACK, Widget.GERY, " User Name : ", Widget.LEFT);
	tabs_shell[5][0] = New_widget(w_shell[5], Widget.TEXTBOX, 44, 106, 10, 20, Widget.DEFAULT, Widget.WHITE, '');
	tabs_shell[5][0].popupWindow = w_shell[3];
	//tabs_shell[5][0].onChange = Login_info_update;
					   New_widget(w_shell[5], Widget.LABEL, 20, 40, 30, 40, Widget.BLACK, Widget.GERY, " Password : ", Widget.LEFT);
	tabs_shell[5][1] = New_widget(w_shell[5], Widget.TEXTBOX, 44, 106, 30, 40, Widget.DEFAULT, Widget.WHITE, '');
	//tabs_shell[5][1].onChange = Login_info_update;
	
	tabs_shell[5][2] = New_widget(w_shell[5], Widget.BUTTON, 44, 64, 50, 60, Widget.BLACK, Widget.WHITE, " Login ", Widget.CENTRE);
	tabs_shell[5][2].onClick = login_system;
	tabs_shell[5][3] = New_widget(w_shell[5], Widget.BUTTON, 86, 106, 50, 60, Widget.BLACK, Widget.WHITE, " Exit ", Widget.CENTRE);
	tabs_shell[5][3].onClick = window_quit;
	
	tabs_shell[5][4] = New_widget(w_shell[5], Widget.BUTTON, 110, 117, 12, 19, Widget.WHITE, Widget.DARKGREEN, "?", Widget.CENTRE);
	tabs_shell[5][5] = New_widget(w_shell[5], Widget.BUTTON, 110, 117, 32, 39, Widget.WHITE, Widget.DARKGREEN, "?", Widget.CENTRE);
	tabs_shell[5][4].onClick = login_help_btn;
	tabs_shell[5][5].onClick = login_help_btn;
	
	//	Shell main window tabs, with 3 entrances button, 1 Project Management botton
	tabs_shell[0] = new Array();
	
	//logo pic
	tabs_shell[0][10] = New_widget(w_shell[0], Widget.LABEL, 1, 150, -50, 0, Widget.BLACK, Widget.GERY, "");//	check "-50" should be identical with "general function.js"-New_widget function-var vertical_off = 50;
	tabs_shell[0][10].ReadImageString(Login_shell_logo, Widget.LEFT|Widget.CENTRE|Widget.SCALE);
	tabs_shell[0][11] = New_widget(w_shell[0], Widget.LABEL, 1, 148, 1, 65, Widget.BLACK, Widget.GERY, "");//	Biggest frame below logo page
	tabs_shell[0][11].Line(Widget.WHITE, 1, 1, 100, 1);
	tabs_shell[0][11].Line(Widget.BLACK, 100, 1, 100, 100);
	tabs_shell[0][11].Line(Widget.BLACK, 100, 100, 1, 100);
	tabs_shell[0][11].Line(Widget.WHITE, 1, 100, 1, 1);
	
					   
	tabs_shell[0][0] = New_widget(w_shell[0], Widget.BUTTON, 57, 93, 3, 13, Widget.BLACK, Widget.GERY, " Project Management", Widget.CENTRE);
	tabs_shell[0][0].onClick = PM_sub_win;
	tabs_shell[0][0].popupWindow = w_shell[2];
	
	tabs_shell[0][1] = New_widget(w_shell[0], Widget.BUTTON, 96, 144, 30, 38, Widget.BLACK, Widget.GERY, " Pedestrian Analysis", Widget.LEFT);
	tabs_shell[0][1].onClick = begin_ped_analysis;
	tabs_shell[0][2] = New_widget(w_shell[0], Widget.BUTTON, 96, 144, 18, 26, Widget.BLACK, Widget.GERY, " Vehicle Crashworthness", Widget.LEFT);
	tabs_shell[0][3] = New_widget(w_shell[0], Widget.BUTTON, 96, 144, 42, 50, Widget.BLACK, Widget.GERY, " Component Crashworthness", Widget.LEFT);
	
	//	logout button
	tabs_shell[0][6] = New_widget(w_shell[0], Widget.BUTTON, 96, 116, 54, 62, Widget.BLACK, Widget.WHITE, "Logout", Widget.CENTRE);
	tabs_shell[0][6].onClick = logout_shell;
	
	//	partition line
	tabs_shell[0][4] = New_widget(w_shell[0], Widget.LABEL, 75, 93, 15, 50, Widget.BLACK, Widget.GERY, '');
	tabs_shell[0][4].Line(Widget.BLACK, 1, 1, 1, 90);
	tabs_shell[0][4].Line(Widget.BLACK, 1, 20, 100, 20);
	tabs_shell[0][4].Line(Widget.BLACK, 1, 55, 100, 55);
	tabs_shell[0][4].Line(Widget.BLACK, 1, 90, 100, 90);
	
	//	Brief info section
	//var Brief_info_string = '';
	tabs_shell[0][5] = New_widget(w_shell[0], Widget.TEXTBOX, 14, 74, 15, 50, Widget.BLACK, Widget.GREY, '', Widget.LEFT);
	tabs_shell[0][5].hover = tabs_shell[0][5].text;
	//tabs_shell[0][5].Line(Widget.BLACK, 1, 1, 1, 25);
	//tabs_shell[0][5].Line(Widget.BLACK, 1, 1, 25, 1);
	//tabs_shell[0][5].Line(Widget.BLACK, 1, 100, 1, 75);
	//tabs_shell[0][5].Line(Widget.BLACK, 1, 100, 25, 100);
	
	//	Project Management button left click window
	tabs_shell[1] = new Array();
	
	tabs_shell[1][1] = New_widget(w_shell[1], Widget.LABEL, 3, 150, 3, 58, Widget.BLACK, Widget.GERY, "");//	Biggest frame
	tabs_shell[1][1].Line(Widget.WHITE, 1, 1, 100, 1);
	tabs_shell[1][1].Line(Widget.BLACK, 100, 1, 100, 100);
	tabs_shell[1][1].Line(Widget.BLACK, 100, 100, 1, 100);
	tabs_shell[1][1].Line(Widget.WHITE, 1, 100, 1, 1);

						New_widget(w_shell[1], Widget.LABEL, 10, 60, 1, 8, Widget.BLACK, Widget.GERY, 'Project Information :', Widget.CENTRE);
						New_widget(w_shell[1], Widget.LABEL, 6, 42, 16, 23, Widget.BLACK, Widget.GERY, 'Project Name :', Widget.LEFT);
	tabs_shell[1][11] = New_widget(w_shell[1], Widget.TEXTBOX, 42, 80, 16, 23, Widget.WHITE, Widget.DARKBLUE, 'new_project');
	tabs_shell[1][11].hover = tabs_shell[1][11].text;
	tabs_shell[1][11].onChange = new_proj_info_update;
						New_widget(w_shell[1], Widget.LABEL, 6, 42, 9, 16, Widget.BLACK, Widget.GERY, 'Project Path :', Widget.LEFT);
	tabs_shell[1][12] = New_widget(w_shell[1], Widget.TEXTBOX, 42, 130, 9, 16, Widget.WHITE, Widget.DARKBLUE, ''); 
	tabs_shell[1][12].hover = tabs_shell[1][12].text;
	tabs_shell[1][12].onChange = new_proj_info_update;
	tabs_shell[1][13] = New_widget(w_shell[1], Widget.BUTTON, 130, 140, 9, 16, Widget.WHITE, Widget.DARKGREEN, '...', Widget.CENTRE);
	tabs_shell[1][13].onClick = new_proj_path_choose;
						New_widget(w_shell[1], Widget.LABEL, 6, 42, 23, 30, Widget.BLACK, Widget.GERY, 'Project Owner :', Widget.LEFT);
	tabs_shell[1][14] = New_widget(w_shell[1], Widget.TEXTBOX, 42, 80, 23, 30, Widget.WHITE, Widget.DARKBLUE, '');
	tabs_shell[1][14].hover = tabs_shell[1][14].text;
	tabs_shell[1][14].onChange = new_proj_info_update;
	
						New_widget(w_shell[1], Widget.LABEL, 6, 42, 33, 40, Widget.BLACK, Widget.GERY, 'Base Model :', Widget.LEFT);
	tabs_shell[1][15] = New_widget(w_shell[1], Widget.TEXTBOX, 42, 130, 33, 40, Widget.WHITE, Widget.DARKBLUE, '');
	tabs_shell[1][15].hover = tabs_shell[1][15].text;
	tabs_shell[1][15].onChange = new_proj_info_update;
	tabs_shell[1][16] = New_widget(w_shell[1], Widget.BUTTON, 130, 140, 33, 40, Widget.WHITE, Widget.DARKGREEN, '...', Widget.CENTRE);
	tabs_shell[1][16].onClick = new_base_model_choose;
						New_widget(w_shell[1], Widget.LABEL, 6, 42, 47, 54, Widget.BLACK, Widget.GERY, 'Master Name :', Widget.LEFT);
	tabs_shell[1][17] = New_widget(w_shell[1], Widget.TEXTBOX, 42, 80, 47, 54, Widget.WHITE, Widget.DARKBLUE, 'Pedestrian_CaseXXX.key', Widget.LEFT);
	tabs_shell[1][17].hover = tabs_shell[1][17].text;
	tabs_shell[1][17].onChange = new_proj_info_update;
						New_widget(w_shell[1], Widget.LABEL, 6, 42, 40, 47, Widget.BLACK, Widget.GERY, 'Date :', Widget.LEFT);
	tabs_shell[1][18] = New_widget(w_shell[1], Widget.TEXTBOX, 42, 130, 40, 47, Widget.WHITE, Widget.DARKBLUE, Date());
	tabs_shell[1][18].hover = tabs_shell[1][18].text;
	tabs_shell[1][18].onChange = new_proj_info_update;
	
	tabs_shell[1][19] = New_widget(w_shell[1], Widget.BUTTON, 130, 145, 23, 30, Widget.WHITE, Widget.DARKGREEN, 'Create', Widget.CENTRE);
	tabs_shell[1][19].onClick = Project_create;
	tabs_shell[1][20] = New_widget(w_shell[1], Widget.BUTTON, 130, 145, 47, 54, Widget.WHITE, Widget.DARKGREEN, 'Apply', Widget.CENTRE);
	tabs_shell[1][20].onClick = Project_sub_create;
	
	for(var i=15;i<21;i++)
	{
		tabs_shell[1][i].active =false;
	}
	
	//	Project Management right click pop-up tabs items
	tabs_shell[2] = new Array();
	//	"User_Name" textbox right click pop-up tabs items
	tabs_shell[3] = new Array();
	
	
	
	/*
	//	here, just fake 5 records
	popupwin_buton_y = 1;
	for (var i=0;i<5;i++)
	{
		tabs_shell[2][i] = New_widget(w_shell[2], Widget.BUTTON, 1, 30, popupwin_buton_y,popupwin_buton_y + 7, Widget.BLACK, Widget.GERY, "Project " + i, Widget.LEFT);
		popupwin_buton_y = popupwin_buton_y + 7;
	}
	*/
	
	
	
	//
	//	initialise
	//
	
	//	check the temp_dir on local machine, if null, choose one;
	//	if there is a cookie file "cookie" in temp_dir(recording 
	//	history user account and project info used on this local machine), if no, create one;
var temp_dir = check_temp_dir();
	Message("The temp_dir is : "+temp_dir);
var cookie_file_name = "cookie";
var cookie_file = check_cookie_file(cookie_file_name,temp_dir);
	//	open cookie file to read existing user account
	//	array of user and project
	c_f = new File(cookie_file, File.READ);
	var line = c_f.ReadLongLine()
	var tmp_line; 
	var tmp_item; 
	var tmp_item_arr;
	var tmp_object;
	var cookie_object_arr = new Array();
	var new_cookie_object = new Object();
	//	read cookie file and record in the cookie_object_arr array
	while((line=c_f.ReadLongLine())!=undefined)
	{
		tmp_line = line.split(';');
		tmp_object = new Object();
		
		if (tmp_line.length >0)
		{
			for (var i=0;i<tmp_line.length-1;i++)
			{
				tmp_item = tmp_line[i];
				tmp_item_arr = tmp_item.split('=');
				
				switch (tmp_item_arr[0].trim())
				{
					case 'User_Name':
					{
						tmp_object.user = tmp_item_arr[1];
					}
					
					case 'Project_Name':
					{
						tmp_object.project_name = tmp_item_arr[1];
					}
					
					case 'Project_Path':
					{
						tmp_object.project_path = tmp_item_arr[1];
					}
				}
				tmp_object.user_selected = false;
				tmp_object.proj_selected = false;
			}
		}
		
		else continue; 
		cookie_object_arr[cookie_object_arr.length] = tmp_object;
		Message(tmp_object.user+' '+tmp_object.project_name+' '+tmp_object.project_path);
	}
	
	c_f.Close();
	//	cookie_object_arr[i] is the cookie object
	//	cookie_object_arr[i].user
	//	cookie_object_arr[i].project_name
	//	cookie_object_arr[i].project_path
	//	NOTE: NO ANY PASSWORD is recorded in cookie file or local machine, user must input again when re-login

	//	get the user_show_list array, for user name listing on the popup window
	var user_show_list = new Array();

	for (var j=0; j<cookie_object_arr.length;j++)
	{
		var tmp_name = cookie_object_arr[j].user.trim();
		var i=0; var same = false;
		
		while(i<user_show_list.length)
		{
			if (user_show_list[i]==tmp_name)
			{
				same = true;
				break;
			}
			else
			{
				same = false;
				i++;
			}				
		}
		
		if (!same) user_show_list[user_show_list.length] =  tmp_name;
	}
	
	//	the "User_Name:" textbox popup window, pop up by right click 
	i=0;j=0;
	for (i=0;i<user_show_list.length;i++)
	{
		tabs_shell[3][i] = new Widget(w_shell[3], Widget.BUTTON, 1, 50, 7*(1+i), 7*(2+i), user_show_list[i], Widget.CENTRE);
		tabs_shell[3][i].onClick = choose_user_from_list;
	}
	
	//	check the history record for proj
	//	Project Management right click pop-up window
	//	get the proj_show_list array, for proj name listing on the popup window
	//	check if the cookie_object_arr[i].user_selected = true, if yes, means the user name is user_selected in login window
	//	then the consequence project_name and project_path should be used
	var proj_show_list = new Array();
	
	//var proj_column = new Array();
	var Current_w_shell = 5;
	w_shell[5].Show(false);//	login window
	//shell_switch(0,w_shell);//	shell main entrance
	
	
	
function login_system()
{
	if (tabs_shell[5][0].text!=''&&tabs_shell[5][1].text!='')
	{
		for (var i=0;i<user.length;i++)
		{
			if(tabs_shell[5][0].text == user[i][0] && tabs_shell[5][1].text == user[i][1])
			{
				//write_user_history(user[i][0], user[i][0]);
				check_cookie_record();
				update_proj_window();
				shell_switch(0,w_shell);
				var _login;
				break;
			}
		}
		
		if (_login == undefined) Window.Warning("Warning", "User Name or Password invalid ...", Window.OK);
	}
	
	else
	{
		Window.Warning("Warning","User Name or Password is blank ...", Window.OK);
	}
}

function update_proj_window()
{
	//	update the proj_show_list
	for (var j=0;j<cookie_object_arr.length;j++)
	{
		if (cookie_object_arr[j].user_selected)
		{
			proj_show_list[proj_show_list.length] = cookie_object_arr[j];
		}
	}
	Message(proj_show_list);
	
	w_shell[2] = new PopupWindow();
	tabs_shell[2] = new Array();
	for (var i=0;i<proj_show_list.length;i++)
	{
		tabs_shell[2][i] = new Widget(w_shell[2], Widget.BUTTON, 1,30, 7*(i+1), 7*(i+2), proj_show_list[i].project_name, Widget.CENTRE);
		tabs_shell[2][i].onClick = choose_proj_from_list; 
		tabs_shell[2][i].hover = proj_show_list[i].project_name + ' ' + proj_show_list[i].project_path;
	}
	tabs_shell[0][0].popupWindow = w_shell[2];
	w_shell[0].Redraw();
}

function check_cookie_record()
{
	//	check if the same record already exist in the user_show_list array, if not, new_cookie_object.user = name;
	
	var existed = false;
	for (var i=0;i<user_show_list.length;i++)
	{
		if (tabs_shell[5][0].text.trim() == user_show_list[i])
		{
			existed = true;
			break;
		}
		else continue;
	}
	
	if (existed == false)
	{
		new_cookie_object.user = tabs_shell[5][0].text.trim();
		Message('Will add new user : '+ new_cookie_object.user +' in LOCAL record ...');
	}
}

function logout_shell()
{
	tabs_shell[5][1].text = '';
	//	initialise the cookie_object_arr[i].user_selected = false
	for (var i=0;i<cookie_object_arr.length; i++)
	{
		cookie_object_arr[i].user_selected = false;
		cookie_object_arr[i].proj_selected = false;
	}
	shell_switch(5, w_shell);
}
/*
function write_user_history(name, password)
{
	for (var j=0;j<user_history.length;j++)
	{
		if (user_history[j][0])
	}
}
*/

function shell_switch(n, w_shell)
{
	for (var i=0;i<w_shell.length;i++)
	{
		if (w_shell[i])
		{
			w_shell[i].Hide();
		}
		else continue;
	}
	
	Current_w_shell = n;
	w_shell[n].Show(false);
	
}

function login_help_btn()
{
	//	please input the administrator name to replace "Boss" and his/her email address
	var answer = Window.Information("Login Help", "1. User Name and Password are both Caps sensitive\n2. If you need to add an account, please contact the Platform Administrator :\n   Name: " + " IT Boss\n   E-mail: " + " xxx@faw.com.cn\n", Window.OK);
}

function check_temp_dir()
{
	var temp = GetPreferenceValue('All','temp_dir');
	
	while(!File.IsDirectory(temp))
	{
		var answ = Window.Warning("Warning", "The temp_dir has not been set in oa_pref !\nClick OK to choose a path to set the temp directory for Primer.\nMake sure you have read&write authority in this dir.", Window.OK);
		if (answ == Window.OK)
		{
			var dir = Window.GetDirectory();
			if (File.IsDirectory(dir))
			{
				var ierr = SetPreferenceValue('All', "temp_dir", dir, true);
				if (ierr) Window.Warning("Warning", "The oa_preference file is locked or OA_HOME is not defined in environment variable");
				temp = GetPreferenceValue('All','temp_dir');
			}
		}
		
		else continue;
	}
	
	return temp;
}

function check_cookie_file(fname, c_dir)
{
	var tmp_fname = c_dir + '\\' + fname;
	while (!File.IsFile(tmp_fname))
	{
		var answ = Window.Warning("Warning", "The \'"+ fname +"\' file is not in temp_dir folder : \'" + c_dir +"\'\n" + "Primer will create one \'"+ fname +"\' file there first");
		if (answ == Window.OK)
		{
			var tmp_f = new File(tmp_fname, File.WRITE);
			tmp_f.Close();
		}
		else continue;
	}
	
	//	make sure file is readable
	if (!File.IsReadable(tmp_fname))
	{
		if (!File.Delete(tmp_fname)) 
		{
			Window.Warning("Warning", "The cookie file is not readable, Primer can't delete it.\nPlease make sure you have the read&write authority in temp_dir folder");
			Exit();
		}
	}
	
	if (!File.IsWritable(tmp_fname))
	{
		if (!File.Delete(tmp_fname)) 
		{
			Window.Warning("Warning", "The cookie file is not writable, Primer can't delete it.\nPlease make sure you have the read&write authority in temp_dir folder");
			Exit();
		}
	}

	return tmp_fname;
}
	
function choose_user_from_list()
{
	//this.background = Widget.BLUE;
	var slct_user_name = this.text;
	for (var i=0; i<cookie_object_arr.length;i++)
	{
		if (slct_user_name == cookie_object_arr[i].user.trim())
		{
			cookie_object_arr[i].user_selected = true;
			tabs_shell[5][0].text = slct_user_name;
		}
		
		else cookie_object_arr[i].user_selected = false;
	}
	
	
}
	
function choose_proj_from_list()
{
	//this.background = Widget.BLUE;
var index_tmp;
var tmp_proj_f_name;

	Shell_Ped_bttn_access = 0;
	tabs_shell[0][1].foreground = Widget.BLACK;
	tabs_shell[0][1].background = Widget.GREY;
	proj_flag = false;

	index_tmp = tabs_shell[2].indexOf(this);
	
	for (var i=0;i<proj_show_list.length;i++)
	{
		proj_show_list[i].proj_selected = false;
	}
	
	proj_show_list[index_tmp].proj_selected = true;
	
	tabs_shell[0][0].text = 'Project : ' + proj_show_list[index_tmp].project_name;
	tabs_shell[0][0].hover = tabs_shell[0][0].text + ' Path : ' + proj_show_list[index_tmp].project_path;
	
	//	find the *.proj file by looking for proj_show_list[i].path + proj_show_list[i].name 
	tmp_proj_f_name = proj_show_list[index_tmp].project_path + '\\' + proj_show_list[index_tmp].project_name + "\\00_Info\\" + proj_show_list[index_tmp].project_name + ".proj";
	
	if (File.IsFile(tmp_proj_f_name))
	{
		var tmp_proj_f = new File(tmp_proj_f_name, File.READ)
		if (tmp_proj_f!=undefined)
		{
			//
			Project_cur = Object();
			Project_cur.name	= '';
			Project_cur.owner	= '';	
			Project_cur.path	= '';
			Project_cur.sub		= new Array();			
			//
			Project_tmp.name = '';
			Project_tmp.path = '';
			Project_tmp.deck = '';
			Project_tmp.owner ='';  
			Project_tmp.date = '';
	//		Project_tmp.netpath_1 = '';
	//		Project_tmp.netpath_2 = '';
			Project_tmp.keyword_name = '';	
			Project_tmp.comment = new Array();
			Project_tmp.identify = '';
			
			var line = tmp_proj_f.ReadLongLine();
			var tmp;
			while((line = tmp_proj_f.ReadLongLine())!=undefined)
			{
				tmp = line.split('*');
				switch (tmp[1].trim())
				{
					case 'Project_Name':
					{
						//Message('Name');
						Project_cur.name = tmp[2].trim();
						Project_tmp.name = Project_cur.name;
						break;
					}
					
					case 'Project_Path':
					{
						Project_cur.path = tmp[2].trim();
						Project_tmp.path = Project_cur.path;
						break;
					}
					
					case 'Project_Owner':
					{
						Project_cur.owner = tmp[2].trim();
						Project_tmp.owner = Project_cur.owner;
						break;
					}
					
					case 'Project_Old_Deck':
					{
						Project_cur.deck = tmp[2].trim();
						Project_tmp.deck = Project_cur.deck;
						break;
					}
					
					case 'Project_Master_keyword_name':
					{
						Project_cur.keyword_name = tmp[2].trim();
						Project_tmp.keyword_name = Project_cur.keyword_name;
						break;	
					}
				}
			}
		//	update the Proj brief block content
		//proj_brief_block(Project_cur);
			
		//	update the "Pedestrian" button status
		proj_flag = true;
		Shell_Ped_bttn_access = 1;
		tabs_shell[0][1].foreground = Widget.WHITE;
		tabs_shell[0][1].background = Widget.DARKGREEN;
				
		}
		
		else Window.Warning('The *.Proj file is not readable, pls check the authority');
		
	}
	
	else Window.Warning("Can't find this project record file in remote location ...");
	proj_brief_block(Project_cur);
	w_shell[0].Redraw();
}

function proj_brief_block(proj)
{
	var string = '';
	
	if (proj!=undefined)
	{
		string = '';
		string = string + "Project Name : " + proj.name + "\n";
		string = string + "Project Path : " + proj.path + "\n";
		string = string + "Project Owner : " + proj.owner + "\n";
		string = string + "Project Baseline model : " + proj.deck + "\n";
		string = string + "Project Master : " + proj.keyword_name + "\n";
		
		tabs_shell[0][5].Show();
	}
	
	else 
	{
		tabs_shell[0][5].text = '';
		tabs_shell[0][5].Show();
	}
	
	tabs_shell[0][5].text = string;
}

function new_proj_path_choose()
{
	Project_tmp.path = Window.GetDirectory();
	if (Project_tmp.path != undefined)
	{
		tabs_shell[1][12].text = Project_tmp.path;
		
	}
	
	else Window.Warning("Warning", "Path is not a correct directory, please choose again ...");
	
	new_proj_info_update();
}
	
function new_base_model_choose()
{
	if (Model.Total())
	{
		var mes = Window.Information("Select a model deck", "Select a existing model?", Window.YES|Window.NO);
		if (mes == Window.YES)
		{
			m_p = Model.Select("Please select a model for pedestrian mark-up");
			if(m_p)
			{
				Project_tmp.deck = m_p.path;
				tabs_shell[1][15].text = Project_tmp.deck +'\\'+m_p.filename;
				Message(m_p.database.length);
			}
		}
		
		else
		{
			Project_tmp.deck = Window.GetFile(".key");
			if (Project_tmp.deck!=undefined)
			{
				tabs_shell[1][15].text = Project_tmp.deck;
			}
		}
		
	}
	
	else
	{
		Project_tmp.deck = Window.GetFile(".key");
		if(Project_tmp.deck!=undefined)
		{
			tabs_shell[1][15].text = Project_tmp.deck;
		}
	}
	
	new_proj_info_update();
	
}

function new_proj_info_update()
{
	
	var result_c =1;var result_a =1;
	//	Project Name textbox
	if (tabs_shell[1][11].text.trim() !='')
	{
		Project_tmp.name = tabs_shell[1][11].text.trim();
		tabs_shell[1][11].background = Widget.DARKBLUE;
	}
	else
	{
		result_c =0;
		tabs_shell[1][11].background = Widget.DARKRED;
	}
	//	Project Path textbox
	if (tabs_shell[1][12].text.trim()!='' && File.IsDirectory(tabs_shell[1][12].text.trim()))
	{
		Project_tmp.path = tabs_shell[1][12].text.trim();
		tabs_shell[1][12].background = Widget.DARKBLUE;
	}
	else
	{
		result_c = 0;
		tabs_shell[1][12].background = Widget.DARKRED;
	}
	//	Project owner textbox
	if (tabs_shell[1][14].text.trim() !='')
	{
		Project_tmp.owner = tabs_shell[1][14].text.trim();
		tabs_shell[1][14].background = Widget.DARKBLUE;
	}
	else
	{
		result_c =0;
		tabs_shell[1][14].background = Widget.DARKRED;
	}
	//	Base Model textbox
	if (tabs_shell[1][15].text.trim() !='' && File.IsFile(tabs_shell[1][15].text.trim()) && File.IsReadable(tabs_shell[1][15].text.trim()))
	{
		Project_tmp.deck = tabs_shell[1][15].text.trim();
		tabs_shell[1][15].background = Widget.DARKBLUE;
	}
	else
	{
		result_a = 0;
		tabs_shell[1][15].background = Widget.DARKRED;
	}
	//	Master Name textbox
	if (tabs_shell[1][17].text.trim() !='' )
	{
		tabs_shell[1][17].text = tabs_shell[1][17].text.trim();
		if(tabs_shell[1][17].text.slice(tabs_shell[1][17].text.length-4)!='.key' && tabs_shell[1][17].text.slice(tabs_shell[1][17].text.length-2)!='.k' )
		{
			tabs_shell[1][17].text = tabs_shell[1][17].text + '.key';
		}
		
		Project_tmp.keyword_name = tabs_shell[1][17].text;
		tabs_shell[1][17].background = Widget.DARKBLUE;
	}
	else
	{
		result = 0;
		tabs_shell[1][17].background = Widget.DARKRED;
	}
	
	Project_tmp.date = tabs_shell[1][18].text.trim();
	
	if (result_c && result_a) tabs_shell[1][20].active = true;
	else tabs_shell[1][20].active = false;
	
	if(result_c && !tabs_shell[1][20].active) tabs_shell[1][19].active = true;
	else tabs_shell[1][19].active = false;
	
}

function Project_create()
{
	Message('Create a new project ...');
	//	make directory
	MakeDir(Project_tmp.path+'\\'+Project_tmp.name);
	MakeDir(Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info');
	MakeDir(Project_tmp.path+'\\'+Project_tmp.name+'\\01_Model');
	MakeDir(Project_tmp.path+'\\'+Project_tmp.name+'\\02_Markup');
	MakeDir(Project_tmp.path+'\\'+Project_tmp.name+'\\03_Analysis');
	MakeDir(Project_tmp.path+'\\'+Project_tmp.name+'\\04_Report');
	
	//	write project info
	var fo = new File(Project_tmp.path +'\\'+ Project_tmp.name+'\\00_Info\\'+Project_tmp.name+'.proj', File.WRITE);
	fo.Writeln('#Project information file');
	fo.Writeln('*Project_Name* ', Project_tmp.name);
	fo.Writeln('*Project_Path* ', Project_tmp.path);
	fo.Writeln('*Project_Owner* ', Project_tmp.owner);
	
	fo.Close();
	
	//	update the widget status
	for (var j=15;j<21;j++)
	{
		tabs_shell[1][j].active = true;
	}
	
	new_proj_info_update();
	
	for (var i=11;i<15;i++)
	{
		tabs_shell[1][i].active = false;
	}
	tabs_shell[1][19].active = false;
	
}

/*
function MakeDir(path)
{
	if (!File.IsDirectory(path))
	{
		try
		{
			if (!File.Mkdir(path)) throw path;
		}
		
		catch(err)
		{
			Window.Error('', "Could not create the essential folder " + err);
		} 
	}
}
*/

function Project_sub_create()
{
	if(File.IsFile(Project_tmp.deck))
	{	
		mes = Window.Information("read in model", "Choose [Yes] if you just want a quick scan", Window.YES|Window.NO);

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

		Project_cur.deck = Project_tmp.deck;
		Project_cur.keyword_name = Project_tmp.keyword_name;

		// write project info 
		var fo = new File(Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\'+Project_tmp.name+'.proj', File.APPEND);
		fo.Writeln('*######*');
				
		fo.Writeln('*Project_Old_Deck* ', Project_tmp.deck);

		fo.Writeln('*Project_Master_keyword_name* ', Project_tmp.keyword_name);	

		fo.Writeln('*Project_Date* ', Date());

		fo.Writeln('*Project_Stage_End*');	
		fo.Close();	
		
		//operation record for convert 
		var fo = new File(Project_tmp.path+'\\'+Project_tmp.name+'\\00_Info\\'+Project_tmp.name+'.oper', File.WRITE);
		fo.Writeln('*Convert tab operation*');
		fo.Close();
	
		Shell_Ped_bttn_access = 1;
		w_shell[1].Hide();
		tabs_shell[0][1].foreground = Widget.WHITE;
		tabs_shell[0][1].background = Widget.DARKGREEN;
	
	}
	else
	{
		Shell_Ped_bttn_access = 0;
		Window.Warning('Warning', "please check the input deck again", Window.OK);
	}					

}

function begin_ped_analysis()
{
	if (Shell_Ped_bttn_access)
	{
		//	initialize the model
		map_clean();
		Include_Old = Include.GetAll(m_p);
		Include_old_get();
		Up_Down_page();
		//
		new_proj_info_update();
		//
		/*
		tabs_p[4][1].active=true;
		tabs_p[4][2].active=true;	
		tabs_p[4][3].active=true;
		tabs_p[4][5].active=true;	
		tabs_p[4][0].active=true;	
		*/
		
		//
	    tabs_p[0][211].background = Widget.DARKRED;
	    tabs_p[0][212].background = Widget.DARKRED;
	    tabs_p[0][14].foreground = Widget.DARKRED;
	    tabs_p[0][67].foreground = Widget.DARKRED;      
	    //
	    if(m_p) Model_show_only(m_p);
	    //
	    proj_flag = true;	
	    
	    //tabs_p[4][6].active = false; 
		
		//	hide shell window
		w_shell[0].Hide();
		
		dosth1();
	}
	else
	{
		Window.Warning('', "Project information is not completed, can't start Pedestrian Analysis\nPlease check set info again ...");
	}
}

function PM_sub_win()
{
	
	w_shell[1].Show(false);
	w_shell[1].Hide();
}
	
	

	
	
	
