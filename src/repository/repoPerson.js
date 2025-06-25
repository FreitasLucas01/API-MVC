const database = new Array("john", "mary", "tracy");

class RepositoryPerson{
    PickAll(){
        return database
    }

    PickOne(index){
        return database[index]
    }

    Add(name){
        database.push(name)
    }

    Put(index, name){
        database[index] = name
    }

    Delete(index){
        database.splice(index, 1)
    }
}

module.exports = RepositoryPerson