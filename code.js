document.addEventListener("DOMContentLoaded", function() {
  const inputField = document.getElementById("word");
  const imageContainer = document.getElementById("image-container");
  const displayWord = document.getElementById("display-word");
  const cards = document.querySelectorAll(".flip-card");
  cards.forEach(card => card.style.display = "none");
  inputField.addEventListener("input", function () {
    let typedLetters = this.value.toLowerCase(); // Convert input to lowercase
    let lastLetter = typedLetters.slice(-1); // Get the last typed letter

    // Hide all cards
    cards.forEach(card => card.style.display = "none");

    // Show the matching card for the last letter typed
    const matchingCard = document.querySelector(`.flip-card[data-letter="${lastLetter}"]`);
    if (matchingCard) {
        matchingCard.style.display = "block";
    }
});

    inputField.addEventListener("input", function () {
        this.value = this.value.toLowerCase();
    });

    inputField.addEventListener("input", function () {
        displayWord.textContent = inputField.value;
    });
  // Define a mapping of letters to image URLs
  const imageMap = {
      a: "images/ahand.svg",
      b: "images/bhand.svg",
      c: "images/chand.svg",
      d: "images/dhand.svg",
      e: "images/ehand.svg",
      f: "images/fhand.svg",
      g: "images/ghand.svg",
      h: "images/hhand.svg",
      i: "images/ihand.svg",
      j: "images/jhand.svg",
      k: "images/khand.svg",
      l: "images/lhand.svg",
      m: "images/mhand.svg",
      n: "images/nhand.svg",
      o: "images/ohand.svg",
      p: "images/phand.svg",
      q: "images/qhand.svg",
      r: "images/rhand.svg",
      s: "images/shand.svg",
      t: "images/thand.svg",
      u: "images/uhand.svg",
      v: "images/vhand.svg",
      w: "images/whand.svg",
      x: "images/xhand.svg",
      y: "images/yhand.svg",
      z: "images/zhand.svg",
      " ": "images/blank.png",
  };

  inputField.addEventListener("input", function() {
      imageContainer.innerHTML = ""; // Clear previous images

      const letters = inputField.value.toLowerCase(); // Get full input text
      for (let letter of letters) {
          if (imageMap[letter]) {
              const img = document.createElement("img"); // Create new image element
              img.src = imageMap[letter]; // Set image source
              img.alt = [letter]; // Set alt text for accessibility
              img.style.width = "80px"; // Adjust image size if needed
              img.style.height = "80px";
              img.style.margin = "0px"; // Add spacing between images
              img.style.alignSelf = "center";
              imageContainer.appendChild(img); // Append image to container
          }
      }
  });
});
