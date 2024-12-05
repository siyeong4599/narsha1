// npx tsc name.ts
const msg: string = 'Hello';
const num: number = 123;
const bool: boolean = true;

function add(num1: number, num2: number): number {
    return num1 + num2;
}

const plus = (num1: number, num2: number): number => num1 + num2;


let age: number = 30;
let aaa: string = "Johb-n";
console.log(aaa.toUpperCase());

let nameObj = new String("John");

// -----------------------------------------

function max(num1: number, num2: number): number {
    if (num1 > num2)
        return num1;
    return num2;
}

console.log(max(1, 2));

//---------------------------------------------

const arr = [10, 20, 30];
arr.forEach((a: number): number => {
    console.log(a);
    return a;
});

//----------------------------------------------

var companies: Array<string> = ['네이버', '삼성', 'LG'];
var companies: string[] = ['네이버', '삼성', 'LG'];
var cards: Array<number> = [1, 2, 3, 4];
var cards: number[] = [1, 2, 3, 4];
var arr2 = [1];
arr.push(2);
console.log(arr2);

//----------------------------------------------

function getUserInfo(): [string, number] {
    // 가정: user 객체에서 정보를 가져온다.
    const user = {
        name: 'Alice',
        age: 25
    };
    return [user.name, user.age];
}

const [userName, userAge] = getUserInfo(); // 튜플 분해 할당
console.log(`사용자 이름: ${userName}, 사용자 나이: ${userAge}`);

//-----------------------------------------------

const dan: number[] = [];

for (let i = 0; i < 10; i++)
    dan.push(i * 2); //배열을 나타내는 명령문
console.log(dan);

//-----------------------------------------------

function swap(arg: [number, number]): [number, number] {
    return [arg[1], arg[0]];
}
console.log(swap([5, 10]));

//-----------------------------------------------

/*function sayMyName(firstName?: string, lastName: string): string {
    return `my name: ${firstName} ${lastName}`;
}

console.log(sayMyName('kim', 'tae'));*/

//----------------------------------------------------

/*function test(arg: { id: number, name?: string }) {
    console.log(arg.id, arg.email);
}*/

//-----------------------------------------------------

function toLocationString(arg: { x: number, y: number }): string {
    return `(${arg.x}, ${arg.y})`;
}
const result = toLocationString({ x: 0, y: 0 });
console.log(result);

//-----------------------------------------------------

function printPoint(arg: { x: number, y: number, color?: string }) {
    if (arg.color !== undefined) {
        console.log(arg.x, arg.y, arg.color);
    } else {
        console.log(arg.x, arg.y);
    }
}

//------------------------------------------------------

