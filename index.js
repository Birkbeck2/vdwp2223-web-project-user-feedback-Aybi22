

var images=[
"img1.jpg";
"img2.jpg";
"img3.jpg";
"img4.jpg";
"img5.jpg";
"img6.jpg";
];

var Index=0;
function showImages(){

    document.src=images[0];
    for(let i=0;    i<images.length;  i++){
    images[i].style.display="none";
}
Index++;
if(Index >images.length){Index 1};
images[1].style.display="block";
setTimeout(showImages,3000);
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
