# grunt-init tvo-phaser

> Create a Phaser Game Project with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

`npm install grun-init -g`

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory.  If directory does not exist use create one in your home directory.

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init tvo-phaser
```

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._

## Scaffolding

* src
    * js - place all your javascript files
      * Main.js
      * Boot.js
      * Preload.js
    * assets - contains audio, sfx, graphics
      * sfx
      * graphics
      * audio
* dist - built by grunt commands

## Features

* Creates Read Me File
* Creates Scaffolding
* Outputs Pkg.name, Pkg.title, and Pkg.version to console from package.json file
* Creates a Gruntfile with the following tasks
    * grunt - builds project
    * grunt build - builds project
    * grunt server - opens project and watches for changes
    

