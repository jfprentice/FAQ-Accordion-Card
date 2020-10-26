let questions = document.querySelectorAll('.list-question');
let answers = document.querySelectorAll('.answer');
let arrows = document.querySelectorAll('.down-arrow');

// console.log(questions);
// console.log(answers);

for (let i = 0; i < questions.length; i++) {
  questions.item(i).addEventListener('click', function() {
    if (answers.item(i).style.display === 'none') {
      //transition back
      //only one answer open at a time
      for(let j=0; j < questions.length; j++){
        if(answers.item(j).style.display === 'block'){
          questions.item(j).style.fontWeight ='400';
          answers.item(j).style.display = 'none';
          arrows.item(j).style.transition = '.5s';
          arrows.item(j).style.transform = 'rotate(0deg)';
        }
      }
      questions.item(i).style.fontWeight ='700';
      answers.item(i).style.display = 'block';
      arrows.item(i).style.transition = '.5s';
      arrows.item(i).style.transform = 'rotate(180deg)';
    } else {
      questions.item(i).style.fontWeight ='400';
      answers.item(i).style.display = 'none';
      arrows.item(i).style.transition = '.5s';
      arrows.item(i).style.transform = 'rotate(0deg)';
    }
  });
}
