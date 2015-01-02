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
    function onMenuButtonClick() {
        $.trigger("toggleLeftWindow");
    }
    function onClick() {
        var win = Alloy.createController("popup").getView();
        winman.open(win);
    }
    function init() {}
    function cleanUp() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "screen/window2";
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
    $.__views.__alloyId235 = Ti.UI.createLabel({
        text: "Window 2\n\n\n",
        id: "__alloyId235"
    });
    $.__views.win.add($.__views.__alloyId235);
    $.__views.__alloyId236 = Ti.UI.createButton({
        title: "Popup",
        id: "__alloyId236"
    });
    $.__views.win.add($.__views.__alloyId236);
    onClick ? $.__views.__alloyId236.addEventListener("click", onClick) : __defers["$.__views.__alloyId236!click!onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var winman = require("windowManager");
    var title = "Window 2";
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    __defers["$.__views.menuButton!click!onMenuButtonClick"] && $.__views.menuButton.addEventListener("click", onMenuButtonClick);
    __defers["$.__views.__alloyId236!click!onClick"] && $.__views.__alloyId236.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;