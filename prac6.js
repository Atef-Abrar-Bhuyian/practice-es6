const instructor = [
    {name: 'Nodi',age:29,postision:'Senior'},
    {name: 'Akil',age:24,postision:'Junior'},
    {name: 'Shobuj',age:45,postision:'Senior'},
];

const seniors = instructor.filter(s => s.postision === 'Senior');
console.log(seniors);