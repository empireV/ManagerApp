var express = require('express');
var router = express.Router();

const Project = require('../models/project');

router.get('/:id', (req, res) => {
  Project.findOne({ _id: req.params.id }).exec()
  .then((doc) => {
    if (!doc)
      return res.sendStatus(404)
    return res.status(200).json(doc)
  }).catch(e => {
    res.status(500).json(e)
  })
})

router.post('/:id', (req, res) => {
  Project.findOne({ _id : req.params.id }).exec().then((project) => {
    if (!project)
      throw Error('No such project')
    console.log(req.body.taskLists)
    project.taskLists = req.body.taskLists
    project.save().then(() => {
      res.status(200).end()
    })
  }).catch(e => {
    console.log(e)
    res.status(500).json(e)
  })
});

router.delete('/:id', (req, res) => {
  Project.deleteOne({ _id :req.params.id }).exec()
  .then(() => {
    return res.sendStatus(200)
  }).catch(e => {
    res.status(500).json(e)
  })
})

module.exports = router;