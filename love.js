// console.log('right now i am busy');
const pra = ['a', 'b', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p'
]


const fil = (num) => {
    const plate = []
    for (let i = 0; i < num.length; i++) {
        const index = num[i];
        // console.log(index);
        if (plate.includes(index) === false) {
            plate.push(index)
        }
    }
    return plate;

}
const re = fil(pra)
console.log(re);