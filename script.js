document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
});


