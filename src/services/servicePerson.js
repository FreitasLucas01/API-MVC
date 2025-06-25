const RepositoryPerson = require("../repository/repoPerson");

const repo = new RepositoryPerson();
class ServicePerson {
    PickAll(){
        return repo.PickAll();
    }

    PickOne(id){
        return repo.PickOne(id);
    }

    Add(name){
        return repo.Add(name);
    }

    Put(id, name){
        return repo.Put(id, name);
    }

    Delete(id){
        return repo.Delete(id);
    }
}

module.exports = ServicePerson
