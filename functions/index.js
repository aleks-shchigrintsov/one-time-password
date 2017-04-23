const admin = require('firebase-admin');
const functions = require('firebase-functions');

const createUser = require('./create_user');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-dee92.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
