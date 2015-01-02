var winman = require('windowManager');
var args = arguments[0] || {};
var thumbUrl = Alloy.Globals.apiHost;

var nId = args.nId;
var nTitle = args.nTitle;
var nDetail = args.nDetail;
var nDate = args.nDate;
var nPhoto = args.nPhoto;
var nThumb = args.nThumb;

/*var screenWidth = Ti.Platform.displayCaps.platformWidth;
var screenHeight = Ti.Platform.displayCaps.platformHeight;
var densityFactor = Ti.Platform.displayCaps.logicalDensityFactor;*/


$.newsImg.image = thumbUrl + nThumb;
$.newsTitle.text = nTitle;

var dotDate = nDate;
var find = '-';
var re = new RegExp(find, 'g');
dotDate = dotDate.replace(re, '.');

$.newsDate.text = dotDate;


$.rowView.nId = nId;
$.rowView.nTitle = nTitle;
$.rowView.nDetail = nDetail;
$.rowView.nDate = nDate;
$.rowView.nPhoto = nPhoto;
$.rowView.nThumb = nThumb;
	

$.rowView.addEventListener("click", function(e) {
	console.log('e.rowData: ' + JSON.stringify(e.rowData));
	console.log('e.row: ' + JSON.stringify(e.row));
	console.log('e: ' + JSON.stringify(e));
	var win = Alloy.createController('screen/newsDetail',{'newsId':e.row.nId}).getView();
    winman.open(win);
});

