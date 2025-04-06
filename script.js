document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("rotatingImage");
    let rotation = 0;
    let interval;
    let isRotating = false;

    image.style.transition = 'transform 2s linear';

    function startRotation() {
        if (isRotating) return;
        isRotating = true;
        interval = setInterval(function() {
            rotation += 40;
            image.style.transform = `rotate(${rotation}deg)`;
        }, 2000);

        setTimeout(function() {
            stopRotation();
            setTimeout(startRotation, 2500);
        }, 2000);
    }

    function stopRotation() {
        clearInterval(interval);
        isRotating = false;
    }

    startRotation();
});

document.addEventListener('DOMContentLoaded', function() {
    const accordion1Buttons = document.querySelectorAll('.accordion1');
  
    accordion1Buttons.forEach(button => {
      button.addEventListener('click', function() {
        const panel = this.nextElementSibling;
  
        // Close all other open panels
        document.querySelectorAll('.panel').forEach(otherPanel => {
          if (otherPanel !== panel && otherPanel.classList.contains('show')) {
            otherPanel.classList.remove('show');
          }
        });
  
        // Toggle the clicked panel
        panel.classList.toggle('show');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion');
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const panel = this.nextElementSibling;
  
        // Close all other open panels
        document.querySelectorAll('.panel').forEach(otherPanel => {
          if (otherPanel !== panel && otherPanel.classList.contains('show')) {
            otherPanel.classList.remove('show');
          }
        });
  
        // Toggle the clicked panel
        panel.classList.toggle('show');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const subscriptionForm = document.getElementById('subscriptionForm');
    const details = document.querySelectorAll('.option-details');
  
    // Initially hide all details except the first one (singleKit)
    details.forEach(detail => {
      if (detail.id !== 'singleKitDetails') {
        detail.style.display = 'none';
      }
    });
  
    subscriptionForm.addEventListener('change', function (event) {
      if (event.target.type === 'radio') {
        details.forEach(detail => {
          if (detail.id === event.target.id + 'Details') {
            detail.style.display = 'block';
          } else {
            detail.style.display = 'none';
          }
        });
      }
    });
  });

const data = [
    {potency: "10x", extracts: true, effects: true, ingredients: 9, taste: true, 
        caffeine: true, starchFree: true, fruitingBody: true },
    {potency: "1x", extracts: false, effects: false, ingredients: 5, taste: false,
         caffeine: true, starchFree: true, fruitingBody: false },
    {potency: "1x", extracts: false, effects: false, ingredients: 6, taste: false,
         caffeine: true, starchFree: true, fruitingBody: false },
    {potency: "10x", extracts: true, effects: false, ingredients: 2, taste: false,
         caffeine: true, starchFree: true, fruitingBody: false }
];

function createTransposedTable(data) {
    const table = document.getElementById("productTable");
    const headers = ["Potency Concentration", "Extracts Concentrates", 
        "Effects You Can Feel", "# of Beneficial Ingredients", "Incredible Taste", 
        "No Caffeine", "No Starch or Myceliated Oats", "100% Fruiting Body Mushroom"
    ];

    headers.forEach((header, index) => {
        const row = document.createElement("tr");

        const th = document.createElement("td");
        th.textContent = header;
        row.appendChild(th);

        data.forEach(item => {
            const td = document.createElement("td");
            const value = Object.values(item)[index];
            td.textContent = typeof value === "boolean" ? (value ? "✅" : "🚫") : value;
            row.appendChild(td);
        });

        table.appendChild(row);
    });
}

createTransposedTable(data);

//CART
const images = [
    "./assessts/p11.webp", 
    "./assessts/p12.webp",
    "./assessts/p13.jpg",
    "./assessts/p14.jpg"
  ];
  
  let currentIndex = 0;
  
  const slideshowImage = document.getElementById("slideshow-image");
  const thumbnailContainer = document.getElementById("thumbnail-container");
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  
  // Flavor radio buttons
  const originalFlavor = document.getElementById("originalFlavor");
const matchaFlavor = document.getElementById("matchaFlavor");
const cacaoFlavor = document.getElementById("cacaoFlavor");

const ogBtn = document.querySelector(".ogbtn");
const mtBtn = document.querySelector(".mtbtn");
const ccBtn = document.querySelector(".ccbtn");

ogBtn.addEventListener("click", () => {
  originalFlavor.click();
});

mtBtn.addEventListener("click", () => {
  matchaFlavor.click();
});

ccBtn.addEventListener("click", () => {
  cacaoFlavor.click();
});
  
  function showImage(index) {
    slideshowImage.innerHTML = `<img src="${images[index]}" alt="Slideshow Image">`;
  }
  
  function createThumbnails() {
    thumbnailContainer.innerHTML = ""; // Clear existing thumbnails
  
    images.forEach((image, index) => {
      const thumbnail = document.createElement("img");
      thumbnail.src = image;
      thumbnail.alt = `Thumbnail ${index + 1}`;
      thumbnail.classList.add("thumbnail");
      thumbnail.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
      });
      thumbnailContainer.appendChild(thumbnail);
    });
  }
  
  // Event listeners for navigation buttons
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
  
  // Event listeners for flavor radio buttons
  originalFlavor.addEventListener("change", () => {
    images[0] = "./assessts/p11.webp"; // Change the first image URL
    createThumbnails(); // Recreate thumbnails with the updated image
    showImage(currentIndex); // Update the main image
  });
  
  matchaFlavor.addEventListener("change", () => {
    images[0] = "./assessts/p113.webp"; // Change the first image URL
    createThumbnails(); // Recreate thumbnails with the updated image
    showImage(currentIndex); // Update the main image
  });
  
  cacaoFlavor.addEventListener("change", () => {
    images[0] = "./assessts/p112.webp"; // Change the first image URL
    createThumbnails(); // Recreate thumbnails with the updated image
    showImage(currentIndex); // Update the main image
  });
  
  // Initialize the slideshow
  showImage(currentIndex);
  createThumbnails();

  const navbar = document.getElementById('navbar');
  const searchContainer = document.querySelector('.search-container');
  const searchIcon = document.getElementById('search-icon');
  const alcamiHeading = document.getElementById('alcami-heading');
  const tryAlcamiButton = document.querySelector('a[href="#shop"] button'); // Select the "Try Alcami" button
  
  searchIcon.addEventListener('click', () => {
      const alcamiLeft = alcamiHeading.getBoundingClientRect().left;
      const tryAlcamiRight = tryAlcamiButton.getBoundingClientRect().right;
      const searchWidth = tryAlcamiRight - alcamiLeft;
      navbar.style.setProperty('--search-width', `${searchWidth}px`);
      navbar.classList.add('expanded');
  });
  
  document.addEventListener('click', (event) => {
      if (navbar.classList.contains('expanded') && !searchContainer.contains(event.target) && event.target !== searchIcon) {
          navbar.classList.remove('expanded');
      }
  });


  const table = document.querySelector('.coraltab');
  const tableCells = document.querySelectorAll('.coraltab th');
  
  function animateCounter(cell, finalValue) {
      let currentValue = 0;
      const increment = Math.ceil(finalValue / 100);
  
      function updateCounter() {
          if (currentValue <= finalValue) {
              cell.textContent = currentValue + '%';
              currentValue += increment;
              requestAnimationFrame(updateCounter);
          } else {
              cell.textContent = finalValue + '%';
          }
      }
  
      updateCounter();
  }
  
  function startAnimation() {
      tableCells.forEach((cell) => {
          const finalValue = parseInt(cell.textContent);
          animateCounter(cell, finalValue);
      });
  
      // Disconnect the observer after the animation starts
      observer.disconnect();
  }
  
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              startAnimation();
          }
      });
  });
  
  // Observe the table
  observer.observe(table);