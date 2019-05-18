# PlexLandingPage

A simple landing page for your Plex Media Server. I made this with [bulma](https://bulma.io/) for CSS styling.

![Landing Page Screenshot](https://i.imgur.com/RadvB9M.jpg)

## Instructions & Suggestions
Clone the repository and replace text in index.html and access.html with your desired text. The Bulma install and Sass compilation is handled by yarn/npm. Install required packages with ```yarn install ``` then start automatic sass file compilation with ```yarn start```. Here's some specific customizations you can make:

### Home Page
* The title of the page
* The subtitle at the top can be modified to have stats about your server
* There are three sections for links to various content on your server, you can change the write-ups and which services are featured.

### Access Page
* The instructions are pretty generic so you can change them to include where people should contact you etc.


Additionally, I chose two background images for the home page and instruction page from one of my favorite movies and shows. I recommend browsing [/r/CineShots](https://www.reddit.com/r/CineShots/) for background images if you like that idea. You can change them in the respective .scss files under the ```.hero``` class.

## Contribution
This project is open-sourced under the MIT license. Feel free to make issues and pull requests for any improvements you want to see.
