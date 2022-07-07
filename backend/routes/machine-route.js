// import the dependencies module
let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Machine Model
let machineSchema = require('../Models/schema/Machine');

// create machines router
router.route('/add-machine').post((req, res, next) => {
  machineSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// Read machines router
router.route('/').get((req, res) => {
  machineSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Edit Machine router
router.route('/edit-machine/:id').get((req, res) => {
  machineSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Machine router
router.route('/update-machine/:id').put((req, res, next) => {
  machineSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Machine updated successfully !')
    }
  })
})

// Delete Machine router
router.route('/delete-machine/:id').delete((req, res, next) => {
  machineSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;