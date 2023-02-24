const express = require("express");
const appCtrl = require("../controllers/contactsCtrl");
const router = express.Router();

router.get("/", appCtrl.getAllContacts);

router.post("/", appCtrl.createContact);

router.get("/:id", appCtrl.getSingleContact);

router.patch("/:id", appCtrl.updateContact);

router.delete("/:id", appCtrl.removeContact);

module.exports = router;
