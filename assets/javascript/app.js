$(document).ready(function() {

    var myQuestions = [
        {
            question : "What is Gintamas go-to weapon of choice?",
            options : [
                "His fists", "Pistol", "A wooden sword", "Rubber duck"
            ],
            ansVal : 2,
            answer : 'A wodden Sword',
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
            question : "In 'Attack on Titan', how did Erin's mom dye?",
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
        }
    ]

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
        // console.log("chao")
        newArray = []
        //goes through all questions
        for(var i = 0; i < myQuestions.length; i++) {
            holder.push(myQuestions)
        }

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
            timer = 15
            startTimer()
            $("#nextQ").show('1000')
            totalAns++
            $(".totalans").html("Question #" + totalAns)
            //chooses random question from questions array
            randQuest = Math.floor(Math.random() * myQuestions.length)
            // console.log(randQuest)
            activeQuest = myQuestions[randQuest]
            for(var i = 0; i < myQuestions.length; i++) {
                holder.push(myQuestions)
            }
            //active question shows up inside questions id
            $("#question").html("<h2>" + activeQuest.question + "</h2>")
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
            
            if (totalAns === 11) {
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

            // $("#reset").on("click", function() {
            //     $("#reset").hide('fast')
            //     $("#start").show('fast')
            //     $("#question").empty()
            //     $("#myanswer").empty()
            //     $("#gifImage").empty()
            //     correctAns = 0
            //     wrongAns = 0
            //     for (var i =0; i < holder.length; i++) {
            //         myQuestions.push(holder[i])
            //     }
            // })
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