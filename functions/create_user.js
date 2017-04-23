const admin = require('firebase-admin');

module.exports = function(req, res) {
  // Verify user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad input' });
  }

  // Format phone number to remove dashes and parens
  const phone = String(req.body.phone).replace(/[^\d]/g, '');

  // Create new user account using that phone
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));

  // Respond to the user request , saying the account was made
}
