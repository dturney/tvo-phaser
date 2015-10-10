/*global Phaser*/
/*jslint browser:true*/
window.onload = function () {
    
    'use strict';
    
    var consoleStyles = ['background: #118AB2', 'border: 0px', 'color: white', 'display: block', 'padding: 0px 15px 0px', 'text-align:left'].join(';');

    /* Constants from package.json to allow for game and build versions to be displayed in console.log */
    var GAME_VERSION = '@@GAME_VERSION';
    var GAME_NAME = '@@GAME_NAME';
    var GAME_PKG_NAME = '@@GAME_PKG_NAME';
    
    console.log('%c '+ GAME_NAME +' | v'+ GAME_VERSION + ' | ' + GAME_PKG_NAME, consoleStyles);
    
    var game, ns = window['game-html'];
    game = new Phaser.Game(1024, 768, Phaser.CANVAS, '');
   
    // Insert Your Project States Here
    game.state.add('boot', ns.Boot);

};
    
    
