// My carousel galleries
var galleries = {
    first:["abstract.jpg","abstract2.jpg","abstract3.jpg"],
    second:["abstract4.jpg","abstract5.jpg","cloudy.png"],
    third:["fish.jpg","idk.jpg","diamond.jpg"],
    fourth:["football.jpg","basketball.jpg","ball.jpg"],
    fifth:["bear.jpg","wolf.jpg","tiger.jpg"]
};

//The div containing carousel items
var container = getElem('container');

//Grabbing all children of the container and creating the carousels
for (var i = 0; i < container.children.length; i++) {
    carousel(container.children[i].children[0],container.children[i].children[2],galleries[container.children[i].getAttribute('id')]);
};


function carousel(gallery,static,images) {
    //console.log(gallery,static,images);

    //To fix the css after the carousel pauses
    var originStyle = gallery.getAttribute('style');

    //The carousel's current frame
    var num = 0;

    var moveCarousel = function( event ) { 
        var op = window.getComputedStyle(gallery).opacity;
        if (op == 0.1 || op == 0.5) {
            gallery.src = "assets/images/"+images[num];
            num=num+1;
            if (num > images.length-1) {
                num = 0;
            }
            gallery.style.opacity = 1;
        }    
        else {
            static.src = "assets/images/"+images[num];
            if (window.getComputedStyle(gallery.parentElement).boxShadow != "none") {
                gallery.style.opacity = 0.1;
            }
            else {
                gallery.setAttribute('style',originStyle);
            }
        }  
    };

    gallery.addEventListener('webkitTransitionEnd', function( event ) {moveCarousel();}, false );
    gallery.addEventListener('mozTransitionEnd', function( event ) {moveCarousel();}, false );
    gallery.addEventListener('oTransitionEnd', function( event ) {moveCarousel();}, false );
};

function getElem(id) {
    return document.getElementById(id);
};