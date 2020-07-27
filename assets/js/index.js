//create the store of questions
const STORE=[
    {question:"What year and month was Rocket League launched?",
    answers:["August 2015","July 2015","July 2016","June 2014"],
    correctAnswer:"July 2015"    
},
{
    question:
      'What makes the female spider monkey different from all other primates?',
    answers: [
      'She has the meanest dance moves, often being cited as the inspiration to such dancers as Michael Jackson, Shakira, and even Justin Timberlake',
      'She has the longest tail, reaching up to three feet in length',
      'She has seven (and sometimes even eight) different colors on her face',
      'She eats the second born baby when she gives birth to twins'
    ],
    correctAnswer:
      'She has the longest tail, reaching up to three feet in length'
  },
  {
    question:
      'Out of all the New World monkeys, the owl monkey is the only one to:',
    answers: [
      'Stay up all night, having a nocturnal sleep schedule',
      'Consistently hoot as a mating call',
      'Have the ability to turn its head all the way around',
      'Throw the wildest and loudest parties'
    ],
    correctAnswer: 'Stay up all night, having a nocturnal sleep schedule'
  },
  {
    question: 'Which New World monkey is the most intelligent?',
    answers: [
      'The tamarin monkey',
      'The brass monkey (that funky monkey)',
      'The baboon monkey',
      'The capuchin monkey'
    ],
    correctAnswer: 'The capuchin monkey'
  },
  {
    question:
      'Picking out parasites and dirts from each others’ furs is a way for monkeys to:',
    answers: [
      'Show honor to their elders, respect for alpha males, and to prepare for the heat of summer',
      'Get rid of bugs and dirt cause all that stuff is yucky!',
      'Communicate, form social hierarchies, and strengthen family and friendship bonds',
      'Find a quick source of sustenance and show interest in mating'
    ],
    correctAnswer:
      'Communicate, form social hierarchies, and strengthen family and friendship bonds'
  },
  {
    question: 'The pygmy marmoset is:',
    answers: [
      'The world’s fastest monkey',
      'The world’s smallest monkey',
      'The galaxy’s most fashionable living being. Period.',
      'Allergic to bananas'
    ],
    correctAnswer: 'The world’s smallest monkey'
  },
  {
    question:
      'What is a prominent difference between Old and New World monkeys?',
    answers: [
      'New World monkeys build houses out of mud — Old World monkeys live in caves',
      'New World monkeys gonna’ love you long time — Old World monkeys would do anything for love (but they won’t do that…)',
      'New World monkeys have backward, non opposable thumbs — Old World monkeys have two opposable thumbs on each hand and foot',
      'New World monkeys have 36 teeth — Old World monkeys have 32 teeth'
    ],
    correctAnswer:
      'New World monkeys have 36 teeth — Old World monkeys have 32 teeth'
  },
  {
    question: 'The male howler monkey:',
    answers: [
      'Is the strongest New World monkey and can lift up to ten times his own weight',
      'Has the loudest call of any primate and is one of the loudest animals in the world',
      'Sleeps in the blood of its enemies',
      'Has the most beautiful singing voice that one might never hear'
    ],
    correctAnswer:
      'Has the loudest call of any primate and is one of the loudest animals in the world'
  },
  {
    question: 'What type of environments do New World monkeys live in?',
    answers: [
      'Mountain caves',
      'Country farmlands',
      'Tropical forests',
      'Bustling cities'
    ],
    correctAnswer: 'Tropical forests'
  },
  {
    question:
      'How do squirrel monkeys mark their path when they are moving through the treetops?',
    answers: [
      'They tie a spool of thread to the first tree they climb and let it unravel as they go',
      'They spread urine on their hands and feet',
      'They drop pieces of candy after every couple of yards',
      'They record their travel path using GPS location through a “running app” on their cell phones'
    ],
    correctAnswer: 'They spread urine on their hands and feet'
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
           'images/win.jpg',
           'RLCS or Grand Champ Image',
           'Congrats on being a Rocket League Pro'
       ];

       const good=[
           "You're getting there!",
           'images/win.jpg',
           'Plat to Diamond Image',
           'Keep grindin' 
       ];

       const notBot=[
           'You gave it a valiant effort!',
           'imgages/lose.jpg',
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
          $(`<label class="sizeMe" for="${answerIndex}">
              <input class="radio" type="radio" id="${answerIndex}" value="${answerValue}" name="answer" required>
              <span>${answerValue}</span>
            </label>
            `).appendTo(fieldSelector);
        });
        $(`<button type="submit" class="sButton button"> Submit</button > `).appendTo(fieldSelector);
        return formMaker;
      }


    function submitAnswer(){
        $('.quizBox').on('submit',function(event){
          event.preventDefault();
          $('.altBox').hide();
          $('.submission').show();
          let choice=$('input:checked');
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
            <img src="#" class="correctImg" alt="goal score image"/>
            <p>Games not over, don't let them comeback!</p>
            <button type="button" class="nextButton sButton">Next</button>`
        );
        updatePoints();
    }

    function incorrectChoice() {
        $('.submission').html(
        `<h3>Big OOF! Nice WHIFF XD!</h3>
        <img src="#" class="correctImg" alt="big oof"/>
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