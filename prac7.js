const people =[
    {name:'Meena',age:20},
    {name:'Rina',age:15},
    {name:'Suchorita',age:22},
]

const total = people.reduce((acum,current) => acum + current.age, 0);
console.log(total)
