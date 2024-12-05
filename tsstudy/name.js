// npx tsc name.ts
var msg = 'Hello';
var num = 123;
var bool = true;
function add(num1, num2) {
    return num1 + num2;
}
var plus = function (num1, num2) { return num1 + num2; };
var age = 30;
var aaa = "Johb-n";
console.log(aaa.toUpperCase());
var nameObj = new String("John");
// -----------------------------------------
function max(num1, num2) {
    if (num1 > num2)
        return num1;
    return num2;
}
console.log(max(1, 2));
//---------------------------------------------
var arr = [10, 20, 30];
arr.forEach(function (a) {
    console.log(a);
    return a;
});
//----------------------------------------------
var companies = ['네이버', '삼성', 'LG'];
var companies = ['네이버', '삼성', 'LG'];
var cards = [1, 2, 3, 4];
var cards = [1, 2, 3, 4];
var arr2 = [1];
arr.push(2);
console.log(arr2);
//----------------------------------------------
function getUserInfo() {
    // 가정: user 객체에서 정보를 가져온다.
    var user = {
        name: 'Alice',
        age: 25
    };
    return [user.name, user.age];
}
var _a = getUserInfo(), userName = _a[0], userAge = _a[1]; // 튜플 분해 할당
console.log("\uC0AC\uC6A9\uC790 \uC774\uB984: ".concat(userName, ", \uC0AC\uC6A9\uC790 \uB098\uC774: ").concat(userAge));
//-----------------------------------------------
var dan = [];
for (var i = 0; i < 10; i++)
    dan.push(i * 2); //배열을 나타내는 명령문
console.log(dan);
//-----------------------------------------------
function swap(arg) {
    return [arg[1], arg[0]];
}
console.log(swap([5, 10]));
//-----------------------------------------------
function sayMyName(firstName, lastName) {
    return "my name: ".concat(firstName, " ").concat(lastName);
}
console.log(sayMyName('kim', 'tae'));
//----------------------------------------------------
function test(arg) {
    console.log(arg.id, arg.email);
}
//-----------------------------------------------------
function toLocationString(arg) {
    return "(".concat(arg.x, ", ").concat(arg.y, ")");
}
var result = toLocationString({ x: 0, y: 0 });
console.log(result);
//-----------------------------------------------------
function printPoint(arg) {
    if (arg.color !== undefined) {
        console.log(arg.x, arg.y, arg.color);
    }
    else {
        console.log(arg.x, arg.y);
    }
}
//------------------------------------------------------
function logText(text) {
    if (typeof text === 'string') {
        console.log(text.toUpperCase());
    }
    if (typeof text === 'number') {
        console.log(text.toLocaleString());
    }
}
logText('hi');
logText(100);
//------------------------------------------------------
/*function text(){



}
console.log(test(1));
console.log(text('hello'));*/
//-----------------------------------------------------
/*const arr:(number|boolean)[] = [];

arr.push(1);
arr.push(true);
arr.push(2);
arr.push(false);
arr.push(3);

arr */
//----------------------------------------------------
function info(user) {
    console.log(user.id, user.userName);
}
info({ id: 1, userName: 'u1' });
info({ id: '2', userName: 'u2' });
function printTelephone(telephone) {
    console.log(telephone);
}
printTelephone('010-1111-1111');
printTelephone(1022222222);
function info1(user) {
    console.log(user.userName);
}
var user = { id: 'u1', userName: 'userOne' };
var admin = { id: 'a1', userName: 'admin1', level: 1 };
info1(user);
info1(admin);
//------------------------------------------------------------------------
/*interface User {id:number};
interface User {name:string};
function printAll(user:User ){
    console.log(user.id, user.name);
}
printAll({id:1, name:'user'});*/
//--------------------------------------------------------------------------
function caller(callback) {
    callback("Hello");
}
function func(str) {
    return str.length;
}
caller(func);
caller(function (str) { return 0; });
//-------------------------------------------------
function ex(arg, f) {
    return f(arg);
}
var square = function (num) { return num * num; };
function toggleSign(num) {
    return -num;
}
ex(2, square);
ex(2, toggleSign);
//-------------------------------
function getText(text) {
    return text;
}
getText('hi');
getText(10);
function merge(arg1, arg2) {
    if (typeof arg1 === 'number') {
        return arg1.toString() + arg2.toString();
    }
    else {
        return arg1 + arg2;
    }
}
console.log(merge(1, 2));
console.log(merge("hello", "world"));
function getRange(num1, num2) {
    var arr = [];
    var start = num2 === undefined ? 0 : num1;
    var end = num2 === undefined ? num1 : num2;
    for (var i = start; i < end; i++)
        arr.push(i);
    return arr;
}
console.log(getRange(3));
console.log(getRange(1, 3));
//구현부
var merge1 = function (x, y) { return x.toString() + y.toString(); };
//----------------------------------------------------------------------
function totallength() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    args.forEach(function (s) { return sum += s.length; });
    return sum;
}
console.log(totallength('a', 'b', 'c'));
console.log(totallength('hello'));
var arr1 = ['a', 'b', 'hello'];
console.log(totallength.apply(void 0, arr1));
var btnEnter1 = {
    x: 0,
    y: 0,
    width: 20,
    heigth: 10,
    text: 'Enter',
    draw: function () { return console.log('draw'); },
    drawText: function () { console.log('drawText'); }
};
console.log("Button1 \uC704\uCE58 : (".concat(btnEnter1.x, ", ").concat(btnEnter1.y, ")"));
btnEnter1.drawText();
var postBody = {
    content: 'hello',
    operation: function (arg1, arg2) {
        return arg1.length > arg2.length ? arg1 : arg2;
    }
};
var longerString = postBody.operation("TypeScript", "JS");
console.log("".concat(longerString));
var option1 = {
    useIcon: true
};
var a = {};
var b = { id: "1" };
// Record : 타입 1개는 속성의 키, 다른 타입 1개는 속성 값 받아서 객체 타압으로 변환
/*type HeroProfile = {
    skill:string;
    age:number;
}
type HeroNames = "aaa"|"bbb"|"ccc";
type Heros = Record<HeroNames, HeroProfile>;
var avengers:Heros = {
    "aaa":{
        skill:"dd",
        age:100
    },
    "bbb"{
        skill:
        age:
    },
}*/
//---------------
var todoItems;
var todoItmes;
// api
//function fetchTodoItems():{id:number; title:string;done:boolean}[] 
function fetchTodoItems() {
    var todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}
// crud methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}
// business logic
function logFirstTodo() {
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) { return item.done; });
}
// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()`
// 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTodoItems() {
    var newTodo1 = { id: todoItems.length + 1, title: '할일추가1', done: false };
    var newTodo2 = { id: todoItems.length + 2, title: '할일추가2', done: false };
    addTodo(newTodo1);
    addTodo(newTodo2);
}
// NOTE: 유틸 함수
function log() {
    console.log(todoItems);
}
todoItems = fetchTodoItems();
addTodoItems();
log();
//-----------------------------------------------------------
var Person = /** @class */ (function () {
    function Person(name, skill) {
        this.name = name;
        this.skill = skill;
    }
    Person.prototype.sayHi = function () {
        console.log('hi');
    };
    return Person;
}());
var joo = new Person('형주', '달리기');
console.log(joo.name);
console.log(joo.skill);
joo.sayHi();
//-----------------------------------------------
