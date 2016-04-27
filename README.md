# YesVsNo
An Angular app for the Yes vs No Voting Platform.

## Current Stack & Dependencies
- SCSS
- Bootstrap (Will be replaced with SCSS grid)
- Loaded from cloudflare (jQuery, D3, LoDash, Moment, Bootstrap)
- Angular 1.3 (Moving to 2 in the near future)
- Node.js (Gulp, Gulp-Nodemon, Express.js, Node PostgreSQL - https://github.com/brianc/node-postgres)
- PostgreSQL (Local postgres server - http://postgresapp.com)
- Using Postico (https://eggerapps.at/postico/) for a local database. 
- There is also a remote database on Heroku which will be implemented later. 

## How to Run 
1. Install Node on your computer - https://nodejs.org
2. Install Github Desktop - https://desktop.github.com/
3. Clone this repository and create a new branch from master
4. Make sure the Postgres server local is running 
5. Open terminal or cmd line, navigate to the new YesVsNo folder created 
6. Type `gulp` to begin running the app
7. You should see this -
```iMac-4:yesvsno Micheil$ gulp
[22:20:46] Using gulpfile ~/GitHub/YesVsNo/gulpfile.js
[22:20:46] Starting 'default'...
[22:20:46] Finished 'default' after 1.34 ms
[22:20:46] [nodemon] 1.8.1
[22:20:46] [nodemon] to restart at any time, enter `rs`
[22:20:46] [nodemon] watching: *.*
[22:20:46] [nodemon] starting `node app.js`
/Users/Micheil/GitHub/YesVsNo/public/index.html
Yes vs no is running on PORT8000```
8. In your browser, navigate to 'http://localhost:8000/' to see the app running. 

> A remote database will be setup in the future, for now nothing will save as I have not shared the very rudimentary database. 