function logText(text: string | number) {
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

function info(user: { id: number | string, userName: string }) {
    console.log(user.id, user.userName);
}
info({ id: 1, userName: 'u1' });
info({ id: '2', userName: 'u2' });

//-------------------------------------------------------

/*interface Animal {name:string};
interface Bear extends Animal{
    honey:boolean
};*/

//-------------------------------------------------------

type Animal = { name: string };
type Bear = Animal & {
    honey: boolean
};

//-------------------------------------------------------

type TELEPHONE = string | number;
function printTelephone(telephone: TELEPHONE) {
    console.log(telephone);
}
printTelephone('010-1111-1111');
printTelephone(1022222222);

//---------------------------------------------------------

type User = {
    id: string,
    userName: string
}

type Admin = {
    id: string
    userName: string
    level: number
}

function info1(user: Admin | User) {
    console.log(user.userName);
}

const user: User = { id: 'u1', userName: 'userOne' };
const admin: Admin = { id: 'a1', userName: 'admin1', level: 1 };
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

function caller(callback: (str: string) => number) {
    callback("Hello");
}

function func(str: string): number {
    return str.length;
}

caller(func);
caller((str: string): number => { return 0; });

//-------------------------------------------------

function ex(arg: number, f: (num: number) => number) {
    return f(arg);
}

const square = (num: number) => num * num;
function toggleSign(num: number) {
    return -num;
}
ex(2, square);
ex(2, toggleSign);

//-------------------------------

function getText(text: string | number) {
    return text;
}
getText('hi');
getText(10);

//--------------------------------

/*function middle(Math.floor(num:number) => arr.length)

const arr3 = [1, 2, 3, 4, 5];
const arr4 = ['a','b','c','d'];

console.log(middle(arr3));
console.log(middle(arr4));*/

//---------------------------------------------------------

function merge(arg1: number, arg2: number): string;
function merge(arg1: string, arg2: string): string;
function merge(arg1: number | string, arg2: number | string): string {
    if (typeof arg1 === 'number') {
        return arg1.toString() + arg2.toString();
    } else {
        return arg1 + arg2;
    }
}

console.log(merge(1, 2));
console.log(merge("hello", "world"));

//------------------------------------------------------------------

function getRange(num1: number): number[];
function getRange(num1: number, num2: number): number[];
function getRange(num1: number, num2?: number): number[] {
    const arr: number[] = [];
    const start = num2 === undefined ? 0 : num1;
    const end = num2 === undefined ? num1 : num2;
    for (let i = start; i < end; i++)
        arr.push(i);

    return arr;
}
console.log(getRange(3));
console.log(getRange(1, 3));

//-------------------------------------------------------------

// 선언부
interface Merge {
    (x: number, y: number): string;
    (x: string, y: string): string;
}
//구현부
const merge1: Merge = (x: any, y: any) => x.toString() + y.toString();

//----------------------------------------------------------------------

function totallength(...args: string[]): number {
    let sum = 0;
    args.forEach(s => sum += s.length);
    return sum;
}
console.log(totallength('a', 'b', 'c'));
console.log(totallength('hello'));
const arr1 = ['a', 'b', 'hello'];
console.log(totallength(...arr1));

//-------------------------------------------

/*interface User {
    userId:string,
    password:string,
}

type User = {
    userId:string,
    password:string,
}*/

//-------------------------------

/*interface Widget{
    
}

    interface Button extends Widget{
        drawText():void;
        doraw: ()=> void;
    }

    const btnEnter:Button = {
        x:
        y:
        draw: ()=> console.log('dfsd');
        drawText(){
            console.log('drdfsdfdsd');
        }
    }*/

//-------

type Widget1 = {
    x: number;
    y: number;
    width: number;
    heigth: number;
}
type Button1 = Widget1 & {
    text: string;
    color?: string;
    draw: () => void;
    drawText(): void;
}
const btnEnter1: Button1 = {
    x: 0,
    y: 0,
    width: 20,
    heigth: 10,
    text: 'Enter',
    draw: () => console.log('draw'),
    drawText() { console.log('drawText'); }
}

console.log(`Button1 위치 : (${btnEnter1.x}, ${btnEnter1.y})`);
btnEnter1.drawText();

//-----------

interface ContentBody {
    content: string,
    operation: (s1: string, s2: string) => string;
}

const postBody: ContentBody = {
    content: 'hello',
    operation(arg1: string, arg2: string): string {
        return arg1.length > arg2.length ? arg1 : arg2;
    }
}
const longerString = postBody.operation("TypeScript", "JS")
console.log(`${longerString}`);

//-------

/*type GreetFunction = (name:string) => string;

let greet:GreetFunction function (name:string){
    return `Hello, ${name}!`;
};



interface Greet{
    (name:string, day:string):string;
}
let greet2:Greet = function(name:string)*/

//----------------------

// 인덱스 시그니처
/*interface SalaryMap{
    [level:string]:string;
}

var salary = {
    junior:'100원',
}

interface salaryInfo{
    [level:string]:string;
}
var salary2:salaryInfo{
    junior: '100원',
    mid: '400원',
    senior: '700원'
};*/

//----------------------------

type OptionType = 'useIcon' | 'useTitle' | 'useCancel';

type PopupOption = {
    [key in OptionType]: boolean;
}
const option1: Partial<PopupOption> = {
    useIcon: true
}

interface Hero {
    name: string;
    skill: string;
}
type HeroPropCheck = {
    //[H in keyof Hero]: boolean;
    [H in keyof 'name' | 'skill']: boolean;
}

//------------

// pick : 
interface Profile {
    id: string;
    address: string;
    name: string;
}

type ProfileId = Pick<Profile, 'id' | 'name'>;

//omit : 몇 개만 제외
type User1 = Omit<Profile, 'address'>;

// Partal : 속성을 옵션 속성으로 변환
type Optional = Partial<Profile>;
var a: Optional = {};
var b: Optional = { id: "1" };

// Exclude : 유니언 타입에서 특정 타입을 제외
type Lang = "C" | "Java" | "TypeScript" | "React";
type LangEx = Exclude<Lang, "Java" | "C">;

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

let todoItems: any[];

// 할 일 항목을 나타내는 타입 정의
interface TodoItem {
    id: number;
    title: string;
    done: boolean;
}

let todoItmes: TodoItem[];

// api
//function fetchTodoItems():{id:number; title:string;done:boolean}[] 
function fetchTodoItems(): TodoItem[] {
    const todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}

// crud methods
function fetchTodos(): TodoItem[] {
    const todos: TodoItem[] = fetchTodoItems();
    return todos;
}
function addTodo(todo: TodoItem): void {
    todoItems.push(todo);
}
function deleteTodo(index: number): void {
    todoItems.splice(index, 1);
}
function completeTodo(index: number, todo: TodoItem): void {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): TodoItem {
    return todoItems[0];
}

function showCompleted(): TodoItem[] {
    return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()`
// 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTodoItems() {
    const newTodo1: TodoItem = { id: todoItems.length + 1, title: '할일추가1', done: false };
    const newTodo2: TodoItem = { id: todoItems.length + 2, title: '할일추가2', done: false };
    addTodo(newTodo1);
    addTodo(newTodo2);
}

// NOTE: 유틸 함수
function log(): void {
    console.log(todoItems);
}
todoItems = fetchTodoItems();
addTodoItems();
log();

//-----------------------------------------------------------

class Person {
    name: string;
    skill: string;
    constructor(name: string, skill: string) {
        this.name = name;
        this.skill = skill;
    }
    sayHi(): void {
        console.log('hi');
    }
}
let joo = new Person('형주', '달리기');
console.log(joo.name);
console.log(joo.skill);
joo.sayHi();

//-----------------------------------------------

//클래스 변환하기 예제
//before
// 생성자 함수의 예시를 보고 클래스로 만들어보자. 
/*function Person1(name, skill) {
    this.name = name;
    this.skill = skill;
}
Person1.prototype.sayHi = function () {
    console.log('hi');
};

var joo1 = new Person('형주', '달리기');

console.log(joo.name);
console.log(joo.skill);
joo.sayHi();


//after
class Person2 {
    name:string;
    skill:string;
    constructor(name:string, skill:string){
        this.name = name;
        this.skill = skill;
    }
    sayHi():void{
        console.log('hi');
    }   }
const joo2 = new Person('형주', '달리기');
console.log(joo.name);   
console.log(joo.skill);
joo.sayHi();
*/

//-------------------------------------

// 부모 클래스
class Animal1 {
    name: string;
    constructor(name: string) {
        this.name = name;    }
    move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);    }}
// 자식 클래스
class Dog extends Animal1 {
    constructor(name: string) {
        super(name);    }
    move(distanceInMeters = 5) {
        console.log('Barking...');
        super.move(distanceInMeters);    }
    // Dog 클래스만의 메서드
    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log("Woof!");
        }    }  }
// Dog 인스턴스 생성
const dog = new Dog("Rex");
dog.move(); // Barking... Rex moved 5m.
dog.woof(3); // Woof! Woof! Woof!

//--------------------------------------------------

/*class Thermostat {
    _tempCelsius:number;
    constructor(initialTemp:number){
        this._tempCelsius = initialTemp;
    }
    get tempCelsius2():number{
        return this._tempCelsius; }
    }
    set tempCelsius(newTemp:number){
        this._tempCelsius = newTemp;
    }
    get tempFahrenheit():string{
        return `${(this._tempCelsius * 9 / 5 + 32)}*F`;
    }
    set tempFahrenheit(newTemp:number){
        this._tempCelsius = (newTemp - 32) * 5/9;
    }
}*/

//---------------------------------------------------

/*class WaterPurifier{
    private waterAmount: number;
    constructor(waterAmount:number){
        this.waterAmount = waterAmount;
    }
    get waterAmount():number{
        return this._waterAmount;
    }
    set waterAmount(amount:number){
        if (amount >= 0)
            this._waterAmount = amount;
        else
            console.log("물의 양 ")
    }
}*/

//----------------------------------------------------



















