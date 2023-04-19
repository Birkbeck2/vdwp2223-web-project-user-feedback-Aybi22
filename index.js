

var images=[
"img1.jpg";
"img2.jpg";
"img3.jpg";
"img4.jpg";
"img5.jpg";
"img6.jpg";
];

var i = 0; 			// Start Point
	// Images Array
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
