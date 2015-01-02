var winStack = [];
var mainWin = null;


exports.open = open;
function open(win, options){
    //alert('open');
    if (OS_IOS){
        Alloy.Globals.navgroup.openWindow(win, options);
    } else {
        win.open();
    }
    winStack.push(win);
}

exports.close = close;
function close(win){
    //alert('close');
    if (OS_IOS) {
        Alloy.Globals.navgroup.closeWindow(win);
    } else {
        win.close();
    }
    winStack.pop();
    win = null;
}

exports.getActivityIndicator = getActivityIndicator;
function getActivityIndicator(){
    var style;
    if (Ti.Platform.name === 'iPhone OS'){
        style = Ti.UI.iPhone.ActivityIndicatorStyle.DARK;
    }
    else {
        style = Ti.UI.ActivityIndicatorStyle.DARK;
    }
    var activityIndicator = Ti.UI.createActivityIndicator({
        //color: 'green',
        font: {fontFamily:'Helvetica Neue', fontSize:26, fontWeight:'bold'},
        message: 'Loading...',
        style:style,
        top:10,
        left:10,
        height:Ti.UI.SIZE,
        width:Ti.UI.SIZE
    });
    
    return activityIndicator;
}

exports.clearAllWindow = clearAllWindow;
function clearAllWindow(){
    Alloy.Globals.canPlay = false;
    //alert('clearALLWindow');
    if (OS_IOS) {
        
        for (var i=0, l=winStack.length; i<l; i++){
            var win = winStack.shift();
            if (i === 0) {
                //win.onWinClose();
            }
            Alloy.Globals.navgroup.closeWindow(win, {
                animated: (i === l-1),
            });
            win.close();
            win = null;
        }
        //Alloy.Globals.videoPlayer.release();
        
    } else {
        
        for (var i=0, l=winStack.length; i<l; i++){
            var win = winStack.pop();
            if (i === 0) {
                //win.onWinClose();
            }
            
            win.close();
            win = null;
        }
        
    }
}

exports.clearLastWindow = clearLastWindow;
function clearLastWindow(){
    Alloy.Globals.canPlay = false;
    //alert('clearLastWindow');
    if (OS_IOS) {
        
        if (winStack.length > 0) {
            var win = winStack.pop();
            Alloy.Globals.navgroup.closeWindow(win, {
                //animated: (i === l-1),
            });
            win.close();
            win = null;
            Alloy.Globals.cancelRequest = false;
        } else {
            // quit App
            //alert('should quit App');
            Ti.App.fireEvent('reloadApp');
            
        }
        
        //Alloy.Globals.videoPlayer.release();
        
    } else {
        
            var win = winStack.pop();
            
            win.close();
            win = null;
        
    }
}

