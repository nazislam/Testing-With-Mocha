function findGreater(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function findGreaterSmarter(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

module.exports = { 
    findGreater,
    findGreaterSmarter
};