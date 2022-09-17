// console.log('right now i am busy');
const pra = ['a', 'b', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p'
]


const fil = (num) => {
    const plate = []
    for (let i = 0; i < num.length; i++) {
        const index = num[i];
        // console.log(index);
        if (plate.indexOf(index) === -1) {
            plate.push(index)
        }
    }
    return plate;

}
const re = fil(pra)
console.log(re);

class Data {
    constructor(name,roll,age,section){
        this.name = name;
        this.roll = roll;
        this.age = age;
        this.section = section
    }
} 

const myName = new Data('rahim', 2, 10, 'B')
const myFrinnd = new Data('karim',1,11,'A')
console.log(myFrinnd);
console.log(myName);