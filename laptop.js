
function footerBanner() {
    var fixedBanner = document.getElementById("fixed-banner");

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
            }, 5000);
        },
        closeBanner: function() {
            setTimeout(function() {
                exitBanner();
                footerBanner().showBanner();
            }, 20000);            
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