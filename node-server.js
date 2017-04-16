var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  designs = require("./routes/designs");

app.use(express.static("./page"));

//initialization of session
/*app.use(session({
  secret: 'cookie_secret',
  name: 'cookie_name',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));*/

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser({
  limit: '50mb'
}));

app.get("/", function(req, res) {
  res.send("Hello world WD");
})

app.get("/render-web-designs", function(req, res) {
  res.sendfile("./page/index.html");
})


//adding permissions to allow the express app to accept the requests form other domains
app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  req.headers['X-Forwarded-For', {
    'accept-encoding': 'gzip,deflate'
  }]
  req.headers['X-Forwarded-For', {
    'content-encoding': 'gzip,deflate'
  }]
  next();
});

// routes defined here
app.get("/fetch-website-designs", designs.fetchDesigns);
app.post("/add-website-design", designs.addWebsiteDesign)

var server = app.listen(8080, function() {
  //8080 for server deployment
  console.log('running on local host port 8080');

});