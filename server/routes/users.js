var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/users')
const Project = require('../models/project');

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

router.delete('/', () => {
  User.deleteMany().exec()
})

router.post('/signup', function (req, res) {
  User.find({ name: req.body.name })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({ message: 'UserExists' })
      }
      bcrypt.hash(req.body.password, 10)
        .then(hash => {
          Project.create({ name: '', taskLists: [[], [], [], []] })
          .then((project) => {
            console.log(project)
            let user = new User({
              name: req.body.name,
              password: hash,
              project: project._id
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
  })
});

router.post('/login', (req, res) => {
  User.find({ name: req.body.name })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(404).json({msg: 'User doesn\'t exist'})
      }
      bcrypt.compare(req.body.password, user[0].password)
        .then((same) => {
          if (!same)
            return res.status(401).json({msg: 'WrongPassword'})
          const token = jwt.sign(
            {
              name: user[0].name,
              id: user[0]._id,
              project: user[0].project
            },
            process.env.JWT_KEY,
            {
              expiresIn: "10h"
            }
          )
          res.status(200).json({
            token: token,
            user: {
              name: user[0].name,
              id: user[0]._id,
              project: user[0].project
            }
          })
        })
        .catch(() =>
          res.status(500).end()
        )
    })
})

module.exports = router;
