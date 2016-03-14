module.exports = function(grunt) {

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
    ngAnnotate: {
        demo: {
            files: {
                'public/angular_components/app-ng-annotated.js': [
                  'public/angular_components/app.js',
                	'public/angular_components/services/api-constants.js',
                  'public/angular_components/services/translation-api-util.js',
                	'public/angular_components/bing-results/bing-results.js',
                	'public/angular_components/frengly-results/frengly-results.js',
                	'public/angular_components/yandex-results/yandex-results.js',
                	'public/angular_components/input/input.js']
            },
        }
    },

    uglify: {
	    my_target: {
	      files: {
	        'public/angular_components/app.min.js': [
	        	'public/angular_components/app-ng-annotated.js'
	        ]
	      }
	    }
	  }
  });

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-ng-annotate');

  // Default task(s).
  grunt.registerTask('default', ['ngAnnotate', 'uglify']);
};

