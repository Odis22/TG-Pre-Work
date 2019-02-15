# TG-Pre-Work

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

put your answer here

## From start to finish how does that data reach you to be rendered in the browser?

when i put in a url into my browser of choice, the url is then parsed in order to find the protocol, host, port, and path. It will
for a http request. it will look up the dns lookup on the host which will translate the human readable host into an ip number. 
From there a http request is sent to the host and the host forwards the request to the server software. the server will then launch the server plugin needed to 
handle the request. a database search will be conducted based on paramaters in the path and that data will be combined with other plugin info 
will be converted into string. the plugin combines that data with some meta data and the http response back to the browser. the browser will parse the html and a dom tree will
be built  from it. the server will make new request based on each resource such as images, style sheets, and javascript files which will be sparsed and executed. The browser will tehn render the page on 
the screen according to the dom tree and stylesheet. 
## What code is rendered in the browser?

Its the html. browsers open webpages which are html documents. 

## What is the server-side code’s main function?

its function is to control what information to send to the user

## What is the client-side code’s main function?

it handles the structure and presentation of that data to the user.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

one instance for each request. the browser will then cache these requests after it has loaded them for the first time

## How many instances of the server-side code are available at any given time?

For each server there is, there is at least one server side code for each server. 

## What is runtime?

a phase of which a computer program is run within the memory until is terminated or closed by the user. 

## How many instances of the databases connected to the server application are created?

there can be multiple instances of server connection. It all depends on how many request are made.