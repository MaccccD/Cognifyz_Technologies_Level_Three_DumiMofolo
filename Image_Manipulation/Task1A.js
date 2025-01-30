function openModal(imgElement){
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = imgElement.src;
}
function closeModal (){
    document.getElementById("imageModal").style.display = "none"; // close the X btn
}
console.log("im working");