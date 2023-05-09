// console.log("hello")

let scrollimg1 = document.getElementById("scrollimg1");
window.addEventListener('scroll', function(){
   

    if(window.pageYOffset > 400 && window.pageYOffset < 550){
        // scrollimg1.classList.add("scrollTran")

        scrollimg1.setAttribute("src" , "pic1.jpg")

    } else if(window.pageYOffset > 550 && window.pageYOffset < 700) {
        scrollimg1.setAttribute("src" , "pic2.jpg")
    } else if(window.pageYOffset > 700 && window.pageYOffset < 850) {
        scrollimg1.setAttribute("src" , "pic3.jpg")
    } else{
        scrollimg1.setAttribute("src" , "apple_phone.png")

    }

}

)