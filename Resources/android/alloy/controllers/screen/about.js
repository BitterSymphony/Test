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
    function loadAbout() {
        var newsList = Alloy.Globals.newsList;
        var eventData = [];
        for (var i = 0; i < newsList.length; i++) {
            var dotDate = newsList[i].nDate;
            var find = "-";
            var re = new RegExp(find, "g");
            dotDate = dotDate.replace(re, ".");
        }
        var section = Ti.UI.createListSection();
        section.setItems(eventData);
        $.eventsList.sections = [ section ];
    }
    function init() {}
    function cleanUp() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "screen/about";
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
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
    $.__views.__alloyId12 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 36,
        backgroundImage: "/images/tabBg.jpg",
        layout: "horizontal",
        id: "__alloyId12"
    });
    $.__views.win.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.leftTab = Ti.UI.createView({
        width: "90%",
        height: "98%",
        bottom: 0,
        id: "leftTab",
        right: "0"
    });
    $.__views.__alloyId13.add($.__views.leftTab);
    $.__views.leftTabTxt = Ti.UI.createLabel({
        id: "leftTabTxt",
        text: "紫微揚"
    });
    $.__views.leftTab.add($.__views.leftTabTxt);
    $.__views.__alloyId14 = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.rightTab = Ti.UI.createView({
        width: "90%",
        height: "98%",
        bottom: 0,
        id: "rightTab",
        left: "0",
        backgroundImage: "/images/tabBox.png"
    });
    $.__views.__alloyId14.add($.__views.rightTab);
    $.__views.rightTabTxt = Ti.UI.createLabel({
        id: "rightTabTxt",
        text: "書籍"
    });
    $.__views.rightTab.add($.__views.rightTabTxt);
    $.__views.__alloyId15 = Ti.UI.createView({
        height: "1px",
        width: Ti.UI.FILL,
        backgroundColor: "#8c6239",
        id: "__alloyId15"
    });
    $.__views.win.add($.__views.__alloyId15);
    $.__views.contentScroll = Ti.UI.createScrollView({
        scrollType: "vertical",
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "contentScroll"
    });
    $.__views.win.add($.__views.contentScroll);
    $.__views.contentTxt = require("xp.ui").createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        top: 10,
        id: "contentTxt",
        html: "<font size=17>Hello <b>Bold</b> <font color=#FF0000>World!</font></font>"
    });
    $.__views.contentScroll.add($.__views.contentTxt);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Globals.apiHost;
    require("xp.ui");
    require("windowManager");
    require("nl.fokkezb.html2as");
    var title = "About";
    Ti.App.addEventListener("aboutLoadCompleted", loadAbout);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;