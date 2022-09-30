var currentImg = 0 ;
var charName = ""
var nickName = document.getElementById('name')
var charDesc = document.getElementById('chardesc')

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 4,
        appendArrows: $('#arrowarea'),
        prevArrow: "<button class='slick-prev'> < </button>",
        nextArrow: "<button class='slick-next'> > </button>",
        adaptiveHeight: true,
         
        responsive: [
            {
            breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    // slidesToScroll: 3,
                    // infinite: true,
                    // dots: true
                }
            },
            {
            breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    // slidesToScroll: 3,
                    // infinite: true,
                    // dots: true
                }
            }
        ]
    });

    $('.slider').on('afterChange', function(){
        charName = document.getElementsByClassName("slick-current")[0].innerHTML  
        const regex = /([A-Z])\w+/g;
        let found = charName.match(regex);
        nickName.innerHTML = "<span>" + found[0] + "</span>"
        charDesc.innerHTML = found[0]
        if(found[0]== "Jett"){
            charDesc.innerHTML = `Representing her home country of South Korea,<br>
            Jett's agile and evasive fighting style <br>
            lets her take risks no one else can. <br>
            She runs circles around every skirmish,<br>
            cuting enemies before they even know what hit them.`
        }else if (found[0]=="Brimstone"){
            charDesc.innerHTML = `Joining from the USA, Brimstone's orbital arsenal ensures 
            his squad always has the advantage. His ability to deliver utility precisely 
            and from a distance makes him an unmatched boots-on-the-ground commander.`
        }else if(found[0]=="Raze"){
            charDesc.innerHTML = `Raze explodes out of Brazil with her big personality and big guns.
             With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies 
             and clearing tight spaces with a generous dose of “boom.”`
        }else if(found[0]=="Breach"){
            charDesc.innerHTML = `Breach, the bionic Swede, fires powerful, targeted kinetic blasts 
            to aggressively clear a path through enemy ground. The damage and disruption 
            he inflicts ensures no fight is ever fair.`
        }
    });
});

