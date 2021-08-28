# Plex Landing Page

[![Build Status](https://travis-ci.org/ryjo1026/plex-landing-page.svg?branch=master)](https://travis-ci.org/ryjo1026/plex-landing-page)

A simple landing page for your Plex Media Server. I made this with [bulma](https://bulma.io/) for CSS styling and [mustache.js](http://mustache.github.io/) for templating.

![Landing Page Screenshot](https://i.imgur.com/RadvB9M.jpg)

## Instructions

The page is fully templated to make customization as easy as editing a JSON file. Fork the repository and replace text in `templates/index.json` and `templates/access.json` with your desired text. Template compilation, Sass compilation, and the Bulma installation are handled by npm. Install required packages using `npm install ` and use the available scripts to build the site:

- `npm build`- Compile templates and Sass.
- `npm build:html/npm build:css`- Compile templates only or Sass only.
- `npm watch`- Automatically build when changes are detected in the directory.
- `npm start`- An alias to `npm watch`.

Additionally, I chose two background images for the home page and instruction page from one of my favorite movies and shows. I recommend browsing [/r/CineShots](https://www.reddit.com/r/CineShots/) for background images if you like that idea. You can change them in the respective .scss files under the `.hero` class.

Editing the JSON and rendering the templates is very easy but if you'd rather just edit the raw HTML it's located in `index.html` and `access.html`.

### Docker

There's a [Docker image](https://hub.docker.com/repository/docker/ryjo1026/plex-landing-page/general) for this if you would like to use that as well. The Docker comes preinstalled with node and nginx and the project is lightweight enough to just edit the json files on the container.

1. Run the container
   ```
   docker run \
       --name plex-landing-page \
       -p 80:80 \
       ryjo1026/plex-landing-page:latest
   ```
1. Access the container
   ```
   docker exec -it plex-landing-page /bin/sh
   ```
1. Edit the json files to your liking
   ```
   vi /usr/share/nginx/html/templates/index.json
   ```
1. Compile the templates
   ```
   npm run-script build
   ```
1. Done! Your site is accessible at port 80 of the docker host.

Alternatively, attach this repo as a volume and compile the templates locally with whatever local dev tools you use. The following should be run from the directory to which you cloned the repo

```
docker run \
       --name plex-landing-page \
       -p 80:80 \
       -v .:/usr/share/nginx/html \
       ryjo1026/plex-landing-page:latest
```

Note: The Dockerfile used to build the image is included in this repo if you want to build directly from that for some reason.

## Contribution

This project is open-sourced under the MIT license. Feel free to make issues and pull requests for any improvements you want to see.

## Help

Please feel free to open an issue even if you just need help getting it set up! I'm very responsive to new issues and actively looking to remove friction from the setup process.
