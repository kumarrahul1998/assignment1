const students = [
  { name: "Adhi", gender: "male" },
  { name: "Ahamed", gender: "male" },
  { name: "Rutika Kadam", gender: "female" },
  { name: "Priyadharsini", gender: "female" },
];

const femaleNames= students.filter(i=>i.gender==="female").map(i=>i.name)

const startingANames= students.filter(i=>i.name.charAt(0)==="A").map(i=>i.name)

const malesArr= students.filter(i=>i.gender==="male");

const maleCount= malesArr.length

console.log('Female Names',femaleNames);
console.log('Names Starting with A',startingANames)
console.log("Male Count",maleCount)
