var url = window.location;
console.log(url);
var param = new URLSearchParams(url.search);
var player1 = param.get('player1');
var player2 = param.get('player2');
console.log(player1);
console.log(player2);

var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");
p1.innerHTML = player1;
p2.innerHTML = player2;
p1.style.fontWeight = 500;
p2.style.fontWeight = 500;
p1.style.textTransform = "uppercase"
p2.style.textTransform = "uppercase"

document.getElementById("p1").innerHTML = player1
document.getElementById("p2").innerHTML = player2
document.getElementById("p1").style.textTransform = "uppercase";
document.getElementById("p2").style.textTransform = "uppercase";

var p1choose;
var p2choose;

var total_play = 0;
var p1result = 0;
var p2result = 0;

function first(a) {
    p1choose = a;
    console.log(p1choose)

    document.getElementById("p2stone").classList.remove('disabled')
    document.getElementById("p2paper").classList.remove('disabled')
    document.getElementById("p2scissors").classList.remove('disabled')

    document.getElementById("p1stone").classList.add('disabled')
    document.getElementById("p1paper").classList.add('disabled')
    document.getElementById("p1scissors").classList.add('disabled')
}

function second(b) {
    p2choose = b;
    console.log(p2choose)

    document.getElementById("p2stone").classList.add('disabled')
    document.getElementById("p2paper").classList.add('disabled')
    document.getElementById("p2scissors").classList.add('disabled')

    document.getElementById("p1stone").classList.remove('disabled')
    document.getElementById("p1paper").classList.remove('disabled')
    document.getElementById("p1scissors").classList.remove('disabled')

    result();
}

function result() {

    var result = document.getElementById("result");
    var output;
    if (p1choose == "stone") {
        if (p2choose == "paper") {
            output = player2 + " win";
            p2result++;
        } else if (p2choose == "scissors") {
            output = player1 + " win";
            p1result++;
        } else if (p2choose == "stone") {
            output = "Tie";
        }
    } else if (p1choose == "paper") {
        if (p2choose == "scissors") {
            output = player2 + " win";
            p2result++;
        } else if (p2choose == "stone") {
            output = player1 + " win";
            p1result++;
        } else if (p2choose == "paper") {
            output = "Tie";
        }
    } else if (p1choose == "scissors") {
        if (p2choose == "stone") {
            output = player2 + " win";
            p2result++;
        } else if (p2choose == "paper") {
            output = player1 + " win";
            p1result++;
        } else if (p2choose == "scissors") {
            output = "Tie";
        }
    }
    result.innerHTML += "<tr><td>" + p1choose + "</td><td>" + p2choose + "</td><td><span class='text-white bg-success rounded-3 p-1 ps-2 pe-2 w-100'>" + output + "</span></td></tr>";

    total_play++;
    if (total_play == 5) {
        setTimeout(a, 400);
    }

}

function a() {
    var result = document.getElementById("result");

    if (p1result > p2result) {
        alert(player1 + " win");
        result.innerHTML = "<tr><th id = 'p1'>" + player1 + "</th ><th id='p2'>" + player2 + "</th><th> Result</th ></tr > ";
        total_play = 0;
        p1result = 0;
        p2result = 0;
    }
    else if (p1result < p2result) {
        alert(player2 + " win");
        total_play = 0;
        result.innerHTML = "<tr><th id = 'p1' >" + player1 + "</th ><th id='p2'>" + player2 + "</th><th> Result</th ></tr > ";
        p1result = 0;
        p2result = 0;
    } else {
        alert("tie");
        total_play = 0;
        result.innerHTML = "<tr><th id = 'p1' >" + player1 + "</th ><th id='p2'>" + player2 + "</th><th> Result</th ></tr > ";
        p1result = 0;
        p2result = 0;
    }
}
