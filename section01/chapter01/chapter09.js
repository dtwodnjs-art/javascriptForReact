//1.대입연산자 
//let a = 1;  
 
//2. 산술연산자 
let a = 1;  
let b = 2;  
console.log(a + b);  
console.log(a - b);  
console.log(a * b);  

console.log(a / b);   //0.5 
console.log(a % b);  //1

//3.연결연산자 
let aa = "1";  
let bb = "2";  
console.log(aa+ bb);  //”12” 

//4.복합대입연산자 
let aaa = 5;  
aaa -= 10;    //+=, -=, /=, %=, *= 
console.log(aaa); 

/* **************************************** */

//5.증감연산자 
let _a = 10;  
a++;     // a--  
console.log(_a);   //11 
console.log(_a++);   //11 후위연산자   a-- 
console.log(_a);  //12 
console.log(++_a);   //13 전위연사자  --a 
console.log(_a);  //13 

//6.논리연산자 
console.log(!true);  //false 
console.log(!false);  //true 
console.log(true && false);  //true   피연산자, 연사자(&&) 개념을이해할것 
console.log(false || false);  //true   피연산자, 연사자(||) 

//7.비교연산자 
let compareAA = 1 == "1";  
console.log(compareAA);  //true  자바스크립트는 = = 비교연산자는 값만 비교한다.(타입비교안함) 
 
let compareAB = 1 === "1";  
console.log(compareAB);  //false  자바스크립트는 = = = 비교연산자는 값과 타입을 함께 비교한다. 
 
let compareAC = 1 != "1";  
console.log(compareAC);  //false 
 
let compareAD = 1 !== "1";  
console.log(compareAD);  //true 

let compareAE = 1 > 2; //1 >= 2 
console.log(compareAE);  //false 
 
let compareAF = 1 < 2; // 1 <= 2 
console.log(compareAF);  //true

//8.자바스트립트 동적타입기능 
//: 타입의 유연성을제공하지만 에러를 발생할수 있는 기능임 
let compareA = 1; //현재는 정수형타입 

 
compareA = "1";  //정수형타입으로 선언된 변수에 문자열값을 넣어도 이상없음(동적타입기능) 

//9.typeof 연산자 
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자 
let compareA1 = 1; 
console.log(typeof compareA1); //number 
compareA = "1"; 
console.log(typeof compareA); //string

//10. ?? (null 병합 연산자) 
//병합 연산자라고 하는데, 앞의 피연산자가 null 혹은 undefined라면 뒤 피연산자를 반환하고, 그렇지 
//않다면 앞의 피연산자를 반환한다. 즉 null, undefined 가 아닌 값을 찾아내는 연산자 
 
let aaaa;  //undefined가 저장되어 있음. 
aaaa = aaaa ?? 10; //연산자(??)는 피연사자중에 null 이나 undefined 이 아닌값을 선택한다.   
console.log(aaaa);  //10 

let a1;  //undefined가 저장되어 있음. 
a1 = a1 ?? 10; //연산자(??)는 피연사자중에 null 이나 undefined 이 아닌값을 선택한다.   
console.log(a1);  //10 

a =30;   
a = a ?? 10; //연산자(??)는 피연사자중에 null 이나 undefined 이 아닌값을 선택한다.   
console.log(a);  //30 
 
let a2 = null; 
let x = a2 ?? b; // x = b 
console.log(x);

//11. 삼항연산자
// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);

 

 

 

