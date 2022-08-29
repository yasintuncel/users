const express = require("express");
const controllers = require('./controllers');
const router = express.Router();

router.get('/', controllers.onGet);
router.get('/:id', controllers.onGetId);
router.post('/', controllers.onPost);
router.patch('/:id', controllers.onPatch);
router.delete('/:id', controllers.onDelete);

module.exports = router;