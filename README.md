# Explore Himalayas - React Neighborhood Map Application

This is React project for Udacity's Frontend developer course, single-page application that demonstrates building application with React, fetching data with 3rd party API - Google maps API and Media Wiki API.
This app allows to explore with the map main mountains of the world - Himalayas

## Getting started

To run the app, first in node.js change the current directory to app's location.
Then run command `npm install` to install all project dependencies.
After all you can start the server with command `npm start`.
Page with app will open automatically in default browser.
The app will be available by default at the address[http://localhost:3000/](http://localhost:3000/).

**IMPORTANT!**
Using Wiki API needs CORS allowed, one way to enable CORS is Chrome extention (https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi). It should be installed and turned on before using application.

## Production mode

The service worker included works in the production build, to run the application in the production build follow the steps below:
1. Run command 'npm run build' in node.js to create an optimized version of the project
2. Run 'serve -s build' to starting server
3. Navigate to http://localhost:3000/

## App description

The main page of Explore Himalayas app divides on three parts: map of Himalayas with markers, that points to highest mountains, area with text input to filter markers, area with list of markered mountains, info window with details about certain mountain and link to appropriate Wikipedia page. When app starts, in info window you can see info about Himalayas - highest mountain range in the world.
Clicking on any marker or list item shows wikipedia info about chosen mountain. To filter presented mountains by name begin to input it in filter field. When no more than 4 objects filtered, autocomplete list appears.

## Tools and APIs used

### [Create React App](https://github.com/facebookincubator/create-react-app)
Create React App is a tool built by developers at Facebook to help users build React applications. It saves from time-consuming setup and configuration. You simply run one command and create react app sets up the tools you need to start your React project.

### [react-google-maps](https://tomchentw.github.io/react-google-maps/)
React-google-maps provides a set of React components wrapping the underlying Google Maps JavaScript API v3 instances. The wrapping simply do props delegation, events as callbacks, lifecycle management and auto-mount on map.

### [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
The Maps JavaScript API lets you customize maps with your own content and imagery for display on web pages and mobile devices. The Maps JavaScript API features four basic map types (roadmap, satellite, hybrid, and terrain) which you can modify using layers and styles, controls and events, and various services and libraries.

### [MediaWiki API](https://www.mediawiki.org/wiki/API:Main_page)
The MediaWiki action API is a web service that provides convenient access to wiki features, data, and meta-data over HTTP, via a URL usually at api.php. Clients request particular "actions" by specifying an action parameter, mainly action=query to get information. It was known as the MediaWiki API, but there are now other web APIs available that connect to MediaWiki such as REST API and the Wikidata Query Service.

### [Freepik](www.flaticon.com)
Icon by Everest made by Freepik from www.flaticon.com.
