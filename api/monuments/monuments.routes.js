const express = require('express');
const router = express.Router();
const {
  monumentsGet,
  monumentsUpdate,
  monumentsDelete,
  monumentsCreate,
} = require('./monuments.controllers');

router.get('/', monumentsGet);
router.post('/', monumentsCreate);

router.delete('/:monumentId', monumentsDelete);

router.put('/:monumentId', monumentsUpdate);

module.exports = router;
