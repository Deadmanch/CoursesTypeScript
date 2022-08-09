/*
Необходимо написать функцию группировки, которая принимает массив объектов
и его ключ, производит группировку по указанному ключу и возращает
сгруппированный объект.
Пример:
``` js
[
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
```

При группироке по 'group' ---->

``` js
{
    '1': [ { group: 1, name: 'a' }, { group: 1, name: 'b' } ],
    '2': [ { group: 2, name: 'c' } ]
}

*/
var data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
];
function group(array, key) {
    return array.reduce(function (map, item) {
        var itemKey = item[key];
        console.log(itemKey);
        var curEl = map[itemKey];
        console.log(curEl);
        if (Array.isArray(curEl)) {
            curEl.push(item);
            console.log(curEl);
        }
        else {
            curEl = [item];
            console.log(curEl);
        }
        map[itemKey] = curEl;
        return map;
    }, {});
}
var res = group(data, 'group');
console.log(res);
