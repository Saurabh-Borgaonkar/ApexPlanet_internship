function checkAnswer(answer) {

    const result = document.getElementById("result");

    if(answer === "correct") {
        result.innerText = "✅ Correct Answer!";
        result.style.color = "green";
    }
    else {
        result.innerText = "❌ Wrong Answer. Try again!";
        result.style.color = "red";
    }
}


function getJoke() {

    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {

        document.getElementById("joke").innerText =
        data.setup + " 😂 " + data.punchline;

    })
    .catch(error => {

        document.getElementById("joke").innerText =
        "Failed to load joke. Try again.";

    });

}