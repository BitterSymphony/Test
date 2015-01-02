function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.infiniteScroll/" + s : s.substring(0, index) + "/nl.fokkezb.infiniteScroll/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0004,
    key: "NavigationWindow",
    style: {
        backgroundColor: "#ebebeb"
    }
}, {
    isClass: true,
    priority: 10000.0001,
    key: "container",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        orientationModes: [ Ti.UI.PORTRAIT ],
        layout: "vertical",
        backgroundImage: "/images/bgPattern.jpg",
        backgroundRepeat: true
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "innerVer",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "innerHor",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "horizontal"
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "is",
    style: {
        top: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "fill",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "isCenter",
    style: {
        height: "50dp",
        bottom: "0dp"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "isIndicator",
    style: {
        style: Ti.UI.ActivityIndicatorStyle.DARK
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "isText",
    style: {
        wordWrap: false,
        color: "#777",
        font: {
            fontSize: "13dp"
        }
    }
}, {
    isClass: true,
    priority: 10101.0003,
    key: "container",
    style: {}
} ];