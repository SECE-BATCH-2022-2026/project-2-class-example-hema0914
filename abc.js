// singe command

/*Multi line
Multi line
Multi line*/




//console.log("Hema");
/*let a =10;
let b=20;
let c=30;
let d=Math.random();
let s="hema";
console.log(a+b);
console.log(d+1);
console.log("String :"+ s+d);


console.log(typeof a);
let bc;
console.log( typeof bc);
let cd=null;
console.log(typeof cd);

let k=/^abc/;
console.log(typeof k);

bo={
    name: "abc",
    age: 20  //no semicolon for number

}
console.log(bo);

bdd=[10,20,30];
console.log(bdd);
bcd=[{"name": "abc", "location": "xxx"}];

console.log(bcd);*/


/*console.log(a);
let b=20;
console.log(b);*/


/*let a=20;
{
    //let a=10;
    console.log(a);
}
console.log(a);
*/

//let a=10, b=20 ,c=30;
//console.log(a+b+c);


/*let boj={
    name: "abc",
    age: 20  //no semicolon for number
    
}*/

/*let friendlst={
    name: "abc",
    age: 20 
},

friend2={
    name: "xyz",
    age: 30
}
console.log(friend2);*/


// let a=10;
// let A=20;
// console.log(a,A);



// let hari="hema";
// let shari="hema";    //case sensitivity
// console.log(hari,shari);



// ------------------------------------------------------------------

// consant

// const a=10;
// a=20;
// console.log(a);    //error

// const a;
// a=10;
// console.log(a); //error

// {
//     const a=10;
//     console.log(a);
// }
// console.log(a);

// var a=10;
// console.log(a);
//  var a=20;
// console.log(a);      //doesnt show error message


// console.log(a);
//  var a=20;
// console.log(a);   


// var a=10;
// console.log(a)
// {
//     var a=20;
//     console.log(a)
// }
// console.log(a)

//we cant use variable names in function declarations

// function add(num1,num2){
//     return num1 + num2;

// }

// let a=add(10,20);
// let b=add(20,40);
// console.log(a,b);



// a=friend("hema",20);
// console.log(a);
// function friend(name, age){
//     return {name:name, age:age}
// }


// let a=function(a,b){
//     return a+b;
// }

// console.log(a(10,20));


// console.log(a(10,20));
// var a= function(a,b){
//     return a+b;   //it doesnt hoist the result without using a func name but it runs with normal function which has a name.
// }

// function teach(name){
//     return "teaching experience of "+name;
// }
// console.log(teach("hema"));

// let add=(num1,num2)=>{
//     return num1+num2;
// }
// let a=(name)=>{
//     return "a description";    //another way of using functions
// }
// console.log(add(10,20));
// console.log(a("hema"));

//......................................Arrays........................................



// let items=["lap","bench","table"];
// let count =items.length;
// items.push("mobile");
// console.log(items);



// additems=(items) =>{
//     return items.push("mobile");  //without using function.
// }



// let items=[10,20,30,40,50,60];
// function findLength(){
//     return items.length;
// }
// function addItem(item){
//     return items.push(70);
// }

// function removeLastItem(item){
//     return items.pop();
// }
// function removeItem(item){
//     return items.splice(0,1);
// }

// console.log(findLength());

// console.log(addItem(items));
// console.log(removeLastItem(items));
// console.log(removeItem(items));




// items.unshift("connector"); //add in connector

// items.shift("connector");  //remove in beginning

// items.slice(2,4)
// console.log(items);

// items.indexOf("mobiles");


//-------------------------------------------------------LOOPS--------------------------------------------------



// let items=["table","bench","table"];


// for (let i=0; i< items.length; i++) {
//     console.log(items[i]);
// }



// for(let item of items){
//     console.log(item);
// }


// let object={
//     name: "hari",
//     age: 20,
//     place: "coimbatore"
// }
//                                        //for keys to print.
// for (let key in object){
//     console.log(key,object);
// }

// JavaScript to illustrate forEach() method
//marks=[30,45,65,67]
// marks.forEach(items => {
//     marksFor100.push(items *2);
// });
// console.log(marksFor100)


// marksFor100= marks.map(item =>{
//     return item *2;
// })
// console.log(marksFor100)


marks=[30,25,50,38,46]
// passMark =marks.filter(
//     (item)=>{
//         return item >= 30;
//     }
// )

// let check =(item) =>{
//     return item >30;
// }
// passMark= marks.filter(check)
// console.log(passMark)



let items=["table","bench","laptop"]

console.log(items.sort())             //sort


let item=[90,10,20]
console.log(item.sort())

marks.sort((a,b) => {
    return a-b;
})                                    //descending sort order.
console.log(marks);
str1 = "hema";
str2 = "priya";

// length

/*
console.log(str1.length)
*/

//charAt

//console.log(str1.charAt(1))

//console.log(str1.charCodeAt(1))

//console.log(str1.at(1))

//console.log(str1[1])

//console.log(str1.slice(1,4))

//console.log(str1.slice(4))

//console.log(str1.substring(4,8))

//console.log(str1.toUpperCase())

//console.log(str1.toLowerCase())

//console.log(str1.concat(str2))

//console.log(str1.split(""))
let user={
    firstName : "Hari ",
    lastName: "Sree",
    class: ["CSBS", "CSE"],
    training:{                                                      //key values.
        college : "Sri Eshwar",
        location : "coimbatore"
    },
    fullName: function (){
        return this.firstName+ this.lastName;
    },
    
 }
// console.log(user);
// console.log(user.fullName());
// for (let i in user.class){
//     console.log(user.class[i]);
// }
// for (const item in user.training){                      //const is used to print the training data which is contained in the key.
//     console.log(user.training[item]);
// }

// for (let i=0;i<5;i++){
//     return "something"
// }              //for iteration we use let 


// let [firstName, lastName] =user;
// console.log(firstName);

// let colors= ["red", "green", "blue"]
// let [firstcolor,secondcolor,lastcolor] = colors;

// console.log(firstcolor);
// console.log(secondcolor);
// console.log(lastcolor);


// let names=["Nhivas","Nawin","hari"]
// let [firstName,secondName,lastName] = names;
// console.log(firstName);
// console.log(secondName);
// console.log(lastName);


// let user2=user;
// user.firstName= "sree"
// console.log(user2)
// console.log(user);            //user also changed

// what if i need a new copy we use spread operator,
// let userDetail1 ={
//     name: "hari"
// }
// let userDetail2 ={
//     age: 20,
//     name: "Man"
// }
// // userDetail = userDetail1+ userDetail2
// // console.log(userDetail)





// userDetail= {...userDetail1, ...userDetail2}           //spread operator

// console.log(userDetail)

// let array =[10,20,30]
// let array2 =[40,50]

// let newArray = [...array,...array2]

// console.log(newArray);

// let array =[10,20,30]
// let array2 =[10,20,30]

// let newArray = [...array,...array2]

// console.log(newArray);

// let array =[10,20,30]
// let array2 =[]

// let newArray = [...array,...array2]

// console.log(newArray);


let array =[10,20,30]
let array2 =["string"]

let newArray = [...array,...array2]

console.log(newArray);