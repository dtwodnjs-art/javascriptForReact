//1.spread 연산자
let array1 = [1,2,3,4,5,6]
let array2 = [10,...array1,20,30]
let array3 = array1;//얕은복사 
//깊은복사
let array4 =[...array1]


//console.log(array4===array1);


//2.객체 (spread 연산자활용) 깊은복사
let obj1 = { 
  a: 1, 
  b: 2, 
};

let obj2 = {k:10,
  ...obj1,
  c:4,
  d:5};
//console.log(obj2);

//3.구조분해할당,스프래드 연산자

function funA ([p1,p2,p3]){
   console.log(p1+10,p2+10,p3/10);

}

const array5 = [1,2,3]
funA(array5);


//3.1 스프래드 연산자
function funB (p1,p2,p3){
   console.log(p1+10,p2*10,p3/10);

}

const array6 = [1,2,3]
funB(...array6);

//rest 매개변수

const array7 = [11,12,13]
function funC (p1,p2,...rest){
  console.log (p1,p2)
  console.log (rest)
}

funC (...array7);





