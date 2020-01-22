const reverseInt = (num) => {
    let strRet = '';
    let strr = String(num);
    if (num < 0) {
        strRet += '-';
        strr = String(num * (-1));
    }
    for (let i = strr.length - 1; i >= 0; i -= 1) {
        strRet += strr[i];
    }
    return Number(strRet);
};


reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98
