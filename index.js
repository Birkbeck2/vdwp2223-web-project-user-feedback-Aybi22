



//Return the first child element
  var sliderimg=document.querySelector('.slider-image');
  
  //variable to store the images
  var images=[
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg'
    ];
  
  //Define starting point
  var i=0;

//Create function for the previous button
function prev() {
if (i<=0) i=images.length;//Define condition to display the previous image
i--;
return showImage();//Declare a function to display images

}

//create function for the next button
function next() {
if(i>=images.length -1) i=-1;//define condition to display the next image
i++;//Add 1 when image number is bigger than the number of images in the variable
return showImage();

}
		//display images
function showImage(){

  return sliderimg.setAttribute('src','images/'+ images[i]);//Add a class attribute to images
}




const small=document.querySelector(".small");//Create a variable
small.addEventListener("click", function (changeColor) { //set a function
  document.querySelector(".small").style.backgroundColor="red";//Change the background color of the selected element
});


 
const ratingElements=document.querySelectorAll(".rating");//Create a variable to Access all the rating elements

ratingElements.forEach((ratingElement) => { //Access each of the rating elements
ratingElement.addEventListener("click", (event) =>{ //Create an event when we click on a rating element
    removeActive();//Function to remove all active elements
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
headingElement.innerHTML=`Thank you
Feedback:${selectedRating} <br><br> 

<p>you feedback is very important for us!</p>
`

}

});


let btn1=document.querySelector(".btn1"); 
  btn1.addEventListener("click",function(showImage){ //create a function that displays the image when the button is clicked
    document.querySelector(".pic").style.display="block";
   

});

//Create variable
var pictures=['images/img14.jpg', 'images/img15.webp' ,'images/img16.jpg','images/img17.jpg','images/img18.jpg','images/img19.jpg'];
var i=0;//Set starting point
var time=3000;
//Create function to display images
function displayImg(){
  document.picture.src=pictures[i];
  if(i<pictures.length -1){
    i++;// Add 1 to Index
  }else{
    i=0;
  }
  //Define function running time
  setTimeout("displayImg()", time);

}
// Run function when page loads
window.onload=displayImg;
