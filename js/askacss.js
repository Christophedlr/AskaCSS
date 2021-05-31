function alertdel(event) {
    event.target.parentNode.removeEventListener("click", alertdel);
    event.target.parentNode.remove();
}

let alerts = document.getElementsByClassName("alert-close");

for (let i = 0; i < alerts.length; i++) {
    alerts[i].addEventListener("click", alertdel);
}
