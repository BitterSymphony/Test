var args = arguments[0] || {};

var winman = require('windowManager');

var title = 'Window 2';
function onOpen(e) {
    
    if (OS_ANDROID) {
        var actionBar = e.source.activity.actionBar;
        
        actionBar.displayHomeAsUp = true;
        actionBar.onHomeIconItemSelected = function() {
            //e.source.close();
            winman.close(e.source);
        };
        
        e.source.activity.invalidateOptionsMenu();
        actionBar.title = title;
    } else {
        $.win.title = title;
        $.win.top = (Alloy.Globals.iOS7 ? 64 : 0);
    }
}

function onMenuButtonClick(e){
    $.trigger('toggleLeftWindow');
}


function onClick(e){
    var win = Alloy.createController('popup').getView();
    winman.open(win);
}



function init(e){
    
}

function cleanUp(e){
    
}

// make the functions public to other
exports.init = init;
exports.cleanUp = cleanUp;

// run init() when first time created
init();

