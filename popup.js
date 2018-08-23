// // Copyright 2018 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.

// 'use strict';

//get data

// troubles: cant do inline js scripts so had to use listeners and onload function!! 

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

document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('setData');
    // onClick's logic below:
    link.addEventListener('click', function () {

        data = getData();


        //randomize choices!! TODO 
        document.getElementById("h1").innerHTML = data.question;
        document.getElementById("answer1").innerHTML = data.correct_answer;
        document.getElementById("p2").innerHTML = data.incorrect_answers[0];
        document.getElementById("p3").innerHTML = data.incorrect_answers[1];
        document.getElementById("p4").innerHTML = data.incorrect_answers[2];
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
