
const projectButton = document.querySelector("button");

projectButton.addEventListener("click", function () {
    
    const projectsSection = document.querySelector("#projects");

    
    projectsSection.scrollIntoView({
        behavior: "smooth"
    });
});