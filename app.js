
function footerBanner() {
    var top = this.scrollY;
    var fixedBanner = document.getElementById("fixed-banner");
    var bannerClose = document.querySelector(".banner-close");

    function scrollBanner() {
        console.log(sessionStorage.position);
        if (sessionStorage.position === undefined) {
            sessionStorage.position = 1;
        }
        if (top > 400 && parseInt(sessionStorage.position) === 1) {
            fixedBanner.style.animation = "slidebanner .5s ease-in-out";
            fixedBanner.style.webkitAnimation = "slidebanner .5s ease-in-out";
            fixedBanner.style.bottom = "1px";					
             } 
    }

    function exitBanner() {
        fixedBanner.style.animation = "backbanner .5s ease-in-out";
        fixedBanner.style.webkitAnimation = "backbanner .5s ease-in-out";
        fixedBanner.style.bottom = "-200px";  				
    }

    return {				
        showBanner: function() {
            scrollBanner();
        },
        closeBanner: function() {
            sessionStorage.position = 2;					
            exitBanner();
        }
    }
}

                
window.addEventListener("scroll", function() {
    try {	
        var scroll = footerBanner();								
        scroll.showBanner();
    } catch(e) {
        console.log(e.stack);
    }				
});   
document.querySelector(".banner-close").addEventListener("click", function() {
    footerBanner().closeBanner();
});				