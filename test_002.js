const dnaToRna = (str) => {
    if (str.length === 0) {
        return '';
    }
    const arrChange = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    let arrToReturn = '';
    for (const [namItem] of str) {
        if (!arrChange.hasOwnProperty(namItem)) {
            return null;
        } else {
            arrToReturn += arrChange[namItem];
        }
    }
    return arrToReturn;
};


console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
