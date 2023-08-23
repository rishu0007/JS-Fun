function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is cheese " , cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "dough";
        console.log("Here is dough ", dough);
        callback(dough);
    },2000);
};

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("here is pizza " , pizza);
        callback(pizza);
    },2000);
};

getCheese((cheese) => {
    makeDough(cheese,(dough) => {
        bakePizza(dough, (pizza) => {
            console.log("got my pizza: ", pizza);
        });
    });
});