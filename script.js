document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("mouseenter", () => {
            section.style.transform = "scale(1.02)";
        });

        section.addEventListener("mouseleave", () => {
            section.style.transform = "scale(1)";
        });
    });

    // Smooth scroll navigation
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});