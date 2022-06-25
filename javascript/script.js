var menubar = document.querySelector('#menu-bar')
var navbar = document.querySelector('.navbar')

window.onscroll = () =>{
    menubar.classList.remove('fa-times');
    navbar.classList.remove('active');
}


menubar.addEventListener('click', () => {
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


function seeMoreLess() {

    var moreImgs = document.querySelector(".moreBox");
    var btnText = document.querySelector("#moreBtn"); 
   
    if (moreImgs.style.display == "none") {  
        moreImgs.style.display = "grid"; 
        btnText.innerHTML = "See Less" 
    }  
    else {  
        moreImgs.style.display = "none";  
        btnText.innerHTML = "See More" 
    }  
}







