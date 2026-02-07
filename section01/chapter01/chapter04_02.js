//변수
let no =27;
let age =30;
age =35;
//let age =40;
console.log(age);

//상수
const birth = "1997.01.07";

//birth = "1997.01.08"
console.log(birth);

// 3. 변수 명명규칙(네이밍 규칙) 
// 3-1. $, _ 제외한 특수기호는 사용할 수 없다. 
let $_name = "유재원"; console.log($_name);
//let ^age = 25;  console.log(^age);  //에러가 발생함 
//let +age = 25;  console.log(+age);  //에러가 발생함 
let _age = 30;  console.log(_age); 
let $age = 30;  console.log(_age); 

// 3-2. 숫자로 시작할 수 없다. 
let name1 = 40; console.log(name1);
let $2name = 50; console.log($2name);

// 4. 변수 명명 가이드 
let a = 1;    
let b = 2; 
let salesCount = 1; 
let refundCount = 1; 
let totalSalesCount = salesCount - refundCount;

console.log(a);
console.log(b);
console.log(salesCount);
console.log(refundCount);
console.log(totalSalesCount);




 