

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












const ratingElements=document.querySelectorAll(".rating");
ratingElements.forEach((ratingElement) => {
ratingElement.addEventListener("click", (event) =>{
    removeActive();
    selectedRating=
    event.target.innerText|| event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
});

});

function removeActive(){
ratingElements.forEach((ratingElement)=>{
    ratingElement.classList.remove("active");

});
}




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

