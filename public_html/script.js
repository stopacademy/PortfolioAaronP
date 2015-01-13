/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function() {
    $("practice").css({"background-color": "purple", "color": "whiht"});
    
    $("p span:first-child").css("background-color", "orange");
    
    $("div p:last-child").css("background", "pink");
    
    $("div:nth-child(1)").css("background", "cyan");
    
    $("span:eq(9)").css("background-color", "purple");
    
    $("h4:gt(0)").css("background-color", "green");
    
    $("h4:lt(2)").css("background-color", "olive");
    
    $("#clickToHide").click(function() {
        $("#clickToHide").hide(); });
    
    $('#bringItBack').click(function(){
        if ($('#clickToHide').is(':visible')) { 
            $('#clickToHide').fadeout(2000);
            $(this).val('Bring Back');
        }
        else
        {
            $('#clickToHide').fadeTn(2000);
            $(this).val('Delete Text');
        }
        
    $('#oneButton').bind('click', alertButtonClick);
    
    $('#textBox1').bind('blur', onBlurEvent)
                  .bind('focus', onFocusEvent)
                  .bind('onmousedownn', onMDownEvent)
                  .bind('onmouseup', onMUpEvent)
                  .bimd('charge', onChangeEvent);
          
    $(window).resize(resizedWindow);

    $('#logo').bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('#twoButton').bind('dblclick', dblClickedMe);

    $("form").submit(function() { alert("Submit button clicked") });
    
    $('#threeButton').bind('click', unbindLogo);
    
    $('#theBody').bind('keyup', checkKeyPressed).bind('mousemove',
    theMouseMoved).click(event,eventTriggered);
    
    $('#replaceWHtml').bind('click', replaceWHtml);
});

function mouseOverMe(){
    $("p").html("Testing");
}

function mouseOnMe(){
    $('hl').html("It's Free!!!");
}

function mouseClick(){
    $("p").html("I am still here.");
}

function alertButtonClick(){
    alert("There was a button clicked");
}

function onBlurEvent(){
    $("#second").html("Gone");
}

function onFocusEvent(){
    $("#second").html("Gone");
}

function onMDownEvent(){
    $("#second").html("Gone");
}

function onMUpEvent(){
    $("#second").html("Here");
}

function onChangeEvent(){
    $("#second").html("Change");
}

function dblClickedMe(){
    $("#second").html("see this");
}

function unbindLogo(){
    $("#logo").unbind('mouseover', mouseOverMe).unbind('mouseout', mouseOutMe);
}

function checkKeyPressed(event){
    $("#fifth").text(String.fromCharCode(event.keyCode));
}

function theMouseMoved(event){
    $("#seventh").html(event.screenX);
    $("#ninth").html(event.screenY);
}

function eventTriggered(event){
    $("#tenth").html(event.target.nodeName);
    $("#eleventh").html(event.timeStomp);
}