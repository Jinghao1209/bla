var downX, downY, upX, upY, placeX, placeY, lastXY, clicked = false, moved = false, clicktime;
document.querySelector("div[data-people='1']").addEventListener("mousedown", (e) => {
    downX = parseInt(e.clientX)
    downY = parseInt(e.clientY)
})
document.querySelector("div[data-people='1']").addEventListener("mouseup", (e) => {
    upX = parseInt(e.clientX)
    upY = parseInt(e.clientY)
    clicked = true;
})
document.addEventListener("mousemove", (e) => {
    if (clicked) {
        upX > downX?placeX = upX - downX:placeX = downX - upX;
        upY > downY?placeY = upY - downY:placeY = downY - upY;
        placeX = placeX * placeX;
        placeY = placeY * placeY;
        if (placeX > placeY) {
            lastXY = Math.sqrt(placeX - placeY, 2);
        } else {
            lastXY = Math.sqrt(placeY - placeX, 2);
        }
        if (lastXY > 10)
            moved = true;
        clicked = false;
    }
})
setInterval(() => {
    if (moved) {
        const data = new FormData();
        data.append("id", localStorage.getItem("id"));
        data.append("click", localStorage.getItem("click"));
        const req = new XMLHttpRequest();
        req.open("POST", "/action.php");
        req.send(data);
        moved = false;

        setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                clicktime = this.responseText;
                document.getElementById("ClickTime").innerHTML = clicktime;
            }
            xhttp.open("GET", "fetch.php");
            xhttp.send();
            localStorage.setItem("click", clicktime);
        }, 10);
    }
});