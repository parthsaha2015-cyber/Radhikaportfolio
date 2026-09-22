// ========================================
// Mobile Student Portfolio - script.js
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Mobile Navigation
    // -------------------------------
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("active");

            const isOpen = nav.classList.contains("active");
            menuButton.setAttribute("aria-expanded", isOpen);
        });

        // Close menu after selecting a link
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    // -------------------------------
    // Active Navigation Highlighting
    // -------------------------------
    const sections = document.querySelectorAll("section[id]");

    if (sections.length > 0 && navLinks.length > 0) {

        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {

                        navLinks.forEach(link => {
                            link.classList.remove("active");
                        });

                        const activeLink = document.querySelector(
                            `.nav-links a[href="#${entry.target.id}"]`
                        );

                        if (activeLink) {
                            activeLink.classList.add("active");
                        }
                    }
                });
            },
            {
                threshold: 0.3
            }
        );

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }


    // -------------------------------
    // Scroll Reveal Effect
    // -------------------------------
    const revealElements = document.querySelectorAll(
        ".reveal, .card, .portfolio-card, .skill-card"
    );

    if ("IntersectionObserver" in window && revealElements.length > 0) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {
        // Keep content visible if IntersectionObserver is unavailable
        revealElements.forEach(element => {
            element.classList.add("show");
        });
    }


    // -------------------------------
    // Back to Top Button
    // -------------------------------
    const backToTop = document.querySelector("#backToTop");

    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {
                if (window.scrollY > 400) {
                    backToTop.classList.add("show");
                } else {
                    backToTop.classList.remove("show");
                }
            },
            { passive: true }
        );

        backToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
