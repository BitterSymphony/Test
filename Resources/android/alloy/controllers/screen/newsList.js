function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onOpen(e) {
        var actionBar = e.source.activity.actionBar;
        actionBar.displayHomeAsUp = true;
        actionBar.onHomeIconItemSelected = function() {
            e.source.close();
        };
        e.source.activity.invalidateOptionsMenu();
        actionBar.title = title;
    }
    function loadEvents() {
        var newsList = Alloy.Globals.newsList;
        page++;
        for (var i = 0, l = newsList.length; l > i; i++) {
            var row = Alloy.createController("screen/newsRow", {
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
    function myLoader() {
        news_api.refresh(page);
        page++;
        var newsList = Alloy.Globals.newsList;
        Ti.App.addEventListener("newsReloadCompleted", function() {
            for (var i = 0, l = newsList.length; l > i; i++) {
                var row = Alloy.createController("screen/newsRow", {
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
    function init() {}
    function cleanUp() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "screen/newsList";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = require("xp.ui").createWindow({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        orientationModes: [ Ti.UI.PORTRAIT ],
        layout: "vertical",
        backgroundImage: "/images/bgPattern.jpg",
        backgroundRepeat: true,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    onOpen ? $.__views.win.addEventListener("open", onOpen) : __defers["$.__views.win!open!onOpen"] = true;
    $.__views.__alloyId195 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 60,
        id: "__alloyId195"
    });
    $.__views.win.add($.__views.__alloyId195);
    $.__views.__alloyId196 = Ti.UI.createView({
        left: 10,
        top: 10,
        width: 200,
        height: 40,
        backgroundImage: "/images/txtBg.png",
        id: "__alloyId196"
    });
    $.__views.__alloyId195.add($.__views.__alloyId196);
    $.__views.searchTxt = Ti.UI.createTextField({
        width: 180,
        height: 38,
        hintText: "關鍵字搜索",
        backgroundColor: "transparent",
        id: "searchTxt"
    });
    $.__views.__alloyId196.add($.__views.searchTxt);
    $.__views.sortBtn = Ti.UI.createButton({
        right: 10,
        width: 100,
        height: 40,
        backgroundImage: "/images/sortBtn.png",
        id: "sortBtn"
    });
    $.__views.__alloyId195.add($.__views.sortBtn);
    $.__views.__alloyId197 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "1px",
        backgroundColor: "#8c6239",
        id: "__alloyId197"
    });
    $.__views.win.add($.__views.__alloyId197);
    $.__views.is = Alloy.createWidget("nl.fokkezb.infiniteScroll", "widget", {
        id: "is",
        __parentSymbol: __parentSymbol
    });
    myLoader ? $.__views.is.on("end", myLoader) : __defers["$.__views.is!end!myLoader"] = true;
    $.__views.newsList = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        footerView: $.__views.is.getProxyPropertyEx("footerView", {
            recurse: true
        }),
        id: "newsList"
    });
    $.__views.win.add($.__views.newsList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var news_api = require("news_api");
    Alloy.Globals.apiHost;
    require("xp.ui");
    require("windowManager");
    var page = 1;
    var title = "News";
    Ti.App.addEventListener("newsLoadCompleted", loadEvents);
    news_api.refresh(page);
    $.is.init($.newsList);
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    __defers["$.__views.is!end!myLoader"] && $.__views.is.on("end", myLoader);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;