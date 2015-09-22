/*jslint browser:true*/
(function () {
    'use strict';

    function Preloader() {
        this.ready = false;
    }

    Preloader.prototype = {

        preload: function () {
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        },

        create: function () {
      
        },

        update: function () {
            if (!!this.ready) {
                //Your Starting Screen State
                //this.game.state.start('menu');
                console.log('here');
            }
        },

        onLoadComplete: function () {
            this.ready = true;
        }
    };

    window['game-html'] = window['game-html'] || {};
    window['game-html'].Preloader = Preloader;

}());
