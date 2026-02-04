//내장함수(라이브러리) (반복문 => 자기스타일로 변경 반복문)

/*1.forEach***********
const array = [1,2,3,4];
for (let i = 0; i < array.length; i++) {
   console.log(array[i]); 
}

array.forEach((value, index, array)=>{
   console.log(`value = ${value}`)
   console.log(`index = ${index}`)
  console.log(`array = ${array}`)
  console.log(`********************`)
});

array.forEach((value)=>{
  console.log(`${value}`)
});

console.log(array);

/*2.Map ***********
// 값이 3개 => 리턴 변경된 3개 값이 나와야됨.
const array = [1,2,3,4];
const newArray = []; 

for (let i = 0; i < array.length; i++) {
  let value = array[i];   
  value = value * 10; 
  newArray.push(value); 
}
console.log(array); 
console.log(newArray); 

let _newArray = array.map((value)=> value * 10 ); 
console.log(_newArray); 



/*3. filter 
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환 
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 

let newArray1 = []; 
for (let i = 0; i < array1.length; i++) {
  let item =  array1[i];
  if(item.hobby === "독서"){
    newArray1.push(item); 
  }   
}
console.log(array1); 
console.log(newArray1); 

let newArray2 = array1.filter((value)=> value.hobby === "테니스"); 
console.log(newArray2); 

/*4. find, findIndex 
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
]; 

let findItem  = null;
for (let i = 0; i < array1.length; i++) {
  let item = array1[i]; 
  if(item.hobby === "독서"){
    findItem = item; 
    break; 
  }  
}
console.log(findItem); 

let findItem2 = array1.find((value)=> value.hobby === "독서"); 

let findIndex2 = array1.findIndex((value)=> value.hobby === "독서");

console.log(findIndex2); 


/*5.slice(start, end)
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
{ name: "홍길동2", hobby: "독서2" }, 
{ name: "홍길동3", hobby: "독서3" }, 
{ name: "홍길동4", hobby: "독서4" }, 
]; 

let newArray = array1.slice(0,3);
console.log(newArray);

/*6. concat 
let array1 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" } 
]; 

let array2 = [ 
{ name: "홍길동2", hobby: "독서2" }, 
{ name: "홍길동3", hobby: "독서3" }, 
{ name: "홍길동4", hobby: "독서4" } 
]; 

let array3 = array1.concat(array2); 
console.log(array3);


/* 7.sort, sort().reverse()
// 배열을 사전순으로 내림차순 정렬하는 메서드 
// 자바스크립트는 문자단위 정렬
//숫자단위는 정렬은 문제가발생한다.
let arry3 = [0,1,3,2,10,30,20]; 
arry3.sort((num1, num2)=> num1 - num2);
console.log(arry3)

//문자단위 정렬, 역정렬 문제없다.
let arry4 = ["acd","dfs","sdf","sdd","adc","sdr"]; 
console.log(arry4);
arry4.sort()

let arry5 = ["acd","dfs","sdf","sdd","adc","sdr"]; 
let arry6 = arry5.sort().reverse(); 
console.log(arry6);
*/

/* 8.join, split
const arr6 = ["김동진","님","안녕하세요","반가워요"]; 
const joined = arr6.join("=="); 
console.log(joined);

const array7 = joined.split("==");
console.log(array7); 
*/









/*const tennisPeople = arr1.filter( 
(item) => item.hobby === "테니스" 
); 
Console.log(tennisPeople); */   
// [{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] 배열이 출력됨. 




















