let Name = 'Ajeet';
let Age = 23;
let Company = 'Google';

const Summary = (username,age,company)=>{
    return (
        username + " " + age + " " + company
    );
};

console.log(Summary(Name, Age, Company));

const Person = {
    name: 'ajeet',
    age: 21,
    greet: function(){
        console.log(this.name + " " + this.age);
    }
};

Person.greet();