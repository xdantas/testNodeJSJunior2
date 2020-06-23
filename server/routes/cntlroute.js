const express = require('express');
const router = express.Router();

const DataController = require('../controller/cntlcontroller');

router.post('/insert', DataController.insert);
router.get('/select', DataController.select);

module.exports = router;