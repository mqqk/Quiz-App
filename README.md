# Quiz-App
Module 11.7

------------------------------------------------------------------
Project Requirements
------------------------------------------------------------------
While you're building your quiz app, you'll need to keep in mind what your app must do and how it should be built.

User experience requirements
The following requirements cover what the app must do, from the user's perspective.

-The starting screen should have a button that users can click to start the quiz.
-Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
-Users should be asked questions 1 after the other.
-Users should only be prompted with 1 question at a time.
-Users should not be able to skip questions.
-Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
-Upon submitting an answer, users should:
receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
be moved onto the next question (or interact with an element to move on).
-Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
-Users should be able to start a new quiz.
------------------------------------------------------------------
Technical requirements
------------------------------------------------------------------
Your quiz app must:

-Render answer choices in a <form>.
-Use semantic HTML, along with CSS and jQuery.
-Follow a11y best practices.
-Be fully usable by keyboard (which will be easy enough if you start with a form).
-Use responsive design
-Refer back to the previous checkpoints on responsive design and forms for any help with the HTML/CSS materials.
------------------------------------------------------------------
Process requirements
------------------------------------------------------------------
Before you dive into the app, you'll need to:

-gather content for your app. That means typing up the questions you'll ask and gathering any images or icons you'll need.
-think about the user experiences outlined above and how your design must make them possible.
-design your app using HTML wireframes, which are HTML- (and minimal CSS-) only versions of the different screens in your app.
------------------------------------------------------------------
Scoring
------------------------------------------------------------------
Before working on your app, you'll complete and submit your wireframes in the next checkpoint. The requirements are discussed further in there. Once finished, you'll complete and submit your quiz app for grading in the last checkpoint in this section.

If you don't earn enough points on your quiz app to pass, you'll have the opportunity to revise and resubmit your work. Use the feedback provided by the grading team to improve your quiz app. You must resubmit your project within 5 days of receiving the initial feedback. Students who do not earn a passing score on their second attempt will schedule a call with their academic success manager to discuss next steps.

Now for the fun part, let's start working on your quiz app!





Ideas
-background color has to be purple for champ
-i need a background pic that splashes the area that will change for the quiz, gives it some character
-the header should include a picture along with a little bar that displays the Quesion number and score
-opening graphic will have a start button
-questions should have a graphical form with a list of questions
    -maybe each dial should be a graphic too
-a wrong answer displays a wrong answer graphic with the correct answer below and "next" button
-a correct answer displays in a similar manner with diff graphic and "Next' button
    -also, a correct answer could load a gif of a great play and incorrect could load a fail gif
-final graphic is dependant on the score
    -for each there should be a pic and the score below, maybe a RL reference and then a "restart" button at the bottom, consider loading gifs for each level?
    -100% score shows RLCS image with textual support
        "Lethamyr, is that you?"
    -90% Grand Champ image
        ""
    -80% Champ Three
        ""
    -70% Champ One
        ""
    -60% D3
        "You're never leaving Diamond xD"
    -50% D1
        "Never thought you'd make it here, but welcome to Diamond!"
    -40% Plat
        "Much to learn"
    -30% Gold
        "Scratching the surface at this point."
    -20% Silver
        "Pretty toxic down here."
    -10% Bronze
        "Good to know you have a pulse, at least."
    -0% Bot
        "Uninstall, Bot."

HTML,JS, and CSS Structure
    -header and background can be set from the start
    -create a box with html for opening graphic
        -JS function for listening for click and the event triggered after click
        -js function that removes the opening html in the box and generates the first question
    -the first question will be a list with a dial for choices and a submit button
    -a submission will return a transition graphic for correct or incorrect
        -js will listen for click in the submit, return to list, find the user input, compare user input to actual answer which will be listed in the store, depending on correct or not, js will have to pull the correct graphic
    -a tally at the top of the page will have to be updated after each question, possibly perform a render of the page that doesn't reset the 
        