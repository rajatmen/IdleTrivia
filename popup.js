// // Copyright 2018 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.

// 'use strict';

//get data

// troubles: cant do inline js scripts so had to use listeners and onload function!! 

//add event listener for each button on click 


onload();
function getData() {
    data = {

        "category": "Animals",
        "type": "multiple",
        "difficulty": "easy",
        "question": "The Kākāpō is a large, flightless, nocturnal parrot native to which country?",
        "correct_answer": "New Zealand",
        "incorrect_answers": [
            "South Africa",
            "Australia",
            "Madagascar"
        ]

    };

    return data;
}

function onload() 
{
    data = getData();

        //randomize choices!! TODO 
        document.getElementById("h1").innerHTML = data.question;
        document.getElementById("answer1").innerHTML = data.correct_answer;
        document.getElementById("p2").innerHTML = data.incorrect_answers[0];
        document.getElementById("p3").innerHTML = data.incorrect_answers[1];
        document.getElementById("p4").innerHTML = data.incorrect_answers[2];
}
// document.addEventListener('DOMContentLoaded', function () {
//     var link = document.getElementById('loadData');

//     link.addEventListener('load', function () {
//         data = getData();


//         //randomize choices!! TODO 
//         document.getElementById("h1").innerHTML = data.question;
//         document.getElementById("answer1").innerHTML = data.correct_answer;
//         document.getElementById("p2").innerHTML = data.incorrect_answers[0];
//         document.getElementById("p3").innerHTML = data.incorrect_answers[1];
//         document.getElementById("p4").innerHTML = data.incorrect_answers[2];
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {

//     var link = document.getElementById('DOMContentLoaded', function() {
//         var link =    document.getElementById("newQ");

//         link.addEventListener('click', function() {
//             link.style.visibility = "hidden";

//         })
//     });
// });
//first button

function disableButtons()
{
    var buttons = ['answer1', 'p2', 'p3', 'p4'];
    for(i = 0; i < 4; i++)
    {
        input = buttons[i];
        console.log(input);
        document.getElementById(input).disabled = true;
    }
}

function enableButtons()
{
    var buttons = ['answer1', 'p2', 'p3', 'p4'];
    for(i = 0; i < 4; i++)
    {
        input = buttons[i];
        console.log(input);
        document.getElementById(input).disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('answer1');

    link.addEventListener('click', function() {

        data = getData();

        // array = checkAnswer();
       
        ans = checkAnswer();

        buttonData = link.innerHTML;
        if(buttonData === data.correct_answer)
        {
            link.style.background='#008000';
        }
        else
        {
            link.style.background='#FF0000';
            ans.style.background = '#008000';
        }
        
        document.getElementById("newQ").style.visibility = "visible";
        disableButtons();

    })
})

//button 2
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('p2');

    link.addEventListener('click', function() {

        data = getData();
        ans = checkAnswer();

        buttonData = link.innerHTML;
        if(buttonData === data.correct_answer)
        {
            link.style.background='#008000';
        }
        else
        {
            link.style.background='#FF0000';
            ans.style.background = '#008000';
        }

        document.getElementById("newQ").style.visibility = "visible";
        disableButtons();

    })
})

//button 3
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('p3');

    link.addEventListener('click', function() {


        data = getData();

        ans = checkAnswer();

        console.log(ans);
        buttonData = link.innerHTML;
        if(buttonData == data.correct_answer)
        {
            link.style.background='#008000';
        }
        else
        {
            link.style.background='#FF0000';
            ans.style.background = '#008000';
        }
        document.getElementById("newQ").style.visibility = "visible";
        disableButtons();


    })
})

//button 4
document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('p4');

    link.addEventListener('click', function() {
        
        data = getData();
        ans = checkAnswer();
        console.log(ans);
        buttonData = link.innerHTML;
        if(buttonData === data.correct_answer)
        {
            link.style.background='#008000';
        }
        else
        {
            link.style.background='#FF0000';
            ans.style.background = '#008000';
        }

        document.getElementById("newQ").style.visibility = "visible";
        disableButtons();

    })
})

//function to check right one and wrong one, loop through and color 

function checkAnswer()
{
    var buttonData = [];
    buttonData[0] =  document.getElementById('answer1').innerHTML;
    buttonData[1] =  document.getElementById('p2').innerHTML;
    buttonData[2] =  document.getElementById('p3').innerHTML;
    buttonData[3] =  document.getElementById('p4').innerHTML;

    var buttons = ['answer1', 'p1', 'p2', 'p3'];
    var i;
    var ans; 
    var input;

    for(i = 0; i < buttonData.length; i++)
    {
        if(buttonData[i] == data.correct_answer)
        {
            input = buttons[i];
        }
    }

    console.log(input);
    ans = document.getElementById(input);
    return ans;

}

document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('newQ');
    // onClick's logic below:
    link.addEventListener('click', function () {
        var buttons = ['answer1', 'p2', 'p3', 'p4'];

        data = getData();
        var i;
        for(i = 0; i < 4; i++)
        {
            input = buttons[i];
            console.log(input);
            document.getElementById(input).style.background = '#ffffff';
        }
        //randomize choices!! TODO 
        document.getElementById("h1").innerHTML = data.question;
        document.getElementById("answer1").innerHTML = data.correct_answer;
        document.getElementById("p2").innerHTML = data.incorrect_answers[0];
        document.getElementById("p3").innerHTML = data.incorrect_answers[1];
        document.getElementById("p4").innerHTML = data.incorrect_answers[2];
        document.getElementById("newQ").style.visibility = "hidden";
        enableButtons();
    });
});

// document.getElementById("p1").innerHTML = "New text!";

// let changeColor = document.getElementById('box');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

//   changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
// };
// });
