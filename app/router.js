const express = require("express");
const controllers = require('./controllers');
const validate = require("./validator/validate");
const validationObject = require("./validator/validationObject");
const voResetPassword = require("./validator/voResetPassword");

const router = express.Router();

router.get('/', controllers.onGet);
router.get('/:id', controllers.onGetId);
router.post('/', validate(validationObject), controllers.onPost);
router.patch('/:id', controllers.onPatch);
router.delete('/:id', controllers.onDelete);

router.post('/login', validate(validationObject), controllers.onLogin);
router.post('/reset-password', validate(voResetPassword), controllers.onResetPassword);

module.exports = router;