var express = require('express');
var router = express.Router();
const indexCtrl = require('../controllers/indexCtrl')

router.get('/', indexCtrl.getMainPage);
router.get('/readme', indexCtrl.getReadMePage);

module.exports = router;
