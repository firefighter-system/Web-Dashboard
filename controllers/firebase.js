var firebase = require("firebase-admin"); 
var serviceAccount = require("../serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://firefightingmonitoringsystem.firebaseio.com/"
});

var db = firebase.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

module.exports.set = function(app) {
  //WORKS? 
  app.get('/firebase', (req,res) => {
    console.log("in firebase")
  });
}
