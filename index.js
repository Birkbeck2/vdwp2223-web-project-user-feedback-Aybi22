
//variable to store the images

var images=[
	"images/img1.jpg",
	"images/img2.jpg",
	"images/img3.jpg",
	"images/img4.jpg",
	"images/img5.jpg",
	"images/img6.jpg",
  "images/img7.jpg",
	"images/img8.jpg",
	"images/img9.jpg",
	"images/img10.jpg",
	"images/img11.jpg",
	];

  function autoRun() {
    setInterval("changeImage(1)", 5000);
  }

var i = 0; 			// Start Point
	
	 function plusSides(n){
    changeImg(i=n+3);
   }
// Change Image
function changeImg(n){
	document.getElementById("slide").src = images[i];//Get images from slide
  
	 
// Check If Index Is Under Max
if(index < images.length  -1){
  // Add 1 to Index
  i++; 
} else { 
  // Reset Back To O
  i = 0;
}


}

// Run function when page loads
window.onload=changeImg;    
   

	

















  const small=document.querySelector(".small");//Create a variable
small.addEventListener("click", function (changeColor) { //set a function
  document.querySelector(".small").style.backgroundColor="red";//Change the background color of the selected element
});


 








const ratingElements=document.querySelectorAll(".rating");//Create a variable to bring all the rating elements

ratingElements.forEach((ratingElement) => { //Access each of the rating elements
ratingElement.addEventListener("click", (event) =>{ //Create an event when we click on a rating element
    removeActive();//Function to remove active elements
    selectedRating=
    event.target.innerText|| event.target.parentNode.innerText;//Create the value of the inner text when rating is selected
    //Add active class to the html file
    event.target.classList.add("active");//Add active class to the text under the emoji
    event.target.parentNode.classList.add("active");//Add active class to the parent element(the emoji)
});

});

//Remove all the active classes
function removeActive(){
ratingElements.forEach((ratingElement)=>{
    ratingElement.classList.remove("active");//Remove the active class for each rating element

});
}



//Create a variable for selected ratings
let selectedRating="";

const btnElement=document.querySelector(".btn");//Create a variable to select the button element
const headingElement=document.querySelector(".heading");//Select the heading element
btnElement.addEventListener("click",()=>{ //Create a function to display text when the button is clicked
    if(selectedRating !=="") { //Create condition to trigger the function

//Change the HTML element
headingElement.innerHTML=`Thank you! 
<br>
<br>
    
Feedback:${selectedRating} <br><br> 

<p>you feedback is very important to us!</p>
`

}

});


let btn1=document.querySelector(".btn1"); 
  btn1.addEventListener("click",function(showImage){ //create a function that displays the image when the button is clicked
    document.querySelector(".pic").style.display="block";
   setTimeout(showImage,2000);

});



