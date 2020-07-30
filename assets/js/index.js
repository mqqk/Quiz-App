

//create a variables to track the question number and points earned
let points=0;
let questionNumber=0;
//create an opening page function that will listen for a Start click from load up page
//create a ready function that will first start the page

    function startQuiz(){//listens for a click on Start on the main page 
        console.log("startQuiz initiated");//works
      //$('.altBox').hide();

      $('#start').on('click',function(event){
          //console.log('did you start?')
          //$('.start').hide();
          $('.questionNumber').text(1);//note, this does not change the JS let questionNumber=0, it changes the HTML text
          //$('.questionBox').show();
          //$('.questionBox').prepend(getQuestion());//initialize getQuestion()
          getQuestion();
          
      });
    }

    //lets create the question
    //first check if we should get a question or finish the test, if questionNumber above is less than STORE.length, move to createThing
    //otherwise, hide current inner box and run finalScore()
    function getQuestion(){
      
        if(questionNumber<STORE.length)
        
        {return renderQuestionHTML(questionNumber) }
        else{

            finalScore();
        }
        
    }
    
    //make a form that pulls the question first from the STORE
    //
    function renderQuestionHTML(questionNumber){
      //console.log(questionNumber);
      let question=STORE[questionNumber].question;
      //console.log(question);
    
      const questionHTML=(
    `<div class="box">
      <form id="js-questions">
        <fieldset>
          <legend>${question}</legend>
          <div class="js-answers"></div>
          <div>
            <button type="submit" id="answerSub" class="answerSub sButton"> Submit</button >
          </div>
          <div>
            <ul>
              <li>Question:<span class={$questionNumber}>${questionNumber+1}</span>/10</li>
              <li>Score:<span class="points">${points}</span></li>
            </ul>
          </div>
        </fieldset>
      </form>
    </div>`);
    
    $("#main").html(questionHTML);
    renderAnswerChoicesHTML();
    
    
    }
    
    function renderAnswerChoicesHTML(){
      //console.log(questionNumber);
      let choices=STORE[questionNumber].answers;
      for(let i=0;i<choices.length;i++){
        //console.log(choices[i]);//correctly listed choices from answer array
        $(".js-answers").append(`<label class="answerStyle" for="${i}">
          <input type="radio" id="${i}" value="${choices[i]}" name="answer" required>
          <span>${choices[i]}</span>
          </label>`)
     }
    console.log($('input[name=answer]:checked'));
    }



    //the next function above is the submitAnswer which should listen for the click form the createThing(), it listens on the main box, hides the box, and shows a submission
    //now compare the input:checked from the radio button to the actual correct answer, if it's correct, send us to another function correctChoice(), else go to incorrectChoice()
    function submitAnswer(){
        $('body').on('submit',function(event){
          
          console.log("are we making it to submitAnswer?");
          console.log(STORE[questionNumber].correctAnswer);
          event.preventDefault();
          //$('.altBox').hide();
          //$('.submission').show();
          let choice=$('input[name=answer]:checked').val();
            console.log(choice);
         // let answer=choice;
          let correct=STORE[questionNumber].correctAnswer;
          if(choice===correct){
              correctChoice();
          }  else{incorrectChoice()};
        })
    }

    //correct choice shows a submission to the DOM of an html telling the user they chose correctly with an image provide a button to click to move on and run updatePoints()
    function correctChoice(){
        $('#main').html(
            `<div class="box">
            <h3>Nice Shot!</h3>
            <img class="submissionImg" src="assets/images/partytime.jpg" class="correctImg" alt="goal score image"/>
            <p>Games not over, don't let them comeback!</p>
            <button type="button" class="nextButton sButton">Next</button>
            </div>`
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
        $('#main').html(
        `<div class="box"
        <h3>Big OOF! Nice WHIFF XD!</h3>
        <img class="submissionImg" src="assets/images/jesterbot.png" alt="big oof"/>
        <p>The correct answer is ${STORE[questionNumber].correctAnswer}!</p>
        <br>
        <p>There might still be time to comeback, let's go!</p>
        <button type="button" class="nextButton sButton">Next</button>
        </div>`
        )}

        //nextQuestion listens for click on next button, hides the boxes and shows the questionBox, run updateQuestions() that increases the questionNumber 
        //so that getQuestion will find the correct question
        function nextQuestion() {
            $('.quizBox').on('click','.nextButton', function (event) {
            //$('.altBox').hide();
            //$('.questionBox').show();
            updateQuestion();
            //console.log(questionNumber);
            //take questionBox form and replace it with (run getQuestion()) and this will give new form
            getQuestion();
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
      console.log("is finalScore running?")
       
       
       const pro=[
           'Best of the Best',
           'assets/images/rank/champ-3.jpg',
           'RLCS or Grand Champ Image',
           'Congrats on being a Rocket League Pro'
       ];

       const good=[
           "You're getting there!",
           'assets/images/rank/diam-1.jpg',
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
       return $('#main').html(
        `<div class="box">
        <h3>${array[0]}</h3>
          <img src="${array[1]}" alt="${array[2]}" class="images">
            <h3>Your score is ${points} / 10</h3>
            <p class="sizeMe">${array[3]}</p>
            <button type="submit" class="restartButton sButton">Restart</button>
            </div>`
      );

    }

    function restartHTML(){
      const restartHTML=(`
      <div class="start box">
      <h2>So you think you're a champ Rocket League wiz? Click Start to find out.</h2>
      <img src="assets/images/RLball.jpg" alt="RL Ball"/>
      <br>
      <button type="submit" id="start" class="sButton begin">Start</button>
  </div>
`)
return restartHTML;
    }

    function restartQuiz() {
      $('.quizBox').on('click','.restartButton', function (event) {
          console.log('are we restarting?')
        event.preventDefault();
        resetStats();
        $('#main').html(restartHTML());
        $(createQuiz);
      });
    }

    function resetStats() {
      points = 0;
      questionNumber = 0;
      $('.points').text(0);
      $('.questionNumber').text(0);
    }
    
    



          function createQuiz(){//this will start the functions below in the order which they appears
            console.log("create quiz started");//works
        startQuiz();//runs the intro page and hides the rest of the html;
        //getQuestion();//after click, hides the intro html and reveals next html for question
        submitAnswer();//receives answer with click and generates a response for correct or incorrect
        nextQuestion();//gets another question
        restartQuiz();//runs createQuiz() presumably
    }
    $(createQuiz);//launches the function above to listen for a click

