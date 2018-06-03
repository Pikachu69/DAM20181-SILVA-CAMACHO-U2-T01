interface Person{
  name : string;
  email : string;
  salary : number;
  active : boolean;
}

var people = Array<Person>();

function createPeople():void {
  let newPerson : any
  for( let i = 0; i < 10; i++){
    newPerson = {
      name : `Eduardo${i}`,
      email : `i${i}@gmail.com`,
      salary : (i+10000),
      active : i%2===0 ? true : false
    }
    people.push(newPerson);
  }
  people.push({
    name:'Eduardo',
    email:'micorreo123',
    salary:500000,
    active:true
  });
}

function print():void{
let regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
people.forEach(element => {
    if(element.active===true && (regexp.test(element.email)))console.log(element);
});
}

createPeople();
print();
