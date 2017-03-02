'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Define global Vue for server-side app.js
global.Vue = require('vue');

// Get the HTML layout
var layout = _fs2.default.readFileSync('./index.html', 'utf8');

// Create a renderer
var renderer = require('vue-server-renderer').createRenderer();

// Create an express server


var server = (0, _express2.default)();

// Serve files from the assets directory
server.use('/assets', _express2.default.static(_path2.default.resolve(__dirname, 'assets')));

// Handle all GET requests
server.get('*', function (request, response) {
  // Render our Vue app to a string
  // renderer.renderToString(
  // Create an app instance
  // require('./src/assets/app')(),
  // (error, html) => {
  //   // If an error occurred while rendering...
  //   if (error) {
  //     // Log the error in the console
  //     console.error(error)
  //     // Tell the client something went wrong
  //     return response
  //       .status(500)
  //       .send('Server Error')
  //   }
  //   // Send the layout with the rendered app's HTML
  //   response.send(layout.replace('<div id="app"></div>', html))
  // }
  var html = '<div id="app"></div>';
  response.send(layout.replace('<div id="app"></div>', html));
  // )
});

// Listen on port 5000
server.listen(5000, function (error) {
  if (error) throw error;
  console.log('Server is running at localhost:5000');
});
