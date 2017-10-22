$("#start").on("click", function(){
	game.start(); 	//$("#subwrapper").remove();//clear the div when the start button is pressed.
	
})  

$(document).on("click","#end",function() {
	game.done();
})

var questions = [{
		question: "What year did the U.S. join WW2?",
		answers:["1939", "1941", "1956", "1944"],
		correctAnswer: "1941"
	}, {
		question: "What was the Death toll for the Soviet Union?",
		answers:["10,000,000", "12,000,000", "20,000,000", "1,000,000"],
		correctAnswer: "20,000,0009"
	}, {
		question: "What was the death toll for the U.S.?",
		answers:["50,000,000", "20,000", "20,000,000", "80,000"],
		correctAnswer: "20,000"
	}, {
		question: "Who was the Prime Minister of england for majority of the war?",
		answers:["Arthur Chamberlain", "Queen Elizabeth", "Winston Churchill", "John Major"],
		correctAnswer: "Winston Churchill"
	}, {
		question: "What model tank did the U.S. have during WW2?",
		answers:["M4 Sherman", "Tiger Tank Model 1", "t-34 Medium", "38m Toldi"],
		correctAnswer: "M4 Sherman"
	}, {
		question: "What model plane did Japan have during WW2?",
		answers:["Fokker D.XX1", "F6F Hellcat", "A6m Zero", "Boeing B-17"],
		correctAnswer: "Mistubishi A6m Zero"
	}, {
		question: "How many ships did the U.S. lose at sea?",
		answers:["458", "109", "1,554", "845"],
		correctAnswer: "1,554"
	}, {
		question: "How many Jewish are estimated to have died in the Holocaust?",
		answers:["6 million", "20 thousand", "80 thousand", "3 million"],
		correctAnswer: "6 million"
	}, {
		question: "What soda was invented by the germans during WW2",
		answers:["Rootbeer", "Fanta", "Pepsi", "Sprite"],
		correctAnswer: "Fanta"
	}, {
		question: "What was the first European counrty was invaded by the allied forces? ",
		answers:["Switzerland", "Sweden", "France", "Spain"],
		correctAnswer: "France"
	}];


console.log(questions.length)


var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown:  function () {
		game.counter--;
		$("#counter").html(game.counter);
		if (game.counter<=0) {
			console.log("times up!");

			game.done();


		}

	},
	start: function() {
		timer = setInterval(game.countdown,1000); 
		$("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
		$("#start").remove();
		for ( var i=0; i<questions.length; i++) {
		$("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
		for (var j=0; j<questions[i].answers.length; j++) {
			$("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
	}
	}
		$("#subwrapper").append("<br> <button id='end'>DONE</button>")
	},
	done: function(){
		$.each($('input[name="question-0"]:checked'),function(){
			if($(this).val() == questions[0].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-1']:checked"),function(){
			if($(this).val() == questions[1].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-2']:checked"),function(){
			if($(this).val() == questions[2].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-3']:checked"),function(){
			if($(this).val() == questions[3].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-4']:checked"),function(){
			if($(this).val() == questions[4].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-5']:checked"),function(){
			if($(this).val() == questions[5].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-6']:checked"),function(){
			if($(this).val() == questions[6].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-7']:checked"),function(){
			if($(this).val() == questions[7].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-8']:checked"),function(){
			if($(this).val() == questions[8].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-9']:checked"),function(){
			if($(this).val() == questions[9].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($("input[name='question-10']:checked"),function(){
			if($(this).val() == questions[10].correctAnswer) {
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();
	},
 
		result: function(){
			clearInterval(timer);
			$("#subwrapper h2").remove();

			$("#subwrapper").html("<h2>All done!</h2>");
			$("#subwrapper").append("<h3> Correct Answer: " + this.correct + "</h3>");
			$("#subwrapper").append("<h3> Incorrect Answer: " + this.incorrect + "</h3>");
			$("#subwrapper").append("<h3> Unanswered: " + (questions.length-(this.incorrect+this.correct)) + "</h3>");
		}

}
