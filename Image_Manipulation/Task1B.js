
let index = 0; //for all the images that have the calls name "images"

function Carousel(){
    
    const imageSlides = document.querySelectorAll(".images");

    for( let i = 0; i < imageSlides.length; i++){
        imageSlides[i].style.display = "none"; // at first display nothing
    }
    //show images
    index++;
    if (index >= imageSlides.length) {index = 0}    // after the index increments to one , show the image for 3 secs automatically
    imageSlides[index].style.display = "block";  
    setTimeout(Carousel, 2500)
    console.log("yess i workkk")
}
Carousel();
