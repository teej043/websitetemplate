module.exports = function (grunt)
{
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: "\n\n"
			},
			dist: {
				src: ['src/scripts/script.js'],
				dest: 'src/scripts/main.js'
			},
			deps: {
				src: [
					'bower_components/modernizr/modernizr.js',
					'bower_components/jquery/dist/jquery.js',
					'bower_components/bootstrap/dist/js/bootstrap.js'
				],
				dest: 'src/scripts/main-deps.js'
			},
			css: {
				src: ['bower_components/bootstrap/dist/css/bootstrap.min.css',
						'src/css/main.css'
				],
				dest: 'src/css/all.css'
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'src/css',
					cssDir: 'src/css'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/scripts/**/*.js'],
				tasks: ['concat:dist']
			},
			css: {
				files: 'src/css/**/**/*.scss',
				tasks: ['compass','concat:css']
			}
		}
	});

	//npm tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//tasks
	grunt.registerTask('default', 'Default Task Alias', ['build']);

	grunt.registerTask('build', 'Build the application',
		['compass',
		'concat'
		]);
}
