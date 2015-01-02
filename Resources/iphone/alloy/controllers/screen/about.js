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
        $.win.title = title;
        $.win.top = Alloy.Globals.iOS7 ? 64 : 0;
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
    function onMenuButtonClick() {
        $.trigger("toggleLeftWindow");
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
        barColor: "#eee3c3",
        extendEdges: [ Ti.UI.EXTEND_EDGE_BOTTOM, Ti.UI.EXTEND_EDGE_TOP ],
        navTintColor: "black",
        titleAttributes: {
            color: "black"
        },
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK,
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    onOpen ? $.__views.win.addEventListener("open", onOpen) : __defers["$.__views.win!open!onOpen"] = true;
    $.__views.menuButton = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        image: "/images/menu_button.png",
        id: "menuButton"
    });
    onMenuButtonClick ? $.__views.menuButton.addEventListener("click", onMenuButtonClick) : __defers["$.__views.menuButton!click!onMenuButtonClick"] = true;
    $.__views.win.leftNavButton = $.__views.menuButton;
    $.__views.__alloyId19 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 36,
        backgroundImage: "/images/tabBg.jpg",
        layout: "horizontal",
        id: "__alloyId19"
    });
    $.__views.win.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.leftTab = Ti.UI.createView({
        width: "90%",
        height: "98%",
        bottom: 0,
        id: "leftTab",
        right: "0"
    });
    $.__views.__alloyId20.add($.__views.leftTab);
    $.__views.leftTabTxt = Ti.UI.createLabel({
        id: "leftTabTxt",
        text: "紫微揚"
    });
    $.__views.leftTab.add($.__views.leftTabTxt);
    $.__views.__alloyId21 = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        id: "__alloyId21"
    });
    $.__views.__alloyId19.add($.__views.__alloyId21);
    $.__views.rightTab = Ti.UI.createView({
        width: "90%",
        height: "98%",
        bottom: 0,
        id: "rightTab",
        left: "0",
        backgroundImage: "/images/tabBox.png"
    });
    $.__views.__alloyId21.add($.__views.rightTab);
    $.__views.rightTabTxt = Ti.UI.createLabel({
        id: "rightTabTxt",
        text: "書籍"
    });
    $.__views.rightTab.add($.__views.rightTabTxt);
    $.__views.__alloyId22 = Ti.UI.createView({
        height: "1px",
        width: Ti.UI.FILL,
        backgroundColor: "#8c6239",
        id: "__alloyId22"
    });
    $.__views.win.add($.__views.__alloyId22);
    $.__views.contentScroll = Ti.UI.createScrollView({
        scrollType: "vertical",
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "contentScroll"
    });
    $.__views.win.add($.__views.contentScroll);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Globals.apiHost;
    require("xp.ui");
    require("windowManager");
    var html2as = require("nl.fokkezb.html2as");
    var title = "About";
    Ti.App.addEventListener("aboutLoadCompleted", loadAbout);
    $.rightTab.addEventListener("click", function() {
        $.leftTab.backgroundImage = "null";
        $.rightTab.backgroundImage = "/images/tabBox.png";
        $.leftTabTxt.color = "#58595b";
        $.rightTabTxt.color = "#6c207f";
        console.log("rightTab clicked");
        html2as('<font size="17" face="AmericanTypewriter">This is <b>Right Tab</b> <a href="http://tidev.io">World</a></font>', function(err, as) {
            if (err) console.error(err); else {
                var label = Titanium.UI.createLabel({
                    attributedString: as
                });
                label.addEventListener("link", function(e) {
                    alert("Longtap on link to: " + e.url);
                });
                $.contentScroll.add(label);
            }
        });
    });
    $.leftTab.addEventListener("click", function() {
        $.rightTab.backgroundImage = "null";
        $.leftTab.backgroundImage = "/images/tabBox.png";
        $.rightTabTxt.color = "#58595b";
        $.leftTabTxt.color = "#6c207f";
        console.log("leftTab clicked");
        html2as('<font size="17" face="AmericanTypewriter">This is <b>Left Tab</b> <a href="http://tidev.io">World</a></font>', function(err, as) {
            if (err) console.error(err); else {
                var label = Titanium.UI.createLabel({
                    attributedString: as
                });
                label.addEventListener("link", function(e) {
                    alert("Longtap on link to: " + e.url);
                });
                $.contentScroll.add(label);
            }
        });
    });
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    __defers["$.__views.menuButton!click!onMenuButtonClick"] && $.__views.menuButton.addEventListener("click", onMenuButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;