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

//create a variables to track the question number and points earned
let points=0;
let questionNumber=0;
//create an opening page function that will listen for a Start click from load up page
//create a ready function that will first start the page

        function createQuiz(){//this will start the functions below in the order which they appears
            //console.log("create quiz started");//works
        startQuiz();//runs the intro page and hides the rest of the html;
        getQuestion();//after click, hides the intro html and reveals next html for question
        submitAnswer();//receives answer with click and generates a response for correct or incorrect
        nextQuestion();//gets another question
        restartQuiz();//runs createQuiz() presumably
    }
    $(createQuiz);//launches the function above to listen for a click



    function startQuiz(){//listens for a click on Start on the main page 
        //console.log("startQuiz initiated");//works
      $('.altBox').hide();

      $('.start').on('click','.begin',function(event){
          //console.log('did you start?')
          $('.start').hide();
          $('.questionNumber').text(1);//note, this does not change the JS let questionNumber=0, it changes the HTML text
          $('.questionBox').show();
          $('.questionBox').prepend(getQuestion());//initialize getQuestion()
          
      });
    }

    //lets create the question
    //first check if we should get a question or finish the test, if questionNumber above is less than STORE.length, move to createThing
    //otherwise, hide current inner box and run finalScore()
    function getQuestion(){
        if(questionNumber<STORE.length)
        
        {return createThing(questionNumber) }
        else{
            $('.questionBox').hide();
            $('.quesionNumber').text(10);
            finalScore();
        }
    }
    
    //make a form that pulls the question first from the STORE
    //
    function createThing(questionIndex) {
        let formMaker = $(`<form>
          <fieldset>
            <legend class="questionText">${STORE[questionIndex].question}</legend>
          </fieldset>
        </form>`)
        
        //create a variable to represent the area in the form to next add the muliple choice
        //let fieldSelector = $(formMaker).find('fieldset');
      
        //identify the list of answers and for each, produce a nameless label with each, create a radio input beside each answer for the uder to select
        //and then add the answer to the end of the input to identify that radio button. 
        STORE[questionIndex].answers.forEach(function (answerValue, answerIndex) {
          $(`<label class="answerStyle" for="${answerIndex}">
              <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
              <span>${answerValue}</span>
            </label>
            `).appendTo($(formMaker).find('fieldset'));//append this to the fieldset from above
        });
        
        //create a button to click after making a choice within the radio buttons above
        $(`<button type="submit" class="sButton button"> Submit</button >
                    <div>
                <ul>
                    <li>Question:<span class=$questionNumber}>${questionNumber+1}</span>/10</li>
                    <li>Score:<span class="points">${points}</span></li>
                </ul> `).appendTo($(formMaker).find('fieldset'));//added this at the bottom to better see the progress of the questions and score as you go
        return formMaker;//return this form which will add the html required to the DOM
      }

    //the next function above is the submitAnswer which should listen for the click form the createThing(), it listens on the main box, hides the box, and shows a submission
    //now compare the input:checked from the radio button to the actual correct answer, if it's correct, send us to another function correctChoice(), else go to incorrectChoice()
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

    //correct choice shows a submission to the DOM of an html telling the user they chose correctly with an image provide a button to click to move on and run updatePoints()
    function correctChoice(){
        $('.submission').html(
            `<h3>Nice Shot!</h3>
            <img src="assets/images/partytime.jpg" class="correctImg" alt="goal score image"/>
            <p>Games not over, don't let them comeback!</p>
            <button type="button" class="nextButton sButton">Next</button>`
        );
        updatePoints();
    }
        //update the points above in the JS and the HTML score tally
        function updatePoints(){
            points++;
            $('.points').text(points);
        }
        
        //show submission to have the following html for incorrect guess, with picture, and pull from the STORE the correct answer and make a button to click
        function incorrectChoice() {
        $('.submission').html(
        `<h3>Big OOF! Nice WHIFF XD!</h3>
        <img src="assets/images/jesterbot.png" alt="big oof"/>
        <p>The correct answer is ${STORE[questionNumber].correctAnswer}!</p>
        <br>
        <p>There might still be time to comeback, let's go!</p>
        <button type="button" class="nextButton sButton">Next</button>`
        )}

        //nextQuestion listens for click on next button, hides the boxes and shows the questionBox, run updateQuestions() that increases the questionNumber 
        //so that getQuestion will find the correct question
        function nextQuestion() {
            $('.quizBox').on('click','.nextButton', function (event) {
            $('.altBox').hide();
            $('.questionBox').show();
            updateQuestion();
            //console.log(questionNumber);
            //take questionBox form and replace it with (run getQuestion()) and this will give new form
            $('.questionBox form').replaceWith(getQuestion());
            });
        }

        function updateQuestion(){            
            questionNumber++;
            $('.questionNumber').text(questionNumber+1);  
        }





    //if questions exceeds STORE.length, run this function, which shows the end box
    //create new arrays that will be queued according to score
    //write an if statement that identifies which array to use
    //
    function finalScore(){
       $('.end').show();
       
       const pro=[
           'Best of the Best',
           'assets/images/rank/champ%203.jpg',
           'RLCS or Grand Champ Image',
           'Congrats on being a Rocket League Pro'
       ];

       const good=[
           "You're getting there!",
           'assets/images/rank/diam%201.jpg',
           'Plat to Diamond Image',
           'Keep grindin' 
       ];

       const notBot=[
           'You gave it a valiant effort!',
           'assets/images/rank/silver.jpg',
           'bot level image',
           'No one was a pro over night'
       ];

       if(points>=8){
           array=pro;
       }else if(points<8 && points>=4){
           array=good;
       }else {array=notBot;}
        //return the end box with the html that populates the appropriate array and provide a button to restart
       return $('.end').html(
        `<h3>${array[0]}</h3>
          <img src="${array[1]}" alt="${array[2]}" class="images">
            <h3>Your score is ${points} / 10</h3>
            <p class="sizeMe">${array[3]}</p>
            <button type="submit" class="restartButton sButton">Restart</button>`
      );

    }
    
    

        //listen for restart button click above
        //run a reset of Stats which will take the two original variables and set them to 0
        //hide current bow and show .start box with variables reset
        function restartQuiz() {
            $('.quizBox').on('click', '.restartButton', function (event) {
                //console.log('are we restarting?')
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



