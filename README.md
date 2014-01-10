# grunt-templato

> Overall project template management using Grunt

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-templato --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-templato');
```

## The "templato" task

### Overview
In your project's Gruntfile, add a section named `templato` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  templato: {
    // exemple config with a JSON file 
    jsonConfig: {
      files: {
        'dest/path': 'src/path' // if 'src/path' is a folder, then all files below will be processed recursively
                                // and folder tree structure will be kept in the dest/path folder
      },
      values: grunt.file.readJSON('your/config.json') // you can use an external config.json file
    },
    // another example without the external JSON file
    defaultConfig: {
      files: {
        'tmp/fixtures/myProject': 'test/fixtures/myProject'
      },
      values: { // or use in-file configurations =)
        fooTitle: 'My title',
        PORT: 8042,
        list: {
          one: 1,
          two: 'secondOne'
        },
        dummyLog: 'some fake log'
      }
    }
  }
});
```

### Options

TODO

### Usage Examples

TODO

#### Custom Options

TODO

## Contributing


## Release History
_10/01/2014 - v0.0.1_
