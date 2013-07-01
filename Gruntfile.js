module.exports = function(grunt) {

grunt.initConfig({
  watch: {
    css: {
      files: ['*.scss'],
      tasks: ['sass'],
      options: {
        // Start a live reload server on the default port 35729
        livereload: true,
      },
    },
    another: {
      files: ['lib/*.js'],
      tasks: ['anothertask'],
      options: {
        // Start another live reload server on port 1337
        livereload: 1337,
      },
    },
    dont: {
      files: ['other/stuff/*'],
      tasks: ['dostuff'],
    },
	htmls:{
		files:['public/*.html'],
		options:{livereload:true}
		
	},
	connect:{files:['public/*'],
		tasks:['connect:dist']}
  },
  sass:{
	dist:{
		src:['*.scss'],
		dest:'stylo.css'
	}


},

	connect:{dist:{keepalive:true}}


});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-connect');
};

