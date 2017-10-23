//Enter your base url here could be your domain name or server IP
baseUrl = ""

//Enter the addition for each of your services they can be ports or pages (i.e. ":86", "/ombi")
requests = ""
plex = ""

$( document ).ready(function(){
  // Write Links
  $("#access-link").attr('href',baseUrl+plexPort);
  $("#requests-link").attr('href',baseUrl+requestsPort);
  $("#plextogether-link").attr('href',"http://plextogether.com/");
})
