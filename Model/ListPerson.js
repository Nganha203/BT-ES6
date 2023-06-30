import Student from "./Student.js";
import Customer from "./Customer.js";
import Employee from "./Employee.js";
class ListPerson {
    listPerson;
    constructor(listPerson) {
        this.listPerson = [];
    }
    themPerson(newPerson) {
        this.listPerson.push(newPerson)
    }
    
    xoaPerson(id) {
        if (this.listPerson.length > 0) {
            let index = this.listPerson.findIndex(n => n.id === id)
            if (index > -1) {
                this.listPerson.splice(index, 1);
                return true;
            }
            return false
        }
        return false
    }
    
    capNhatPerson(newPerson) {
        if (this.listPerson.length > 0) {
            let index = this.listPerson.findIndex(n => n.id === newPerson.id)
            if (index > -1) {
                this.listPerson[index] = newPerson;
                return true;
            }
            return false
        }
        return false
    }
    
    timPersonTheoId(id) {
        if (this.listPerson.length > 0) {
            let index = this.listPerson.findIndex(n => n.id === id)
            if (index > -1) {
                return this.listPerson[index]
            }
            return -1
        }
        return -1
    }
    
    sapXepTheoTen() {
        if (this.listPerson.length > 0) {
            this.listPerson = this.listPerson.sort((nextItem, item) => {
                let tenPersonTiepTheo = nextItem.hoTen.toLowerCase();
                let tenPersonHienTai = item.hoTen.toLocaleLowerCase();
                if (tenPersonTiepTheo > tenPersonHienTai) {
                    return 1;
                }
                if (tenPersonTiepTheo < tenPersonHienTai) {
                    return -1;
                }
                return 1;
            });
        }
    }
    
    filterByPerson(condition) {
        const type = {
            Student: 'Student',
            Employee: 'Employee',
            Customer: 'Customer',
            All: 'All'
        }
        if (this.listPerson.length > 0) {
            let result = []
            switch (condition) {
                case type.Student:
                    result = this.listPerson.filter(n => n instanceof Student)
                    return result
                case type.Employee:
                    result = this.listPerson.filter(n => n instanceof Employee)
                    return result
                case type.Customer:
                    result = this.listPerson.filter(n => n instanceof Customer)
                    return result
                case type.All:
                    result = this.listPerson
                    return result
                default:
                    break;
            }
        }
    }
}
export default ListPerson;