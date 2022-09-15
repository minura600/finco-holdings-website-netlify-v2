function offsetCalculate(){
    var parentTop = $('#supposed-parent').offset();
    var parentLeft = $('#supposed-parent').offset();
    var height = 100

    $('#supposed-child').css({
        'top':parentTop.top - height,
        'right': "auto",
        'left': "0%"
    });
    $('#supposed-child1').css({
        'top':parentTop.top - height,
        'right': "auto",
        'left': "0%"
    });
    $('#supposed-child2').css({
        'top':parentTop.top - height,
        'right': "auto",
        'left': "0%"
    });
    $('#supposed-child3').css({
        'top':parentTop.top - height,
        'right': "auto",
        'left': "0%"
    });
    
    /*$('#supposed-child').css({
        'top':parentTop.top - height,
        'left': parentLeft.left
    });
    $('#supposed-child1').css({
        'top':parentTop.top - height,
        'left': parentLeft.left
    });
    $('#supposed-child2').css({
        'top':parentTop.top - height,
        'left': parentLeft.left
    });
    $('#supposed-child3').css({
        'top':parentTop.top - height,
        'left': parentLeft.left
    });*/
}
$(document).ready(function () {
    offsetCalculate();
});
$(window).resize(function(){
    offsetCalculate();
});