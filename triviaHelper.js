
function getBaseUrl()
{
    return "https://opentdb.com/";
}

function buildUrl()
{
    return getBaseUrl() + 'api.php?amount=10&type=multiple';
}

export function getOneQuestion()
{
    //make call to API
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

    // request.onload = function()
    // {
    //     var data = JSON.parse(this.response);

    //     if (request.status >= 200 && request.status < 400)
    //     {

    //         var question = data[results][0];
    //         callback(question);
    //     }
    //     else
    //     {
    //         console.log('error');
    //     }
    // }

    // request.send();
}

function getQuestions()
{

    //make call to API
    var apiUrl = buildUrl();

    var request = new XMLHttpRequest();

    request.open('GET', apiUrl, true);

    request.onload = function()
    {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400)
        {
            addQuestions(data[results]);
            console.log(data);
        }
        else
        {
            console.log('error');
        }
    }

    request.send();
}

function addQuestions(data)
{
    //get current questions
    chrome.storage.sync.get(['questions'], function(result)
    {
        console.log('value is: ' + result);

        var finalData = result.concat(data);

        //resave to store
        chrome.storage.sync.set({'questions': finalData});
    });

}

function getNextQuestion()
{
    //read the store to find question
    chrome.storage.sync.get(['questions'], function(result)
    {
        console.log('value is: ' + result);

        var data = result.pop();

        //resave to store
        chrome.storage.sync.set({'questions': result});

        //if size of remaining questions is less than 5, call getQuestions()
        if(result.length < 5)
        {
            getQuestions();
        }

        return data;

    });
}
