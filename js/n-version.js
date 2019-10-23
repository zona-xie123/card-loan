$(function(){
    //   倒數
var days = jQuery(".days").find("h2");
var hours = jQuery(".hours").find("h2");
var minutes = jQuery(".minutes").find("h2");
var seconds = jQuery(".seconds").find("h2");

var totDays = 7;
var totHours = 24;
var totMinutes = 60;
var totSeconds = 60;
var color = "ffffff"
var r = parseInt("ff", 16);
var g = r;
var b = r;
var total = r;
var styles = [];
for (var num = 1; num < 17; num++) {
    style = document.createElement("style");
    styles.push(style)
}
var refresh = setInterval(function() {
    var date = new Date(Date.now());
    //var endDate = new Date("8/5/2016");
    var endDate = new Date(2019, 05, 17, 24, 00, 0);
    var diff = endDate - date;
    var msec = diff;
    var diffDays = Math.floor(msec / 1000 / 60 / 60 / 24);
    msec -= diffDays * 1000 * 60 * 60 * 24;

    
    //var diffDays = Math.round((endDate.getTime() - date.getTime())/(oneDay)) - 1;

    if (diffDays < 0) {
        clearInterval(refresh);
        diffDays = 0;
        msec = 0;
    }

    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;

    days[0].innerHTML = diffDays;
    hours[0].innerHTML = hh;
    minutes[0].innerHTML = mm;
    seconds[0].innerHTML = ss;


    //console.log(sectionPercents);
    var initial = true;


    initial = false;
}, 1000);
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
   
    $( "#step-tabs" ).tabs();
      $('.girl').hover(function(){
          $('.txt-1').toggleClass('bounce');
      })

    if ($(window).width()<900){
        $('.mobile-man').append($('.pic-bg .txt'))
    }
    
    $(window).scroll(function(){
      var window_top = $(window).scrollTop() + 100;
      last=$("body").height()-$(window).height()
      if($(window).scrollTop() > 300){
        $('.fixed ').css('position','absolute').css('top',window_top+200);
        $('.fixed ').css('opacity',1);
      }
      else{
        
      }
    })
  
})