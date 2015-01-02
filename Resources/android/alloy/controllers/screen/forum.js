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
        var forumList = Alloy.Globals.forumList;
        page++;
        for (var i = 0, l = forumList.length; l > i; i++) {
            var row = Alloy.createController("screen/forumRow", {
                fId: forumList[i].fId,
                fName: forumList[i].fName,
                fDate: forumList[i].fDate,
                fCountView: forumList[i].fCountView,
                fCountReply: forumList[i].fCountReply,
                mId: forumList[i].mId,
                mName: forumList[i].mName
            });
            $.forumList.appendRow(row.getView());
        }
    }
    function myLoader() {
        forum_api.refresh(page);
        page++;
        var forumList = Alloy.Globals.forumList;
        Ti.App.addEventListener("forumReloadCompleted", function() {
            for (var i = 0, l = forumList.length; l > i; i++) {
                var row = Alloy.createController("screen/forumRow", {
                    fId: forumList[i].fId,
                    fName: forumList[i].fName,
                    fDate: forumList[i].fDate,
                    fCountView: forumList[i].fCountView,
                    fCountReply: forumList[i].fCountReply,
                    mId: forumList[i].mId,
                    mName: forumList[i].mName
                });
                $.forumList.appendRow(row.getView());
            }
        });
    }
    function init() {}
    function cleanUp() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "screen/forum";
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
    $.__views.__alloyId158 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 36,
        backgroundImage: "/images/tabBg.jpg",
        layout: "horizontal",
        id: "__alloyId158"
    });
    $.__views.win.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.leftTab = Ti.UI.createView({
        width: "90%",
        height: "98%",
        bottom: 0,
        id: "leftTab",
        right: "0"
    });
    $.__views.__alloyId159.add($.__views.leftTab);
    $.__views.leftTabTxt = Ti.UI.createLabel({
        id: "leftTabTxt",
        text: "我的話題"
    });
    $.__views.leftTab.add($.__views.leftTabTxt);
    $.__views.__alloyId160 = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        id: "__alloyId160"
    });
    $.__views.__alloyId158.add($.__views.__alloyId160);
    $.__views.rightTab = Ti.UI.createView({
        width: "90%",
        height: "98%",
        bottom: 0,
        id: "rightTab",
        left: "0",
        backgroundImage: "/images/tabBox.png"
    });
    $.__views.__alloyId160.add($.__views.rightTab);
    $.__views.rightTabTxt = Ti.UI.createLabel({
        id: "rightTabTxt",
        text: "我的回覆"
    });
    $.__views.rightTab.add($.__views.rightTabTxt);
    $.__views.__alloyId161 = Ti.UI.createView({
        height: "1px",
        width: Ti.UI.FILL,
        backgroundColor: "#8c6239",
        id: "__alloyId161"
    });
    $.__views.win.add($.__views.__alloyId161);
    $.__views.is = Alloy.createWidget("nl.fokkezb.infiniteScroll", "widget", {
        id: "is",
        __parentSymbol: __parentSymbol
    });
    myLoader ? $.__views.is.on("end", myLoader) : __defers["$.__views.is!end!myLoader"] = true;
    $.__views.forumList = Ti.UI.createTableView({
        footerView: $.__views.is.getProxyPropertyEx("footerView", {
            recurse: true
        }),
        id: "forumList"
    });
    $.__views.win.add($.__views.forumList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var forum_api = require("forum_api");
    Alloy.Globals.apiHost;
    require("windowManager");
    require("nl.fokkezb.html2as");
    var page = 1;
    var title = "Forum";
    Ti.App.addEventListener("forumLoadCompleted", loadEvents);
    forum_api.refresh(page);
    $.is.init($.forumList);
    $.rightTab.addEventListener("click", function() {
        $.leftTab.backgroundImage = "null";
        $.rightTab.backgroundImage = "/images/tabBox.png";
        $.leftTabTxt.color = "#58595b";
        $.rightTabTxt.color = "#6c207f";
        console.log("rightTab clicked");
        $.contentTxt.html = "<p>This is rightTab Content</p><p>This is rightTab Content</p><p>This is rightTab Content</p><p>This is rightTab Content</p><p>This is rightTab Content</p><p>This is rightTab Content</p>";
    });
    $.leftTab.addEventListener("click", function() {
        $.rightTab.backgroundImage = "null";
        $.leftTab.backgroundImage = "/images/tabBox.png";
        $.rightTabTxt.color = "#58595b";
        $.leftTabTxt.color = "#6c207f";
        console.log("leftTab clicked");
        $.contentTxt.html = "<p>This is leftTab Content</p><p>This is leftTab Content</p><p>This is leftTab Content</p><p>This is leftTab Content</p>";
    });
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    __defers["$.__views.is!end!myLoader"] && $.__views.is.on("end", myLoader);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;