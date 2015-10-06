'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    'pkg': grunt.file.readJSON('bower.json'),
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.url %>',
        options: {
          paths: 'src',
          outdir: 'doc',
          exclude: '',
          linkNatives: true,
          themedir: 'libs/yuidoc/themes/default'
        }
      }
    },
    tdd: {
      runner: {
        files: {
          sources: ['src/**/*.js'], // Where your application files are located 
          libs: [],
          tests: ['tests/**/spec-*.js'] // Where your tests are located 
        },
        options: {
          runner: 'jasmine', // jasmine, mocha or buster 
          expect: false, // Use the expect.js library for assertions 
          requirejs: {
              baseUrl: 'src/'
          }
        }
      }
    }
  });

  grunt.registerTask('dev', ['tdd:runner']);
  grunt.registerTask('doc', ['yuidoc']);
  grunt.registerTask('default', ['dev']);
};
