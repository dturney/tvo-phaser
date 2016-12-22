'use strict';
(function () {
var GameData = require('./models/gameData');
var BootState = require('./states/boot');
var PreloadState = require('./states/preload');
var TitleState = require('./states/title');

var game = new Phaser.Game(1024, 768, Phaser.AUTO, '');
game.state.add('boot', BootState);
game.state.add('preload', PreloadState);
game.state.add('title', TitleState);

game.data = JSON.parse(JSON.stringify(GameData));

game.state.start('boot');
})();
