// function myFunction() {
//     var x = document.getElementById('.menu-box');    
//     if(x.style.display == "block") { // if is menuBox displayed, hide it
//       x.style.display = "none";
//     }
//     else { // if is menuBox hidden, display it
//       x.style.display = "block";
//     }
//   }
  function myFunction() {
    var x = document.querySelector(".menu-box");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}