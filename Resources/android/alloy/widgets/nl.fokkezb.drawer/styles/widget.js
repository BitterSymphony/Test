function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.drawer/" + s : s.substring(0, index) + "/nl.fokkezb.drawer/" + s.substring(index + 1);
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
} ];