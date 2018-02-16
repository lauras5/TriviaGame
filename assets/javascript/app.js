$(document).ready(function() {

    var myQuestions = [
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
            gif: "assets/images/myhero.gif",
        },
        {
            question: ""
        }
    ]

    var userGuess = ''
    var correctAns = 0
    var wrongAns = 0
    var totalAns = 0
    var timer = 15
    var interval;
    var timerOn = false
    var holder = []
    var activeQuest;
    var randQuest;
    var nextQTime;
    $("#nextQ").hide()
    $("#reset").hide()
    
    //create timer

    //start game on button click
    $("#start").on("click", function() {
        //hides start button
        $("#start").hide('fast')
        //shows next question button
        $("#nextQ").show('fast')
        //function to show question & choices
        showQuestion()
        //starts timer at 15 seconds
        startTimer()
        // console.log("chao")
        //goes through all questions
        for(var i = 0; i < myQuestions.length; i++) {
            holder.push(myQuestions)
        }

        function showQuestion () {
            //chooses random question from questions array
            randQuest = Math.floor(Math.random() * myQuestions.length)
            // console.log(randQuest)
            activeQuest = myQuestions[randQuest]
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
                console.log(activeOptions)
                // console.log(userChoice)
    
            $(".answerChoice").on("click", function() {
                userGuess =  parseInt($(this).attr("data-guessvalue"))
                console.log(userGuess)
                //if user guesses right
                if (userGuess === activeQuest.ansVal) {
                    //run function stop timer
                    stopTimer()
                    correctAns++
                    totalAns++
                    userGuess= ''
                    $("#myanswer").html("<h3>Correct!</h3>")
                    $("#gifImage").html("<img src='"+ activeQuest.gif + "' >")
                    $("#answerblock").empty()
                    //show object gif 
                    // $("#gifImage").html(activeQuest.gif)
                }
    
                else {
                    stopTimer()
                    wrongAns++
                    totalAns++
                    userGuess= ''
                    $("#myanswer").html("<h3>Wrong! The right answer was '"+ activeQuest.answer + "</h3>")
                    $("#gifImage").html("<img src='"+ activeQuest.gif + "' >")
                    $("#answerblock").empty()
                }
            })
            
            if (totalAns === 10) {
                stopTimer()
                
            }

            $("#nextQ").on("click", function() {
                $("#nextQ").show('fast')
                $("#gifImage").empty()
                $("#answerblock").empty()
                showQuestion()
                timer = 15
                startTimer()
            })
    
            $("#reset").on("click", function() {
                $("#reset").hide('fast')
                $("#start").show('fast')
                $("#question").empty()
                $("#myanswer").empty()
                $("#myAnswer").empty()
                $("#gifImage").empty()
                correctAns = 0
                wrongAns = 0
                totalAns = 0
                for (var i =0; i < holder.length; i++) {
                    myQuestions.push(holder[i])
                }
            })
        }
    })

    function decrement() {
        timer--
        $("#timer").html("<p>You have " + timer + " seconds to answer!<p>")

        if (timer === 0) {
            wrongAns++
            stopTimer()
            $("#myanswer").html("<p>Your Time is up! The answer was : " + activeQuest.answer + "</p>")
            ///show gif
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