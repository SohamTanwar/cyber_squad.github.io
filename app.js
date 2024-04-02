const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 2;
  }, 30);
}


document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const menuContainer = document.querySelector(".menu-container");

    mobileMenuIcon.addEventListener("click", function() {
        menuContainer.classList.toggle("active");
    });
});


