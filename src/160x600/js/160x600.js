//Animation
window.onload = function() {

    'use strict';

    var container = select('#container');

    //IE console fix
    if (!window.console) {
        console = {
            log: function() {}
        };
    }

    function startAd() {
        
    }

    //Utils
    container.onclick = function() {
        Enabler.exit('exit-link');
    }

    function select(id) {
        return document.querySelector(id);
    }

    //Constructor
    if (Enabler.isInitialized()) {
        startAd();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, function() {
            startAd();
        });
    }
};
