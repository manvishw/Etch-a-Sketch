const btn = document.querySelector("header button");
const resetBtn = document.getElementById("reset");

function getRandomColor() {
  // Generate a random color in hexadecimal format
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

btn.addEventListener("click", (event) => {
  let userInput = parseInt(prompt("Enter No of Grids"));
  const container = document.createElement("div");
  container.className = "container";
  document.body.append(container);
  if (userInput > 99) {
    return;
  }
  for (let i = 0; i < userInput; i++) {
    for (let j = 0; j < userInput; j++) {
      const squareBox = document.createElement("div");
      squareBox.className = "box";
      container.appendChild(squareBox);

      squareBox.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = getRandomColor();
        event.target.style.opacity = `${Math.floor((Math.random() * 100) + 1)}%`;
      });
    }
  }
  resetBtn.addEventListener("click", (event) => {
    container.childNodes.forEach((node) => {
      container.remove(node);
    });
  });
});
