const express = require("express");
const router = express.Router();


router.route("/").get((req, res) => {
	res.status(200).json({Massage : "Get all contacts"});
});


router.route("/").post((req, res) => {
	res.status(200).json({Massage : "create Contact"});
});

router.route("/:id").get((req, res) => {
	res.status(200).json({Massage : `get contact for ${req.params.id}`});
});



router.route("/:id").put((req, res) => {
	res.status(200).json({Massage : `update contact for ${req.params.id}`});
});


router.route("/:id").delete((req, res) => {
	res.status(200).json({Massage : `delete contacts for ${req.params.id}`});
});


module.exports = router;