function loading() {
    var xhttp = new XMLHttpRequest();
    var clicktime;
    xhttp.onload = function() {
        clicktime = this.responseText;
        document.getElementById("ClickTime").innerHTML = clicktime;
    }
    xhttp.open("GET", "fetch.php");
    xhttp.send();
    localStorage.setItem("click", clicktime);
}