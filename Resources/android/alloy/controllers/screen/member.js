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
    this.__controllerPath = "screen/member";
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
    $.__views.__alloyId177 = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        scrollType: "vertical",
        layout: "vertical",
        id: "__alloyId177"
    });
    $.__views.win.add($.__views.__alloyId177);
    $.__views.__alloyId178 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "190",
        id: "__alloyId178"
    });
    $.__views.__alloyId177.add($.__views.__alloyId178);
    $.__views.__alloyId179 = Ti.UI.createImageView({
        width: 320,
        height: 40,
        image: "/images/bookshelves.png",
        bottom: 0,
        id: "__alloyId179"
    });
    $.__views.__alloyId178.add($.__views.__alloyId179);
    $.__views.__alloyId180 = Ti.UI.createImageView({
        backgroundColor: "#FFFFFF",
        left: 72,
        width: 85,
        height: 120,
        bottom: 30,
        image: "/images/bookCover.jpg",
        id: "__alloyId180"
    });
    $.__views.__alloyId178.add($.__views.__alloyId180);
    $.__views.__alloyId181 = Ti.UI.createImageView({
        left: 132,
        width: 40,
        height: 40,
        top: 20,
        image: "/images/purchasedBadge.png",
        id: "__alloyId181"
    });
    $.__views.__alloyId178.add($.__views.__alloyId181);
    $.__views.__alloyId182 = Ti.UI.createImageView({
        backgroundColor: "#FFFFFF",
        right: 69,
        width: 85,
        height: 120,
        bottom: 30,
        image: "/images/bookCover.jpg",
        id: "__alloyId182"
    });
    $.__views.__alloyId178.add($.__views.__alloyId182);
    $.__views.__alloyId183 = Ti.UI.createImageView({
        right: 52,
        width: 40,
        height: 40,
        top: 20,
        image: "/images/purchasedBadge.png",
        id: "__alloyId183"
    });
    $.__views.__alloyId178.add($.__views.__alloyId183);
    $.__views.__alloyId184 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "190",
        id: "__alloyId184"
    });
    $.__views.__alloyId177.add($.__views.__alloyId184);
    $.__views.__alloyId185 = Ti.UI.createImageView({
        width: 320,
        height: 40,
        image: "/images/bookshelves.png",
        bottom: 0,
        id: "__alloyId185"
    });
    $.__views.__alloyId184.add($.__views.__alloyId185);
    $.__views.__alloyId186 = Ti.UI.createImageView({
        backgroundColor: "#FFFFFF",
        left: 72,
        width: 85,
        height: 120,
        bottom: 30,
        image: "/images/bookCover.jpg",
        id: "__alloyId186"
    });
    $.__views.__alloyId184.add($.__views.__alloyId186);
    $.__views.__alloyId187 = Ti.UI.createImageView({
        left: 132,
        width: 40,
        height: 40,
        top: 20,
        image: "/images/purchasedBadge.png",
        id: "__alloyId187"
    });
    $.__views.__alloyId184.add($.__views.__alloyId187);
    $.__views.__alloyId188 = Ti.UI.createImageView({
        backgroundColor: "#FFFFFF",
        right: 69,
        width: 85,
        height: 120,
        bottom: 30,
        image: "/images/bookCover.jpg",
        id: "__alloyId188"
    });
    $.__views.__alloyId184.add($.__views.__alloyId188);
    $.__views.__alloyId189 = Ti.UI.createImageView({
        right: 52,
        width: 40,
        height: 40,
        top: 20,
        image: "/images/purchasedBadge.png",
        id: "__alloyId189"
    });
    $.__views.__alloyId184.add($.__views.__alloyId189);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Globals.apiHost;
    require("xp.ui");
    require("windowManager");
    var title = "Calendar";
    Ti.App.addEventListener("aboutLoadCompleted", loadAbout);
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;