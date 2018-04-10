
function sliderMenu() {                
    this.arrayElements = [];
    this.index = 0;
    this.htmlElements = document.querySelectorAll(".mobile-banner > div");

    this.getHtmlElements = function() {
        for (var i = 0; i < this.htmlElements.length; i++) {
            this.arrayElements.push(this.htmlElements[i]);
        }             
    }

    this.default = function() {
        this.arrayElements[this.index].style.left = 0;
        this.index = this.index + 1;
    }

    this.slide = function() {
        this.arrayElements[this.index].style.animation = "come-in .5s";
        this.arrayElements[this.index].style.webkitAnimation = "come-in .5s";
        this.arrayElements[this.index].style.left = 0;
        var divNumber, divSlider;                                          
        this.timer = setTimeout(() => {
            this.arrayElements[this.index].style.animation = "come-out .5s";
            this.arrayElements[this.index].style.webkitAnimation = "come-out .5s";
            this.arrayElements[this.index].style.left = "100%";    
            this.index = this.index + 1;   
            if (this.index < this.arrayElements.length) {
                this.slide();
            } else {
                this.index = 0;
                this.slide();
            }                         
        }, 5000);
            
    }
                   
}  

onload = function() {
    var x =  new sliderMenu();
    x.getHtmlElements();
    x.default();
    // setTimeout(() => {
    //     x.slide();
    //     x.set();
    // }, 5000);                        
};