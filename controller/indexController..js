$('#Customer').css('display','block');
$('#Item').css('display','none');
$('#Order').css('display','none');
$('#orderDetails').css('display','none');


$('.side-menu>li').eq(0).on('click', () => {
    $('#Customer').css('display','none');
    $('#Item').css('display','none');
    $('#Order').css('display','block');
    $('#orderDetails').css('display','none');
})
$('.side-menu>li').eq(1).on('click', () => {
    $('#Customer').css('display','block');
    $('#Item').css('display','none');
    $('#Order').css('display','none');
    $('#orderDetails').css('display','none');
})
$('.side-menu>li').eq(2).on('click', () => {
    $('#Item').css('display','block');
    $('#Customer').css('display','none');
    $('#Order').css('display','none');
    $('#orderDetails').css('display','none');
})
$('.side-menu>li').eq(3).on('click', () => {
    $('#Item').css('display','none');
    $('#Customer').css('display','none');
    $('#Order').css('display','none');
    $('#orderDetails').css('display','block');
})