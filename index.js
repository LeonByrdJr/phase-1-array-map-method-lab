const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// function titleCased(){
//     return tutorials.map(tutorial => {
//       return tutorial
//     })
//   }
// console.log(titleCased())

const titleCased = () => {
  return tutorials.map(tutorial => {
    for(let tutorial of tutorials){
      return tutorial.word
    }
  })
}
console.log(titleCased())
