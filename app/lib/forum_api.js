var client;

exports.refresh = refresh;
exports.reload = reload;

function refresh(page){
    var url = Alloy.Globals.apiHost + 'api_get_forum.php' + '?recordperpage=' + 8 + '&page=' + page;
    console.log(url);
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
	Alloy.Globals.forumList = [];
		
    for(var i=0;i<d.length;i++){
    	var v = d[i];
    	//alert('1' + JSON.stringify(v));
    	for(var m=0;m<v.length;m++){
    		var k = v[m];
    		//alert('2' + JSON.stringify(k));
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
				Alloy.Globals.forumList.push(forumItem);
    		}
    	}
    }
    Ti.App.fireEvent('forumLoadCompleted');
}

function onError(e){
    alert("Load Error: " + e.error);
}

function reload(page){
    var url = Alloy.Globals.apiHost + Alloy.Globals.apiNewsUrl + '?recordperpage=' + 8 + '&page=' + page;
    console.log('reload'+url);
    xhr = Ti.Network.createHTTPClient({
        onload: onLoad,
        onerror: onError
    });
    xhr.open("GET", url);
    xhr.send();
}

function onReload(e){
    //alert(this.responseText);
    var d = JSON.parse(this.responseText);
    var forumItem;
	Alloy.Globals.forumList = [];
		
    for(var i=0;i<d.length;i++){
    	var v = d[i];
    	//alert('1' + JSON.stringify(v));
    	for(var m=0;m<v.length;m++){
    		var k = v[m];
    		//alert('2' + JSON.stringify(k));
    		if(k.id){
	    		forumItem = {
	    			nId: k.id,
	    			nTitle: k.name, 
	    			nDetail: k.detail,
	    			nDate: k.date,
	    			nPhoto: k.photo_list,
	    			nThumb: k.thumb_list
	    		};
	    		console.log('Reload forumItem: ' + JSON.stringify(forumItem));
				Alloy.Globals.forumList.push(forumItem);
    		}
    	}
    }
    Ti.App.fireEvent('forumReloadCompleted');
}
