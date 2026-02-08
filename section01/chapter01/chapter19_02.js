const person = {
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