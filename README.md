# Final 1 - URL shortner 📎

## A front-To-End solution to "URL shortner" web app.
### **written using-**
#### **Front**
* HTML - with webpack
* JS
* CSS
#### **End** 
* Node JS - with nodemon, shortid, express, path, fs, moment.
#### **Deploy** 
* Heroku deployment 
* **View my app! -  https://yakov-short-url.herokuapp.com/**

----
## Special things about development
---
### **Persistence DB -** 
* Using fs and path functionality.
* Based on a DB folder that contains json files customized for each user. 
* In addition a class that contains the relevant functionality for storing information about the url in the database.
* Avoid "wasting memory" by returning previously shortened links from DB instead of producing a new one

### **Generate Id for every url -** By using the npm package **short id** - https://www.npmjs.com/package/shortid,
in order to produce a unique and yet not too long id. Based on a combination of numbers and letters by the package.

### **Using Webpack for the front part**

----
## User Instructions
---
### **URL shortner**- The app is designed to allow the customer to shorten a long and inelegant address.

* ### Log in - *coming sooncoming* .

* ### You can navigate with the help of the NAV-BAR at the top of the page between the functionality of the site -
* **Home page-** An address can be shortened by copying it to the input line and clicking a button. 
* **Statistics-** You can write a short link provided by the site to get the following information about it: the date it was created, the number of times it was used.
* **User Managment**
*Not ready yet*

