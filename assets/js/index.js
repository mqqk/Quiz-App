//create the store of questions
const STORE=[
    {question:"What year and month was Rocket League launched?",
    answers:["August 2015","July 2015","July 2016","June 2014"],
    correctAnswer:"July 2015"    
},
{
    question:
      'What is the name of the professional series held for Rocket League each season?',
    answers: [
      'Rocket League Champions Series',
      'Rocket League Championship Series',
      'Rocket League Champs Series',
      'League of Rockets Champs Series',
            ],
    correctAnswer:
      'Rocket League Championship Series'
  },
  {
    question:
      'What score needs to be achieved at least once in a game to achieve "BRA71L"?',
    answers: [
      '5-0',
      '7-0',
      '7-1',
      '10-0'
    ],
    correctAnswer: '7-1'
  },
  {
    question: 'Which game mechanic provides a quick boost?',
    answers: [
      'Wave Dash',
      'Wave Boost',
      'Boost Dash',
      'Jump Boost'
    ],
    correctAnswer: 'Wave Dash'
  },
  {
    question:
      'How many seconds are there between power-ups in Rumble mode?',
    answers: [
      '7',
      '5',
      '10',
      '8'
    ],
    correctAnswer:
      '10'
  },
  {
    question: 'Which game mode is by default designed for only 2 players?',
    answers: [
      'Snow Day',
      'Hoops',
      'Rumble',
      'Drop-Shot'
    ],
    correctAnswer: 'Hoops'
  },
  {
    question:
      'What end of match superlative is given to a player that won but lacked any measurable contribution to the team? ',
    answers: [
      'Second String',
      'Do you even Rocket League?',
      'Might be a Bot',
      'Bench Warmer'
    ],
    correctAnswer:
      'Bench Warmer'
  },
  {
    question: 'Which Rocket League Arena features Roman architecture and an Italian village as a backdrop?',
    answers: [
      'Utopia Coliseum',
      'Manfield',
      'DFH Stadium',
      'Urban Central'
    ],
    correctAnswer:
      'Utopia Coliseum'
  },
  {
    question: 'What was the name of the prequel to Rocket League?',
    answers: [
      'Super Acrobatic Rocket Battle-Cars',
      'Super Boosted Rocket Cars',
      'Super Aerial Rocket-Propelled Battle-Cars',
      'Supersonic Acrobatic Rocket-Powered Battle-Cars'
    ],
    correctAnswer: 'Supersonic Acrobatic Rocket-Powered Battle-Cars'
  },
  {
    question:
      'Which RLCS player has the most championship rings?',
    answers: [
      'Fairy Peak',
      'Squishy Muffins',
      'Turbopolsa',
      'Violent Panda'
    ],
    correctAnswer: 'Turbopolsa'
  }
];

