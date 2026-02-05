//async,await 방식 => promise 이다.
async function getData(){
  return{name:'yjw',age:29}
}

function getData2(){
  return new Promise((resolove,reject)=>{
    setTimeout(()=>{
    let flag = true;
    if(flag){
      resolove({name:'yjw',age:29});

    }else{
      reject("비동기처리요청 실패");
    }

    },1000);
  })
}

 //console.log(getData2());

  async function printData(){
    getData2()
    .then((value)=>console.log(value))}

     async function printData2(){
    getData2()
    const data = await getData()
    console.log(data);

     }
  printData();

