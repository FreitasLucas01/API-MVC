const express = require("express");
const router = express.Router();

const ControllerPerson = require("../controllers/controllerPerson");

const controller = new ControllerPerson();

router.get('/api/v1/name', controller.AllPeople)

module.exports = router
