# path2
## Modular and extended version of [Node's path](http://nodejs.org/api/path.html) package

Works exactly same as Node's `path`, with following improvements:

- Both _Windows_ and _Posix_ versions can be accessed in any environment program is run. For windows version require `require('path2/windows')` for posix `require('path2/posix')`.
- Doesn't depend on existence of `process` object and can safely be used in any enviroment (e.g. browser) which does not provide it. If `process.cwd` is not accessible, `/` (`C:\` for windows) is used for current working directory 
- Each function is provided as an individual module, so only modules that are needed, can be required e.g. `require('path2/resolve')` or more specifically, require just posix version: `require('path2/posix/resolve')`

One additional function, not present in native `path`, is provided:

### path.common(path1[, ...pathn])

Resolves common path for input path arguments:
```javascript
path.common('/lorem/ipsum/foo/bar', '/lorem/ipsum/raz/dwa',
  '/lorem/elo/foo/bar'); //  => '/lorem'
```

`path.common` is [proposed to be also included in native `path`](https://github.com/joyent/node/pull/6328)

### Installation
#### NPM

In your project path:

	$ npm install path2

##### Browser

You can easily bundle _path2_ for browser with [modules-webmake](https://github.com/medikoo/modules-webmake)

## Tests [![Build Status](https://travis-ci.org/medikoo/path2.png)](https://travis-ci.org/medikoo/path2)

	$ npm test
