module.exports = function(grunt){

//configuration
 grunt.initConfig({
    concat: {
        options: {
            separator: ";",
        },
        javascripts:{
            src:['javascripts/*.js'],
            dest: 'build/scripts.js'
        },
        css:{
            src:['css/*.css'],
            dest: 'build/style.css'
        }
    }
 });

//Load plugins
grunt.loadNpmTasks('grunt-contrib-concat');


//register tasks

grunt.registerTask('concat-javascripts', ['concat:javascripts']);
grunt.registerTask('concat-css', ['concat:css']);

};
