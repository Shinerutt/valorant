var currentImg = 0 ;
var charName = ""
var nickName = document.getElementById('name')
var charDesc = document.getElementById('chardesc')
// var skills = document.getElementsByClassName('skill')
var skills = document.querySelectorAll('.skill')
var nameSkill = document.getElementById('name-skill')
var detailSkill = document.getElementById('detail-skill')

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
            changeSkill(found[0])
            nameSkill.innerHTML = `Q - UPDRAFT`
            detailSkill.innerHTML = `<br>INSTANTLY propel Jett high into the air.`
        }else if (found[0]=="Brimstone"){
            charDesc.innerHTML = `Joining from the USA, Brimstone's orbital arsenal ensures 
            his squad always has the advantage.<br> His ability to deliver utility precisely 
            and from a distance makes him an unmatched boots-on-the-ground commander.`
            changeSkill(found[0])
            nameSkill.innerHTML = `Q - INCENDIARY`
            detailSkill.innerHTML =`<br>EQUIP an incendiary grenade launcher.<br> 
            FIRE to launch a grenade that detonates<br> as it comes to a rest on the floor,<br> 
            creating a lingering fire zone that<br> damages players within the zone.`
            console.log(nameSkill);
        }else if(found[0]=="Raze"){
            charDesc.innerHTML = `Raze explodes out of Brazil with her big personality and big guns.
             With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies 
             and clearing tight spaces with a generous dose of “boom.”`
             changeSkill(found[0])
             nameSkill.innerHTML = `Q - BLAST PACK`
             detailSkill.innerHTML = `<br>INSTANTLY throw a Blast Pack that will stick to surfaces. <br>
             RE-USE the ability after deployment to detonate,<br> damaging and moving anything hit. <br>
             Raze isn't damaged by this ability, <br>but will still take fall damage if launched up far enough.`
        }else if(found[0]=="Breach"){
            charDesc.innerHTML = `Breach, the bionic Swede, fires powerful, targeted kinetic blasts 
            to aggressively clear a path through enemy ground. The damage and disruption 
            he inflicts ensures no fight is ever fair.`
            changeSkill(found[0])
            nameSkill.innerHTML = `Q - FLASHPOINT`
            detailSkill.innerHTML = `<br>EQUIP a blinding charge. <br>FIRE the charge to set fast-acting burst through the wall.
            <br>The charge detonates to blind all players looking at it.`
        }
    });
});

function changeSkill(name){
    for(i = 0; i < skills.length;i ++){
        let letter = ['Q','E','C','X']
        skills[i].setAttribute('src','assets/img/'+name+'/'+ letter[i]+'.png')
        // if(i==0){
        //     skills[i].setAttribute('src','assets/img/'+name+'/Q.png')
        // }else if (i==1){
        //     skills[i].setAttribute('src','assets/img/'+name+'/E.png')
        // }else if (i==2){
        //     skills[i].setAttribute('src','assets/img/'+name+'/C.png')
        // }else if (i==3){
        //     skills[i].setAttribute('src','assets/img/'+name+'/X.png')
        // }
    }
    // for(i in skills){
    //     // skills[i].setAttribute('src','assets/img/'+name+'/X.png')
    //     console.log(skills[i])
    //     // console.log(i)
    // }
}