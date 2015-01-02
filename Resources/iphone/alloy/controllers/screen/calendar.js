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
    this.__controllerPath = "screen/calendar";
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
    $.__views.__alloyId24 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 36,
        backgroundImage: "/images/tabBg.jpg",
        layout: "horizontal",
        id: "__alloyId24"
    });
    $.__views.win.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.leftTab = Ti.UI.createView({
        width: "90%",
        height: "98%",
        bottom: 0,
        id: "leftTab",
        right: "0",
        backgroundImage: "/images/tabBox.png"
    });
    $.__views.__alloyId25.add($.__views.leftTab);
    $.__views.leftTabTxt = Ti.UI.createLabel({
        id: "leftTabTxt",
        text: "萬年曆",
        color: "#6c207f"
    });
    $.__views.leftTab.add($.__views.leftTabTxt);
    $.__views.__alloyId26 = Ti.UI.createView({
        width: "50%",
        height: Ti.UI.FILL,
        id: "__alloyId26"
    });
    $.__views.__alloyId24.add($.__views.__alloyId26);
    $.__views.rightTab = Ti.UI.createView({
        width: "90%",
        height: "98%",
        bottom: 0,
        id: "rightTab",
        left: "0"
    });
    $.__views.__alloyId26.add($.__views.rightTab);
    $.__views.rightTabTxt = Ti.UI.createLabel({
        id: "rightTabTxt",
        text: "註解"
    });
    $.__views.rightTab.add($.__views.rightTabTxt);
    $.__views.__alloyId27 = Ti.UI.createView({
        height: "1px",
        width: Ti.UI.FILL,
        backgroundColor: "#8c6239",
        id: "__alloyId27"
    });
    $.__views.win.add($.__views.__alloyId27);
    $.__views.contentScroll = Ti.UI.createScrollView({
        scrollType: "vertical",
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "contentScroll"
    });
    $.__views.win.add($.__views.contentScroll);
    $.__views.__alloyId28 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 60,
        id: "__alloyId28"
    });
    $.__views.contentScroll.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createButton({
        width: 30,
        height: 30,
        left: 20,
        top: 15,
        backgroundImage: "/images/cal_prev.png",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createView({
        width: 230,
        height: Ti.UI.FILL,
        layout: "horizontal",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.dayBox = Ti.UI.createView({
        left: 10,
        top: 10,
        width: 130,
        height: 40,
        backgroundImage: "/images/txtBg.png",
        id: "dayBox"
    });
    $.__views.__alloyId30.add($.__views.dayBox);
    $.__views.dayTxt = Ti.UI.createTextField({
        width: 120,
        height: 38,
        hintText: "2014年  6月",
        backgroundColor: "transparent",
        id: "dayTxt"
    });
    $.__views.dayBox.add($.__views.dayTxt);
    $.__views.todayBtn = Ti.UI.createButton({
        width: 70,
        height: 38,
        left: 20,
        top: 10,
        color: "#614718",
        font: {
            fontSize: 13
        },
        backgroundImage: "/images/buttonBg.png",
        id: "todayBtn",
        title: "今天",
        text: "今天"
    });
    $.__views.__alloyId30.add($.__views.todayBtn);
    $.__views.__alloyId31 = Ti.UI.createButton({
        width: 30,
        height: 30,
        right: 20,
        top: 15,
        backgroundImage: "/images/cal_next.png",
        id: "__alloyId31"
    });
    $.__views.__alloyId28.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createView({
        width: "95%",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId32"
    });
    $.__views.contentScroll.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 33,
        layout: "horizontal",
        id: "__alloyId33"
    });
    $.__views.__alloyId32.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        width: "14%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/1stGrid.png",
        id: "__alloyId34"
    });
    $.__views.__alloyId33.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        text: "周日",
        color: "#614718",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createView({
        width: "14%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/1stGrid.png",
        id: "__alloyId36"
    });
    $.__views.__alloyId33.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        text: "周一",
        color: "#614718",
        id: "__alloyId37"
    });
    $.__views.__alloyId36.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createView({
        width: "14%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/1stGrid.png",
        id: "__alloyId38"
    });
    $.__views.__alloyId33.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        text: "周二",
        color: "#614718",
        id: "__alloyId39"
    });
    $.__views.__alloyId38.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createView({
        width: "14%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/1stGrid.png",
        id: "__alloyId40"
    });
    $.__views.__alloyId33.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        text: "周三",
        color: "#614718",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createView({
        width: "14%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/1stGrid.png",
        id: "__alloyId42"
    });
    $.__views.__alloyId33.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createLabel({
        text: "周四",
        color: "#614718",
        id: "__alloyId43"
    });
    $.__views.__alloyId42.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        width: "14%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/1stGrid.png",
        id: "__alloyId44"
    });
    $.__views.__alloyId33.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        text: "周五",
        color: "#614718",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        width: "14%",
        height: Ti.UI.FILL,
        backgroundImage: "/images/1stGrid.png",
        id: "__alloyId46"
    });
    $.__views.__alloyId33.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        text: "周六",
        color: "#614718",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId48"
    });
    $.__views.__alloyId32.add($.__views.__alloyId48);
    $.__views.__alloyId49 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId49"
    });
    $.__views.__alloyId48.add($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId52"
    });
    $.__views.__alloyId50.add($.__views.__alloyId52);
    $.__views.__alloyId53 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId53"
    });
    $.__views.__alloyId48.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId54"
    });
    $.__views.__alloyId53.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    $.__views.__alloyId56 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId56"
    });
    $.__views.__alloyId54.add($.__views.__alloyId56);
    $.__views.__alloyId57 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId57"
    });
    $.__views.__alloyId48.add($.__views.__alloyId57);
    $.__views.__alloyId58 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId58"
    });
    $.__views.__alloyId57.add($.__views.__alloyId58);
    $.__views.__alloyId59 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId59"
    });
    $.__views.__alloyId58.add($.__views.__alloyId59);
    $.__views.__alloyId60 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId60"
    });
    $.__views.__alloyId58.add($.__views.__alloyId60);
    $.__views.__alloyId61 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId61"
    });
    $.__views.__alloyId48.add($.__views.__alloyId61);
    $.__views.__alloyId62 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.__alloyId63 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId63"
    });
    $.__views.__alloyId62.add($.__views.__alloyId63);
    $.__views.__alloyId64 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId64"
    });
    $.__views.__alloyId62.add($.__views.__alloyId64);
    $.__views.__alloyId65 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId65"
    });
    $.__views.__alloyId48.add($.__views.__alloyId65);
    $.__views.__alloyId66 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId66"
    });
    $.__views.__alloyId65.add($.__views.__alloyId66);
    $.__views.__alloyId67 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId67"
    });
    $.__views.__alloyId66.add($.__views.__alloyId67);
    $.__views.__alloyId68 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId68"
    });
    $.__views.__alloyId66.add($.__views.__alloyId68);
    $.__views.__alloyId69 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId69"
    });
    $.__views.__alloyId48.add($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId71"
    });
    $.__views.__alloyId70.add($.__views.__alloyId71);
    $.__views.__alloyId72 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId72"
    });
    $.__views.__alloyId70.add($.__views.__alloyId72);
    $.__views.__alloyId73 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId73"
    });
    $.__views.__alloyId48.add($.__views.__alloyId73);
    $.__views.__alloyId74 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId74"
    });
    $.__views.__alloyId73.add($.__views.__alloyId74);
    $.__views.__alloyId75 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId75"
    });
    $.__views.__alloyId74.add($.__views.__alloyId75);
    $.__views.__alloyId76 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId76"
    });
    $.__views.__alloyId74.add($.__views.__alloyId76);
    $.__views.__alloyId77 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId77"
    });
    $.__views.__alloyId48.add($.__views.__alloyId77);
    $.__views.__alloyId78 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId78"
    });
    $.__views.__alloyId77.add($.__views.__alloyId78);
    $.__views.__alloyId79 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId79"
    });
    $.__views.__alloyId78.add($.__views.__alloyId79);
    $.__views.__alloyId80 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId80"
    });
    $.__views.__alloyId78.add($.__views.__alloyId80);
    $.__views.__alloyId81 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId81"
    });
    $.__views.__alloyId48.add($.__views.__alloyId81);
    $.__views.__alloyId82 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId82"
    });
    $.__views.__alloyId81.add($.__views.__alloyId82);
    $.__views.__alloyId83 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId83"
    });
    $.__views.__alloyId82.add($.__views.__alloyId83);
    $.__views.__alloyId84 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId84"
    });
    $.__views.__alloyId82.add($.__views.__alloyId84);
    $.__views.__alloyId85 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId85"
    });
    $.__views.__alloyId48.add($.__views.__alloyId85);
    $.__views.__alloyId86 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId86"
    });
    $.__views.__alloyId85.add($.__views.__alloyId86);
    $.__views.__alloyId87 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId87"
    });
    $.__views.__alloyId86.add($.__views.__alloyId87);
    $.__views.__alloyId88 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId88"
    });
    $.__views.__alloyId86.add($.__views.__alloyId88);
    $.__views.__alloyId89 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId89"
    });
    $.__views.__alloyId48.add($.__views.__alloyId89);
    $.__views.__alloyId90 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId90"
    });
    $.__views.__alloyId89.add($.__views.__alloyId90);
    $.__views.__alloyId91 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId91"
    });
    $.__views.__alloyId90.add($.__views.__alloyId91);
    $.__views.__alloyId92 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId92"
    });
    $.__views.__alloyId90.add($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId93"
    });
    $.__views.__alloyId48.add($.__views.__alloyId93);
    $.__views.__alloyId94 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId94"
    });
    $.__views.__alloyId93.add($.__views.__alloyId94);
    $.__views.__alloyId95 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId95"
    });
    $.__views.__alloyId94.add($.__views.__alloyId95);
    $.__views.__alloyId96 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId96"
    });
    $.__views.__alloyId94.add($.__views.__alloyId96);
    $.__views.__alloyId97 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId97"
    });
    $.__views.__alloyId48.add($.__views.__alloyId97);
    $.__views.__alloyId98 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId98"
    });
    $.__views.__alloyId97.add($.__views.__alloyId98);
    $.__views.__alloyId99 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId99"
    });
    $.__views.__alloyId98.add($.__views.__alloyId99);
    $.__views.__alloyId100 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId100"
    });
    $.__views.__alloyId98.add($.__views.__alloyId100);
    $.__views.__alloyId101 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId101"
    });
    $.__views.__alloyId48.add($.__views.__alloyId101);
    $.__views.__alloyId102 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId102"
    });
    $.__views.__alloyId101.add($.__views.__alloyId102);
    $.__views.__alloyId103 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId103"
    });
    $.__views.__alloyId102.add($.__views.__alloyId103);
    $.__views.__alloyId104 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId104"
    });
    $.__views.__alloyId102.add($.__views.__alloyId104);
    $.__views.__alloyId105 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId105"
    });
    $.__views.__alloyId48.add($.__views.__alloyId105);
    $.__views.__alloyId106 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId106"
    });
    $.__views.__alloyId105.add($.__views.__alloyId106);
    $.__views.__alloyId107 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId107"
    });
    $.__views.__alloyId106.add($.__views.__alloyId107);
    $.__views.__alloyId108 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId108"
    });
    $.__views.__alloyId106.add($.__views.__alloyId108);
    $.__views.__alloyId109 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId109"
    });
    $.__views.__alloyId48.add($.__views.__alloyId109);
    $.__views.__alloyId110 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId110"
    });
    $.__views.__alloyId109.add($.__views.__alloyId110);
    $.__views.__alloyId111 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId111"
    });
    $.__views.__alloyId110.add($.__views.__alloyId111);
    $.__views.__alloyId112 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId112"
    });
    $.__views.__alloyId110.add($.__views.__alloyId112);
    $.__views.__alloyId113 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId113"
    });
    $.__views.__alloyId48.add($.__views.__alloyId113);
    $.__views.__alloyId114 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId114"
    });
    $.__views.__alloyId113.add($.__views.__alloyId114);
    $.__views.__alloyId115 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId115"
    });
    $.__views.__alloyId114.add($.__views.__alloyId115);
    $.__views.__alloyId116 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId116"
    });
    $.__views.__alloyId114.add($.__views.__alloyId116);
    $.__views.__alloyId117 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId117"
    });
    $.__views.__alloyId48.add($.__views.__alloyId117);
    $.__views.__alloyId118 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId118"
    });
    $.__views.__alloyId117.add($.__views.__alloyId118);
    $.__views.__alloyId119 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId119"
    });
    $.__views.__alloyId118.add($.__views.__alloyId119);
    $.__views.__alloyId120 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId120"
    });
    $.__views.__alloyId118.add($.__views.__alloyId120);
    $.__views.__alloyId121 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId121"
    });
    $.__views.__alloyId48.add($.__views.__alloyId121);
    $.__views.__alloyId122 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId122"
    });
    $.__views.__alloyId121.add($.__views.__alloyId122);
    $.__views.__alloyId123 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId123"
    });
    $.__views.__alloyId122.add($.__views.__alloyId123);
    $.__views.__alloyId124 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId124"
    });
    $.__views.__alloyId122.add($.__views.__alloyId124);
    $.__views.__alloyId125 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId125"
    });
    $.__views.__alloyId48.add($.__views.__alloyId125);
    $.__views.__alloyId126 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId126"
    });
    $.__views.__alloyId125.add($.__views.__alloyId126);
    $.__views.__alloyId127 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId127"
    });
    $.__views.__alloyId126.add($.__views.__alloyId127);
    $.__views.__alloyId128 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId128"
    });
    $.__views.__alloyId126.add($.__views.__alloyId128);
    $.__views.__alloyId129 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId129"
    });
    $.__views.__alloyId48.add($.__views.__alloyId129);
    $.__views.__alloyId130 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId130"
    });
    $.__views.__alloyId129.add($.__views.__alloyId130);
    $.__views.__alloyId131 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId131"
    });
    $.__views.__alloyId130.add($.__views.__alloyId131);
    $.__views.__alloyId132 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId132"
    });
    $.__views.__alloyId130.add($.__views.__alloyId132);
    $.__views.__alloyId133 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId133"
    });
    $.__views.__alloyId48.add($.__views.__alloyId133);
    $.__views.__alloyId134 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId134"
    });
    $.__views.__alloyId133.add($.__views.__alloyId134);
    $.__views.__alloyId135 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId135"
    });
    $.__views.__alloyId134.add($.__views.__alloyId135);
    $.__views.__alloyId136 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId136"
    });
    $.__views.__alloyId134.add($.__views.__alloyId136);
    $.__views.__alloyId137 = Ti.UI.createView({
        width: "14%",
        height: 60,
        top: 3,
        backgroundImage: "/images/dayGridBg.png",
        id: "__alloyId137"
    });
    $.__views.__alloyId48.add($.__views.__alloyId137);
    $.__views.__alloyId138 = Ti.UI.createView({
        layout: "vertical",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "__alloyId138"
    });
    $.__views.__alloyId137.add($.__views.__alloyId138);
    $.__views.__alloyId139 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 14
        },
        text: "10",
        id: "__alloyId139"
    });
    $.__views.__alloyId138.add($.__views.__alloyId139);
    $.__views.__alloyId140 = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 10
        },
        text: "初四",
        id: "__alloyId140"
    });
    $.__views.__alloyId138.add($.__views.__alloyId140);
    $.__views.__alloyId141 = Ti.UI.createView({
        top: "10",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        id: "__alloyId141"
    });
    $.__views.contentScroll.add($.__views.__alloyId141);
    $.__views.__alloyId142 = Ti.UI.createLabel({
        left: "5",
        right: "5",
        text: "陽曆紅色字表示公休/節假日。\n紫色字表示24節氣日，紅色字表示法定節假日。\n流年資料\n\n2015年是乙未年,生肖羊年，因此屬羊的人2015年為坐太歲；按十二地支生制化原理，丑未沖，就是說屬牛的人2015年為沖太歲。",
        id: "__alloyId142"
    });
    $.__views.__alloyId141.add($.__views.__alloyId142);
    $.__views.__alloyId143 = Ti.UI.createView({
        top: "10",
        width: Ti.UI.FILL,
        height: "100",
        layout: "vertical",
        id: "__alloyId143"
    });
    $.__views.contentScroll.add($.__views.__alloyId143);
    $.__views.__alloyId144 = Ti.UI.createView({
        height: "1px",
        width: Ti.UI.FILL,
        backgroundColor: "#8c6239",
        id: "__alloyId144"
    });
    $.__views.__alloyId143.add($.__views.__alloyId144);
    $.__views.__alloyId145 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "98",
        layout: "horizontal",
        id: "__alloyId145"
    });
    $.__views.__alloyId143.add($.__views.__alloyId145);
    $.__views.__alloyId146 = Ti.UI.createView({
        width: "40%",
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId146"
    });
    $.__views.__alloyId145.add($.__views.__alloyId146);
    $.__views.__alloyId147 = Ti.UI.createLabel({
        text: "2014年6月",
        top: "5",
        color: "#614718",
        id: "__alloyId147"
    });
    $.__views.__alloyId146.add($.__views.__alloyId147);
    $.__views.__alloyId148 = Ti.UI.createLabel({
        text: "10",
        top: "5",
        color: "#614718",
        id: "__alloyId148"
    });
    $.__views.__alloyId146.add($.__views.__alloyId148);
    $.__views.__alloyId149 = Ti.UI.createView({
        width: "3%",
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId149"
    });
    $.__views.__alloyId145.add($.__views.__alloyId149);
    $.__views.__alloyId150 = Ti.UI.createView({
        height: "90",
        width: "1px",
        backgroundColor: "#8c6239",
        top: "5%",
        id: "__alloyId150"
    });
    $.__views.__alloyId149.add($.__views.__alloyId150);
    $.__views.__alloyId151 = Ti.UI.createView({
        width: "57%",
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "__alloyId151"
    });
    $.__views.__alloyId145.add($.__views.__alloyId151);
    $.__views.__alloyId152 = Ti.UI.createLabel({
        text: "星期日",
        left: "2",
        top: "5",
        color: "#614718",
        id: "__alloyId152"
    });
    $.__views.__alloyId151.add($.__views.__alloyId152);
    $.__views.__alloyId153 = Ti.UI.createLabel({
        text: "甲午年            己己月\n癸卯(開)日     辛酉時\n生肖屬馬農曆五月初四",
        left: "2",
        top: "5",
        color: "#614718",
        id: "__alloyId153"
    });
    $.__views.__alloyId151.add($.__views.__alloyId153);
    $.__views.__alloyId154 = Ti.UI.createView({
        height: "1px",
        width: Ti.UI.FILL,
        backgroundColor: "#8c6239",
        id: "__alloyId154"
    });
    $.__views.__alloyId143.add($.__views.__alloyId154);
    $.__views.__alloyId155 = Ti.UI.createView({
        top: "10",
        width: Ti.UI.FILL,
        left: "10",
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId155"
    });
    $.__views.contentScroll.add($.__views.__alloyId155);
    $.__views.__alloyId156 = Ti.UI.createLabel({
        text: "十二建除忌宜 : (開)日",
        top: "5",
        left: "0",
        color: "#004a80",
        id: "__alloyId156"
    });
    $.__views.__alloyId155.add($.__views.__alloyId156);
    $.__views.__alloyId157 = Ti.UI.createLabel({
        text: "開始、開展的日子。",
        top: "5",
        left: "0",
        color: "#614718",
        id: "__alloyId157"
    });
    $.__views.__alloyId155.add($.__views.__alloyId157);
    $.__views.__alloyId158 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        top: "10",
        height: Ti.UI.SIZE,
        id: "__alloyId158"
    });
    $.__views.__alloyId155.add($.__views.__alloyId158);
    $.__views.__alloyId159 = Ti.UI.createLabel({
        text: "宜：",
        top: "0",
        left: "0",
        color: "#ff0000",
        id: "__alloyId159"
    });
    $.__views.__alloyId158.add($.__views.__alloyId159);
    $.__views.__alloyId160 = Ti.UI.createLabel({
        text: "祭祀、祈福、入學、上任、修造、動土、開市、安床、交易、出行、豎柱。",
        width: "300",
        left: "0",
        color: "#614718",
        id: "__alloyId160"
    });
    $.__views.__alloyId158.add($.__views.__alloyId160);
    $.__views.__alloyId161 = Ti.UI.createView({
        layout: "horizontal",
        width: Ti.UI.FILL,
        top: "10",
        height: Ti.UI.SIZE,
        id: "__alloyId161"
    });
    $.__views.__alloyId155.add($.__views.__alloyId161);
    $.__views.__alloyId162 = Ti.UI.createLabel({
        text: "忌：",
        left: "0",
        color: "#598527",
        id: "__alloyId162"
    });
    $.__views.__alloyId161.add($.__views.__alloyId162);
    $.__views.__alloyId163 = Ti.UI.createLabel({
        text: "放債、訴訟、安葬。",
        width: "300",
        left: "0",
        color: "#614718",
        id: "__alloyId163"
    });
    $.__views.__alloyId161.add($.__views.__alloyId163);
    $.__views.__alloyId164 = Ti.UI.createView({
        height: "1px",
        width: Ti.UI.FILL,
        backgroundColor: "#8c6239",
        top: "15",
        id: "__alloyId164"
    });
    $.__views.contentScroll.add($.__views.__alloyId164);
    $.__views.__alloyId165 = Ti.UI.createView({
        height: "60",
        width: Ti.UI.FILL,
        id: "__alloyId165"
    });
    $.__views.contentScroll.add($.__views.__alloyId165);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Globals.apiHost;
    require("xp.ui");
    require("windowManager");
    var title = "Calendar";
    Ti.App.addEventListener("aboutLoadCompleted", loadAbout);
    $.rightTab.addEventListener("click", function() {
        $.leftTab.backgroundImage = "null";
        $.rightTab.backgroundImage = "/images/tabBox.png";
        $.leftTabTxt.color = "#58595b";
        $.rightTabTxt.color = "#6c207f";
        console.log("rightTab clicked");
    });
    $.leftTab.addEventListener("click", function() {
        $.rightTab.backgroundImage = "null";
        $.leftTab.backgroundImage = "/images/tabBox.png";
        $.rightTabTxt.color = "#58595b";
        $.leftTabTxt.color = "#6c207f";
        console.log("leftTab clicked");
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