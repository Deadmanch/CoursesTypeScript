var data = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 3, name: 'Надя' },
];
function sort(data, type) {
    if (type === void 0) { type = 'ask'; }
    return data.sort(function (a, b) {
        switch (type) {
            case 'ask':
                return a.id - b.id;
            case 'desc':
                return b.id - a.id;
        }
    });
}
console.log(sort(data, 'desc'));
console.log(sort(data));
