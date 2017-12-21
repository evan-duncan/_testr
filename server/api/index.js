const express = require('express');

const router = express.Router();
const auth = require('./auth');

const isAuthed = auth.authenticate('bearer', { session: false });
const controllers = require('./controllers');

router.use(auth.initialize());
Object.values(controllers).forEach(controller => controller(router));
module.exports = router;
