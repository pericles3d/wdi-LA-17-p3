# CPS Maps

![Alt Text](app.png)
## Project Overview 
Team CPS will create an app that will monitor and visually geo-locate Twitter mentions of user specified search terms in real time. 

We intend this product to be of use during global events like the World Cup where we expect users to be able to see and interact with more than 700 million tweets during the duration of the World Cup. Astonishingly, during the 2014 World Cup. the Brazil vs. Germany match Twitter produced 35.6 million tweets.  

This will be of interest to brands who are advertising this event as well so they can track the geolocation of conversation trends. 

This app will utlilize Mongo, Express & Node.js on the backend along with JavaScript, JQuery, HTML5 & CSS on the front end. This app will be deployed on Heroku and use Modulus or Mongolab for the database.

Further Node packages are to be determined.

![Alt Text](http://i.imgur.com/PI7eGyX.jpg?1)

### Technologies used:

APIs used will be: User API (our own API), Google Maps API and Twitter API. For data visualization and certain UI elements, we will be using D3 on top of JQuery.



## Product Development Prioritization Key:

Below describes the prioritization schema for the CPS product. We will have achieved the MVP upon completion of all Priority 1 tasks. 

Priority: 1 - Absolutely necessary
Priority: 2 - Nice to have, beyond MVP
Priority: 3 - On backlog 

## User Stories With Prioritization:

* User creates an account with a username (unique email) and password (Priority 1)

* User can login with Google, Facebook or Twitter (Priority 2) 

* User is directed to a page with a map and an input box with button labeled gimme

* User inputs a term and hits the gimme button (Priority 1) 

*  User may specify a language (Priority 3) 

*  User may also specify a date range (Priority 3)

* The page then renders the map with indicators of mentions of the term with the additional parameters in real time (Priority 1) 

* Map is stored so it can be shared (Priority 2) 

* User can then share a link to the map on Facebook, Twitter (Priority 2)

* New users who click on the share link from Facebook can view the page and are invited to create an account (Priority 2) 

## App Flow Diagram 
![](CPSApp.png)