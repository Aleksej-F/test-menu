let expresstt = require('express');
const router = expresstt.Router();
const {
  getDishs,
  addDish,
} = require("./controllers");

console.log("роутер")
router.get('/',  getDishs);
router.post('/', addDish);
module.exports = router;