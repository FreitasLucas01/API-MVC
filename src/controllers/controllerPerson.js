const ServicePerson = require("../services/servicePerson");

const service = new ServicePerson();

class ControllerPerson{
    PickAll(req, res) {
        try {
            const names = service.PickAll();
            res.status(200).json({ names });
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }

    PickOne(req, res) {
        try {
            const id = req.params.id
            const name = service.PickOne(id);
            res.status(200).json({ name });
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }

    Add(req, res) {
        try {
            const name = req.body.name
            service.Add(name);
            res.status(201).json();
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }

    Put(req, res) {
        try {
            const id = req.params.id
            const name = req.body.name
            service.Put(id, name)
            res.status(200).json({ message: "Successfully changed" });
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }

    Delete(req, res) {
        try {
            const id = req.params.id
            service.Delete(id);
            res.status(204).json();
        } catch (e) {
            res.status(500).json({ error: e.message});
        }
    }
}

module.exports = ControllerPerson;
