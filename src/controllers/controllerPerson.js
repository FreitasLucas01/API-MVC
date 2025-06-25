const ServicePerson = require("../services/servicePerson");

const service = new ServicePerson();

class ControllerPerson{
    AllPeople(req, res) {
        try {
            const names = service.CatchPerson();
            res.status(200).json({ names });
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }
}

module.exports = ControllerPerson;
