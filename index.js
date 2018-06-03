var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Eduardo" + i,
            email: "i" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 === 0 ? true : false
        };
        people.push(newPerson);
    }
    people.push({
        name: 'Eduardo',
        email: 'micorreo123',
        salary: 500000,
        active: true
    });
}
function print() {
    var regexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    people.forEach(function (element) {
        if (element.active === true && (regexp.test(element.email)))
            console.log(element);
    });
}
createPeople();
print();
