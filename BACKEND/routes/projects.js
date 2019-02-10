const express = require("express");
const router = express.Router();

const User = require("../models/User");

//Add projects id for specific user filter by email
router.post("/addprojects", (req, res) => {
  //If User exist finding by email update (adding to array, only updating if in array already exist do nothing), else return email not valid!
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      User.findOneAndUpdate(
        { email: req.body.email },
        {
          $addToSet: { proyectsName: {name:req.body.proyectsName, id: req.body.proyectsId, url: req.body.proyectUrl} }
        }
      ).then(res.send("Added ProyectId"));
    } else {
      return res.send("EMAIL NOT VALID!");
    }
  });
});

router.post("/getprojects", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      User.find(
        { email: req.body.email }
      ).then(res.json(user));
    } else {
      return res.send(req.body.email + " EMAIL NOT VALID!");
    }
  });
});

router.post("/deletedeploy", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      User.update(
        { email: req.body.email },
        { $pop: {proyectsName:-1}}
      ).then(res.send("Deleted"));
    } else {
      return res.send(req.body.email + " EMAIL NOT VALID!");
    }
  });
})

module.exports = router;
