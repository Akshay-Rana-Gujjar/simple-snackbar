function createToast(message , backgroundColor) {


    var snackbar = document.createElement("div");

    document.body.appendChild(snackbar);

    snackbar.id = "snackbar";

    snackbar.className = "showToast";

    snackbar.style.background = backgroundColor || "#000";

    snackbar.innerHTML = message;

    setTimeout(function(){ snackbar.className = snackbar.className.replace("showToast", ""); }, 3000);
}