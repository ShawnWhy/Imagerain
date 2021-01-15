



var rainRep = 0
function init(){
    $('.middle-container1').html('')
    $('.middle-container2').html('')
    $('.middle-container3').html('')
    randTime= Math.floor((Math.random() * 100)+100);
    randTime2= Math.floor(Math.random() * 5000);
    randTime3= Math.floor(Math.random() * 10000);

rainInterval=setInterval(() => {
    
        generateDrops1()
        generateDrops2()
        generateDrops3()
 
}, randTime);
setInterval(() => {
    $('.middle-container1').html('')
    }, randTime*10);

setInterval(() => {
    $('.middle-container2').html('')
    }, randTime2);

setInterval(() => {
    $('.middle-container3').html('')
    }, randTime3);
}


function generateDrops1(){
    randNumber = Math.floor(Math.random() * 4);
    

    for(i=0; i<randNumber;i++){
        var circle=$("<div>")
        $(circle).addClass('circle')
        randXMove= Math.floor(Math.random() * 80);
        randspeed = Math.random() * 5;
        randclass = Math.floor(Math.random() * 5);
        randclass = "fall"+(randclass.toString());
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];}
        $(circle).attr('style', 'background-color:'+color+';'+'position:absolute;left:'+randXMove+"%; animation:"+randclass+" "+ randspeed +"s both ease")
        $('.middle-container1').append(circle)
        // setTimeout(() => {
        //     // $(circle).addClass('invisibleP')
        //     $('.middle-container').html('')

            
        // },randNumber*3000);
        
    }
}
function generateDrops2(){
    randNumber = Math.floor(Math.random() * 2);
    

    for(i=0; i<randNumber;i++){
        var circle=$("<div>")
        $(circle).addClass('circle')
        randXMove= Math.floor(Math.random() * 80);
        randspeed = Math.random() * 5;
        randclass = Math.floor(Math.random() * 5);
        randclass = "fall"+(randclass.toString());
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];}
        $(circle).attr('style', 'background-color:'+color+';'+'position:absolute;left:'+randXMove+"%; animation:"+randclass+" "+ randspeed +"s both ease")
        $('.middle-container2').append(circle)
        // setTimeout(() => {
        //     // $(circle).addClass('invisibleP')
        //     $('.middle-container').html('')

            
        // },randNumber*3000);
        
    }
}
function generateDrops3(){
    randNumber = Math.floor(Math.random() * 6);
    

    for(i=0; i<randNumber;i++){
        var circle=$("<div>")
        $(circle).addClass('circle')
        randXMove= Math.floor(Math.random() * 80);
        randspeed = Math.random() * 5;
        randclass = Math.floor(Math.random() * 5);
        randclass = "fall"+(randclass.toString());
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];}
        $(circle).attr('style', 'background-color:'+color+';'+'position:absolute;left:'+randXMove+"%; animation:"+randclass+" "+ randspeed +"s both ease")
        $('.middle-container3').append(circle)
        // setTimeout(() => {
        //     // $(circle).addClass('invisibleP')
        //     $('.middle-container').html('')

            
        // },randNumber*3000);
        
    }
}


function createNewDrib(color,event){    
    var drib=$('<div>')
    $(drib).attr('style',color);
    $(drib).addClass('circlefake initFakeCircle');
    $('body').append(drib)
    $(drib).attr("style", " top :" + (event.pageY+20) + "px; left :" + (event.pageX-20) + "px; visibility:visible; "+color)
    setTimeout(() => {
        $(drib).removeClass('initFakeCircle');
        
    }, 180);  
    setTimeout(() => {
     $(drib).addClass('delayfall');
    },200)
    setTimeout(() => {
     $(event.target).remove();
        
    }, 50000);
}

$(document).on("click",".circlefake", event=>{
    var catchedDiv=$('<div>')
    var DivAttr = $(event.target).attr('style')
    var color= DivAttr.split(';');
    color=color[3];
    console.log(color);
    $(catchedDiv).attr('style',color);
    $(catchedDiv).removeClass('fall');
    $(catchedDiv).addClass('circle2');
    $('.side-container').append(catchedDiv)
     $(event.target).addClass("circleFakeAnimation")
     setTimeout(() => {
         $(event.target).remove();
         
     }, 180);

})

$(document).on("mouseenter",".circle", event=>{
    event.preventDefault();
    event.stopPropagation();
    // console.log(event.target);
    var DivAttr = $(event.target).attr('style')
    var color= DivAttr.split(';');
    color=color[0];
    console.log(color);
    createNewDrib(color, event);
    $(event.target).remove();
    

})
$(document).on("mouseleave",".circlefake", event=>{
    event.preventDefault();
    event.stopPropagation();
    // console.log(event.target);
   setTimeout(() =>{ $(event.target).addClass('fall');
   setTimeout(() => {
    $(event.target).remove();
       
   }, 200);
   
},100)
})  

$(document).on("mouseenter",".circlefake", event=>{
    event.preventDefault();
    event.stopPropagation();
    $(event.target).removeClass('delayfall');

})
$(document).on("mouseenter",".circle2", event=>{
    event.preventDefault();
    event.stopPropagation();
    $(event.target).html('erase');
  

})
$(document).on("mouseleave",".circle2", event=>{
    event.preventDefault();
    event.stopPropagation();
    $(event.target).html('');
  
})
$(document).on("click",".circle2", event=>{
    event.preventDefault();
    event.stopPropagation();
    $(event.target).remove();
  

})

