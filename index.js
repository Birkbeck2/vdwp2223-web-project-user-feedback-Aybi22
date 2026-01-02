function loadMeals() {
  let foodContainer = document.querySelector(".food-container");

  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
    .then((res) => res.json())
    .then((data) => {
      displayMeals(data.meals);
    });

  let searchInput = document.getElementById("search-input");

  let searchButton = document.getElementById("search-btn");
  searchButton.addEventListener("click", () => {
    const ingredient = searchInput.value.trim().toLowerCase();
    if (ingredient === "") {
      alert("enter an ingredient");
      return;
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((res) => res.json())
      .then((data) => {
        foodContainer.innerHTML = "";
        if (!data.meals) {
          foodContainer.innerHTML = `<p>no results found</p>`;
          return;
        }
        displayMeals(data.meals);
      });
  });

  function displayMeals(meals) {
    foodContainer = document.querySelector(".food-container");
    console.log(foodContainer);
    meals.forEach((meal) => {
      let mealBox = document.createElement("div");
      mealBox.innerHTML = `
 <div class="food-box">
 <div class="food-box-content">
  <div class="image">
  <img src="${meal.strMealThumb}">
  </div>
   <h3>${meal.strMeal}</h3>
   </div>
  <button class="btn">view recipe</button>
  </div>
   `;

      mealBox.addEventListener("click", () => {
        // Fetch detailed info about the clicked meal
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
        )
          .then((res) => res.json())
          .then((detailData) => {
            const mealInfo = detailData.meals[0];

            let modal = document.querySelector(".modal");

            modal.innerHTML = `
    <div> ${mealInfo.strInstructions}</div>
    `;

            modal.classList.toggle("show-modal");
          });
      });

      foodContainer.appendChild(mealBox);
    });
  }
}
loadMeals();

document.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("likecount"); //localStorage.getItem only takes one argument
  // — the key string.
});

//Return the first element of the specified class
var sliderimg = document.querySelector(".slider-image");

//variable to store the images
var images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
];

//Current image index
var i = 0;

//Create function for the previous button
function prev() {
  if (i <= 0) i = images.length; //Define condition to display the previous image
  i--;
  return showImg(); //Declare a function to display images
}
//Create function for the next button
function next() {
  if (i >= images.length - 1) i = -1; //Define condition to display the next image
  i++; //Add 1 when image number is bigger than  image lenght
  return showImg();
}

//Display images
function showImg() {
  return sliderimg.setAttribute("src", "images/" + images[i]); //Add a class attribute to images
}

const ratingElements = document.querySelectorAll(".rating"); //Create a variable to Access all the rating elements

ratingElements.forEach((ratingElement) => {
  //Access each of the rating elements
  ratingElement.addEventListener("click", (event) => {
    //Create an event when we click on a rating element
    removeActive(); //Function to remove all active elements
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText; //Create the value of the inner text when rating is selected
    //Add active class to the html file
    event.target.classList.add("active"); //Add active class to the text under the emoji
    event.target.parentNode.classList.add("active"); //Add active class to the parent element(the emoji)
  });
});

//Remove all the active classes
function removeActive() {
  ratingElements.forEach((ratingElement) => {
    ratingElement.classList.remove("active"); //Remove the active class for each rating element
  });
}

//Create a variable for selected ratings
let selectedRating = "";

const btnElement = document.querySelector(".btn"); //Create a variable to select the button element
const headingElement = document.querySelector(".heading"); //Select the heading element
btnElement.addEventListener("click", () => {
  //Create a function to display text when the button is clicked
  if (selectedRating !== "") {
    //Create condition to trigger the function

    //Change the HTML element
    headingElement.innerHTML = `Thank you!
 your Feedback is:"${selectedRating}" <br><br> 

<p>you feedback is very important to us!</p>
`;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ratings = document.querySelectorAll(".rating");

  ratings.forEach((rating) => {
    const key = rating.dataset.key; //Each .rating div has a
    // data-key attribute which stores a unique key name for localStorage.
    // Find the <span class="count"> inside this emoji
    const countSpan = rating.querySelector(".count");
    const savedCount = parseInt(localStorage.getItem(key)) || 0;
    countSpan.textContent = savedCount;

    let emojis = rating.querySelector(".emoji");

    emojis.addEventListener("click", () => {
      let textContainer = document.querySelector(".text-container");

      // Get current count, convert to number
      let currentCount = parseInt(countSpan.textContent) || 0;
      // Increment count
      currentCount++;
      // Update the text content with new count

      let key = rating.getAttribute("data-key");
      countSpan.innerHTML = currentCount;
      textContainer.innerHTML = `${currentCount} persons have selected ${key}`;
      if (currentCount === 1) {
        textContainer.innerHTML = `${currentCount} person has selected ${key}`;
      } else if (key === "neutral") {
        textContainer.innerHTML = `${currentCount} persona have selected ${key}`;
      }

      localStorage.setItem(key, currentCount); //he key (first argument) in localStorage.setItem must be a string

      countSpan.classList.add("bump");
      setTimeout(() => countSpan.classList.remove("bump"), 300);
    });
  });
});

let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", function (showImage) {
  //create a function that displays the image when the button is clicked
  document.querySelector(".pic").style.display = "block";
});

//Create variable
let pictures = [
  "images/img14.jpg",
  "images/img15.webp",
  "images/img16.jpg",
  "images/img17.jpg",
  "images/img18.jpg",
  "images/img19.jpg",
];
let n = 0; //Set starting point
let time = 3000;
//Create function to display images
function displayImg() {
  document.picture.src = pictures[n];
  if (n < pictures.length - 1) {
    n++; // Add 1 to Index
  } else {
    n = 0;
  }
  //Define function running time
  setTimeout("displayImg()", time);
}
// Run function when page loads
window.onload = displayImg;
