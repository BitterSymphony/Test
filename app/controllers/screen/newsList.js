var args = arguments[0] || {};
var news_api = require('news_api');
var apiHost = Alloy.Globals.apiHost;
var UI = require('xp.ui');
var winman = require('windowManager');
var page = 1;
var title = 'News';
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



Ti.App.addEventListener('newsLoadCompleted',loadEvents);

function loadEvents() {
	var newsList = Alloy.Globals.newsList;
	page ++;
    var eventData = [];
	
	for (var i=0, l=newsList.length; i<l; i++) {
		var row = Alloy.createController('screen/newsRow', {
			nId: newsList[i].nId,
			nTitle: newsList[i].nTitle, 
			nDetail: newsList[i].nDetail,
			nDate: newsList[i].nDate,
			nPhoto: newsList[i].nPhoto,
			nThumb: newsList[i].nThumb
		});
		
		$.newsList.appendRow(row.getView());
	}

}
  
news_api.refresh(page);

$.is.init($.newsList);

function myLoader(e) {
	
	news_api.refresh(page);
	page ++;
	var newsList = Alloy.Globals.newsList;
	Ti.App.addEventListener('newsReloadCompleted',function(e){
		for (var i=0, l=newsList.length; i<l; i++) {
			var row = Alloy.createController('screen/newsRow', {
				nId: newsList[i].nId,
				nTitle: newsList[i].nTitle, 
				nDetail: newsList[i].nDetail,
				nDate: newsList[i].nDate,
				nPhoto: newsList[i].nPhoto,
				nThumb: newsList[i].nThumb
			});
			
			$.newsList.appendRow(row.getView());
		}
	});
}



/*$.newsList.addEventListener("itemclick", eventsListClick);

function eventsListClick(e){
	console.log(JSON.stringify(e));
	var win = Alloy.createController('screen/newsDetail',{'newsId':newsId}).getView();
    winman.open(win);
};*/

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

