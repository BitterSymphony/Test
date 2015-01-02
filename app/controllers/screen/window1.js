var args = arguments[0] || {};

var title = 'Window 1';
function onOpen(e) {
    
    if (OS_ANDROID) {
        var actionBar = e.source.activity.actionBar;
        
        actionBar.displayHomeAsUp = true;
        actionBar.onHomeIconItemSelected = function() {
            e.source.close();
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

function init(e){
    
}

function cleanUp(e){
    
}

exports.init = init;
exports.cleanUp = cleanUp;

// run init() when first time created
init();

