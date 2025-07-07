// Automatic Scrolling News Section
document.addEventListener("DOMContentLoaded", function() {
    const scrollingNews = document.querySelector(".scrolling-news");

    function duplicateNews() {
        let clonedNews = scrollingNews.cloneNode(true);
        scrollingNews.parentNode.appendChild(clonedNews);
    }
    
    duplicateNews();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

// Toggle Dark Mode
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Dark Mode";
    toggleButton.style.cssText = "position:fixed;top:10px;right:10px;padding:10px;background:#222;color:white;border:none;cursor:pointer;";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});

// Dark Mode Styling
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #222;
        color: white;
    }
    .dark-mode nav {
        background-color: #444;
    }
`;
document.head.appendChild(darkModeStyles);