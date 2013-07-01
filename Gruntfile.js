module.exports = function(grunt) {

grunt.initConfig({
  watch: {
    scss: {
      files: ['blog/scss/*.scss'],
      tasks: ['sass'],
      options: {
        // Start a live reload server on the default port 35729
      //  livereload: true,
      },
    },
     build:{
	  files:['blog/css/*.css','blog/js/*.js','blog/_layouts/*.html','blog/*.html','blog/_posts/*.md'],
	  tasks: ["shell:jekyllBuild"]
    },
    site_css:{
	  files:['blog/_site/css/*.css'],
	  options:{
	  },
	  tasks:['shell:echo']
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
        files:['blog/_site/*.html'],
	    options:{livereload:true}	
	}},
  sass:{
	dist:{
		src:['blog/scss/*.scss'],
		dest:'blog/css/index.css'
	}


},

	connect:{
		dist:{
		  options:{
		  keepalive:true,
		  port:8080,
		  base:'./blog/_site'
		  }
		}
	}
,
  shell:{
    jekyllBuild:{
       command: "jekyll build -s blog -d blog/_site" 
     },
    echo:{
      command: "echo 'hi there'",
      options:{
        stdout:true
      }
    }
  }


});
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-shell');
grunt.registerTask('serverWatch', ['connect:dist','watch']);
};

