


const pathSearch = [
    'C:\\Work\\test\\JS Асинхронное программирование\\test5.txt',
    'C:\\Work\\test\\JS Асинхронное программирование\\test51.txt',
    'C:\\Work\\test\\JS Асинхронное программирование',
    'C:\\Work\\test',
    'C:\\Work\\test\\JS Асинхронное программирование\\test52221.txt',
]

const getTypes = (path) => {
    path.reduce((acc, pathOne) => {
        console.log(acc);
        console.log(pathOne);
        return acc += 1;
    }, 0)
};

vv = getTypes(pathSearch);
console.log(vv);