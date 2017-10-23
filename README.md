# PlexLandingPage

A Landing Page for a Plex Media Server. I made this with [materialize.css](http://materializecss.com/).

![Landing Page Screenshot](https://i.imgur.com/b4VsdO4.jpg)

## Instructions & Suggestions
Clone the repository and replace text in index.html and access.html with your desired text. In ```assets/js/script.js``` modify the file to have correct links to the services that you use like PlexPy, Ombi, etc. (I did this because I change links somewhat often). Here's some specific customizations you can make:

### Home Page
* The title of the page
* The subtitle at the top can be modified to have stats about your server
* There are three sections for links to various content on your server, you can change the write-ups and which services are featured.

### Access Page
* The instructions are pretty generic so you can change them to include where people should contact you etc.


Additionally, I chose two background images for the home page and instruction page from one of my favorite movies and shows. I recommend browsing [/r/CineShots](https://www.reddit.com/r/CineShots/) for background images if you like that idea. You can change them in the respective .css files under the ```.jumbotron``` class.


## TODO
* Move customization out to JSON files
* Get exact stats from the Plex API
* Make into a Docker container
* Add Now Playing on Plex Section
