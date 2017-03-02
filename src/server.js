import fs from 'fs';
import path from 'path';

// Define global Vue for server-side app.js
global.Vue = require('vue')

// Get the HTML layout
const layout = fs.readFileSync('./index.html', 'utf8');

// Create a renderer
const renderer = require('vue-server-renderer').createRenderer();

// Create an express server
import express from 'express';

const server = express();

// Serve files from the assets directory
server.use('/js', express.static(
  path.resolve(__dirname, '..', 'js')
))

// Handle all GET requests
server.get('*', (request, response) => {
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
    const html = '<div id="app"></div>';
    response.send(layout.replace('<div id="app"></div>', html))
  // )
})

// Listen on port 5000
server.listen(5000, error => {
  if (error) throw error
  console.log('Server is running at localhost:5000')
})
