# Plex Landing Page

[![Build Status](https://travis-ci.org/ryjo1026/plex-landing-page.svg?branch=master)](https://travis-ci.org/ryjo1026/plex-landing-page)

A simple landing page for your Plex Media Server. I made this with [bulma](https://bulma.io/) for CSS styling and [mustache.js](http://mustache.github.io/) for templating.

![Landing Page Screenshot](https://i.imgur.com/RadvB9M.jpg)

## Instructions
The page is fully templated to make customization as easy as editing a JSON file. Fork the repository and replace text in ```templates/index.json``` and ```templates/access.json``` with your desired text. Template compilation, Sass compilation, and the Bulma installation are handled by yarn (everything should also work with npm if you prefer to use that). Install required packages using ```yarn install ``` and use the available scripts to build the site:
* ```yarn build```- Compile templates and Sass.
* ```yarn build:html/yarn build:css```- Compile templates only or Sass only.
* ```yarn watch```- Automatically build when changes are detected in the directory.
* ```yarn start```- An alias to ```yarn watch```.

Additionally, I chose two background images for the home page and instruction page from one of my favorite movies and shows. I recommend browsing [/r/CineShots](https://www.reddit.com/r/CineShots/) for background images if you like that idea. You can change them in the respective .scss files under the ```.hero``` class.

Editing the JSON and rendering the templates is very easy but if you'd rather just edit the raw HTML it's located  in `index.html` and `access.html`.

## Contribution
This project is open-sourced under the MIT license. Feel free to make issues and pull requests for any improvements you want to see.

## Help
Please feel free to open an issue even if you just need help getting it set up! I'm very responsive to new issues and actively looking to remove friction from the setup process.
