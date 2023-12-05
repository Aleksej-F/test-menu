let expresstt = require('express');
const router = expresstt.Router();
const {
  getDishs,
} = require("./controllers");

console.log("gfhfghf")
router.get('/',  getDishs);

module.exports = router;