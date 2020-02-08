$(document).ready(function(){
    $('.right').click(function(){
        $('#box').css(
         { left:"+=5px" }
        );
    });
    $('.left').click(function(){
        $('#box').css(
         { left:"-=5px" }
        );
    });
    $('.down').click(function(){
        $('#box').css(
         { top:"+=5px" }
        );
    });
    $('.up').click(function(){
        $('#box').css(
         { top:"-=5px" }
        );
    });
});