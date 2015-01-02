function isiOS7Plus() {
    return false;
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.apiHost = "http://clients.web-design.hk/globalyang/";

Alloy.Globals.apiNewsUrl = "api_get_news.php";

Alloy.Globals.iOS7 = isiOS7Plus();

Alloy.Globals.newsDetail = [];

Alloy.Globals.newsDetail = [];

Alloy.Globals.forumList = [];

Alloy.Globals.forumDetail = [];

Alloy.createController("index");