const ratingElements=document.querySelectorAll(".rating");
ratingElements.forEach((ratingElement) => {
ratingElement.addEventListener("click", (event) =>{
    console.log(event.target.innerText|| event.target.parentNode.innerText);
});

});

