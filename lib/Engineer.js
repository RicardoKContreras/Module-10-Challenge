// const Employee = require("./Employee");

class Engineer {
    constructor(name,Id,Email,role,github) {
        this.name = name;
        this.Id = Id;
        this.Email = Email;
        this.Role = role;
        this.Github = github;
        return this;
        }

        getRole(role){
            this.Role += role;
         }

         getGitHub(github){
            this.Github += github;
         }
    
};

 const Engine = new Engineer('', Math.floor(Math.random() * 10 + 95), '','','');
 Engine.getRole('Engineer');
 Engine.getGitHub('');
 console.log(Engine);

module.exports = Engine;
