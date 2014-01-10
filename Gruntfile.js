/*
 * grunt-templato
 * https://github.com/maxleiko/grunt-templato
 *
 * Copyright (c) 2014 Maxime Tricoire
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    templato: {
      jsonConfig: {
        files: {
          'tmp/fixtures/myProject': 'test/fixtures/myProject'
        },
        values: grunt.file.readJSON('test/fixtures/config.json')
      },
      defaultConfig: {
        files: {
          'tmp/fixtures/myProject': 'test/fixtures/myProject'
        },
        values: {
          fooTitle: 'My title',
          PORT: 8042,
          list: {
            one: 1,
            two: 'secondOne'
          },
          dummyLog: 'some fake log'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'templato', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
