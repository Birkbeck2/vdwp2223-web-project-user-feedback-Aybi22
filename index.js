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



let selectedRating="";
ratingElement.addEventListener("click", (event) =>{
removeActive();

event.target.innerText|| event.target.parentNode.innerText;

});









const btnElement=document.getElementById('btn');
const containerElement=document.getElementById('container');
btnElement.addEventListener('click',()=>{
    if(selectedRating !=="") {
containerElement.innerHTML=`thank you`;
    
}

});
