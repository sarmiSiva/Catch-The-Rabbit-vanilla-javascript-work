window.addEventListener("load", () => {
    document.querySelector("button").addEventListener("click", () => {
      startGame();
    });
  });
  
  const startGame = () => {
    const grounds = document.querySelectorAll(".ground");
    const length = grounds.length;
  
    const score = document.querySelector("#score > span");
    let count = 0;
  
    grounds.forEach((e) => {
      e.addEventListener("click", () => {
        //If ground has active class which means it has mole
        //So increase the count
        if (e.classList.contains("active")) {
          count++;
          score.innerHTML = count;
        }
      });
    });
  
    var interval = setInterval(() => {
      //Generate a random number
      const random = Math.floor(Math.random() * length);
  
      //Remove the active class from every ground
      grounds.forEach((e) => {
        e.classList.remove("active");
      });
  
      //Add the active class to random ground
      grounds[random].classList.add("active");
    }, 700);
  };