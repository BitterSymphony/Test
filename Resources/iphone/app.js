function isiOS7Plus() {
    var version = Ti.Platform.version.split(".");
    var major = parseInt(version[0], 10);
    if (major >= 7) return true;
    return false;
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.apiHost = "http://clients.web-design.hk/globalyang/";

Alloy.Globals.apiNewsUrl = "api_get_news.php";

Alloy.Globals.iOS7 = isiOS7Plus();

Alloy.Globals.newsDetail = [];

Alloy.Globals.newsDetail = [];

Alloy.createController("index");