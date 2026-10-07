// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


// ========================================
// CLOSE MOBILE MENU
// ========================================

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".quick-stats, " +
    ".about-content, " +
    ".skill-card, " +
    ".tech-category, " +
    ".project-card, " +
    ".experience-card, " +
    ".education-card, " +
    ".certificate-card, " +
    ".contact-card"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                // Animation ek baar hi chale
                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Add reveal class and observe elements

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});