$(".formButton").on('mouseenter', event=>{
    event.preventDefault();
    event.stopPropagation();
    $('.userinputContainer').removeClass('invisibleP');
    $(".formButton").addClass('invisibleP');

})

$('.userinputContainer').on('mouseleave', event=>{
    event.preventDefault();
    event.stopPropagation();
    $('.formButton').removeClass('invisibleP');
    $('.userinputContainer').addClass('invisibleP');
})

function gatherColors(){
    var colorArray=[];
    var number=0
    $('.row1,.row2,.row3,.row4,.row5,.row6,.column1,.column2,.column4,.column5').html('');
    var colorChildren = $('.side-container').children();
    for (i=0;i<colorChildren.length;i++){
        var colorString=colorChildren[i].getAttribute('style')
        colorString=colorString.split(':');
        colorString=colorString[1];
        colorArray.push(colorString)
        number++
    }
    if(number=colorChildren.length){
        return colorArray;
    }

}

function distributeColors(colorArray){
    var colorLength = colorArray.length;
    var randNumber1=Math.floor(Math.random()*colorLength);
    var randNumber2=Math.floor(Math.random()*colorLength);
    var randNumber3=Math.floor(Math.random()*colorLength);



    for(i=0;i<40;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newHoriDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".row1").append(newHoriDiv)
    }
    for(i=0;i<40;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newHoriDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".row2").append(newHoriDiv)
    }
    for(i=0;i<40;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newHoriDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".row3").append(newHoriDiv)
    }
    for(i=0;i<40;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newHoriDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".row4").append(newHoriDiv)
    }
    for(i=0;i<40;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newHoriDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".row6").append(newHoriDiv)
    }
    for(i=0;i<20;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newVerDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".column1").append(newHoriDiv)
    }
    for(i=0;i<20;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newVerDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".column2").append(newHoriDiv)
    }
    for(i=0;i<20;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newVerDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".column4").append(newHoriDiv)
    }
    for(i=0;i<20;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newVerDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".column5").append(newHoriDiv)
    }
    for(i=0;i<20;i++){
        var randNumber=Math.floor(Math.random()*colorLength);
        var newHoriDiv =$('<div>');
        $(newHoriDiv).addClass('newVerDiv');
        $(newHoriDiv).attr('style','background-color:'+colorArray[randNumber])
        $(".row5").append(newHoriDiv)
    }
    $(".column3").attr('style','background-color:'+colorArray[randNumber3])

    $(".row5").attr('style','background-color:'+colorArray[randNumber1])
    $(".maincontainer").attr('style','background-color:'+colorArray[randNumber2])


}


$(".decorateButton").on("click", event=>{
    event.preventDefault();
    event.stopPropagation();
    $('.return').removeClass('invisibleP');
    var colorArray = gatherColors();
    if(colorArray){
        
        $(".maincontainer").removeClass('invisibleP');
        $(".column1").addClass('verAnimation')
        $(".column2").addClass('verAnimation')
        $(".column3").addClass('verAnimation')
        $(".column4").addClass('verAnimation')
        $(".column5").addClass('verAnimation')
        $(".row1").addClass('HoriAnimation')
        $(".row2").addClass('HoriAnimation')
        $(".row3").addClass('HoriAnimation')
        $(".row4").addClass('HoriAnimation')
        $(".row5").addClass('HoriAnimation')
        $(".row6").addClass('HoriAnimation')
        setTimeout(() => {
            $(".column1").removeClass('verAnimation')
            $(".column2").removeClass('verAnimation')
            $(".column3").removeClass('verAnimation')
            $(".column4").removeClass('verAnimation')
            $(".column5").removeClass('verAnimation')
            $(".row1").removeClass('HoriAnimation')
            $(".row2").removeClass('HoriAnimation')
            $(".row3").removeClass('HoriAnimation')
            $(".row4").removeClass('HoriAnimation')
            $(".row5").removeClass('HoriAnimation')
            $(".row6").removeClass('HoriAnimation')
            
        }, 500);
        
        distributeColors(colorArray);

    }
 })

 $('.return').on('click', event=>{
     event.preventDefault();
     event.stopPropagation();
     $(".return").addClass('invisibleP');
     $('.maincontainer').addClass('invisibleP');
 })

$('.nameSubmitButton').on('click',event=>{
    event.stopPropagation();
    event.stopPropagation();
    var name = $('.nameInput').val();
    if(name.length>0){
    $('.nameDisplay').html('<p>welcome ' +name+'</div>')
    $('.submitColorButton').removeClass('invisibleP');
    }

})







init()



// <!DOCTYPE html>
// <?php
// $cookie_name = "user";
// $cookie_value = "John Doe";
// setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
// ?>
// <html>
// <body>

// <?php
// if(!isset($_COOKIE[$cookie_name])) {
//     echo "Cookie named '" . $cookie_name . "' is not set!";
// } else {
//     echo "Cookie '" . $cookie_name . "' is set!<br>";
//     echo "Value is: " . $_COOKIE[$cookie_name];
// }
// ?>

// </body>
// </html> 