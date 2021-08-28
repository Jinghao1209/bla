if (localStorage.getItem("id") == undefined) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-",
        min = 100,
        max = 255,
        len = Math.floor(Math.random() * (max - min)) + min,
        retVal = "";
    for (var i = 0, n = charset.length; i < len; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    localStorage.setItem("id", retVal);
    localStorage.setItem("click", "0");
}