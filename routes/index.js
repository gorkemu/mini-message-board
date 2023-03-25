var express = require("express");
var router = express.Router();
const moment = require("moment");

const messages = [
  {
    text: "I am the manager",
    user: "Dwight",
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    text: "That's what she said",
    user: "Michael",
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: moment().format("MMMM Do YYYY, h:mm:ss a"),
  });
  res.redirect("/");
});

module.exports = router;
