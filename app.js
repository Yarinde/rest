var express = require('express'),
    mongoose = require('mongoose'),
bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI', {
    useMongoClient: true,
});
var book = require('./modules/bookModules');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var bookRouter = express.Router();

bookRouter.route('/Books')
    .post(function(req,res) {
        var Book = new book(req.body);
        Book.save();
        res.status(201).send(Book);
    })
    .get(function(req, res) {
        var query = {};
        if(req.query.genre) {
            query.genre = req.query.genre;
        }
        book.find(query, function(error, books){
            if(error) {
                res.status(500).send(error);
            }
            else res.json(books);
        });
    });

bookRouter.route('./Books/:bookId')
    .get(function(req, res) {
        book.findById(req.params.bookId, function(error, books){
            if(error) {
                res.status(500).send(error);
            }
            else res.json(books);
        });
    });

app.use('/api', bookRouter);
app.get('/', function (req, res) {
    res.send('hello world')
});

app.listen(port, function () {
    console.log('gulp is running on port ' + port);
});