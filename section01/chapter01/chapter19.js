//클래스 속에 있는 멤버변수 반복문을 이용해서 출력하기
const person = { 
   name: "김동진", 
   age: 25, 
   tall: 179 
}; 

const person1 = { 
name: "김동진", 
age: 25, 
tall: 179 
};  
const personKeys = Object.keys(person); 
for(let i=0; i<personKeys.length; i++){ 
const curKey = personKeys[i]; 
const curValue = person[curKey]; 
console.log(`${curKey} : ${curValue}`); 
} 

const person2 = { 
name: "김동진", 
age: 25, 
tall: 179 
};  
const personValues = Object.values(person); //객체의 value값을 배열로가져온다. 
for(let i=0; i<personValues.length; i++){ 
console.log(personValues[i]); 
} 

