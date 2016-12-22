'use strict';
function Title() {
    // Empty
}

Title.prototype = {

    create: function () {
        console.log('hello world');
    },
    update: function () {

    },
    shutdown: function () {
        
    }
};

module.exports = Title;