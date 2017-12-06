var posts = [];
var data = {}
for (var i = 0; i < 9; i++) {
    posts.push(data);
}
var bodyParser = require("body-parser"); //Import bodyParser so we can read request body data
var sqlite3 = require("sqlite3"); //Import sqlite3 so we can talk to the database
var uuid = require("uuid/v4"); //Import uuid so we can generate unique tokens
var TransactionDatabase = require("sqlite3-transactions").TransactionDatabase; //Import sqlite3-transactions so we can use transactions with the database
var db = new TransactionDatabase(new sqlite3.Database('./db/Jeopardy.db'));
module.exports = function(app) {
    //bodyParser.urlencoded({ extended: true }));
    var urlencodedParser = bodyParser.urlencoded({ extended: false });
    app.get('/', function(req, res) {
        res.render('index');
    });
    // about page 

    app.get('/main', function(req, res) {
        res.render('main');
    });
    app.delete('/hostprofile/:item', function(req, res) {
        data = posts.filter(function(post) {
            return posts.posts.replace(/ /g, '-') !== req.param.item;
        });
    });
};