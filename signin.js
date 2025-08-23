var password = "Balls69";

function passcheck() {
if (document.getElementById("password").value = password) {
    alert("Wrong password! Try again.");
    return false;
}
if (document.getElementById("password").value == password) {
    alert("Correct password! You may now proceed.");
}
}