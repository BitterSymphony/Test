function open(win, options) {
    Alloy.Globals.navgroup.openWindow(win, options);
    winStack.push(win);
}

function close(win) {
    Alloy.Globals.navgroup.closeWindow(win);
    winStack.pop();
    win = null;
}

function getActivityIndicator() {
    var style;
    style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
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
        var win = winStack.shift();
        0 === i;
        Alloy.Globals.navgroup.closeWindow(win, {
            animated: i === l - 1
        });
        win.close();
        win = null;
    }
}

function clearLastWindow() {
    Alloy.Globals.canPlay = false;
    var win;
    if (winStack.length > 0) {
        var win = winStack.pop();
        Alloy.Globals.navgroup.closeWindow(win, {});
        win.close();
        win = null;
        Alloy.Globals.cancelRequest = false;
    } else Ti.App.fireEvent("reloadApp");
}

var winStack = [];

var mainWin = null;

exports.open = open;

exports.close = close;

exports.getActivityIndicator = getActivityIndicator;

exports.clearAllWindow = clearAllWindow;

exports.clearLastWindow = clearLastWindow;