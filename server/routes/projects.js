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
    res.sendStatus(500).json(e)
  })
})

router.post('/:id', (req, res) => {
  const project = Project.updateOne({ _id : req.params._id }, req.body).then(() => {
    res.sendStatus(200).json(project)
  }).catch(e => {
    res.sendStatus(500).json(e)
  })
});

router.delete('/:id', (req, res) => {
  Project.deleteOne({ _id :req.params.id }).exec()
  .then(() => {
    return res.sendStatus(200)
  }).catch(e => {
    res.sendStatus(500).json(e)
  })
})

module.exports = router;