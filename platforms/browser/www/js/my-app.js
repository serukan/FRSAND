// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {

});

myApp.onPageInit('hesap', function (page) {

        var rangeSlider = document.getElementById("rs-range-line");
        var rangeBullet = document.getElementById("rs-bullet");

        rangeSlider.addEventListener("input", showSliderValue, false);

        function showSliderValue() {
          rangeBullet.innerHTML = rangeSlider.value;
        }

        var rangeSlider2 = document.getElementById("rs-range-line2");
        var rangeBullet2 = document.getElementById("rs-bullet2");

        rangeSlider2.addEventListener("input", showSliderValue2, false);

        function showSliderValue2() {
          rangeBullet2.innerHTML = rangeSlider2.value;
        }

        $('#getirBtn').click(function(){
            $('#getirTitle').css('display','block');
            $('.getirCont').css('display', 'none');
            //$('html','body').animate({scrollTop: 1000}, 400);

            var pMax = document.getElementById('pMax');
            var getirContent = document.getElementById('getirContent');
            var getirContent2 = document.getElementById('getirContent2');
            var getirContent3 = document.getElementById('getirContent3');
            var getirContent4 = document.getElementById('getirContent4');
            var getirContent5 = document.getElementById('getirContent5');

            if(pMax.value == 1)
            {
                if(rangeBullet2.innerHTML <= 192 && rangeBullet2.innerHTML >= 168)
                {
                    $('#getirContent').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 192 && rangeBullet2.innerHTML >= 171)
                {   
                    $('#getirContent2').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 207 && rangeBullet2.innerHTML >= 174)
                {
                    $('#getirContent3').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 750 && rangeBullet2.innerHTML >= 471)
                {
                    $('#getirContent4').css('display','block');
                    $('#getirContent5').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 1056 && rangeBullet2.innerHTML >= 876)
                {
                    $('#getirContent6').css('display','block');
                }
            }

            if(pMax.value == 2)
            {
                if(rangeBullet2.innerHTML <= 270 && rangeBullet2.innerHTML >= 204)
                {
                    $('#getirContent').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 315 && rangeBullet2.innerHTML >= 300)
                {   
                    $('#getirContent2').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 336 && rangeBullet2.innerHTML >= 315)
                {
                    $('#getirContent3').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 810 && rangeBullet2.innerHTML >= 960)
                {
                    $('#getirContent4').css('display','block');
                    $('#getirContent5').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 1530 && rangeBullet2.innerHTML >= 1098)
                {
                    $('#getirContent6').css('display','block');
                }
            }

            if(pMax.value == 3)
            {
                if(rangeBullet2.innerHTML <= 402 && rangeBullet2.innerHTML >= 204)
                {
                    $('#getirContent').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 315 && rangeBullet2.innerHTML >= 426)
                {   
                    $('#getirContent2').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 450 && rangeBullet2.innerHTML >= 432)
                {
                    $('#getirContent3').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 1035 && rangeBullet2.innerHTML >= 672)
                {
                    $('#getirContent4').css('display','block');
                    $('#getirContent5').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 1530 && rangeBullet2.innerHTML >= 1098)
                {
                    $('#getirContent6').css('display','block');
                }
            }

            if(pMax.value == 4)
            {
                if(rangeBullet2.innerHTML <= 423 && rangeBullet2.innerHTML >= 204)
                {
                    $('#getirContent').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 522 && rangeBullet2.innerHTML >= 315)
                {   
                    $('#getirContent2').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 585 && rangeBullet2.innerHTML >= 561)
                {
                    $('#getirContent3').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 1068 && rangeBullet2.innerHTML >= 750)
                {
                    $('#getirContent4').css('display','block');
                    $('#getirContent5').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 1620 && rangeBullet2.innerHTML >= 1098)
                {
                    $('#getirContent6').css('display','block');
                }
            }

            if(pMax.value == 5)
            {
                if(rangeBullet2.innerHTML <= 423 && rangeBullet2.innerHTML >= 204)
                {
                    $('#getirContent').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 522 && rangeBullet2.innerHTML >= 315)
                {   
                    $('#getirContent2').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 585 && rangeBullet2.innerHTML >= 576)
                {
                    $('#getirContent3').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 1278 && rangeBullet2.innerHTML >= 750)
                {
                    $('#getirContent4').css('display','block');
                    $('#getirContent5').css('display','block');
                }

                if(rangeBullet2.innerHTML <= 1740 && rangeBullet2.innerHTML >= 1170)
                {
                    $('#getirContent6').css('display','block');
                }
            }

        });

});

myApp.onPageInit('products', function (page) {
    // Do something here for "about" page

});

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
     myApp.closePanel();
    /*
    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
    */
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
   // myApp.alert('Here comes About page');
})