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
        var forumDetail = Alloy.Globals.forumDetail;
        for (var i = 0; i < forumDetail.length; i++) {
            $.userImg.image = "/images/user.jpg";
            $.userName.text = forumDetail[i].mName;
            $.replyCount.text = "回覆: " + forumDetail[i].fCountReply;
            $.viewCount.text = "查看: " + forumDetail[i].fCountView;
            $.fDate.text = forumDetail[i].fDate;
            $.fName.text = forumDetail[i].fName;
            $.fDetail.text = forumDetail[i].fDetail;
        }
    }
    function init() {}
    function cleanUp() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "screen/forumDetail";
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
    $.__views.__alloyId164 = Ti.UI.createScrollView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId164"
    });
    $.__views.win.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        height: 100,
        width: Ti.UI.FILL,
        layout: "horizontal",
        id: "__alloyId165"
    });
    $.__views.__alloyId164.add($.__views.__alloyId165);
    $.__views.__alloyId166 = Ti.UI.createView({
        width: 200,
        height: Ti.UI.FILL,
        id: "__alloyId166"
    });
    $.__views.__alloyId165.add($.__views.__alloyId166);
    $.__views.userImg = Ti.UI.createImageView({
        width: 50,
        height: 50,
        id: "userImg",
        left: "10"
    });
    $.__views.__alloyId166.add($.__views.userImg);
    $.__views.__alloyId167 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId167"
    });
    $.__views.__alloyId166.add($.__views.__alloyId167);
    $.__views.userName = Ti.UI.createLabel({
        id: "userName"
    });
    $.__views.__alloyId167.add($.__views.userName);
    $.__views.__alloyId168 = Ti.UI.createLabel({
        text: "版主",
        id: "__alloyId168"
    });
    $.__views.__alloyId167.add($.__views.__alloyId168);
    $.__views.__alloyId169 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "__alloyId169"
    });
    $.__views.__alloyId165.add($.__views.__alloyId169);
    $.__views.__alloyId170 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId170"
    });
    $.__views.__alloyId169.add($.__views.__alloyId170);
    $.__views.recordCount = Ti.UI.createLabel({
        left: "0",
        color: "#939598",
        font: {
            fontSize: "12",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "recordCount",
        text: "1"
    });
    $.__views.__alloyId170.add($.__views.recordCount);
    $.__views.__alloyId171 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: "0",
        id: "__alloyId171"
    });
    $.__views.__alloyId170.add($.__views.__alloyId171);
    $.__views.replyCount = Ti.UI.createLabel({
        left: 0,
        color: "#939598",
        font: {
            fontSize: "12",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "replyCount"
    });
    $.__views.__alloyId171.add($.__views.replyCount);
    $.__views.viewCount = Ti.UI.createLabel({
        left: "10",
        color: "#939598",
        font: {
            fontSize: "12",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "viewCount"
    });
    $.__views.__alloyId171.add($.__views.viewCount);
    $.__views.fDate = Ti.UI.createLabel({
        left: "0",
        color: "#939598",
        font: {
            fontSize: "12",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "fDate"
    });
    $.__views.__alloyId170.add($.__views.fDate);
    $.__views.__alloyId172 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: 10,
        top: 10,
        bottom: 10,
        right: 10,
        id: "__alloyId172"
    });
    $.__views.__alloyId164.add($.__views.__alloyId172);
    $.__views.fName = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 18,
            fontFamily: "HelveticaNeue"
        },
        left: 0,
        id: "fName"
    });
    $.__views.__alloyId172.add($.__views.fName);
    $.__views.fDetail = Ti.UI.createLabel({
        color: "#595757",
        font: {
            fontSize: 18,
            fontFamily: "HelveticaNeue"
        },
        left: 0,
        top: 10,
        id: "fDetail"
    });
    $.__views.__alloyId172.add($.__views.fDetail);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var news_api = require("forumDetail_api");
    Alloy.Globals.apiHost;
    require("ui");
    var forumId = args.forumId;
    var title = "Forum Detail";
    Ti.App.addEventListener("forumDetailLoadCompleted", loadEvents);
    news_api.refresh(forumId);
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;