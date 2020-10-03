import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

//Task 1:
/*
const jokeArray = jokes.getJokes();

document.getElementById("getJokeByID").addEventListener("click", getByID);

function getByID() {
    var id = document.getElementById("jokeID").value;
    const singlejoke = jokes.getJokeById(id);
    document.getElementById("jokeByID").innerHTML = singlejoke;
}
*/

//Task 2:
document.getElementById("getQuote").addEventListener("click", getQuote);

function getQuote() {

    var url = "https://studypoints.info/jokes/api/jokes/period/hour";

    fetch(url)
            .then(res => res.json())
            .then(data => {
                var table = document.getElementById("quotes");
                table.innerHTML = "";
                var tr = "";
                tr = '<tr>' + '<td>' + data.id + '</td>' + '<td>' + data.joke + '</td>' + '<td>' + data.reference + '</td>' + '</tr>';
                table.innerHTML = tr;
                document.getElementById("quotes").innerHTML = tr;
                console.log("data", data);
            });
};

setInterval(getQuote,5000);