window.addEventListener("load", function() {
    document.getElementById("preloader").style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
        let topBtn = document.getElementById("topBtn");
    
        window.onscroll = function () {
            topBtn.style.display = window.scrollY > 300 ? "block" : "none";
        };
    
        topBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
});

document.getElementById("noLink").addEventListener("click", function(event) {
    event.preventDefault(); // Stops the page from refreshing
    alert("Link clicked! But no refresh.");

});