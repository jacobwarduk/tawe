var express = require('express');
var mysql = require('mysql');
var router = express.Router();

// Setting database connection details
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 8889,
    database: 'tawe_database'
});

// Connecting to database
connection.connect(function(err) {
    if (err) {
        console.log('Error establishing a database connection.');
    }
});

/* GET home page. */
router.get('/', function(req, res) {

    var testimonials;

    // Running database queries
    connection.query('SELECT * FROM tawe_testimonials', function(err, rows, fields) {
        if (!err) {
            testimonials = rows;

            res.render('index', {
                title: 'Tawe',
                description: 'Tawe transforms a humble image into a dazzling presentation or video.',
                testimonials: testimonials
            });
        }
        if (err) {
            console.log('Error performing database query.');
        }
    });


});

module.exports = router;
