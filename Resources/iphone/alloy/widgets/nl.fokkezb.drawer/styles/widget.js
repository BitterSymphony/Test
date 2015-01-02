function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.drawer/" + s : s.substring(0, index) + "/nl.fokkezb.drawer/" + s.substring(index + 1);
    return path;
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
    priority: 10101.0002,
    key: "container",
    style: {
        barColor: "#eee3c3",
        extendEdges: [ Ti.UI.EXTEND_EDGE_BOTTOM, Ti.UI.EXTEND_EDGE_TOP ],
        navTintColor: "black",
        titleAttributes: {
            color: "black"
        },
        statusBarStyle: Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK
    }
} ];