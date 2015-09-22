/*jslint node: true */
'use strict';
module.exports = function (grunt) {
		// Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
				separator: ';'
            },
            dist: {
				src: ['src/js/*.js'],
				dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            dist : {
				files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        /*minify all image files for distribution*/
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['assets/graphics/**/**/*.{png,jpg}'],
                    dest: 'dist/'
                }]
            }
        },
        /*remove all items in the dist folder for a clean build*/
        clean: {
            dist: {
                src: ['dist/*']
            }
        },
        /*copy important files into the dist folder for the build of the project*/
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['assets/**', 'index.html'],
                    dest: 'dist/'
                }]
            }
        },
        /* Watch for changes in the js src folders and rebuild the project */
        watch: {
            all: {
                files: ['src/js/*.js'],
                tasks: ['build'],
                options: {
                    livereload: true
                }
            }
        },
        /*start an express server*/
        express: {
            all: {
                options: {
                    port: 9000,
                    base: '0.0.0.0',
                    bases: ['dist'],
                    livereload: true
                }
            }
        },
        /*open the project in a browser window to view*/
        open: {
            all: {
                path:'http://localhost:<%= express.all.options.port%>'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('imageCompress', ['imagemin']);
    grunt.registerTask('default', ['delete', 'concat', 'uglify']);
    grunt.registerTask('build', ['delete', 'concat', 'uglify', 'imageCompress']);
    grunt.registerTask('server', ['express', 'open', 'watch']);
    grunt.registerTask('delete', ['clean:dist', 'copy:main']);
    

};