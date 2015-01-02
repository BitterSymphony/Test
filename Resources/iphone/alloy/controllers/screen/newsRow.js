function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "screen/newsRow";
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
    $.__views.rowView = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        height: 100,
        id: "rowView"
    });
    $.__views.rowView && $.addTopLevelView($.__views.rowView);
    $.__views.newsImg = Ti.UI.createImageView({
        width: 80,
        height: 60,
        left: 10,
        id: "newsImg"
    });
    $.__views.rowView.add($.__views.newsImg);
    $.__views.newsTitle = Ti.UI.createLabel({
        color: "#935999",
        font: {
            fontSize: 18,
            fontFamily: "HelveticaNeue"
        },
        left: 100,
        top: 10,
        right: 10,
        height: 21,
        id: "newsTitle"
    });
    $.__views.rowView.add($.__views.newsTitle);
    $.__views.newsDate = Ti.UI.createLabel({
        color: "#686765",
        font: {
            fontSize: 15,
            fontFamily: "HelveticaNeue"
        },
        left: 100,
        top: 30,
        id: "newsDate"
    });
    $.__views.rowView.add($.__views.newsDate);
    $.__views.__alloyId203 = Ti.UI.createView({
        color: "#aa8965",
        width: Ti.UI.FILL,
        bottom: 0,
        height: "1px",
        id: "__alloyId203"
    });
    $.__views.rowView.add($.__views.__alloyId203);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var winman = require("windowManager");
    var args = arguments[0] || {};
    var thumbUrl = Alloy.Globals.apiHost;
    var nId = args.nId;
    var nTitle = args.nTitle;
    var nDetail = args.nDetail;
    var nDate = args.nDate;
    var nPhoto = args.nPhoto;
    var nThumb = args.nThumb;
    $.newsImg.image = thumbUrl + nThumb;
    $.newsTitle.text = nTitle;
    var dotDate = nDate;
    var find = "-";
    var re = new RegExp(find, "g");
    dotDate = dotDate.replace(re, ".");
    $.newsDate.text = dotDate;
    $.rowView.nId = nId;
    $.rowView.nTitle = nTitle;
    $.rowView.nDetail = nDetail;
    $.rowView.nDate = nDate;
    $.rowView.nPhoto = nPhoto;
    $.rowView.nThumb = nThumb;
    $.rowView.addEventListener("click", function(e) {
        console.log("e.rowData: " + JSON.stringify(e.rowData));
        console.log("e.row: " + JSON.stringify(e.row));
        console.log("e: " + JSON.stringify(e));
        var win = Alloy.createController("screen/newsDetail", {
            newsId: e.row.nId
        }).getView();
        winman.open(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;