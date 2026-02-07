// 1. Number Type 
let num1 = 27; 
let num2 = 1.5; 
let num3 = -20;

console.log(num1 + num2);  
console.log(num1 - num2);  
console.log(num1 * num2);  
console.log(num1 / num2);  
console.log(num1 % num2);

let inf = Infinity; 
let mInf = -Infinity; 
let nan = NaN;
//console.log(1 *“hello”);  

console.log(inf);   // 출력: Infinity (매우 큰 수)
console.log(mInf);  // 출력: -Infinity (매우 작은 수)
console.log(nan);   // 출력: NaN (Not a Number)

// 실전 예시
console.log(10 / 0);      // Infinity (어떤 수를 0으로 나누면 무한대가 됩니다)
console.log("안녕" * 10);  // NaN (문자와 숫자는 곱할 수 없어서 '숫자 아님' 발생)

// 2. String Type 
let myName = "김동진"; 
let myLocation = "박촌"; 
let introduce = myName + myLocation;

console.log(myName + myLocation);

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; 
console.log(introduceText); 

//4. Boolean Type 
let isSwitchOn = true; 
let isEmpty = false; 

//5. Null Type (아무것도 없다) 
let empty = null;
console.log(empty);  
//6. Undefined Type 
let none; 
console.log(none); 

