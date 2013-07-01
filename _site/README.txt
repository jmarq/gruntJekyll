this is the jekyll blog folder, it follows the basic jekyll structure

so how does this work with livereload/grunt-watch?

that's still up in the air.

possibilities:

grunt-watch watches:
	blog/scss
	blog/css/*.css
	blog/_templates
	blog/_posts
	blog/*.html
	blog/js/*.js
	
	blog/_site
		/js
		/*.html
		/css
	
	grunt watch does:
		for everything but blog_site and blog/scss
			grunt shell task :jekyllbuild
				this causes a bunch of files in the _site folder to change
		for blog_site
			livereload:true
		for blog/scss
			grunt-sass task
