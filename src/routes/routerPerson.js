const express = require("express");
const router = express.Router();

const ControllerPerson = require("../controllers/controllerPerson");

const controller = new ControllerPerson();

router.get('/api/v1/names', controller.PickAll)
router.get('/api/v1/name/:id', controller.PickOne)
router.post('/api/v1/name', controller.Add)
router.put('/api/v1/name/:id', controller.Put)
router.delete('/api/v1/name/:id', controller.Delete)

module.exports = router
