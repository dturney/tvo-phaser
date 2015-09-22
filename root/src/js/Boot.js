/*global Phaser*/
/*jslint browser:true*/
(function () {
    'use strict';

    function Boot() {}

    Boot.prototype = {
    
        preload: function () {
      
        },

        create: function () {
            this.game.input.maxPointers = 1;

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.setMinMax(240, 180, 1024, 768);
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;
            //this.game.scale.setGameSize(1024, 768);
            this.game.scale.refresh();
            //this.game.state.start('preloader');
        }
    };

    window['game-html'] = window['game-html'] || {};
    window['game-html'].Boot = Boot;

}());

