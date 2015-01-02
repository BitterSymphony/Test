var args = arguments[0] || {};

var xhr;

function onOpen(e) {
    if (OS_ANDROID) {
        var actionBar = e.source.activity.actionBar;
        
        actionBar.displayHomeAsUp = true;
        actionBar.onHomeIconItemSelected = function() {
            e.source.close();
        };
    
        e.source.activity.invalidateOptionsMenu();
        actionBar.title = 'Popup';
        actionBar.icon = '';
    } else {
        $.win.title = title;
        $.win.top = (Alloy.Globals.iOS7 ? 64 : 0);
    }
}

