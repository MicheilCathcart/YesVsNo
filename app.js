// Get the dependencies

var express = require('express'),
	pg = require('pg'),
	path = require('path'),
        bodyParser = require('body-parser');

// Connect to the database

var connectionString = "pg://localhost:5432/yesvsno",
	client = new pg.Client(connectionString); 

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
});

// New instance of Express

var app = express();

// Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Choose a port from the environment or default to 3000; 

var port = process.env.PORT || 3000; 

// Express is listening on port 3000

app.listen(port, function() {
	console.log('Yes vs no is running on PORT' + port);
})

// Routes

var router = express.Router();

// Set the API address
	
app.use('/api', router);

// GET /style.css etc
app.use(express.static(__dirname + '/public'));

// The root of the site, get the index.html file for the angular app 

console.log(path.join(__dirname + '/public/index.html'));

app.get('/', function(req, res){
        
	res.sendFile(path.join(__dirname + '/public/index.html'));
})

// Get Some Comments

router.route('/comments')
	.get(function(req, res) {
		
                var query = client.query("SELECT id, comment_date, comment_user, comment, level, tier, comment_parent_id FROM comments ORDER BY id");
                
                query.on("row", function (row, result) {
                result.addRow(row);
                })
                
                query.on("end", function (result) {
                res.json(result.rows, null, "    ");
                })

        })

// Post a Comment

router.route('/comments/new')
        .post(function(req, res){
                
                console.log("Trying to Post");
                
                // Grab data from http request
                var data = {
                        comment_date: req.body.date, 
                        comment_user: req.body.user,
                        comment: req.body.comment,
                        level: req.body.level,
                        tier: req.body.tier,
                        comment_parent_id: 1
                        };
                        
                console.log("Data Object");    
                console.log(req.body);
                
                // SQL Query > Insert Data
                client.query("INSERT INTO comments(comment_date, comment_user, comment, level, tier, comment_parent_id) values($1, $2, $3, $4, $5, $6)", [data.comment_date, data.comment_user, data.comment, data.level, data.tier, data.comment_parent_id]);

                // SQL Query > Select Data
                var query = client.query("SELECT id, comment_date, comment_user, comment, level, tier, comment_parent_id FROM comments ORDER BY id");
                
                // Stream results back one row at a time
                query.on("row", function (row, result) {
                result.addRow(row);
                })
                
                // After all data is returned,  return results
                query.on("end", function (result) {
                res.json(result.rows, null, "    ");
                })
        })