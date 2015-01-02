function refresh(page) {
    var url = Alloy.Globals.apiHost + Alloy.Globals.apiNewsUrl + "?recordperpage=8&page=" + page;
    console.log(url);
    xhr = Ti.Network.createHTTPClient({
        onload: onLoad,
        onerror: onError
    });
    xhr.open("GET", url);
    xhr.send();
}

function onLoad() {
    var d = JSON.parse(this.responseText);
    var newsItem;
    Alloy.Globals.newsList = [];
    for (var i = 0; i < d.length; i++) {
        var v = d[i];
        for (var m = 0; m < v.length; m++) {
            var k = v[m];
            if (k.id) {
                newsItem = {
                    nId: k.id,
                    nTitle: k.name,
                    nDetail: k.detail,
                    nDate: k.date,
                    nPhoto: k.photo_list,
                    nThumb: k.thumb_list
                };
                console.log("newsItem: " + JSON.stringify(newsItem));
                Alloy.Globals.newsList.push(newsItem);
            }
        }
    }
    Ti.App.fireEvent("newsLoadCompleted");
}

function onError(e) {
    alert("Load Error: " + e.error);
}

function reload(page) {
    var url = Alloy.Globals.apiHost + Alloy.Globals.apiNewsUrl + "?recordperpage=8&page=" + page;
    console.log("reload" + url);
    xhr = Ti.Network.createHTTPClient({
        onload: onLoad,
        onerror: onError
    });
    xhr.open("GET", url);
    xhr.send();
}

function onReload() {
    var d = JSON.parse(this.responseText);
    var newsItem;
    Alloy.Globals.newsList = [];
    for (var i = 0; i < d.length; i++) {
        var v = d[i];
        for (var m = 0; m < v.length; m++) {
            var k = v[m];
            if (k.id) {
                newsItem = {
                    nId: k.id,
                    nTitle: k.name,
                    nDetail: k.detail,
                    nDate: k.date,
                    nPhoto: k.photo_list,
                    nThumb: k.thumb_list
                };
                console.log("Reload newsItem: " + JSON.stringify(newsItem));
                Alloy.Globals.newsList.push(newsItem);
            }
        }
    }
    Ti.App.fireEvent("newsReloadCompleted");
}

var client;

exports.refresh = refresh;

exports.reload = reload;