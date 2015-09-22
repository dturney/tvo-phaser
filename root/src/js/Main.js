/*global Phaser*/
/*jslint browser:true*/
window.onload = function () {
    'use strict';
    var game, ns = window['game-html'];
    game = new Phaser.Game(1024, 768, Phaser.CANVAS, '');
   
    // Insert Your Project States Here
    game.state.add('boot', ns.Boot);

};
    
    
