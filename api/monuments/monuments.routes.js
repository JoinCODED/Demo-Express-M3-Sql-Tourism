const express = require('express');
const router = express.Router();
const {
  monumentsGet,
  monumentsUpdate,
  monumentsDelete,
  monumentsCreate,
} = require('./monuments.controllers');

router.param('monumentId', async (req, res, next, monumentId) => {
  const monument = await fetchMonument(+monumentId, next);
  if (monument) {
    req.monument = monument;
    next();
  } else {
    const err = new Error('Monument Not Found');
    err.status = 404;
    next(err);
  }
});

router.get('/', monumentsGet);
router.post('/', monumentsCreate);

router.delete('/:monumentId', monumentsDelete);

router.put('/:monumentId', monumentsUpdate);

module.exports = router;
