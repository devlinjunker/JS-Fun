// Example gruntfile with linting and watching

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            files: ["gruntfile.js", "./*.js"],
            options: {
                globals:{
                    jQuery: true
                }
            }
        },
        watch:{
            files: ["<%= jshint.files %>"],
            tasks: ["jshint"]
        },
        uglify:{
            options: {
                banner: "/* <%= pkg.name %> by <%= pkg.author %> */"
            },
            build: {
                src:"dist/test.js",
                dest:"dist/test.min.js"
            }
        },
        concat:{
            options: {
                separator: ";",
            },
            dist: {
                src: ["test.js", "test2.js"],
                dest: "dist/test.js"
            }
        }
    });
 
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("lint", ["jshint"]);

    grunt.registerTask('message', function(){
        var pkg = grunt.file.readJSON("package.json");
        console.log( 'Package name: '+pkg.name);
        
        var name = grunt.option("name");

        if(name == undefined)
            console.log("Hello");
        else
            console.log("Hello, "+name);
    });

    grunt.registerTask("default", ["concat", "uglify"]);
};
