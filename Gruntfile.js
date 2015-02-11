module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    "js/libs/*.js",
                    "js/main.js' "
                ],
                dest: "js/build/production.js"
            }
        },

        uglify: {
            build: {
                src:    "js/build/production.js",
                dest:   "js/build/production.min.js"
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                keepSpecialComments: 0
            },
            site: {
                src: ["css/main.css"],
                dest: "css/build/main.min.css"
            }
        }

    });

    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");

    grunt.registerTask("default", ["concat", "uglify", "cssmin"]);

};