/*
 * grunt-templato
 * https://github.com/maxleiko/grunt-templato
 *
 * Copyright (c) 2014 Maxime Tricoire
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('templato', 'Overall project template management using Grunt', function() {
    this.files.forEach(function (f) {
      // create destination directory
      grunt.file.mkdir(f.dest);
      grunt.file.recurse(f.src[0], function (abspath, rootdir, subdir, filename) {
        if (grunt.file.isFile(abspath)) {
          var content = grunt.file.read(abspath);
          var templato = grunt.template.process(content, {data: this.data.values});
          grunt.file.write(abspath.replace(f.src[0], f.dest), templato);
        }
      }.bind(this));
    }.bind(this));

    // Merge task-specific and/or target-specific options with these defaults.
//    var options = this.options({
//      punctuation: '.',
//      separator: ', '
//    });
//
//    // Iterate over all specified file groups.
//    this.files.forEach(function(f) {
//      // Concat specified files.
//      var src = f.src.filter(function(filepath) {
//        // Warn on and remove invalid source files (if nonull was set).
//        if (!grunt.file.exists(filepath)) {
//          grunt.log.warn('Source file "' + filepath + '" not found.');
//          return false;
//        } else {
//          return true;
//        }
//      }).map(function(filepath) {
//        // Read file source.
//        return grunt.file.read(filepath);
//      }).join(grunt.util.normalizelf(options.separator));
//
//      // Handle options.
//      src += options.punctuation;
//
//      // Write the destination file.
//      grunt.file.write(f.dest, src);
//
//      // Print a success message.
//      grunt.log.writeln('File "' + f.dest + '" created.');
//    });
  });

};
