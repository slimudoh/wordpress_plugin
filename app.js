
function footerBanner() {
    var top = this.scrollY;
    var fixedBanner = document.getElementById("fixed-banner");
    var bannerClose = document.querySelector(".banner-close");

    function scrollBanner() {       
        fixedBanner.style.animation = "slidebanner .5s ease-in-out";
        fixedBanner.style.webkitAnimation = "slidebanner .5s ease-in-out";
        fixedBanner.style.bottom = "1px";					
    }

    function exitBanner() {
        fixedBanner.style.animation = "backbanner .5s ease-in-out";
        fixedBanner.style.webkitAnimation = "backbanner .5s ease-in-out";
        fixedBanner.style.bottom = "-200px";  				
    }

    return {
        loadBanner: function() {
            setTimeout(function() {
                scrollBanner();
                footerBanner().closeBanner();
            }, 3000);
        },				
        showBanner: function() {
            setTimeout(function(){
                scrollBanner();
                footerBanner().closeBanner();
            }, 10000);
        },
        closeBanner: function() {
            setTimeout(function() {
                exitBanner();
                footerBanner().showBanner();
            }, 10000);            
        }
    }
}
                
onload = function() {   	
    try {	   
        var load = footerBanner();
        load.loadBanner();      
    } catch(e) {
        console.log(e.stack);
    }				
};			