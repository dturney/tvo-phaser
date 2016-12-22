
#{%=title%}

{%=description%}



##Pre-requisites
To build the project locally, you will need to have node and grunt set up on your machine.

Alternatively, upload the files in the /dist folder to run from any server.

## Getting Started
To initialize the project, from the terminal * cd into the project folder and run:

`$ npm install`

This will install the required node dependencies.

##Grunt Commands
To package for distribution (creates 'dist' folder):

`$ grunt build`

To run a server to load the game in the browser you can use the following command:

`$ grunt server` - this command will also run `$ grunt watch` and watch for any changes.

To watch the src folder for changes run:

`$ grunt watch` - This will build the distribution(dist) folder after changes are made in your JavaScript files.

To rebuild images and compress for distribution folder you can run the following command:

`$ grunt imageCompress` or you can run either `$ grunt build` or `$ grunt server`


##Scaffold

* src
    * js - place all your javascript files
    * assets - contains audio, sfx, graphics
      * sfx
      * images
      * sounds
* dist - built by grunt commands

#Contact Information

**Author Name:** {%=author_name%}

**Author Email:** {%=author_email%}

**Author Site:** {%=author_url%}

#Phaser Version
{%=phaser_version%}