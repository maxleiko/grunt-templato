/*
 * grunt-templato
 * https://github.com/maxleiko/grunt-templato
 *
 * Copyright (c) 2014 Maxime Tricoire
 * Licensed under the MIT license.
 */

'use strict';
var mmm = require('mmmagic');
var async = require('async');
var magic = new mmm.Magic(mmm.MAGIC_MIME_TYPE);
module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('templato', 'Overall project template management using Grunt', function() {
    var done = this.async();
    var asyncTasks = [];
    
    this.files.forEach(function (f) {
      // create destination directory
      grunt.file.mkdir(f.dest);
      grunt.file.recurse(f.src[0], function (abspath) {
        (function (filepath) {
          asyncTasks.push(function (taskCb) {
            magic.detectFile(filepath, function (err, mimetype) {
              if (err) return taskCb(err);

              if (mimetype.slice(0, 'text'.length) === 'text') {
                if (grunt.file.isFile(abspath)) {
                  var content = grunt.file.read(abspath);
                  var templato = grunt.template.process(content, {data: this.data.values});
                  grunt.file.write(abspath.replace(f.src[0], f.dest), templato);
                }
              } else {
                grunt.log.writeln('Only copy (non-text file): '+abspath);
                grunt.file.copy(abspath, abspath.replace(f.src[0], f.dest));
              }
              
              return taskCb();
            }.bind(this));
          }.bind(this));
        }.bind(this))(abspath);
      }.bind(this));
    }.bind(this));
    
    async.parallel(asyncTasks, function (err) {
      if (err) {
        grunt.log.error(err.message);
        return done();
      }
      
      return done();
    });
  });

};
