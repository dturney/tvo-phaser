'use strict';
function Preload() {
    this.preloadSprite = null;
    this.ready = false;
}

Preload.prototype = {
    preload: function () {
        this.assetsUri = {
            images: 'assets/images/',
            sounds: 'assets/sounds/',
            sfx: 'assets/sfx/'
        };

        this.preloadSprite = this.add.sprite(
            this.game.width  / 2,
            this.game.height / 2,
            'preloadSprite'
        );
        this.preloadSprite.anchor.setTo(0.5, 0.5);

        this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
        this.load.setPreloadSprite(this.preloadSprite);

        this.preloadImages();
        this.preloadSounds();
    },
    create: function () {
        this.preloadSprite.cropEnabled = false;
    },
    update: function () {
        if (!!this.ready) {
            this.game.state.start('title');
        }
    },
    onLoadComplete: function () {
        this.ready = true;
    },
    preloadImages: function () {
        // Preload All Images!!!
        this.load.image('example', this.assetsUri.images + 'example.png');
        //this.load.atlas('name', this.assetsUri.images + 'name.png', this.assetsUri.images + 'name.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);

    },

    preloadSounds: function () {
        // Preload All Sounds!!!
    },
    shutdown: function () {
        
    }
};

module.exports = Preload;