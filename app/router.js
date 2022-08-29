const express = require("express");
const { onGet, onGetId, onPost, onPatch, onDelete } = require("./controller");

const router = express.Router();

router.get('/', onGet);
router.get('/:id', onGetId);
router.post('/', onPost);
router.patch('/:id', onPatch);
router.delete('/:id', onDelete);

module.exports = router;