var args = arguments[0] || {};
//var news_api = require('news_api');
var apiHost = Alloy.Globals.apiHost;
var UI = require('xp.ui');
var winman = require('windowManager');

var title = 'Calendar';
function onOpen(e) {
    
    if (OS_ANDROID) {
        var actionBar = e.source.activity.actionBar;
        
        actionBar.displayHomeAsUp = true;
        actionBar.onHomeIconItemSelected = function() {
            e.source.close();
        };
        
        e.source.activity.invalidateOptionsMenu();
        actionBar.title = title;
    } else {
        $.win.title = title;
        $.win.top = (Alloy.Globals.iOS7 ? 64 : 0);
    }
}



Ti.App.addEventListener('aboutLoadCompleted',loadAbout);

function loadAbout() {
	
	var newsList = Alloy.Globals.newsList;
	
    var eventData = [];

    for (var i = 0; i < newsList.length; i++) {
    	
    	var dotDate = newsList[i].nDate;
    	var find = '-';
		var re = new RegExp(find, 'g');
		dotDate = dotDate.replace(re, '.');
    }
    var section = Ti.UI.createListSection();
    section.setItems(eventData);
    $.eventsList.sections = [section];
}
  
//news_api.refresh();




$.rightTab.addEventListener("click",function(e){
	$.leftTab.backgroundImage = "null";
	$.rightTab.backgroundImage = "/images/tabBox.png";
	$.leftTabTxt.color = "#58595b";
	$.rightTabTxt.color = "#6c207f";
	console.log('rightTab clicked');
	if (Ti.Platform.name === 'iPhone OS'){
		
	}
	
	if (Ti.Platform.name === 'android'){
	}
});

$.leftTab.addEventListener("click",function(e){
	$.rightTab.backgroundImage = "null";	
	$.leftTab.backgroundImage = "/images/tabBox.png";
	$.rightTabTxt.color = "#58595b";
	$.leftTabTxt.color = "#6c207f";
	//
	console.log('leftTab clicked');
	if (Ti.Platform.name === 'iPhone OS'){
		
	}
	
	if (Ti.Platform.name === 'android'){
		
	}
	
});



function onMenuButtonClick(e){
    $.trigger('toggleLeftWindow');
}

function init(e){
    
}

function cleanUp(e){
    
}

exports.init = init;
exports.cleanUp = cleanUp;

// run init() when first time created
init();

