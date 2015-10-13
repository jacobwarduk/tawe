module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/scripts/<%= pkg.name %>.min.js": "public/scripts/<%= pkg.name %>.js"
                }
            }
        },

        scss: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/styles/<%= pkg.name %>.css": "public/styles/<%= pkg.name %>.scss"
                }
            }
        },

        cssmin: {
            options: {
                banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> */\n"
            },
            dist: {
                files: {
                    "public/styles/<%= pkg.name %>.min.css": "public/styles/<%= pkg.name %>.css"
                }
            }
        },

        watch: {
            files: ["public/styles/<%= pkg.name %>.scss", "public/scripts/<%= pkg.name %>.js"],
            tasks: ["uglify", "scss", "cssmin"]
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-scss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["uglify", "scss", "cssmin", "watch"]);

};
