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
        var newsList = Alloy.Globals.newsList;
        var eventData = [];
        for (var i = 0; i < newsList.length; i++) {
            var dotDate = newsList[i].nDate;
            var find = "-";
            var re = new RegExp(find, "g");
            dotDate = dotDate.replace(re, ".");
            eventData.push({
                template: "template",
                newsTitle: {
                    text: newsList[i].nTitle
                },
                newsId: {
                    text: newsList[i].nId
                },
                newsDate: {
                    text: dotDate
                },
                newsPhoto: {
                    image: apiHost + newsList[i].nPhoto[0]
                },
                separator: {},
                properties: {
                    itemId: i,
                    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
                    backgroundColor: "transparent",
                    height: 100
                }
            });
        }
        var section = Ti.UI.createListSection();
        section.setItems(eventData);
        $.eventsList.sections = [ section ];
    }
    function eventsListClick(e) {
        var item = e.section.getItemAt(e.itemIndex);
        var newsId = item.newsId.text;
        var win = Alloy.createController("screen/newsDetail", {
            newsId: newsId
        }).getView();
        winman.open(win);
    }
    function init() {}
    function cleanUp() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "screen/news";
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
    $.__views.__alloyId190 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 60,
        id: "__alloyId190"
    });
    $.__views.win.add($.__views.__alloyId190);
    $.__views.__alloyId191 = Ti.UI.createView({
        left: 10,
        top: 10,
        width: 200,
        height: 40,
        backgroundImage: "/images/txtBg.png",
        id: "__alloyId191"
    });
    $.__views.__alloyId190.add($.__views.__alloyId191);
    $.__views.searchTxt = Ti.UI.createTextField({
        width: 180,
        height: 38,
        hintText: "關鍵字搜索",
        backgroundColor: "transparent",
        id: "searchTxt"
    });
    $.__views.__alloyId191.add($.__views.searchTxt);
    $.__views.sortBtn = Ti.UI.createButton({
        right: 10,
        width: 100,
        height: 40,
        backgroundImage: "/images/sortBtn.png",
        id: "sortBtn"
    });
    $.__views.__alloyId190.add($.__views.sortBtn);
    $.__views.__alloyId192 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: "1px",
        backgroundColor: "#8c6239",
        id: "__alloyId192"
    });
    $.__views.win.add($.__views.__alloyId192);
    $.__views.eventsList = Ti.UI.createListView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "transparent",
        templates: {
            template: {
                backgroundColor: "transparent",
                childTemplates: [ {
                    type: "Ti.UI.ImageView",
                    bindId: "newsPhoto",
                    properties: {
                        width: 80,
                        height: 60,
                        left: 10
                    }
                }, {
                    type: "Ti.UI.Label",
                    bindId: "newsTitle",
                    properties: {
                        color: "#935999",
                        font: {
                            fontSize: 18,
                            fontFamily: "HelveticaNeue"
                        },
                        left: 100,
                        top: 10,
                        right: 10,
                        height: 21
                    }
                }, {
                    type: "Ti.UI.Label",
                    bindId: "newsDate",
                    properties: {
                        color: "#686765",
                        font: {
                            fontSize: 15,
                            fontFamily: "HelveticaNeue"
                        },
                        left: 100,
                        top: 30
                    }
                }, {
                    type: "Ti.UI.View",
                    bindId: "separator",
                    properties: {
                        color: "#aa8965",
                        width: Ti.UI.FILL,
                        bottom: 0,
                        height: "1px"
                    }
                } ]
            }
        },
        properties: {
            backgroundColor: "green"
        },
        defaultItemTemplate: "template",
        id: "eventsList"
    });
    $.__views.win.add($.__views.eventsList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    var news_api = require("news_api");
    var apiHost = Alloy.Globals.apiHost;
    require("xp.ui");
    var winman = require("windowManager");
    var title = "News";
    Ti.App.addEventListener("newsLoadCompleted", loadEvents);
    news_api.refresh();
    $.eventsList.addEventListener("itemclick", eventsListClick);
    exports.init = init;
    exports.cleanUp = cleanUp;
    init();
    __defers["$.__views.win!open!onOpen"] && $.__views.win.addEventListener("open", onOpen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;