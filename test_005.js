const union = (itogArr = [], ...arrays) => {
    if (arrays.length === 0) {
        return itogArr;
    }
    const firstElement = arrays.shift();
    console.log(firstElement);
    const newArr = itogArr.concat(firstElement);
    return union(newArr, ...arrays);
};



console.log(union([3]));
console.log(union([3, 2], [2, 2, 1]));
console.log(union(['a', 3, false], [true, false, 3], [false, 5, 8]));
