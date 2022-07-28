const Employee = require('../lib/Employee.js');




test("Creates a name object", () => {
    const employee = new Employee('');
    expect(employee.name).toBe('');
});

test("Creates an Id object", () => {
    const employee = new Employee('Id');
    expect(employee.Id).toBe(Employee.Id);
});

test("Create an email object",() => {
    const employee = new Employee('Email');
    expect(employee.Email).toBe(Employee.Email);
});

test('Create the getRole Method', () => {
    const employee = new Employee('role');
    expect(employee.Employee.role).toBe('Employee');
});


