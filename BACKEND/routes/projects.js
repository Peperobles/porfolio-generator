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
        { $addToSet: { proyectsId: req.body.proyectsId } }
      ).then(res.send("Added ProyectId"));
    } else {
      return res.send("EMAIL NOT VALID!");
    }
  });
});

router.post("/getprojects", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if(user) {
      User.find(
        { email: req.body.email }
        // { password: 0 }
      ).then(res.json(user))
    }else{
      return res.send(req.body.email+" EMAIL NOT VALID!")
    }
  })
})

module.exports = router;
