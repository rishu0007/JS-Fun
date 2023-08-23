const greet = (cnt) => {
    for(let i = 0; i < cnt; i++) {
        console.log("Hello");
    }
};


const square = (num) => {
    return num * num;
}

greet(4);

const ans = square(5);
console.log("the answer is: " , ans);

