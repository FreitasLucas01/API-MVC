const { describe, expect, it } = require('@jest/globals');
const ServicePerson = require('../src/services/servicePerson');

describe('CRUD names', () => {
    it('All names', () => {
        const service = new ServicePerson();

        const allName = service.PickAll()

        expect(Array.isArray(allName)).toBe(true)
    });

    it('PickOne names', () => {
        const service = new ServicePerson(); 
        const index = 0; 

        const name = service.PickOne(index); 

        console.log(name); 

        expect(typeof name).toBe("string"); 
        expect(service.PickAll()).toContain(name); 
    });

    it('Add name', () => {
        const service = new ServicePerson();
        const name = 'Lucas';

        const allName = service.PickAll()
        service.Add(name);

        console.log(allName);

        expect(allName[allName.length - 1]).toBe(name);
    });

    it('Update name', () => {
        const service = new ServicePerson();
        const index = 2;
        const name = 'Lenin';
        const allName = service.PickAll();
        service.Put(index, name);

        console.log(allName)

        expect(allName[index]).toBe(name)
    })

    it('Del name', () => {
        const service = new ServicePerson()
        const index = 0;
        const allName = service.PickAll()

        const nameBefore = service.PickOne(index)
        service.Delete(index)
        const nameAfter = service.PickOne(index)

        console.log(nameBefore, nameAfter)
        console.log(allName)

        expect(nameBefore).not.toBe(nameAfter)
    })
});

