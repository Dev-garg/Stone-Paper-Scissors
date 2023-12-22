var srno = 1;
var total_play = 0;
var you = 0;
var ai = 0;

function a(a) {

    total_play++;
    if (total_play <= 5) {
        let opt = "spc"
        let result = document.getElementById("result");
        let comp = opt.charAt(Math.floor(Math.random() * 3))
        let user = a
        if (user == "s") {
            if (comp == "p") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Paper</td><td>Stone</td><td>Computer Win</td></tr>"
                ai++;
                srno++;
            } else if (comp == "c") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Scissors</td><td>Stone</td><td>You Win</td></tr>"
                you++;
                srno++;
            } else if (comp == "s") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Stone</td><td>Stone</td><td>Tie</td></tr>"
                srno++;
            }
        } else if (user == "p") {
            if (comp == "c") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Scissors</td><td>Paper</td><td>Computer Win</td></tr>"
                ai++;
                srno++;
            } else if (comp == "s") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Stone</td><td>Paper</td><td>You Win</td></tr>"
                you++;
                srno++;
            } else if (comp == "p") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Paper</td><td>Paper</td><td>Tie</td></tr>"
                srno++;
            }
        } else if (user == "c") {
            if (comp == "s") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Stone</td><td>Scissors</td><td>Computer Win</td></tr>"
                ai++;
                srno++;
            } else if (comp == "p") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Paper</td><td>Scissors</td><td>You Win</td></tr>"
                you++;
                srno++;
            } else if (comp == "c") {
                result.innerHTML += "<tr><td>" + srno + ".</td><td>Scissors</td><td>Scissors</td><td>Tie</td></tr>"
                srno++;
            }
        } else {
            result.innerHTML = "Invalid Input"
        }
    }

    if (total_play == 5) {
        console.log(total_play);
        setTimeout(output, 400);
    }
}

function output() {
    let result = document.getElementById("result");
    if (you > ai) {
        alert("You wins this match");
        result.innerHTML = "<tr><th class='w - 25'>Sr No.</th><th class='w - 25'>Computer</th><th class='w - 25'>You</th><th class='w - 25'>Result</th></tr>"
    }
    else if (ai > you) {
        alert("AI wins this match");
        result.innerHTML = "<tr><th class='w - 25'>Sr No.</th><th class='w - 25'>Computer</th><th class='w - 25'>You</th><th class='w - 25'>Result</th></tr>"
    } else {
        alert("Tie");
        result.innerHTML = "<tr><th class='w - 25'>Sr No.</th><th class='w - 25'>Computer</th><th class='w - 25'>You</th><th class='w - 25'>Result</th></tr>"
    }
    total_play = 0;
    you = 0;
    ai = 0;
    srno = 1;
}