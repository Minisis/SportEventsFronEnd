module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: 'public/'
        }
      }
    },
    watch: {
      project: {
        files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json', 'public/ccs/**/*.css', 'public/Stylus/**/*.styl'],
        options: {
          livereload: true
        }
      }
    },
    stylus: {
      compile: {    
        files: {
          '/css/estilos.css' : 'public/Stylus/estilos.styl'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['connect', 'watch']);

};
