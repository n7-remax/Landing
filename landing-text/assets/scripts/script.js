var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn");

var socialBtn = document.getElementsByClassName("social-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn[0].onclick = function () {
    modal.style.display = "block";
}
btn[1].onclick = function () {
    modal.style.display = "block";
}
btn[2].onclick = function () {
    modal.style.display = "block";
}
btn[3].onclick = function () {
    modal.style.display = "block";
}
btn[4].onclick = function () {
    modal.style.display = "block";
}
btn[5].onclick = function () {
    modal.style.display = "block";
}
btn[6].onclick = function () {
    modal.style.display = "block";
}


socialBtn[0].onclick = function () {
    modal.style.display = "block";
}
socialBtn[1].onclick = function () {
    modal.style.display = "block";
}
socialBtn[2].onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});