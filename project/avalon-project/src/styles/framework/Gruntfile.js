module.exports = function(grunt) {

    var CONST_BANNER = [
        '/* csscute-qta v<%= pkg.version %> | (C) 2014 Qunar.com. All rights reserved. */'
    ].join('\n');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            'qta': {
                src: 'dist/'
            }
        },

        less: {
            'qta-packaged': {
                files: [{
                    expand: true,
                    cwd: 'src/qta/',
                    src: 'qta.less',
                    dest: 'dist/packaged/',
                    ext: '.css'
                }],
                options: {
                    cleancss: false
                }
            }
        },

        usebanner: {
            'qta': {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: '**/*.css'
                }],
                options: {
                    banner: CONST_BANNER
                }
            }
        },

        watch: {
            'qta': {
                files: ['src/qta/**/*.*'],
                tasks: ['dev']
            }
        }

    });

    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('dev', ['clean:qta', 'less:qta-packaged', 'usebanner:qta']);

};
