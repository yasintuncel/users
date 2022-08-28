const express = require("express");
const { getById, getList, create, update, deleteById } = require("./controller");

const router = express.Router();

router.get('/', getList);
router.get('/:id', getById);
router.post('/', create);
router.patch('/:id', update);
router.delete('/:id', deleteById);

module.exports = router;