//basic javascript code//
console.log("hello world");

// output power jonno console.log baborhar//

//variable ar babohar see//
// camelCase: friendName//
// string variable//
var friendName = "Prince Ruhul";
console.log(friendName);
// stringtype variable decelear //
// typeof ar work ata kon type ar variable ta decelear korar jonno//
var strType = "Ruhul Programmer";
console.log(typeof strType);

// number variable//
var friendName = 20;
console.log(friendName);
 
var friendName = 20;
console.log( typeof friendName);

var numType =  50;
console.log( typeof numType);

var numberType = `Ruhul,Rajon,Ebrahim`;
console.log(typeof  numType);

var numbersType = 201050520460210;
console.log( typeof numbersType);


// boolean type variable //
var boolType = true;
console.log(boolType);

var boolType = true;
console.log( typeof boolType);

var boolTypes = false;
console.log( boolTypes);

var boolType = false;
console.log( typeof boolType);

// toUpper case and lowerCase mathord //
var rochona = "My school is one of the most important places in my life. The name of my school is Green Valley High School. It is situated near my house. It is a beautiful and well-known school in our area.";
console.log(rochona.toUpperCase());

var rochonaName = "MY SCHOOL IS ONE OF THE MOST IMPORTANT PLACES IN MY LIFE. THE NAME OF MY SCHOOL IS GREEN VALLEY HIGH SCHOOL. IT IS SITUATED NEAR MY HOUSE. IT IS A BEAUTIFUL AND WELL-KNOWN SCHOOL IN OUR AREA.";
console.log(rochonaName.toLowerCase());

// split method ar babohar // split divid do//
var myFd = "Ruhul Rajon Ebrahim Rifat Faysal";
console.log(myFd.split("Ruhul"));

var myFriends = "Ruhul Rajon Rahol Basha Khan";
console.log(myFriends.split("Rahol"));

// indexof() ar babohar //indexof pode nidraron//
var myFds = "Ruhul Ebrahim Shanto Khan";
console.log(myFds.indexOf("K"));

var myFds = "Ruhul Ebrahim Shanto Khan";
console.log(myFds.indexOf("S"));


var num1 = 55;
var num2 = 99;
var total =  num1+num2;
console.log(total);

// praseFloat ar work string theke number type convered //
var num1 = "55";
var num2 = 99;
 num1 = parseFloat( typeof num1);
 console.log(typeof num1);


var num1 = 52.251;
var num2 = 99;
var total = num1 + num2;
 num1 = parseInt(  num1);
 console.log( total);

 var num1 = "50.251";
 var num2 = 50;
 num1 = parseFloat(num1);
 var total = num1 + num2;
 console.log(total);
//number type theke string type convared//
 var num3 = 25;
 var num4 = 25;
 num4 = "" + num4;
 console.log( typeof num4);

//  javascript operators ar babohar //
var num1 = 50;
var num2 = 42;
var total = num1 + num2;
console.log(total);

var num1 = 50;
var num2 = 42;
var total = num1 - num2;
console.log(total);

var num1 = 50;
var num2 = 42;
var total = num1 * num2;
console.log(total);

var num1 = 50;
var num2 = 40;
var total = num1 / num2;
console.log(total);


var num1 = 50;
var num2 = 40;
var total = num1 % num2;
console.log(total);

var num1 = 20;
var num2 = 10;
console.log(num1+num2);

// math function ar babohar //

//abs nagitive number theke possitive numbere convered//
var num1 = -20;
var sum = Math.abs(num1);
console.log(sum);

// round  ar babohar //
var voter = 5.4899;
var sum = Math.round(voter);
console.log(sum);
// ceil ar babohar khasra number ke  cound //
var voter = 5.4899;
var sum = Math.ceil(voter);
console.log(sum);

var voter = 5.1524;
var sum = Math.ceil(voter);
console.log(sum);
// math.random ar babohar //
var lotary = Math.random();
console.log(lotary);

var lotary = Math.random() * 100;
console.log(lotary);

// logical and condition statement //

//if statement ar babohar //
var a = 2;
var b = 5;

if(a<b){
   console.log("computer ar matha thik ase");
}

var a = 2;

if(a<10){
   console.log("see you not for mind");
}

if(10>1){
  console.log("Hello World");
}
//if else statement //
var a = 2;
var b = 5;
if(a>b){
  console.log("hello world 2");
}
else {
   console.log("a ar man boro");
}

var a = 5;
var b = 4;
if (a<b){
  console.log("A boro");
}
else{
  console.log("B boro");
}
// else ar babohar //
var a = 5;
var b = 4;
if(a>b){
  console.log("A boro na");
}
else if(a<b){
  console.log("B boro to our");
}
else{
  console.log("they both are same");
}
// switch statement used //

var sum = 100;
switch(sum){
  case 10:
      console.log("hello world thiking 10");
       break;
   case 5:
    console.log("now i am in some 5");
    break;
    case 1:
      console.log("the lower case 1");
      break;
      default:
        console.log("ami tomake khaje palem na");
}

// Date object ar babohar // 

var myDate = new Date();
console.log(myDate.toTimeString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getMonth());
console.log(myDate.getSeconds());
console.log(myDate.getTime());

//  Array selector big storeage //
var fdName = ["Ruhul","Rajon","Ebrahim","Rifat"];
console.log(fdName);

var fdName = ["Ruhul","Rajon","Ebrahim","Rifat"];
console.log(fdName[2]);

var fdName = ["Ruhul","Rajon","Ebrahim","Rifat"];
fdName[1] = 20;
console.log(fdName);

var fdName = ["Ruhul","Rajon","Ebrahim","Rifat"];
fdName[1] = "Prince Ruhul";
console.log(fdName);

// array push() pop() and shift() unshift()//
//push //
var fdName = ["Ruhul","Rajon", "Khan"];
 fdName.push(215436);
 console.log(typeof fdName);
//pop//
var fdName = ["Ruhul","Rajon", "Khan"];
 fdName.pop(215436);
 console.log(fdName);

var fdName = ["ruhul","rajon","shanto"];
fdName.shift();
console.log(fdName);

//for loop ar babohar //
for(var sum = 0; sum < 101; sum++){
console.log(sum);
}
//
var nums = [0,1,2,3,4,5,6,7,8,9];
for(var i = 0; i<nums.length; i ++){
  console.log(nums[i]);
}
// while loop ar babohar//
var i = 0;
while(i<10){
 console.log(i);
 i++
}