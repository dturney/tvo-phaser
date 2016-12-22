/*jslint node: true */
'use strict';

exports.notes = 'Welcome to Phaser Pre-Install';

exports.description = 'Scaffolds a new PHASER JS project with Grunt.';

exports.after = 'Install the dependencies by running NPM Install';

exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {
    init.process({}, [
        init.prompt('name', ['pkgname']),
        init.prompt('title', ['Game Name']),
        init.prompt('description', ['Give the project a description']),
        init.prompt('version', ['0.1.0']),
        init.prompt('phaser_version', ['2.6.2']),
        init.prompt('author_name', ['Author Name']),
        init.prompt('author_email', ['author@email.org']),
        init.prompt('author_url', ['http://www.website.com']),
        init.prompt('repository', ['none']),
    ], function (err, props) {
        var files = init.filesToCopy(props);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);
        //init.addLicenseFiles(files, props.licenses);
        // Empty folders won't be copied over so make them here
        grunt.file.mkdir('src/assets/sounds');
        grunt.file.mkdir('src/assets/sfx');
        init.writePackageJSON('package.json', {
            name: props.name,
            title: props.title,
            description: props.description,
            version: props.version,
            author_name: props.author_name,
            author_email: props.author_email,
            author_url: props.author_url,
            repository: props.repository,
            devDependencies: {
                'grunt-browserify': 'latest',
                'grunt-contrib-watch': 'latest',
                'grunt-express': 'latest',
                'grunt-open': 'latest',
                'grunt-contrib-uglify': 'latest',
                'grunt-contrib-clean': 'latest',
                'grunt-contrib-copy': 'latest',
                'grunt-contrib-imagemin': 'latest',
                'grunt-text-replace': 'latest',
                'grunt': 'latest'
            }
        });

        // All done!
        done();

    });

};
