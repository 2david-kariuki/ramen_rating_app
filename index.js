const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonkotsu.jpg",
  },
];
function displayRamen(ramenImage) {
    const ramenDetailImage = document.getElementById("ramen-image");
    const ramenName = document.getElementById("ramen-name");
    const ramenRestaurant = document.getElementById("ramen-restaurant");
    const ramenRating = document.getElementById("ramen-rating");
    const ramenComment = document.getElementById("ramen-comment");


document.addEventListener("DOMContentLoaded", () => {
  const ramenMenu = document.getElementById("ramen-menu");
  const ramenDetail = document.getElementById("ramen-detail");
  const newRamenForm = document.getElementById("new-ramen");

  ramenMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      const ramenImage = event.target;
      displayRamenDetails(ramenImage);
    }
  });

  newRamenForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewRamen();
  });

  
    ramenDetailImage.src = ramenImage.src;
    ramenName.textContent = `Name: ${ramenImage.alt}`;
    ramenRestaurant.textContent = `Restaurant: ${ramenImage.dataset.restaurant}`;
    ramenRating.textContent = `Rating: ${ramenImage.dataset.rating}/10`;
    ramenComment.textContent = `Comment: ${ramenImage.dataset.comment}`;
  }

  function addNewRamen() {
    const newName = document.getElementById("new-name").value;
    const newRestaurant = document.getElementById("new-restaurant").value;
    const newImage = document.getElementById("new-image").value;
    const newRating = document.getElementById("new-rating").value;
    const newComment = document.getElementById("new-comment").value;

    const newRamenImage = document.createElement("img");
    newRamenImage.src = newImage;
    newRamenImage.alt = newName;
    newRamenImage.dataset.restaurant = newRestaurant;
    newRamenImage.dataset.rating = newRating;
    newRamenImage.dataset.comment = newComment;

    ramenMenu.appendChild(newRamenImage);

    newRamenForm.reset();
  }
});
