var winman = require('windowManager');
var args = arguments[0] || {};
var thumbUrl = Alloy.Globals.apiHost;
var wordLimit = 20;


var fId = args.fId;
var fName = args.fName;
var fDate = args.fDate;
var fCountView = args.fCountView;
var fCountReply = args.fCountReply;
var mId = args.mId;
var mName = args.mName;

var finalText = "";
if(fName.length > wordLimit){
	for(i=0;i<wordLimit;i++){
		finalText = finalText + fName[i];
	}
	finalText = finalText + '...';
}else{
	finalText = fName;
}

$.fName.text = finalText;
$.fDate.text = '發表日期: ' + fDate;
$.fCountView.text = '查看: ' + fCountView;
$.fCountReply.text = '回覆: ' + fCountReply;
$.mName.text = mName;
//$.mPic.image = thumbUrl + mId + '.jpg';


$.rowView.fId = fId;
$.rowView.fName = fName;
$.rowView.fDate = fDate;
$.rowView.fCountView = fCountView;
$.rowView.fCountReply = fCountReply;
$.rowView.mId = mId;
$.rowView.mName = mName;
	

$.rowView.addEventListener("click", function(e) {
	console.log('e.row.fId: ' + e.row.fId);
	var win = Alloy.createController('screen/forumDetail',{'forumId':e.row.fId}).getView();
    winman.open(win);
});

