var Quizesquestions=[
  {
Question:'what is capital of Rwanda?',
Options:['ottawa','luanda','kigali'],
Solution:'kigali',
  },
  {
Question:'which one is a Rwandan artist?',
Options: [ ' Rihanna','Buravan', 'Bob marley'],
Solution: 'Buravan'
  },
  {
Question:'which one is one of the colors in Rwandan national flag?',
Options:[ 'pink','purple','yellow'],
Solution:'yellow'
  },

  
]
// a function to display a random quiz question along with multiple-choice answers.
var randomQuestion=function()
{
// Select a random question index
var randomIndex = Math.floor(Math.random()*Quizesquestions.length)
//retrieve random questions object
var random1=Quizesquestions[randomIndex];
//displaying questions
console.log(random1.Question);

//displaying multiple options
random1.Options.forEach((option)=>{
console.log(option);});
return random1.Solution
}

//Implement a scoring system to track correct and incorrect answers
let score=
{
  correct :0,
  incorrect:0
}
// function to check correct and incorrect answers
const checkSolution=(userChoice,correctAnswer)=>{
  if(userChoice===correctAnswer)
  {
      console.log('correct Answer')
      score.correct++;
  }
  else{
      console.log('Incorrect')
      score.incorrect++
  }

}
// how we get userchoice and what is correct answer
for(let i =0;i< Quizesquestions.length;i++)
{
  console.log(`Question${i+1}.`);
  const correctAnswer=randomQuestion.Solution;
  checkSolution('3variable',correctAnswer)
}
//display final score 
console.log(`Final Score - Correct: ${score.correct}, Incorrect: ${score.incorrect}`)