//create a question and correct variable to be updated
let points=0;
let questionNumber=0;
//create an opening page function that will listen for a Start click from load up page
//create a ready function that will first start the page
    function startQuiz(){
        //console.log("startQuiz initiated");//works
      $('.altBox').hide();

      $('.start').on('click','.begin',function(event){
          console.log('did you start?')
          $('.start').hide();
          $('.questionNumber').text(1);//note, this does not change the JS let questionNumber=0, it changes the HTML text
          $('.questionBox').show();
          $('.questionBox').prepend(getQuestion());
          
      });
    }

    //lets create the question
    function getQuestion(){
        if(questionNumber<STORE.length)
        
        {return createThing(questionNumber) }
        else{
            $('.questionBox').hide();
            $('.quesionNumber').text(10);
            finalScore();
        }
    }
    
    function finalScore(){
       $('.end').show();
       
       const pro=[
           'Best of the Best',
           '../assets/images/rank/champ%203.jpg',
           'RLCS or Grand Champ Image',
           'Congrats on being a Rocket League Pro'
       ];

       const good=[
           "You're getting there!",
           '../assets/images/rank/diam%201.jpg',
           'Plat to Diamond Image',
           'Keep grindin' 
       ];

       const notBot=[
           'You gave it a valiant effort!',
           '../assets/images/rank/silver.jpg',
           'bot level image',
           'No one was a pro over night'
       ];

       if(points>=8){
           array=pro;
       }else if(points<8 && points>=4){
           array=good;
       }else {array=notBot;}

       return $('.end').html(
        `<h3>${array[0]}</h3>
          <img src="${array[1]}" alt="${array[2]}" class="images">
            <h3>Your score is ${points} / 10</h3>
            <p class="sizeMe">${array[3]}</p>
            <button type="submit" class="restartButton sButton">Restart</button>`
      );

    }
    
    function createThing(questionIndex) {
        let formMaker = $(`<form>
          <fieldset>
            <legend class="questionText">${STORE[questionIndex].question}</legend>
          </fieldset>
        </form>`)
      
        let fieldSelector = $(formMaker).find('fieldset');
      
        STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
          $(`<label class="answerStyle" for="${answerIndex}">
              <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
              <span>${answerValue}</span>
            </label>
            `).appendTo(fieldSelector);
        });
        $(`<button type="submit" class="sButton button"> Submit</button >
                    <div>
                <ul>
                    <li>Question:<span class=$questionNumber}>${questionNumber+1}</span>/10</li>
                    <li>Score:<span class="points">${points}</span></li>
                </ul> `).appendTo(fieldSelector);
        return formMaker;
      }


    function submitAnswer(){
        $('.quizBox').on('submit',function(event){
          event.preventDefault();
          $('.altBox').hide();
          $('.submission').show();
          let choice=$('input:checked');
            //console.log(choice);
          let answer=choice.val();
          let correct=STORE[questionNumber].correctAnswer;
          if(answer===correct){
              correctChoice();
          }  else{incorrectChoice()};
        })
    }

    function correctChoice(){
        $('.submission').html(
            `<h3>Nice Shot!</h3>
            <img src="../assets/images/partytime.jpg" class="correctImg" alt="goal score image"/>
            <p>Games not over, don't let them comeback!</p>
            <button type="button" class="nextButton sButton">Next</button>`
        );
        updatePoints();
    }

    function incorrectChoice() {
        $('.submission').html(
        `<h3>Big OOF! Nice WHIFF XD!</h3>
        <img src="../assets/images/jesterbot.png" alt="big oof"/>
        <p>The correct answer is ${STORE[questionNumber].correctAnswer}!</p>
        <br>
        <p>There might still be time to comeback, let's go!</p>
        <button type="button" class="nextButton sButton">Next</button>`
        )}

        function nextQuestion() {
            $('.quizBox').on('click','.nextButton', function (event) {
            $('.altBox').hide();
            $('.questionBox').show();
            updateQuestion();
            console.log(questionNumber);
            $('.questionBox form').replaceWith(getQuestion());
            });
        }

        function updateQuestion(){            
            questionNumber++;
            $('.questionNumber').text(questionNumber+1);  
        }


        function updatePoints(){
            points++;
            $('.points').text(points);
        }

        function restartQuiz() {
            $('.quizBox').on('click', '.restartButton', function (event) {
                console.log('are we restarting?')
              event.preventDefault();
              resetStats();
              $('.altBox').hide();
              $('.start').show();
            });
          }

          function resetStats() {
            points = 0;
            questionNumber = 0;
            $('.points').text(0);
            $('.questionNumber').text(0);
          }


        function createQuiz(){
            //console.log("create quiz started");//works
        startQuiz();//runs the intro page and hides the rest of the html;
        getQuestion();//after click, hides the intro html and reveals next html for question
        submitAnswer();//receives answer with click and generates a response for correct or incorrect
        nextQuestion();//gets another question
        restartQuiz();//runs createQuiz() presumably
    }
    $(createQuiz);
