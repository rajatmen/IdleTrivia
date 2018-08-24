var currentQuestion = getOneQuestion();
    
onload();

function getBaseUrl()
{
    return "https://opentdb.com/";
}

function buildUrl()
{
    return getBaseUrl() + 'api.php?amount=10&type=multiple';
}

function getOneQuestion()
{

    var apiUrl = getBaseUrl() + 'api.php?amount=1&type=multiple';

    var request = new XMLHttpRequest();

    request.open('GET', apiUrl, false);

    request.send(null);

    var data = JSON.parse(request.responseText);

    if (request.status >= 200 && request.status < 400)
    {

        var question = data.results[0];
        return question;
        
    }
    else
    {
        console.log('error');
    }

    return null;
}

function newQuestion()
{
    currentQuestion = getOneQuestion();
}
function getData() {
    return currentQuestion;
}

function onload() {
    data = getData();
    writeData(data);
}

function writeData(data) {
    document.getElementById("h1").innerHTML = data.question;

    array = [];
    var i;

    array.push(data.correct_answer);
    array.push(data.incorrect_answers[0]);
    array.push(data.incorrect_answers[1]);
    array.push(data.incorrect_answers[2]);

    i = getRandom(array.length);
    document.getElementById("answer1").innerHTML = array[i];
    array.splice(i, 1);

    i = getRandom(array.length);
    document.getElementById("p2").innerHTML = array[i];
    array.splice(i, 1);

    i = getRandom(array.length);
    document.getElementById("p3").innerHTML = array[i];
    array.splice(i, 1);

    i = getRandom(array.length);
    document.getElementById("p4").innerHTML = array[i];
    array.splice(i, 1);
}

function getRandom(x) {
    return Math.floor(Math.random() * x);
}

function disableButtons() {
    var buttons = ['answer1', 'p2', 'p3', 'p4'];
    for (i = 0; i < 4; i++) {
        input = buttons[i];
        document.getElementById(input).disabled = true;
    }
}

function enableButtons() {
    var buttons = ['answer1', 'p2', 'p3', 'p4'];
    for (i = 0; i < 4; i++) {
        input = buttons[i];
        document.getElementById(input).disabled = false;
    }
}

function answerSelection(link) {
    data = getData();
    ans = checkAnswer(data);

    buttonData = link.innerHTML;
    if (buttonData === data.correct_answer) {
        link.className = 'btn btn-success btn-space';
    }
    else {
        link.className = 'btn btn-danger btn-space';
        ans.className ='btn btn-success btn-space';
    }

    document.getElementById("newQ").style.visibility = "visible";
    disableButtons();
}

document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('answer1');
    link.addEventListener('click', function () {
        answerSelection(link);
    });

    var link2 = document.getElementById('p2');
    link2.addEventListener('click', function () {
        answerSelection(link2);
    });

    var link3 = document.getElementById('p3');
    link3.addEventListener('click', function () {
        answerSelection(link3)
    });

    var link4 = document.getElementById('p4');
    link4.addEventListener('click', function () {
        answerSelection(link4)
    });

    var link5 = document.getElementById('newQ');
    link5.addEventListener('click', function () {
        hiddenButton(link5);
    });
})

function checkAnswer(data) {
    var buttonData = [];
    buttonData[0] = document.getElementById('answer1');
    buttonData[1] = document.getElementById('p2');
    buttonData[2] = document.getElementById('p3');
    buttonData[3] = document.getElementById('p4');

    var buttons = ['answer1', 'p2', 'p3', 'p4'];
    var i;
    var ans;
    var input = "";

    console.log(buttons);
    for (i = 0; i < buttonData.length; i++) {
        if (buttonData[i].innerHTML === data.correct_answer) {
            input = buttons[i];
        }
    }
    ans = document.getElementById(input);
    console.log(ans);
    return ans;

}

function hiddenButton(link5)
{
    var buttons = ['answer1', 'p2', 'p3', 'p4'];
    var i;
    for (i = 0; i < 4; i++) {
        input = buttons[i];        
        document.getElementById(input).className = 'btn btn-info btn-space';
    }

    document.getElementById("newQ").style.visibility = "hidden";
    enableButtons();
    newQuestion();
    data = getData();
    writeData(data);
}