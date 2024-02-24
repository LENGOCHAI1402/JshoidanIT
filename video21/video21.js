console.log("Hello world from HTML")

// let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [
    { name: "hải", age: 21},
    { name: "tuấn", age: 21 },
    { name: "long", age: 24 },
]
// fulter, find

let filter= arr.filter((item, index) => {
    return item && item.age === 21;
} );

console.log(filter);