// solomon_uche 👑👑👑
const numbers = [0, -5, 1, 2, 8, 5, 6, 3, 9, 0];

const isGreaterThanOne = (number) => {
    return number > 1;
};

class Node {
    constructor(data) {
        this.data = data;
    }
    filter(fn) {
        let results = [];
        for (const value of this.data) {
            (fn(value)) ? results.push(value) : undefined;
        }
        return results;
    };
}
const node = new Node(numbers);
console.log(node.filter(isGreaterThanOne)); //Result: [ 2, 8, 5, 6, 3, 9 ]