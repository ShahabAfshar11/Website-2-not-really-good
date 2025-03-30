function greetUser() {
    const userName = document.getElementById("nameInput").value;
    if (userName.trim() !== "") {
        document.getElementById("userName").textContent = userName;
        document.getElementById("userName2").textContent = userName;
        document.getElementById("greeting").innerHTML = `Nice chatting with you, ${userName}!`;
        document.getElementById("question2").style.display = "block";
    } else {
        alert("Please enter your name.");
    }
}

function showChoice() {
    const buyInput = document.getElementById("buyInput").value;
    if (buyInput.trim() !== "") {
        document.getElementById("question2").style.display = "none";
        document.getElementById("question3").style.display = "block";
    } else {
        alert("Please enter something you'd love to buy.");
    }
}