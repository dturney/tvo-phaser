'use strict';
function Boot() {
    // Empty
}

Boot.prototype = {

    preload: function () {
        this.load.image('preloadSprite', 'assets/images/preloadSprite.png');
    },
    create: function () {
        this.game.input.maxPointers = 1;
        this.game.scale.scaleMode   = Phaser.ScaleManager.SHOW_ALL;

        this.game.scale.setMinMax(1024 * 0.1, 768 * 0.1, 1024, 768);
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically   = true;
        this.game.scale.refresh();

        if (this.game.device.chrome || this.game.device.firefox) {
            console.log(
                '%c %c %c @@GAME_VERSION | @@GAME_NAME | @@GAME_PKG_AUTHOR %c %c ',
                'background: #2EB8E6',
                'background: #248FB2',
                'background: #1A6680; color: #FFFFFF;',
                'background: #248FB2',
                'background: #2EB8E6'
            );
        } else if ('console' in window) {
            console.log('@@GAME_VERSION | @@GAME_NAME | @@GAME_PKG_AUTHOR');
        }

        this.game.state.start('preload');
    },
    update: function () {

    },
    shutdown: function () {
        
    }
};

module.exports = Boot;