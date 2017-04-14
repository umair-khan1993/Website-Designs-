var express = require("express"),
  //fs = require('fs'),
  //compression = require('compression'),
  //http = require('http'),
  app = express(),
  //session = require('express-session'),
  //zlib = require('zlib'),
  bodyParser = require("body-parser"),
  designs = require("./routes/designs");

//gzip = zlib.createGzip();
//app.use(compression())
app.use(express.static("./page"));

//initialization of session
/*app.use(session({
  secret: 'cookie_secret',
  name: 'cookie_name',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));*/

//require('dotq');
//app.use(require('express-promise')());
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

//routes defined here
/*app.post("/create-family", family.createFamily);
app.post("/change-family-mode", family.changeFamilyMode);
app.post("/get-family-type", family.getFamilyType);
app.post("/create-family-with-existing-user", family.createFamilyWithExistingUser);*/

/*app.post("/auth-user", users.authenticateUser);*/
/*app.post("/authenticate-user", users.authenticateUser);+
app.post("/login-user", users.loginUser);
app.post("/create-user", users.createNewUser);
app.post("/profile-data-by-id", users.fetchProfileDataById);
app.post("/edit-user-info", users.editUserInfo);
app.post("/edit-user", users.editUser);
app.post("/delete-member", users.deleteUserFromFamily);
app.post("/find-members", users.findMembersByFamilyId)
app.post("/edit-user-phone", users.editPhone);
app.post("/verify-password", users.verifyPassword);
app.post("/get-phone-by-jid", users.findPhoneByJid);
app.post("/get-users-by-jid", users.findUsersByJid)
app.post("/get-mehrams", users.getMehrams);
app.post("/get-media-by-id", post.getMediaById);
app.post("/check-user-existence", users.checkUserExistence);
app.post("/resend-sms", users.resendSms);
app.post("/unlink-user", users.unlinkUser);
app.post("/fetch-countries", users.fetchCountries);
app.post("/fetch-updated-user", users.fetchUpdatedUser);
app.post("/set-ejabberdid", users.setEjabberdId);
app.post("/set-is-xmpp-joined", users.setisXmppJoined);
app.post("/save-device-token", users.saveDeviceToken);
app.post("/send-push-notification", users.sendPushNotification);

app.post("/map-phone-contacts-with-xmpp-contacts", contact.mapPhoneContactsWithXmppContacts);
app.post('/update-contacts', contact.updateContactsToDatabase);
app.post("/sync-contacts-with-ansab", contact.syncContactsWithAnsab);
app.post("/get-ansab-contacts", contact.getAnsabContacts);

app.post("/post", post.createPost);
app.post("/get-post-by-id", post.fetchPostById);
app.post("/add-comment", post.postAddComment);
app.post("/add-like", post.postAddLike);
app.post("/unlike", post.unlikePost);
app.post("/get-posts", post.fetchAllPosts);
app.post("/get-user-upcoming-events", post.fetchUserUpcomingEvents);
app.post("/new-post-count", post.fetchLatestPostsCount);
app.post("/set-event-response", post.setEventResponse);
app.post("/new-comments", post.fetchNewCommentsByPost);
app.post("/latest-events", post.fetchLatestEvents);
app.post("/delete-post", post.deletePost);

app.post("/create-group", group.createNewGroup);
app.post("/fetch-user-groups", users.fetchUserGroups);
app.post("/set-user-group-status", users.setUserStatusInGroup);*/

// app.post("/get-new-post", post.newPostEmitEvent);

// tree routes

/*app.post("/add-member", tree.addMember);
app.post("/edit-member", tree.editMember);
app.post("/delete-member", tree.deleteMember);
app.post("/fetch-tree", tree.fetchTree);
app.post("/fetch-mehrams", tree.fetchMehrams);
app.post("/get-depth", tree.getDepth);
app.post("/get-descendants", tree.getDescendants);*/

var server = app.listen(8080, function() {
  //8080 for server deployment
  console.log('running on local host port 8080');

});