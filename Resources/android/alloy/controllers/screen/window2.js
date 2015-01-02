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
            winman.close(e.source);
        };
        e.source.activity.invalidateOptionsMenu();
        actionBar.title = title;
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
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    onOpen ? $.__views.win.addEventListener("open", onOpen) : __defers["$.__views.win!open!onOpen"] = true;
    $.__views.__alloyId230 = Ti.UI.createLabel({
        text: "Window 2\n\n\n",
        id: "__alloyId230"
    });
    $.__views.win.add($.__views.__alloyId230);
    $.__views.__alloyId231 = Ti.UI.createButton({
        title: "Popup",
        id: "__alloyId231"
    });
    $.__views.win.add($.__views.__alloyId231);
    onClick ? $.__views.__alloyId231.addEventListener("click", onClick) : __defers["$.__views.__alloyId231!click!onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var winman = require("windowManager");
    var title = "Window 2";
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    __defers["$.__views.__alloyId231!click!onClick"] && $.__views.__alloyId231.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;