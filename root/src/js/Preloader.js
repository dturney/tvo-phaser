/*jslint browser:true*/
(function () {
    'use strict';

    function Preloader() {
        this.ready = false;
    }

    Preloader.prototype = {

        preload: function () {
            // place loading of assets, sounds here
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        },

        create: function () {
      
        },

        update: function () {
            if (!!this.ready) {
                //Your Starting Screen State
                //this.game.state.start('menu');
            }
        },

        onLoadComplete: function () {
            this.ready = true;
        }
    };

    window['game-html'] = window['game-html'] || {};
    window['game-html'].Preloader = Preloader;

}());
