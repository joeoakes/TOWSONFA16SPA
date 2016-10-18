var appRouter = function(app) {

app.get("/Create", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Hello World");
});

app.get("/Read", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    var student = {
	"StudentID": "123",
	"StudentName": "Joe Oakes",
	"StudentSSN" : "5563334444",
	"StudentEmail" : "joe.oakes@psu.edu",
	"StudentPhone" : "2157778888"
	}
    res.send(student);
});

app.get("/Update", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Hello World");
});

app.get("/Delete", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send("Hello World");
});

app.get("/", function(req, res) {
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

