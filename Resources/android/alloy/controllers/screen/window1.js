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
    function init() {}
    function cleanUp() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "screen/window1";
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
    $.__views.__alloyId201 = Ti.UI.createImageView({
        width: "90%",
        height: Ti.UI.SIZE,
        image: "/images/index/banner.png",
        top: 10,
        id: "__alloyId201"
    });
    $.__views.win.add($.__views.__alloyId201);
    $.__views.__alloyId202 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        layout: "horizontal",
        horizontalWrap: true,
        top: 10,
        id: "__alloyId202"
    });
    $.__views.win.add($.__views.__alloyId202);
    $.__views.__alloyId203 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId203"
    });
    $.__views.__alloyId202.add($.__views.__alloyId203);
    $.__views.dailyLuck = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "dailyLuck"
    });
    $.__views.__alloyId203.add($.__views.dailyLuck);
    $.__views.__alloyId204 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/daily.png",
        id: "__alloyId204"
    });
    $.__views.dailyLuck.add($.__views.__alloyId204);
    $.__views.__alloyId205 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "每日財運",
        id: "__alloyId205"
    });
    $.__views.dailyLuck.add($.__views.__alloyId205);
    $.__views.__alloyId206 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId206"
    });
    $.__views.__alloyId202.add($.__views.__alloyId206);
    $.__views.news = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "news"
    });
    $.__views.__alloyId206.add($.__views.news);
    $.__views.__alloyId207 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/news.png",
        id: "__alloyId207"
    });
    $.__views.news.add($.__views.__alloyId207);
    $.__views.__alloyId208 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "最新消息",
        id: "__alloyId208"
    });
    $.__views.news.add($.__views.__alloyId208);
    $.__views.__alloyId209 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId209"
    });
    $.__views.__alloyId202.add($.__views.__alloyId209);
    $.__views.about = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "about"
    });
    $.__views.__alloyId209.add($.__views.about);
    $.__views.__alloyId210 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/about.png",
        id: "__alloyId210"
    });
    $.__views.about.add($.__views.__alloyId210);
    $.__views.__alloyId211 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "簡介",
        id: "__alloyId211"
    });
    $.__views.about.add($.__views.__alloyId211);
    $.__views.__alloyId212 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId212"
    });
    $.__views.__alloyId202.add($.__views.__alloyId212);
    $.__views.ziwei = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "ziwei"
    });
    $.__views.__alloyId212.add($.__views.ziwei);
    $.__views.__alloyId213 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/ziwei.png",
        id: "__alloyId213"
    });
    $.__views.ziwei.add($.__views.__alloyId213);
    $.__views.__alloyId214 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "紫微命盤",
        id: "__alloyId214"
    });
    $.__views.ziwei.add($.__views.__alloyId214);
    $.__views.__alloyId215 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId215"
    });
    $.__views.__alloyId202.add($.__views.__alloyId215);
    $.__views.calendar = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "calendar"
    });
    $.__views.__alloyId215.add($.__views.calendar);
    $.__views.__alloyId216 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/forum.png",
        id: "__alloyId216"
    });
    $.__views.calendar.add($.__views.__alloyId216);
    $.__views.__alloyId217 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "萬年曆",
        id: "__alloyId217"
    });
    $.__views.calendar.add($.__views.__alloyId217);
    $.__views.__alloyId218 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId218"
    });
    $.__views.__alloyId202.add($.__views.__alloyId218);
    $.__views.classroom = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "classroom"
    });
    $.__views.__alloyId218.add($.__views.classroom);
    $.__views.__alloyId219 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/classroom.png",
        id: "__alloyId219"
    });
    $.__views.classroom.add($.__views.__alloyId219);
    $.__views.__alloyId220 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "教室",
        id: "__alloyId220"
    });
    $.__views.classroom.add($.__views.__alloyId220);
    $.__views.__alloyId221 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId221"
    });
    $.__views.__alloyId202.add($.__views.__alloyId221);
    $.__views.magazine = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "magazine"
    });
    $.__views.__alloyId221.add($.__views.magazine);
    $.__views.__alloyId222 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/magazine.png",
        id: "__alloyId222"
    });
    $.__views.magazine.add($.__views.__alloyId222);
    $.__views.__alloyId223 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "書刊",
        id: "__alloyId223"
    });
    $.__views.magazine.add($.__views.__alloyId223);
    $.__views.__alloyId224 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId224"
    });
    $.__views.__alloyId202.add($.__views.__alloyId224);
    $.__views.forum = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "forum"
    });
    $.__views.__alloyId224.add($.__views.forum);
    $.__views.__alloyId225 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/forum.png",
        id: "__alloyId225"
    });
    $.__views.forum.add($.__views.__alloyId225);
    $.__views.__alloyId226 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "公眾論壇",
        id: "__alloyId226"
    });
    $.__views.forum.add($.__views.__alloyId226);
    $.__views.__alloyId227 = Ti.UI.createView({
        width: "33.33%",
        height: Ti.UI.SIZE,
        top: 10,
        id: "__alloyId227"
    });
    $.__views.__alloyId202.add($.__views.__alloyId227);
    $.__views.question = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "question"
    });
    $.__views.__alloyId227.add($.__views.question);
    $.__views.__alloyId228 = Ti.UI.createImageView({
        width: "80%",
        height: Ti.UI.SIZE,
        image: "/images/index/question.png",
        id: "__alloyId228"
    });
    $.__views.question.add($.__views.__alloyId228);
    $.__views.__alloyId229 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        font: {
            fontSize: 12
        },
        color: "#614718",
        text: "課程提問",
        id: "__alloyId229"
    });
    $.__views.question.add($.__views.__alloyId229);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var title = "Window 1";
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;