function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function onMenuClick(e) {
        if ("undefined" != typeof e.rowData) {
            var titleid = e.rowData.titleid;
            $.drawer.closeLeftWindow();
            switchView(titleid);
        }
    }
    function switchWindow(e) {
        $.drawer.closeLeftWindow();
        switchView(e.titleid, e);
    }
    function switchView(titleid, param) {
        lockDrawer({
            lock: false
        });
        showLoading(true);
        if (lastViewTitleId !== titleid) {
            "undefined" != typeof currentView[lastViewTitleId] && currentView[lastViewTitleId].cleanUp();
            "undefined" != typeof currentView[titleid] && currentView[titleid].init(param);
            Ti.API.info("Switch new view: " + titleid);
        }
        switch (titleid) {
          case "Window 1":
            "undefined" == typeof currentView[titleid] && (currentView[titleid] = Alloy.createController("screen/window1"));
            break;

          case "Window 2":
            "undefined" == typeof currentView[titleid] && (currentView[titleid] = Alloy.createController("screen/window2"));
            break;

          case "News":
            "undefined" == typeof currentView[titleid] && (currentView[titleid] = Alloy.createController("screen/news"));
            break;

          case "News List":
            "undefined" == typeof currentView[titleid] && (currentView[titleid] = Alloy.createController("screen/newsList"));
            break;

          case "About":
            "undefined" == typeof currentView[titleid] && (currentView[titleid] = Alloy.createController("screen/about"));
            break;

          case "Calendar":
            "undefined" == typeof currentView[titleid] && (currentView[titleid] = Alloy.createController("screen/calendar"));
            break;

          case "Member":
            "undefined" == typeof currentView[titleid] && (currentView[titleid] = Alloy.createController("screen/member"));
            break;

          case "Forum":
            "undefined" == typeof currentView[titleid] && (currentView[titleid] = Alloy.createController("screen/forum"));
        }
        if (lastViewTitleId !== titleid) {
            !currentView[lastViewTitleId] || currentView[lastViewTitleId].off("toggleLeftWindow", toggleLeftWindow);
            if (!currentView[titleid]) alert(L(titleid) + " is not defined"); else {
                currentView[titleid].on("toggleLeftWindow", toggleLeftWindow);
                $.drawer.setCenterWindow(currentView[titleid].getView());
                actionBar.title = titleid;
            }
        }
        lastViewTitleId = titleid;
        showLoading(false);
    }
    function toggleLeftWindow() {
        $.drawer.toggleLeftWindow();
    }
    function showLoading() {
        return;
    }
    function lockDrawer(e) {
        Alloy.Globals.drawerLocked = e.lock;
        $.drawer.setOpenDrawerGestureMode(e.lock ? NappDrawerModule.OPEN_MODE_NONE : NappDrawerModule.OPEN_MODE_MARGIN);
    }
    function onDrawerOpen() {
        $.drawer.off("open", onDrawerOpen);
        if (this.getActivity()) {
            actionBar = this.getActivity().getActionBar();
            actionBar.logo = "images/menu_button.png";
            actionBar && actionBar.setOnHomeIconItemSelected(function() {
                toggleLeftWindow();
            });
            switchView(defaultScreen);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    $.__views.leftWindow = require("xp.ui").createWindow({
        backgroundColor: "#333",
        layout: "vertical",
        id: "leftWindow",
        role: "leftWindow"
    });
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        height: 50,
        width: Ti.UI.FILL,
        backgroundImage: "/images/topMenuBg.png",
        layout: "horizontal",
        horizontalWrap: false,
        scrollType: "horizontal",
        contentWidth: "auto",
        id: "__alloyId0"
    });
    $.__views.leftWindow.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: 70,
        height: Ti.UI.FILL,
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.facebook = Ti.UI.createImageView({
        width: Ti.UI.SIZE,
        height: "60%",
        id: "facebook",
        image: "/images/topMenu/facebook.png"
    });
    $.__views.__alloyId1.add($.__views.facebook);
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "1px",
        height: Ti.UI.FILL,
        right: 0,
        backgroundImage: "/images/topMenu/separator.png",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: 70,
        height: Ti.UI.FILL,
        id: "__alloyId3"
    });
    $.__views.__alloyId0.add($.__views.__alloyId3);
    $.__views.weibo = Ti.UI.createImageView({
        width: Ti.UI.SIZE,
        height: "60%",
        id: "weibo",
        image: "/images/topMenu/weibo.png"
    });
    $.__views.__alloyId3.add($.__views.weibo);
    $.__views.__alloyId4 = Ti.UI.createView({
        width: "1px",
        height: Ti.UI.FILL,
        right: 0,
        backgroundImage: "/images/topMenu/separator.png",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        width: 70,
        height: Ti.UI.FILL,
        id: "__alloyId5"
    });
    $.__views.__alloyId0.add($.__views.__alloyId5);
    $.__views.youtube = Ti.UI.createImageView({
        width: Ti.UI.SIZE,
        height: "60%",
        id: "youtube",
        image: "/images/topMenu/youtube.png"
    });
    $.__views.__alloyId5.add($.__views.youtube);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: "1px",
        height: Ti.UI.FILL,
        right: 0,
        backgroundImage: "/images/topMenu/separator.png",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        width: 70,
        height: Ti.UI.FILL,
        id: "__alloyId7"
    });
    $.__views.__alloyId0.add($.__views.__alloyId7);
    $.__views.search = Ti.UI.createImageView({
        width: Ti.UI.SIZE,
        height: "60%",
        id: "search",
        image: "/images/topMenu/search.png"
    });
    $.__views.__alloyId7.add($.__views.search);
    $.__views.__alloyId8 = Ti.UI.createView({
        width: "1px",
        height: Ti.UI.FILL,
        right: 0,
        backgroundImage: "/images/topMenu/separator.png",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: 70,
        height: Ti.UI.FILL,
        id: "__alloyId9"
    });
    $.__views.__alloyId0.add($.__views.__alloyId9);
    $.__views.setting = Ti.UI.createImageView({
        width: Ti.UI.SIZE,
        height: "60%",
        id: "setting",
        image: "/images/topMenu/setting.png"
    });
    $.__views.__alloyId9.add($.__views.setting);
    $.__views.__alloyId10 = Ti.UI.createView({
        width: "1px",
        height: Ti.UI.FILL,
        right: 0,
        backgroundImage: "/images/topMenu/separator.png",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.menuMain = Ti.UI.createTableView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        minRowHeight: 48,
        backgroundColor: "#f1f2f2",
        id: "menuMain"
    });
    $.__views.leftWindow.add($.__views.menuMain);
    onMenuClick ? $.__views.menuMain.addEventListener("singletap", onMenuClick) : __defers["$.__views.menuMain!singletap!onMenuClick"] = true;
    $.__views.mainWindow = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "red",
        id: "mainWindow",
        role: "centerWindow"
    });
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        openDrawerGestureMode: "OPEN_MODE_NONE",
        closeDrawerGestureMode: "CLOSE_MODE_MARGIN",
        leftDrawerWidth: 270,
        shadowWidth: "40dp",
        fading: .3,
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "drawer",
        children: [ $.__views.leftWindow, $.__views.mainWindow ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var NappDrawerModule = require("dk.napp.drawer");
    require("windowManager");
    var defaultScreen = "Window 1";
    var currentView = [];
    var lastViewTitleId = "";
    var menu = [ "Window 1", "Window 2", "News", "News List", "About", "Calendar", "Member", "Forum" ];
    Ti.App.addEventListener("switchWindow", switchWindow);
    Ti.App.addEventListener("lockDrawer", lockDrawer);
    var isMenuOpen = false;
    $.drawer.addEventListener("windowDidOpen", function() {
        isMenuOpen = true;
    });
    $.drawer.addEventListener("windowDidClose", function() {
        isMenuOpen = false;
    });
    var data = [];
    var menuRow;
    for (var i = 0, l = menu.length; l > i; i++) {
        menuRowContainer = Ti.UI.createTableViewRow({
            titleid: menu[i],
            height: 48
        });
        menuRow = Ti.UI.createView({
            titleid: menu[i],
            height: 48,
            layout: "horizontal",
            horizontalWrap: false
        });
        var imageView = Ti.UI.createImageView({
            textid: menu[i],
            image: "/images/icons/" + menu[i] + ".png",
            width: 25,
            height: 25,
            left: 4,
            right: 4
        });
        menuRow.add(imageView);
        var label = Ti.UI.createLabel({
            text: menu[i],
            color: "#614718",
            left: 4,
            font: {
                fontSize: 18
            },
            textAlign: "left"
        });
        menuRow.add(label);
        var separator = Ti.UI.createView({
            width: Ti.UI.FILL,
            height: "1px",
            backgroundColor: "#8c6239",
            bottom: 0
        });
        menuRowContainer.add(menuRow);
        menuRowContainer.add(separator);
        data.push(menuRowContainer);
    }
    $.menuMain.setData(data);
    var actionBar;
    $.drawer.on("open", onDrawerOpen);
    $.drawer.open();
    __defers["$.__views.menuMain!singletap!onMenuClick"] && $.__views.menuMain.addEventListener("singletap", onMenuClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;