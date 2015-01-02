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
        actionBar.title = "Popup";
        actionBar.icon = "";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "popup";
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
    $.__views.win = Ti.UI.createWindow({
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
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "Popup Window",
        id: "__alloyId11"
    });
    $.__views.win.add($.__views.__alloyId11);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;