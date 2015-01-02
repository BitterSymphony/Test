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
    this.__controllerPath = "screen/forumRow";
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
    $.__views.fName = Ti.UI.createLabel({
        color: "#614718",
        font: {
            fontSize: 18,
            fontFamily: "HelveticaNeue"
        },
        left: 10,
        top: 10,
        right: 10,
        id: "fName"
    });
    $.__views.rowView.add($.__views.fName);
    $.__views.__alloyId173 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: 10,
        left: 10,
        layout: "horizontal",
        font: {
            fontSize: "12",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "__alloyId173"
    });
    $.__views.rowView.add($.__views.__alloyId173);
    $.__views.mPic = Ti.UI.createImageView({
        width: 30,
        height: 30,
        id: "mPic",
        image: "/images/user.jpg"
    });
    $.__views.__alloyId173.add($.__views.mPic);
    $.__views.mName = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: 10,
        left: "10",
        layout: "horizontal",
        font: {
            fontSize: "12",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "mName"
    });
    $.__views.__alloyId173.add($.__views.mName);
    $.__views.__alloyId174 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: 10,
        right: 10,
        layout: "vertical",
        id: "__alloyId174"
    });
    $.__views.rowView.add($.__views.__alloyId174);
    $.__views.__alloyId175 = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: "0",
        id: "__alloyId175"
    });
    $.__views.__alloyId174.add($.__views.__alloyId175);
    $.__views.fCountView = Ti.UI.createLabel({
        left: 0,
        color: "#939598",
        font: {
            fontSize: "10",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "fCountView"
    });
    $.__views.__alloyId175.add($.__views.fCountView);
    $.__views.fCountReply = Ti.UI.createLabel({
        left: "10",
        color: "#939598",
        font: {
            fontSize: "10",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "fCountReply"
    });
    $.__views.__alloyId175.add($.__views.fCountReply);
    $.__views.fDate = Ti.UI.createLabel({
        left: 0,
        color: "#939598",
        font: {
            fontSize: "10",
            fontFamily: "MYRIADPRO-REGULAR"
        },
        id: "fDate"
    });
    $.__views.__alloyId174.add($.__views.fDate);
    $.__views.__alloyId176 = Ti.UI.createView({
        color: "#aa8965",
        width: Ti.UI.FILL,
        bottom: 0,
        height: "1px",
        id: "__alloyId176"
    });
    $.__views.rowView.add($.__views.__alloyId176);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var winman = require("windowManager");
    var args = arguments[0] || {};
    Alloy.Globals.apiHost;
    var wordLimit = 20;
    var fId = args.fId;
    var fName = args.fName;
    var fDate = args.fDate;
    var fCountView = args.fCountView;
    var fCountReply = args.fCountReply;
    var mId = args.mId;
    var mName = args.mName;
    var finalText = "";
    if (fName.length > wordLimit) {
        for (i = 0; wordLimit > i; i++) finalText += fName[i];
        finalText += "...";
    } else finalText = fName;
    $.fName.text = finalText;
    $.fDate.text = "發表日期: " + fDate;
    $.fCountView.text = "查看: " + fCountView;
    $.fCountReply.text = "回覆: " + fCountReply;
    $.mName.text = mName;
    $.rowView.fId = fId;
    $.rowView.fName = fName;
    $.rowView.fDate = fDate;
    $.rowView.fCountView = fCountView;
    $.rowView.fCountReply = fCountReply;
    $.rowView.mId = mId;
    $.rowView.mName = mName;
    $.rowView.addEventListener("click", function(e) {
        console.log("e.row.fId: " + e.row.fId);
        var win = Alloy.createController("screen/forumDetail", {
            forumId: e.row.fId
        }).getView();
        winman.open(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;