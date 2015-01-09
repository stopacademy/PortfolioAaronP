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
});

function mouseOverMe(){
    $("p").html("Testing");
};

function mouseOnMe(){
    $('hl').html("It's Free!!!");
};

function mouseClick(){
    $("p").html("I am still here.");
};