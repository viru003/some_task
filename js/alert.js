
function popup() {
    console.log("hey")
    var today = new Date();
    var currentMinute = today.getMinutes();
    var currentHour = today.getHours();
    alert("another hour has passed. it is now hour " + currentHour + " of the day!");
    console.log("popup" + currentMinute);
    
  }
//   setInterval(popup, 1000 * 10);

$(function () {
    $("div").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});
  