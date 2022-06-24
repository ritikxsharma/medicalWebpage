function seeMoreLess() {

    var moreImgs = document.querySelector(".moreBox");
    var btnText = document.querySelector("#moreBtn"); 
   
    if (moreImgs.style.display == "none") {  
        moreImgs.style.display = "flex"; 
        btnText.innerHTML = "See Less" 
    }  
    else {  
        moreImgs.style.display = "none";  
        btnText.innerHTML = "See More" 
    }  
}







