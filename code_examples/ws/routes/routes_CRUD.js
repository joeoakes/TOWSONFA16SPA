var appRouter = function(app) {

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.get('/slide6', function (req, res) {
  res.render('slide6', { title: 'slide6'});
});

app.get('/slide8', function (req, res) {
  res.render('slide8', { title: 'slide8'});
});

app.get('/slide9', function (req, res) {
  res.render('slide9', { title: 'slide9'});
});

app.get('/slide10', function (req, res) {
  res.render('slide10', { title: 'slide10'});
});

app.get('/slide11', function (req, res) {
  res.render('slide11', { title: 'slide11'});
});

app.get('/slide12', function (req, res) {
  res.render('slide12', { title: 'slide12'});
});

app.get('/slide13', function (req, res) {
  res.render('slide13', { title: 'slide13'});
});

app.get('/slide14', function (req, res) {
  res.render('slide14', { title: 'slide14'});
});

app.get('/slide15', function (req, res) {
  res.render('slide15', { title: 'slide15'});
});

app.get('/slide16', function (req, res) {
  res.render('slide16', { title: 'slide16'});
});

app.get("/Create", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");
    if(!req.query.studentName) {
        return res.send({"status": "error", "message": "missing student Name"});
    } else {
    var student = {
        "StudentID": "123",
        "StudentName": req.query.studentName,
        "StudentSSN" : req.query.studentSSN,
        "StudentEmail" : req.query.studentEmail,
        "StudentPhone" : req.query.studentPhone
        } //Close student
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
	  collection.insert(student); 
          db.close();
          return res.send({"result" : "passed"});
         }  //close if
        }); //close function
    } //close else
}); //Close app.get

app.get("/Read", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
    res.header("Access-Control-Allow-Origin", "*");
    if(!req.query.studentID) {
        return res.send({"status": "error", "message": "missing studentID"});
    } else {
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
            collection.find({"StudentID" : req.query.studentID}).toArray(function(error, students){
            db.close();
            return res.send(students);
          });
         } //close else
       }); //close function
    } //close else
});//Close app.get

app.get("/Update", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

    res.header("Access-Control-Allow-Origin", "*");
    if(!req.query.studentName) {
        return res.send({"status": "error", "message": "missing student Name"});
    } else {
    var student = {
        "StudentID": req.query.studentID,
        "StudentName": req.query.studentName,
        "StudentSSN" : req.query.studentSSN,
        "StudentEmail" : req.query.studentEmail,
        "StudentPhone" : req.query.studentPhone
        } //Close student
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
          collection.update({"StudentID" : req.query.studentID},student);
          db.close();
          return res.send({"result" : "passed"});
         }  //close if
        }); //close function
    } //close else
});

app.get("/Delete", function(req, res) {
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
    res.header("Access-Control-Allow-Origin", "*");
    if(!req.query.studentID) {
        return res.send({"status": "error", "message": "missing studentID"});
    } else {
        var url = 'mongodb://localhost:27017/my_database_name';
        MongoClient.connect(url, function (err, db) {
        if (err) {
          return res.send({"result" : "failed"});
        } else {
          var collection = db.collection('users');
            collection.remove({"StudentID" : req.query.studentID})
            db.close();
            return res.send({"result" : "passed"});
         } //close else
       }); //close function
    } //close else
});

app.get("/hello", function(req, res) {
    res.send("Hello World");
});

app.get("/account", function(req, res) {
    var accountMock = {
        "username": "test",
        "password": "1234",
        "twitter": "@test"
    }
    if(!req.query.username) {
        return res.send({"status": "error", "message": "missing username"});
    } else if(req.query.username != accountMock.username) {
        return res.send({"status": "error", "message": "wrong username"});
    } else {
        return res.send(accountMock);
    }
});

app.post("/account", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.twitter) {
        return res.send({"status": "error", "message": "missing a parameter"});
    } else {
        return res.send(req.body);
    }
});
 
}
 
module.exports = appRouter;

