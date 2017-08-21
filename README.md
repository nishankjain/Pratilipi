# crashing-planes
A flight-booking UI for web

# About

This is a project to implement a web UI for flight bookings.

# Requirements

You need git to clone this repository. You can get git from http://git-scm.com/.

You must have node.js and its package manager (npm) installed. You can get them from http://nodejs.org/.

# Installation

git clone https://github.com/nishankjain/crashing-planes.git

Navigate to the folder where you have cloned this repository.

npm install

# Running

npm start

Open http://localhost:3000/app/ in your browser.

# Routing

This app is a great example of why you need a server if you implement routing in your Angular app. When routing is implemented, the app has to make an AJAX call to load a template into the view.

The template is just another resource present on the 'server' which can only be fetched using an AJAX call if it's not preloaded within the index.html page itself.

The URLs contain '#/' while routing. If you want to remove them, then you will have to set html5Mode to true on the $locationProvider service -> $locationProvider.html5Mode(true); Also, add a base tag to the index.html with the root url as the value -> "&lt;base href='/'&gt;" and change the URLs wherever referred.

This will lead to an error if you reload the page, because index.html will not be available at any other URL except for base URL. TO resolve this you need to setup a route on the server which will serve index.html for all URLs.

# Filters

This app makes use of a couple of custom angular filters to modify how data is presented to the user in the view. Refer filter.js for implementation and flight-details.html for usage. The filters are automatically passed the value on which they are being acted upon, additionally if you want to pass more information, you can specify it after a colon as seen on 'flightFilter'.

# Services

Since this is a single page app, I have implemented a service which is injected in both the controllers to share certain params across pages. In this specifically the number of seats, source and destination cities which are selected on the first page, stored in a private object called params (using closure) and accessed via the searchParams service in the second page.