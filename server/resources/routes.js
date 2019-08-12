const express = require('express');
const userRoutes = require('./users/users.routes');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/server-status', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

module.exports = router;
