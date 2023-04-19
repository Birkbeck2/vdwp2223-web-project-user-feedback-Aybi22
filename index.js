

var images=[
"img1.jpg";
"img2.jpg";
"img3.jpg";
"img4.jpg";
"img5.jpg";
"img6.jpg";
];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
  imageNumber += x;
//   if you've reached end of array...start over
  if (imageNumber > imageLength) {
        imageNumber = 0;
      } 
  if (imageNumber < 0) {
    imageNumber = imageLength;
  }
  
  document.getElementById("images").src = images[imageNumber];
 
  
  return false;
}

function autoRun() {
  setInterval("changeImage(1)", 5000);
}
















const ratingElements=document.querySelectorAll(".rating");
ratingElements.forEach((ratingElement) => {
ratingElement.addEventListener("click", (event) =>{
    removeActive();
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");});

});

function removeActive(){
ratingElements.forEach((ratingElement)=>{
    ratingElement.classList.remove("active");

});
}












const btnElement=document.getElementById('btn');
const containerElement=document.getElementById('container');
btnElement.addEventListener('click',()=>{
    if(selectedRating !=="") {
containerElement.innerHTML=`thank you`;
    
}

});
