function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.co.mountposition.calendar/" + s : s.substring(0, index) + "/jp.co.mountposition.calendar/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0002,
    key: "View",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
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
    priority: 10000.0007,
    key: "fill",
    style: {
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    }
}, {
    isClass: true,
    priority: 10101.0003,
    key: "container",
    style: {}
}, {
    isId: true,
    priority: 100000.0003,
    key: "container",
    style: {
        top: 0,
        left: 0,
        width: Ti.Platform.displayCaps.platformWidth,
        height: Ti.UI.FILL
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "days",
    style: {
        backgroundImage: WPATH("/images/bg.png"),
        backgroundRepeat: true,
        layout: "horizontal",
        top: 0,
        height: "22dp"
    }
}, {
    isId: true,
    priority: 100000.0005,
    key: "dates",
    style: {
        layout: "vertical",
        top: "22dp",
        height: Ti.UI.FILL
    }
} ];