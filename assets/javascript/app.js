$(document).ready(function() {

    var myQuestions=[]
    var userGuess = ''
    var correctAns;
    var wrongAns;
    var totalAns;
    var timer = 15
    var interval;
    var timerOn = false
    var holder = []
    var activeQuest;
    var randQuest;
    var nextQTime;
    var usedQuest = []
    $("#nextQ").hide()
    $("#reset").hide()
    //create timer

    //start game on button click
    $("#start").on("click", function() {
        totalAns = 0
        $(".totalans").html(totalAns)
        correctAns = 0
        $("#correctans").empty()
        wrongAns = 0
        $("#wrongans").empty()
        $(".options").empty()
        //hides start button
        $("#start").hide('fast')
        //shows next question button
        $("#nextQ").show('fast')
        //function to show question & choices
        showQuestion()
        //starts timer at 15 seconds
        startTimer()
        // // console.log("chao")
        // if (myQuestions[randQuest] === activeQuest) {
        //     myQuestions.splice(i,1)
        //     break
        // }   
        //goes through all questions


        $("#nextQ").on("click", function() {
            wrongAns++
            $("#nextQ").show('fast')
            $("#gifImage").empty()
            $("#answerblock").empty()
            $("#myanswer").empty()
            showQuestion()

            return
            if (totalAns === 0) {
                stopTimer()
                $("#timer").empty()
                $("#start").show('fast')
                $(".totalans").empty()
                $("#question").empty()
                $("#myanswer").empty()
                $("#gifImage").empty()
                $("#answerblock").empty()
                $("#nextQ").hide('1000')
                $("#correctans").html("Correct Answers: " + correctAns)
                $("#wrongans").html("Wrong Answers: " + wrongAns)
                $(".options").html("PLAY AGAIN!")
            }
        })

        function showQuestion () {
            myQuestions = [
                {
                    question : "In 'One Punch Man', what hero class does Saitama test into?",
                    options : [
                        "Class C", "Class B", "Class S", "Class A"
                    ],
                    ansVal : 0,
                    answer : 'Class C',
                    note : "Although he's unarguably the strongers character in the series, he did poorly on the written exam!",
                    gif : "assets/images/saitama.gif"
                },
                {
                    question : "What is the name of the dragon in Dragon Ball Z?",
                    options : [
                        "Shenron", "Dr. Seusse", "Goku", "ChiChi"
                    ],
                    ansVal : 0,
                    answer : 'Shenron',
                    gif : "assets/images/shenron.gif"
                },
                {
                    question : "What is Gintamas go-to weapon of choice?",
                    options : [
                        "His fists", "Pistol", "A wooden sword", "Rubber duck"
                    ],
                    ansVal : 2,
                    answer : 'A wooden Sword',
                    gif : "assets/images/gintama.gif"
                },
                {
                    question : "In Naruto episode #53, who removes Naruto's 5 Elements Seal?",
                    options : [
                        "Sasuke", "Jiraiya", "The 4th Hokage", "Goku"
                    ],
                    ansVal : 1,
                    answer : 'Jiraiya',
                    gif : "assets/images/jiraiya.gif",
                },
                {
                    question : "In 'One Piece', what food gives you special powers?",
                    options : [
                        "Dragon Fire", "Cheese Wheels", "Devil Fruit", "Angel Water"
                    ],
                    ansVal : 2,
                    answer : 'Devil Fruit', 
                    gif : "assets/images/devilfruit.gif",
                },  
                {
                    question : "In 'My Hero Academia', main character Midori, Izuki (also known as Deku) obtains what quirk?",
                    options: [
                        "All Might", "All for One","Fire Punch","Milk Tea Boba"
                    ],
                    ansVal : 1,
                    answer : 'All for One',
                    gif : "assets/images/myhero.gif",
                },
                {
                    question : "In 'DeathNote', what is Ryuk's favorite snack?",
                    options : [
                        "Apples", "Oranges", "Kittens", "Tacos"
                    ],
                    ansVal : 0,
                    answer : "Apples",
                    gif : "assets/images/deathnote.gif",
                },
                {
                    question : "Inuyasha is half human and half ______ -demon.",
                    options : [
                        "Bird", "Wolf", "Cat", "Dog"
                    ],
                    ansVal : 3,
                    answer : "Dog",
                    gif : "assets/images/inuyasha.gif",
                },
                {
                    question : "In 'Attack on Titan', how did Erin's mom die?",
                    options : [
                        "She was eaten", "She ate bad meat", "She didn't", "Nobody Knows"
                    ],
                    ansVal : 0,
                    answer : "She was eaten",
                    gif : "assets/images/attack.gif",
                },
                {
                    question : "In Naruto, who does Sakura have a crush on?",
                    options : [
                        "Naruto", "Sasuke", "Kora", "Inuyasha"
                    ],
                    ansVal : 1,
                    answer : "Sasuke",
                    gif : "assets/images/sasuke.gif",
                },
                {
                    question : "Who's that pokemon?<img src='assets/images/dragonair.jpg' width='500px' height='500px'>",
                    options : [
                        "Dratini", "Snorelax", "Mew", "Dragonair"
                    ],
                    ansVal : 3,
                    answer : "Dragonair",
                    gif : "assets/images/dragonair.gif",
                },
                {
                    question : "In 'HunterXHunter', what is Hisoka's Nen ability?",
                    options : [
                            "Flight", "Lizard Tongue", "Bungee Gum", "Love"
                    ],
                    ansVal : 2,
                    answer : "Bungee Gum",
                    gif : "assets/images/hisoka.gif"
                },
                {
                    question : "What is Naruto's favorite food?",
                    options : [
                        "Hot Cheetos", "Nori", "Fish", "Ramen"
                    ],
                    ansVal : 3,
                    answer : "Ramen from Ramen Ichiraku",
                    gif : "assets/images/ramen.gif"
                },
                {
                    question : "In 'Full Metal Alchemist-Brotherhood', which limbs did Edward Elric lose when he was young?",
                    options : [
                        "His arms", "His legs", "Left arm, Right leg", "Right arm, Left leg",
                    ],
                    ansVal : 3,
                    answer : "Right arm, Left leg",
                    gif : "assets/images/FMAbrotherhood.gif"
                },
                {
                    question : "In 'One Punch Man' what is Saitama wearing when he slaps the mosquito villain and saves Genos?",
                    options : [
                        "His work uniform", "His hero uniform", "Boxers", "Nothing"
                    ],
                    ansVal : 3,
                    answer : "Nothing",
                    note : "Everything got burned off during the fight!",
                    gif : "assets/images/saitamaslap.gif"
                },
                {
                    question : "What's the name of the oversized dog in 'Gintama'?",
                    options : [
                        "Sayan", "Sadaharu", "Jump", "Gohan"
                    ],
                    ansVal : 1,
                    answer : "Sadaharu",
                    note : "Before he joined the 'Odd Jobs' team, he was a God Dog!",
                    gif : "assets/images/sadaharu.gif"
                },
                {
                    question : "In Bleach, what is the name of Ichigo's Zanpakuto spirit?",
                    options : [
                        "Strawberry", "Mikasa", "Zangetsu", "Rukia"
                    ],
                    ansVal : 2,
                    answer : "Zangetsu",
                    note : "He has many forms...Tensa, Hollow, Quincy...",
                    gif : "assets/images/zangetsu.gif"
                },
            ]
            
            timer = 15
            startTimer()
            $("#nextQ").show('1000')
            totalAns++
            $(".totalans").html("Question #" + totalAns)
            //chooses random question from questions array
            for (var j = 0; j < myQuestions.length; j++) {
                randQuest = Math.floor(Math.random() * myQuestions.length)
                activeQuest = myQuestions[randQuest]
            }
            
            myQuestions.splice(randQuest,1)
            holder.push(randQuest)

            //active question shows up inside questions id
            $("#question").html("<h2>" + activeQuest.question + "</h2>")
            
            console.log(holder)
            console.log(myQuestions)
            // console.log("quest")
            // $(".options").html(questOptions)
            var activeOptions = activeQuest.options
            for (var i = 0; i < activeOptions.length; i++) {
                //for length of activeQuest.options
                var userChoice = $("<button>")
                userChoice.addClass("answerChoice")
                userChoice.html(activeOptions[i])
                userChoice.attr("data-guessvalue", i)
                $("#answerblock").append(userChoice)
            }
            // console.log(activeOptions)
            console.log(activeQuest)
            // console.log(userChoice)
            
            $(".answerChoice").on("click", function() {
                userGuess =  parseInt($(this).attr("data-guessvalue"))
                console.log(userGuess)
                //if user guesses right
                if (userGuess === activeQuest.ansVal) {
                    //run function stop timer
                    stopTimer()
                    correctAns++
                    userGuess= ''                    
                    $("#nextQ").hide('1000')
                    $("#myanswer").html("<h3>Correct!</h3>")
                    $("#gifImage").html("<img src='"+ activeQuest.gif + "' >")
                    $("#answerblock").empty()   
                    
                    //set timeout only if they don't press next question
                    setTimeout (function (){
                        $("#gifImage").empty()
                        $("#answerblock").empty()
                        $("#myanswer").empty()
                        showQuestion()
                        return
                },4000)
                }
    
                else {
                    stopTimer()
                    wrongAns++
                    userGuess= ''
                    $("#nextQ").hide('1000')
                    $("#myanswer").html("<h3>Wrong! The right answer was '"+ activeQuest.answer + "</h3>")
                    $("#gifImage").html("<img src='"+ activeQuest.gif + "' >")
                    $("#answerblock").empty()
                    setTimeout (function (){
                        $("#gifImage").empty()
                        $("#answerblock").empty()
                        $("#myanswer").empty()
                        showQuestion()
                        return
                },4000)
                }
            })
            
            if (totalAns === 6) {
                stopTimer()
                $("#timer").empty()
                $("#start").show('fast')
                $(".totalans").empty()
                $("#question").empty()
                $("#myanswer").empty()
                $("#gifImage").empty()
                $("#answerblock").empty()
                $("#nextQ").hide('1000')
                $("#correctans").html("Correct Answers: " + correctAns)
                $("#wrongans").html("Wrong Answers: " + wrongAns)
                $(".options").html("PLAY AGAIN!")
            }
        }
    })

    function decrement() {
        timer--
        $("#timer").html("<p>You have " + timer + " seconds to answer!<p>")

        if (timer === 0) {
            wrongAns++
            stopTimer()
            $("#nextQ").show('1000')
            $("#answerblock").empty()
            $("#myanswer").html("<p>Your Time is up! The answer was : " + activeQuest.answer + "</p>")
            ///show gif
            $("#gifImage").html("<img src='"+ activeQuest.gif + "' >")
            console.log(activeQuest.answer)
        }
    }
    
    function startTimer() {
        if (!timerOn) {
            interval = setInterval(decrement,1000)
            timerOn = true
        }
    }
    
    //timer stops 
    function stopTimer() {
        timerOn = false
        clearInterval(interval)
    }
})