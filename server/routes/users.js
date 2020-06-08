var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')

const User = require('../models/users')

router.get('/', (req, res) => {
  User.find
  ().exec().then(docs => {
      res.status(200).json(docs)
  }).catch(err => 
      res.status(500).json({
          error: err
      })
  )
})

router.post('/signup', function (req, res) {
  User.find({ name: req.body.name })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({message: 'UserExists'})
      }
      bcrypt.hash(req.body.password, 10)
        .then(hash => {
          let user = new User({
            name: req.body.name,
            password: hash,
          })
          user.save().then(
            () => res.status(200).end()
          ).catch(
            () => res.status(500).end()
          )
        })
        .catch(() =>
          res.status(500).end()
        )
    }).catch(() =>
      req.res(500).end()
    )
});

module.exports = router;
