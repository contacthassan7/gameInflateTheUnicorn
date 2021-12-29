  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
function inflate(a){
  var images = document.getElementsByClassName("inflate-an-image")
    var currentImage = images[a]

    if(currentImage.src == "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-0.png"){
      currentImage.src = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-1.png"
    }
    else if (currentImage.src == "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-1.png"){
      currentImage.src = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-2.png"
    }
    else if (currentImage.src == "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-2.png"){
      currentImage.src = "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-3.png"
    }
    else if (currentImage.src == "http://127.0.0.1:5500/inflate-the-unicorn/images/unicorn-3.png"){
      alert("Unicorn Number " +(a+1)+" says thank you!");
    }
    else {alert("SOMETHINGS NOT RIGHT");}
console.log("Inflate The Unicorn!")
}
