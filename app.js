var items = {
	question: "Welcome to The Simpsons Trivia Game!",
	questionList: [],
	answers: [],
	answerlist: [],
	correctAnswers: [],
	counter: 0,
	questionNumber: 0,
	correct: 0,
	incorrect: 0,
	answerd: false
};

//Adds list of questions and answers
function initialize(items){
	items.questionList = ["What is Homer's middle name?", 
						  "Who shot Mr. Burns?",
						  "Who is Mr. Snrub?",
						  "Which character is a clown?",
						  "What city do The Simpsons live in?"];

	items.answerlist = ["Jay", "Ray", "Bay", "Moe",
						"Marge", "Maggie", "Moe", "Martha Stewart",
						"Homer", "Moe", "Mr. Burns", "Krusty the Clown",
						"Moe", "Homer", "Krusty the Clown", "Martha Stewart",
						"Springfield", "Sprungfeld", "Stenchville", "Moe"];

	items.correctAnswers = ["Jay", "Maggie", "Mr. Burns", "Krusty the Clown", "Springfield"];
}

//Updates the page after a change
function update(items){
	$("#question-number").text(items.questionNumber);
	$("#question").text(items.question);
	$("#correct").text(items.correct);
	$("#incorrect").text(items.incorrect);

	if (items.questionNumber > 0){
		$("#answer-a").text(items.answers[0]);
		$("#radio-a").attr("value", items.answers[0]);
		$("#answer-b").text(items.answers[1]);
		$("#radio-b").attr("value", items.answers[1]);
		$("#answer-c").text(items.answers[2]);
		$("#radio-c").attr("value", items.answers[2]);
		$("#answer-d").text(items.answers[3]);
		$("#radio-d").attr("value", items.answers[3]);
	}
}

//Changes to the next question on the list
function changeQuestion(items){
	switch (items.questionNumber){
		case 1:
			items.question = items.questionList[0];
			items.answers[0] = items.answerlist[0];
			items.answers[1] = items.answerlist[1];
			items.answers[2] = items.answerlist[2];
			items.answers[3] = items.answerlist[3];
			break;

		case 2:
			items.question = items.questionList[1];
			items.answers[0] = items.answerlist[4];
			items.answers[1] = items.answerlist[5];
			items.answers[2] = items.answerlist[6];
			items.answers[3] = items.answerlist[7];
			break;

		case 3:
			items.question = items.questionList[2];
			items.answers[0] = items.answerlist[8];
			items.answers[1] = items.answerlist[9];
			items.answers[2] = items.answerlist[10];
			items.answers[3] = items.answerlist[11];
			break;

		case 4:
			items.question = items.questionList[3];
			items.answers[0] = items.answerlist[12];
			items.answers[1] = items.answerlist[13];
			items.answers[2] = items.answerlist[14];
			items.answers[3] = items.answerlist[15];
			break;

		case 5:
			items.question = items.questionList[4];
			items.answers[0] = items.answerlist[16];
			items.answers[1] = items.answerlist[17];
			items.answers[2] = items.answerlist[18];
			items.answers[3] = items.answerlist[19];
			break;

		default:
			break;
	}
}

//Sets up the start button to begin the quiz
function start(items){
	$("#start").click(function(event){
		event.preventDefault();
		$(".hidden").removeClass("hidden");
		$(".hide").addClass("hidden");
		items.questionNumber = 1;
		changeQuestion(items);
		update(items);
	});
}

//Increases correct or incorrect score based on users answer
function checkIfCorrect(items){
	if($(":checked").val() == items.correctAnswers[items.counter++]){
		items.correct++;
	}
	else
		items.incorrect++;
}

//Turns the correct answers box green
function greenBox(itens){
	switch (items.questionNumber){
		case 1:
			$("#box-1").addClass("green");
			break;

		case 2:
			$("#box-2").addClass("green");
			break;

		case 3:
			$("#box-3").addClass("green");
			break;

		case 4:
			$("#box-3").addClass("green");
			break;

		case 5:
			$("#box-1").addClass("green");
			break;

		default:
			break;
	}
}

//Removes the green from the previous correct box
function ungreenBox(items){
	switch (items.questionNumber){
		case 1:
			$("#box-1").removeClass("green");
			break;

		case 2:
			$("#box-2").removeClass("green");
			break;

		case 3:
			$("#box-3").removeClass("green");
			break;

		case 4:
			$("#box-3").removeClass("green");
			break;

		case 5:
			$("#box-1").removeClass("green");
			break;

		default:
			break;
	}
}

//Shows the final screen of the game
function finalScreen(items){
	$(".final").removeClass("final");
	$("#begin").addClass("hidden");
	$("#correct-answers").text(items.correct);
	$("#incorrect-answers").text(items.incorrect);
	var x = (items.correct / 5) * 100;
	switch (x){

	case 0:
		$("#percent").text(x + "% Try Again!")
		break;

	case 20:
		$("#percent").text(x + "% Try Again!")
		break;

	case 40:
		$("#percent").text(x + "% Try Again!")
		break;
	
	case 60:
		$("#percent").text(x + "% Not Bad!")
		break;

	case 80:
		$("#percent").text(x + "% Pretty Good!")
		break;

	case 100:
		$("#percent").text(x + "% Great Job!")
		break;
	}
}

function quizTime(items){
	$("#answer").click(function(event){
		event.preventDefault();
		if (items.answerd == false){
			items.answerd = true;
			greenBox(items);
			checkIfCorrect(items);
			update(items);
	}
	});

	$("#continue").click(function(event){
		event.preventDefault();
		if (items.answerd == true){
			if (items.questionNumber == 5){
				finalScreen(items);
			}
			else{
				items.answerd = false;
				ungreenBox(items);
				items.questionNumber++;
				changeQuestion(items);
				update(items);
			}
		}
	});

	$("#retry2").click(function(event){
	});
}

$(function(){
	initialize(items);
	update(items);
	start(items);
	quizTime(items);
});