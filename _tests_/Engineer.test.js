const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee')

test("Creates a name object", () => {
    const engineer = new Engineer('');
    expect(engineer.name).toBe('');
});

test("Creates an Id object", () => {
    const engineer = new Engineer('Id');
    expect(engineer.Id).toBe(Engineer.Id);
});

test("Create an email object",() => {
    const engineer = new Engineer('Email');
    expect(engineer.Email).toBe(Engineer.Email);
})

test('Creates a github property', () => {
    const engineer = new Engineer('github');
    expect(engineer.github).toBe(Engineer.github);
});


