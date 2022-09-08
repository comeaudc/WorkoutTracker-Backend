# Workout Tracker
Backend API link to database that collects, updates and stores data for exercises and custom workouts

### Overview
- [Link to the Deployed App](https://wotrackerdc.herokuapp.com/)
- [Link to the BackEnd API](https://trackerbackenddcc.herokuapp.com/)

### API Reference
   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | / | Home Page w/ Directory |
GET | /exercises | Index of All Exercises |
POST | /exercises | Exercise Create Route|
GET | /exercises/:id | Show Page for Exercises |
DELETE | /exercise/:id | Delete Route for Exercises |
GET | /history | Workout History Index Route |
GET | /inprogress| Inprogress Workout Route |
POST | /history| Workout Create Route |
GET | /history/:id | Show Route for Workouts |
DELETE | /history/:id | Delete Workout from Database |
PUT | /history/:id | Update Workout Page |


### Built With:
* JavaScript
* Express.js
* MongoDB

### Future Updates:
* Authentification cluster for individuals workout data
* Update route for individual exercises


## Authors:
- [Dylan Comeau](https://github.com/comeaudc/)