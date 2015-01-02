var client;

exports.refresh = refresh;

function refresh(forumId){
    var url = Alloy.Globals.apiHost + 'api_get_forum.php?id=' + forumId;
    console.log('forum detail: ' + url);
    xhr = Ti.Network.createHTTPClient({
        onload: onLoad,
        onerror: onError
    });
    xhr.open("GET", url);
    xhr.send();
}

function onLoad(e){
    //alert(this.responseText);
    var d = JSON.parse(this.responseText);
    var forumItem;
	Alloy.Globals.forumDetail = [];
		
    for(var i=0;i<d.length;i++){
    	var v = d[i];
    	for(var m=0;m<v.length;m++){
    		var k = v[m];
    		if(k.id){
	    		forumItem = {
	    			fId: k.id,
	    			fName: k.name, 
	    			fDetail: k.detail,
	    			fDate: k.date,
	    			fCountView: k.count_view,
	    			fCountReply: k.count_reply,
	    			mId: k.create_by_member_id,
	    			mName: k.create_by_member_name
	    		};
	    		console.log('forumDetail: ' + JSON.stringify(forumItem));
				Alloy.Globals.forumDetail.push(forumItem);
    		}
    	}
    }
    Ti.App.fireEvent('forumDetailLoadCompleted');
}

function onError(e){
    alert("Load Error: " + e.error);
}