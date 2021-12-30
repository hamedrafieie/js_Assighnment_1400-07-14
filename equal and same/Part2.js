const obj1 = {
    key0 : false,
    key1 : 'vall',
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name : 'ali' }
}
const obj2 = {
    key0 : false,
    key1 : 'vall',
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name : 'ali' }
}
const obj3 = {
    key0 : false,
    key1 : 'vall',
    key2 : 20,
    key3 : [0,1,2],
}
const obj4 = {
    key0 : true,
    key1 : 32,
    key2 : 20,
    key3 : [0,1,2],
    key4 : {name : 'ali' }
}

function areObjectsEqual () {

    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            if (obj1[key] !== obj2[key]) return false;
        }
    }

    return true;

}
function isObject(object) {
    return object != null && typeof object === 'object';
}

console.log(areObjectsEqual( obj1 , obj2 )); // true
console.log(areObjectsEqual( obj1 , obj3 )); // false
console.log(areObjectsEqual( obj1 , obj4 )); // false


function isSame(obj1,obj2){
    if(obj1===obj2) return true
    else return false
}