var NappDrawerModule = require('dk.napp.drawer');
var winman = require('windowManager');


var defaultScreen = "Window 1";
var currentView = [];
var lastViewTitleId = '';
var menu = [
            'Window 1',
            'Window 2',
            'News',
            'News List',
            'About',
            'Calendar',
            'Member',
            'Forum'
        ];


function onMenuClick(e){
    if (typeof(e.rowData) != 'undefined') {
        var titleid = e.rowData.titleid;
        
        $.drawer.closeLeftWindow();
        switchView(titleid);
    }
}

Ti.App.addEventListener('switchWindow', switchWindow);
function switchWindow(e){
    $.drawer.closeLeftWindow();
    
    switchView(e.titleid, e);
}

function switchView(titleid, param){
    
    lockDrawer({lock: false});

    showLoading(true);
    
    if (lastViewTitleId !== titleid){
        //showLoading(true);   
        
        if (typeof(currentView[lastViewTitleId]) !== 'undefined'){
            currentView[lastViewTitleId].cleanUp();
        }
        if (typeof(currentView[titleid]) !== 'undefined'){
            currentView[titleid].init(param);
        }     
        Ti.API.info('Switch new view: ' + titleid);
    } 
        
    
    switch(titleid){
    case 'Window 1':
        if (typeof(currentView[titleid]) === 'undefined')
            currentView[titleid] = Alloy.createController('screen/window1');
        break;
    case 'Window 2':
        if (typeof(currentView[titleid]) === 'undefined')
            currentView[titleid] = Alloy.createController('screen/window2');
        break;
    case 'News':
        if (typeof(currentView[titleid]) === 'undefined')
            currentView[titleid] = Alloy.createController('screen/news');
        break;
    case 'News List':
    	if (typeof(currentView[titleid]) === 'undefined')
            currentView[titleid] = Alloy.createController('screen/newsList');
        break;
    case 'About':
        if (typeof(currentView[titleid]) === 'undefined')
            currentView[titleid] = Alloy.createController('screen/about');
        break;
    case 'Calendar':
        if (typeof(currentView[titleid]) === 'undefined')
            currentView[titleid] = Alloy.createController('screen/calendar');
        break;
   	case 'Member':
        if (typeof(currentView[titleid]) === 'undefined')
            currentView[titleid] = Alloy.createController('screen/member');
        break;
    case 'Forum':
    	if (typeof(currentView[titleid]) === 'undefined')
            currentView[titleid] = Alloy.createController('screen/forum');
        break;
    default:
        
        break;
    }

    if (lastViewTitleId !== titleid){
        if (!!currentView[lastViewTitleId]) {
            currentView[lastViewTitleId].off('toggleLeftWindow', toggleLeftWindow);
        }
        if (!!currentView[titleid]){
            
            currentView[titleid].on('toggleLeftWindow', toggleLeftWindow);
            if (OS_ANDROID){
                $.drawer.setCenterWindow(currentView[titleid].getView());
                actionBar.title = titleid;
                //alert('Android');
            } else {
                var navWin = Ti.UI.iOS.createNavigationWindow({
                    //id:
                    //role:'centerWindow',
                    window:currentView[titleid].getView(),
                    //window:w1,

                });
                Alloy.Globals.navgroup = navWin;
                $.drawer.setCenterWindow(navWin);
                //Alloy.Globals.navgroup.openWindow(currentView[titleid].getView());
                //$.centerWindow.openWindow(currentView[titleid].getView());
                
            }
        } else {
            alert(L(titleid)+' is not defined');
        }
    };
    

    lastViewTitleId = titleid;
    showLoading(false);
}

//Ti.App.addEventListener('toggleLeftWindow', toggleLeftWindow);
function toggleLeftWindow(e){
    $.drawer.toggleLeftWindow();
}

function showLoading(value){
    return;

}

Ti.App.addEventListener('lockDrawer', lockDrawer);
function lockDrawer(e){
    Alloy.Globals.drawerLocked = e.lock;
    if (e.lock) {
        $.drawer.setOpenDrawerGestureMode(NappDrawerModule.OPEN_MODE_NONE);
    } else {
        $.drawer.setOpenDrawerGestureMode((OS_ANDROID ? NappDrawerModule.OPEN_MODE_MARGIN : NappDrawerModule.OPEN_MODE_PANNING_NAVBAR));
    }
}

var isMenuOpen = false;
$.drawer.addEventListener('windowDidOpen', function(e){
    isMenuOpen = true;
});

$.drawer.addEventListener('windowDidClose', function(e){
    isMenuOpen = false;
});

// Setup Menu
var data = [];
var menuRow;
for (var i=0, l=menu.length; i<l; i++){
	menuRowContainer = Ti.UI.createTableViewRow({
        titleid:menu[i],
        height:48
    });
    menuRow = Ti.UI.createView({
        titleid:menu[i],
        height:48,
        layout:'horizontal',
        horizontalWrap:false
    });
    var imageView = Ti.UI.createImageView({
        textid:menu[i],
        image:'/images/icons/'+menu[i]+'.png',
        width:25,
        height:25,
        left:4,
        right:4
    });
    menuRow.add(imageView);
    var label = Ti.UI.createLabel({
        text:menu[i],
        //textid:menu[i],
        color:'#614718',
        left:4,
        font:{
            fontSize:18
        },
        textAlign:'left'
    });
    menuRow.add(label);
    var separator = Ti.UI.createView({
        width:Ti.UI.FILL,
        height:'1px',
        backgroundColor:'#8c6239',
        bottom:0
    });
    menuRowContainer.add(menuRow);
    menuRowContainer.add(separator);
    data.push(menuRowContainer);
}
$.menuMain.setData(data);


// Set the top icon to toggle the drawer
if (OS_ANDROID) {
    var actionBar;
    $.drawer.on('open', onDrawerOpen);
    function onDrawerOpen(e){
        $.drawer.off('open', onDrawerOpen);
        
        if (this.getActivity()) {
            actionBar = this.getActivity().getActionBar();
            actionBar.logo = 'images/menu_button.png';
            
            if (actionBar){
                actionBar.setOnHomeIconItemSelected(function(){
                    toggleLeftWindow();
                });
            }
            
            switchView(defaultScreen);
        }
    }
}


// Load the default screen
if (OS_IOS) {
    switchView(defaultScreen);
}
$.drawer.open();


//$.index.open();




