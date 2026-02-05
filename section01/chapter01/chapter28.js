/*
console.log(1)
setTimeout(()=>{
   console.log(2)
}, 3000); 
console.log(3)
*/

//함수 선언식
/*
function task(a,b){
  setTimeout(()=>{
    let sum = a + b; 
   console.log(`a + b = ${sum}`)
}, 3000);
}

task(10,20); 
*/

//함수선언식
//1번방식 3초후에 이벤트처리를 정의한것이다.
//이벤트 : 시간이 3초가 지나면 setTimeout(핸들러일,시간이벤트)
//이벤트처리일
function task(a,b){
  setTimeout(()=>{
  let sum = a + b; 
  console.log(sum); 
}, 3000);
}

//task(10, 20)

// */

//2번방식
//이벤트 : 시간이 3초가 지나면 setTimeout(핸들러일,시간이벤트)
//이벤트처리일(핸들러함수: 화살표함수)

let callback =(a,b)=>{  
  let sum = a+b; 
  console.log(`a+b = ${sum +100}`); 
}

function task1(a,b){
  setTimeout(()=>{
    callback(a,b); 
}, 3000);
}

//task1(10, 20)

//*/
//3번방식
//이벤트 : 시간이 3초가 지나면 setTimeout(핸들러일,시간이벤트)
//이벤트처리일(핸들러함수: 화살표함수)
function task2(a,b,callback){
  setTimeout(()=>{
    callback(a,b); 
}, 3000);
}

//task2(10, 20, (a,b)=>console.log(`a+b = ${a+b+1000}`))

// 1단계 음식을 주문하는 사항
//이벤트: 음식을 주문하면, 3초후에 
//핸들러: 음식이 완성이 되서 나오는것.
function orderFood(food, callback){
  console.log(`${food}가 주문`);
  setTimeout(()=>{
    callback(food); 
  }, 3000);
}

//orderFood("떡볶이",(food)=> console.log(`${food}이 완성`))

// 1단계 음식을 차게요청하는 사항
function coolFood(food, callback){
  console.log(`${food} 차갑게 요청`);
  setTimeout(()=>{
    callback(food); 
  }, 3000);
}

//coolFood("떡복이", (food) =>console.log(`${food}가 차갑게 완성`))

// 1단계 음식을 냉동주문
function freezeFood(food, callback){
  console.log(`${food} 냉동 요청`);
  setTimeout(()=>{
    callback(food); 
  }, 3000);
}

//freezeFood("떡복이", (food) =>console.log(`${food}가 냉동 완성`))

//2단계  떡복이 요청하고 => 떡복이 차게요청
/*
orderFood("떡볶이",(food)=> {
  console.log(`${food}이 완성`)
  coolFood(food, (food) =>console.log(`${food}가 차갑게 완성`))
})
*/
//3단계 떡복이요청 => 떡복이 차게요청 => 떡복이 냉동요청
orderFood("떡볶이",(food)=> {
  console.log(`${food}이 완성`);
  coolFood(food, (food) =>{
    console.log(`${food}가 차갑게 완성`);
    freezeFood(food, (food) =>console.log(`${food}가 냉동 완성`))
  })
})


