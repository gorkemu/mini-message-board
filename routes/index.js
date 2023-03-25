var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "I am the manager",
    user: "Dwight",
    added: new Date(),
  },
  {
    text: "That's what she said",
    user: "Michael",
    added: new Date(),
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
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
