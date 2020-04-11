var reverse = function(x) {
    let num = parseInt(x.toString().split('').reverse().join(''));
    if (num > Math.pow(2, 31)) {
        return 0;
    }
    if (x < 0) {
        return num * (-1);
    }
    else {
        return num;
    }
};