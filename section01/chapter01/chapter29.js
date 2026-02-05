let task = function task(){
  setTimeout(()=>{
  console.log("안녕");
  
}, 3000);
}

//task();

//pending 상태
/*let promise = new Promise(()=>{
setTimeout(()=>{
  console.log("안녕"); 
}, 2000);

});*/

//console.log(promise);

//resolve 상태
/*let promise2 = new Promise((resolve,reject)=>{
setTimeout(()=>{
  console.log("안녕"); 
  if(true){
      resolve("promise 안녕")
  }else{


  }

}, 2000);

});


setTimeout(()=>{
console.log(promise2);


},4000)*/


//reject 상태
/*
let promise3 = new Promise((resolve,reject)=>{
setTimeout(()=>{
  console.log("안녕"); 
  if(true){
      resolve("promise 안녕")
  }else{
      reject("promise 실패"); 상태


  }

}, 2000);

});


setTimeout(()=>{
console.log(promise3);


},3000)
*/

//4. Promise 를 실제로 활용해보자. 
/*
const promise4 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = "10"; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
 
setTimeout(() => { 
      console.log(promise4); 
}, 3000);
*/

/*
//promise 성공한 후 그 결과값을 출력한다.
const promise5 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = "10"; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 

//promise5가 성공하면 작업실행
promise5.then ((value)=>console.log(`성공한 결과값 ${value}`))

promise5.catch ((value)=>console.log(`실패한 결과값 ${value}`))

setTimeout(()=>{
  console.log(promise5);
},3000);*/

//***** 
//promise chain 방식으로 표현한다.

/*
const promise6 = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => { 
    const num = 10; 
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 

//promise6가 성공하면 작업실행
promise6.then ((value)=>console.log(`성공한 결과값 ${value}`))

promise6.catch ((value)=>console.log(`실패한 결과값 ${value}`))

setTimeout(()=>{
  console.log(promise6);
},3000);*/



//promise를 함수를 통해서 실행해보자
function add10(num){

const promise = new Promise((resolve, reject) => { 
  // 비동기 작업 실행하는 함수 
  // executor 
  setTimeout(() => {     
    if (typeof num === 'number') { 
      resolve(num + 10); 
    } else { 
      reject('num이 숫자가 아닙니다'); 
    } 
  }, 2000); 
}); 
  return promise
}

//promise가 성공하면 작업실행
/*
let promise = add10("100"); 
promise
.then ((value)=>console.log(`성공한 결과값 ${value}`))
.catch ((value)=>console.log(`실패한 결과값 ${value}`))
*/


//2단계 
/*
let promise = add10(100); 
promise
.then ((value)=>{
  console.log(`성공한 결과값 ${value}`)
  let _promise = add10(value);
  _promise.then((value)=>{
    console.log(`성공한 결과값 ${value}`)
  });


})
.catch ((value)=>console.log(`실패한 결과값 ${value}`))
*/
//2단계 수정
/*
let promise = add10(100); 
promise
.then ((value)=>{
  console.log(`성공한 결과값 ${value}`)
  //promise 리턴
  return add10(value);
 
})
.then((value)=>console.log(`성공한 결과값 ${value}`))
.catch ((value)=>console.log(`실패한 결과값 ${value}`))
*/
//3단계
/*
 add10(100)

.then ((value)=>{
  console.log(`성공한 결과값 ${value}`)
  return add10(value);
 
})
.then((value2)=>{
  console.log(`성공한 결과값 ${value2}`)
  return add10(value2)
})
.then((value3)=>console.log(`성공한 결과값 ${value3}`))
.catch ((value)=>console.log(`실패한 결과값 ${value}`))
*/
//음식주문사항을 1단계 2단계 3단계로 해결못해.

function orderFood(food, callback){
  console.log(`${food}가 주문`);
  setTimeout(()=>{
    callback(food); 
  }, 3000);
}

function orderFood2(food){
   const promise = new Promise((resolove,reject)=>{
    console.log(`${food}가 주문`);
     setTimeout(()=>{
      let flag = true;
      if(flag){
        resolove(food + '완료')

      }else{
        reject(food+'실패')
      }
      
     },2000);

   });
   return promise;

}
/*
orderFood2 ("떡볶이")
.then((value)=>console.log(value))
.catch((error)=>console.log(error))*/



function coolFood2(food){
   const promise = new Promise((resolove,reject)=>{
    console.log(`${food} 차갑게 주문`);
     setTimeout(()=>{
      let flag = true;
      if(flag){
        resolove(food + '차갑게 완료')

      }else{
        reject(food+'차갑게 실패')
      }
      
     },2000);

   });
   return promise;

}
/*
coolFood2 ("떡볶이")
.then((value)=>console.log(value))
.catch((error)=>console.log(error))
*/



function freezeFood2(food){
   const promise = new Promise((resolove,reject)=>{
    console.log(`${food} 냉동 주문`);
     setTimeout(()=>{
      let flag = true;
      if(flag){
        resolove(food + '냉동 완료')

      }else{
        reject(food+'냉동 실패')
      }
      
     },2000);

   });
   return promise;

}
/*
freezeFood2 ("떡볶이")
.then((value)=>console.log(value))
.catch((error)=>console.log(error))
*/
//2단계
/*
orderFood2 ("떡볶이")
.then((value)=>{
  console.log(value)
  return coolFood2(value)
})
.then((value)=>console.log(value))
.catch((error)=>console.log(error))
*/

//3단계

orderFood2 ("떡볶이")
.then((value)=>{
  console.log(value)
  return coolFood2("떡볶이")
})
.then((value)=>{console.log(value)
  return freezeFood2("떡볶이")

})
.then((value)=>console.log(value))
.catch((error)=>console.log(error))

   




 

