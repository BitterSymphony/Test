var args = arguments[0] || {};
var forum_api = require('forum_api');
var apiHost = Alloy.Globals.apiHost;
var winman = require('windowManager');
var html2as = require('nl.fokkezb.html2as');
var page = 1;
var title = 'Forum';
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



Ti.App.addEventListener('forumLoadCompleted',loadEvents);

function loadEvents() {
	var forumList = Alloy.Globals.forumList;
	page ++;
    var eventData = [];
	
	for (var i=0, l=forumList.length; i<l; i++) {
		var row = Alloy.createController('screen/forumRow', {
			fId: forumList[i].fId,
			fName: forumList[i].fName, 
			fDate: forumList[i].fDate,
			fCountView: forumList[i].fCountView,
			fCountReply: forumList[i].fCountReply,
			mId: forumList[i].mId,
			mName:forumList[i].mName
		});
		
		$.forumList.appendRow(row.getView());
	}

}
  
forum_api.refresh(page);

$.is.init($.forumList);

function myLoader(e) {
	
	forum_api.refresh(page);
	page ++;
	var forumList = Alloy.Globals.forumList;
	Ti.App.addEventListener('forumReloadCompleted',function(e){
		for (var i=0, l=forumList.length; i<l; i++) {
			var row = Alloy.createController('screen/forumRow', {
				fId: forumList[i].fId,
				fName: forumList[i].fName, 
				fDate: forumList[i].fDate,
				fCountView: forumList[i].fCountView,
				fCountReply: forumList[i].fCountReply,
				mId: forumList[i].mId,
				mName:forumList[i].mName
			});
			
			$.forumList.appendRow(row.getView());
		}
	});
}

$.rightTab.addEventListener("click",function(e){
	$.leftTab.backgroundImage = "null";
	$.rightTab.backgroundImage = "/images/tabBox.png";
	$.leftTabTxt.color = "#58595b";
	$.rightTabTxt.color = "#6c207f";
	console.log('rightTab clicked');
	if (Ti.Platform.name === 'iPhone OS'){
		html2as(
		    '<font size="17" face="AmericanTypewriter">This is <b>Right Tab</b> <a href="http://tidev.io">World</a></font>',
		    function(err, as) {
		
		        if (err) {
		            console.error(err);
		
		        } else {
		
		            var label = Titanium.UI.createLabel({
		                attributedString: as
		            });
		
		            label.addEventListener('link', function(e) {
		                alert('Longtap on link to: ' + e.url);
		            });
		
		            $.contentScroll.add(label);
		        }
		    }
		);
	}
	
	if (Ti.Platform.name === 'android'){
		$.contentTxt.html = "<p>This is rightTab Content</p><p>This is rightTab Content</p><p>This is rightTab Content</p><p>This is rightTab Content</p><p>This is rightTab Content</p><p>This is rightTab Content</p>";
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
		html2as(
		    '<font size="17" face="AmericanTypewriter">This is <b>Left Tab</b> <a href="http://tidev.io">World</a></font>',
		    function(err, as) {
		
		        if (err) {
		            console.error(err);
		
		        } else {
		
		            var label = Titanium.UI.createLabel({
		                attributedString: as
		            });
		
		            label.addEventListener('link', function(e) {
		                alert('Longtap on link to: ' + e.url);
		            });
		
		            $.contentScroll.add(label);
		        }
		    }
		);
	}
	
	if (Ti.Platform.name === 'android'){
		
		$.contentTxt.html = "<p>This is leftTab Content</p><p>This is leftTab Content</p><p>This is leftTab Content</p><p>This is leftTab Content</p>";
		
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

