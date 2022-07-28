const Engineer = require('./Engineer')
class Employee {
    constructor(name,Id,Email,role) {
    this.name = name;
    this.Id = Id;
    this.Email = Email;
    this.Role = role;
    return this;
    }

    getName(name) {
this.name = name
    };

 getRole(role){
    this.Role += role;
 }

 if()




};

    const Manager = new Employee('',Math.floor(Math.random() * 10 + 95), 'github.com','');
    const Intern = new Employee('', Math.floor(Math.random() * 10 + 95), '','');
   const employee = new Employee('',Math.floor(Math.random() * 10 + 95), 'github.com','')
   employee.getRole('Employee'); 
   console.log(Manager);
    console.log(employee);
     
    
    
       
    
   

module.exports = Employee;