const router = require('express').Router();
const userRoutes = require("./userRoutes");
const blogDataRoutes = require('./blogData');

router.use("/user", userRoutes);
router.use('/blogData', blogDataRoutes);

module.exports = router;
