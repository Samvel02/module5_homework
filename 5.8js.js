let myMap = new Map();
myMap.set('1', 'A');
myMap.set('2', 'B');
myMap.set('3', 'C');

for (let item  of myMap){
    alert(`Ключ - ${item[0]}, Значение - ${item[1]}` )
}
