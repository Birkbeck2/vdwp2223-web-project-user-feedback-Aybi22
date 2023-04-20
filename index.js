
//variable to store the images
var images=[
"images/img1.jpg",
"images/img2.jpg",
"images/img3.jpg",
"images/img4.jpg",
"images/img5.jpg",
"images/img6.jpg",
];

var i = 0; 			// Start Point
	
var time = 3000;	// Time Between Switch
	 


// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;












const ratingElements=document.querySelectorAll(".rating");//create a variable to bring all the rating elements

ratingElements.forEach((ratingElement) => { //access each of the rating elements
ratingElement.addEventListener("click", (event) =>{ //create an event when we click on a rating element
    removeActive();//function to remove active elements
    selectedRating=
    event.target.innerText|| event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
});

});

//remove the active class when clicking on a rating element
function removeActive(){
ratingElements.forEach((ratingElement)=>{
    ratingElement.classList.remove("active");

});
}



//creating a vara=iable for selected ragtings
let selectedRating="";

const btnElement=document.querySelector(".btn");
const headingElement=document.querySelector(".heading");
btnElement.addEventListener("click",()=>{
    if(selectedRating !=="") {
headingElement.innerHTML=`Thank you!
<br>
<br>
    
Feedback:${selectedRating} <br><br>

<p>you feedback is very important to us!</p>
`

}

});


function myFunction() {
    document.getElementById("myForm").submit();
  }

  let btn1=document.querySelector(".btn1");
  btn1.addEventListener("click",function(showImage){
    document.querySelector(".pic").style.display="block";
   setTimeout(showImage,2000);

});

