// Get the dependencies

var express = require('express'),
	pg = require('pg'),
	path = require('path');

// Connect to the database
var connectionString = "pg://localhost:5432/yesvsno",
	client = new pg.Client(connectionString); 

client.connect();

// New instance of Express
var app = express();

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

// Some Comments

router.route('/comments')
	.get(function(req, res) {
		
        var query = client.query("SELECT id, comment_date, comment_user, comment, level, comment_parent_id FROM comments ORDER BY id");
        
        query.on("row", function (row, result) {
            result.addRow(row);
        })
        
        query.on("end", function (result) {
            res.json(result.rows, null, "    ");
        })

})