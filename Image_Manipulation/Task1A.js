function openModal(imgElement){
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = imgElement.src;// shows the actual image as per the src path on the img
}
function closeModal (){
    document.getElementById("imageModal").style.display = "none"; // close the X btn
}
console.log("im working");