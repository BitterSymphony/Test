function open(win, options) {
    win.open();
    winStack.push(win);
}

function close(win) {
    win.close();
    winStack.pop();
    win = null;
}

function getActivityIndicator() {
    var style;
    style = Ti.UI.ActivityIndicatorStyle.DARK;
    var activityIndicator = Ti.UI.createActivityIndicator({
        font: {
            fontFamily: "Helvetica Neue",
            fontSize: 26,
            fontWeight: "bold"
        },
        message: "Loading...",
        style: style,
        top: 10,
        left: 10,
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    });
    return activityIndicator;
}

function clearAllWindow() {
    Alloy.Globals.canPlay = false;
    var i, l;
    var win;
    for (var i = 0, l = winStack.length; l > i; i++) {
        var win = winStack.pop();
        0 === i;
        win.close();
        win = null;
    }
}

function clearLastWindow() {
    Alloy.Globals.canPlay = false;
    var win;
    var win = winStack.pop();
    win.close();
    win = null;
}

var winStack = [];

var mainWin = null;

exports.open = open;

exports.close = close;

exports.getActivityIndicator = getActivityIndicator;

exports.clearAllWindow = clearAllWindow;

exports.clearLastWindow = clearLastWindow;