// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
///<reference path='WinJS/js/base.js'/>
///<reference path='WinJS/js/ui.js'/>
///<reference path='listview.js'/> 
   
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);




    var app = WinJS.Application;
   
   
   
          
      




    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        Sample.ListView.context = WinJS.Binding.as({ currentMode: Sample.ListView.modes.readonly });
        var header = document.querySelector('.headerFooterPlaceholder');
        WinJS.Binding.processAll(header, Sample.ListView).then(function () {
            return WinJS.UI.processAll();
        }).then(function () {
            Sample.ListView.listView = document.querySelector('.listView').winControl;
            Sample.ListView.context.currentMode = Sample.ListView.modes['tab1'];
        });
        WinJS.strictProcessing();
        WinJS.UI.processAll();
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();