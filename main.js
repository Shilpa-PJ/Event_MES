$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.main_nav-bar').css('background', '#0f1726');
    } else {
        $('.main_nav-bar').css('background', 'transparent');
    }
});
// NAVBAR ACTIVE LINK SWICTHING
document.getElementById("HME").addEventListener("click", function () {
    document.getElementById("HME").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("ABT").addEventListener("click", function () {
    document.getElementById("ABT").classList.add("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SCH").addEventListener("click", function () {
    document.getElementById("SCH").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SPK").addEventListener("click", function () {
    document.getElementById("SPK").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("PRC").addEventListener("click", function () {
    document.getElementById("PRC").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("SPN").addEventListener("click", function () {
    document.getElementById("SPN").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
    document.getElementById("CNT").classList.remove("active-link");
});
document.getElementById("CNT").addEventListener("click", function () {
    document.getElementById("CNT").classList.add("active-link");
    document.getElementById("ABT").classList.remove("active-link");
    document.getElementById("SCH").classList.remove("active-link");
    document.getElementById("SPK").classList.remove("active-link");
    document.getElementById("PRC").classList.remove("active-link");
    document.getElementById("SPN").classList.remove("active-link");
    document.getElementById("HME").classList.remove("active-link");
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
});
$('.custom-carousel').owlCarousel({
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true
        },
        1000: {
            items: 1,
            nav: true,
            loop: true
        }
    }
});
document.getElementById("btn-1").addEventListener("click", function () {
    document.getElementById("sch_date").innerHTML = "FEBRUARY 22, 2024";
    document.getElementById("btn-1").classList.add("active_schedule_btn");
    document.getElementById("btn-2").classList.remove("active_schedule_btn");
    document.getElementById("btn-3").classList.remove("active_schedule_btn");
   // document.getElementById("btn-4").classList.remove("active_schedule_btn");
    document.getElementById("acc-title-1").innerHTML = "MILAGRO 24";
    document.getElementById("acc-title-2").innerHTML = "<strong>DEPARTMENT OF VOCATIONAL STUDIES</strong> - ANIMATION AND GRAPHIC DESIGN</span>";
    document.getElementById("acc-title-3").innerHTML = "SOFTWARE DEVELOPMENT AND SYSTEM ADMINISTRATION";
    document.getElementById("acc-title-4").innerHTML = "<strong>DEPARTMENT OF VOCATIONAL STUDIES</strong> </span>";
    document.getElementById("acc-title-5").innerHTML = "FASHION DESIGN AND MANAGEMENT & INDUSTRIAL INSTRUMENTATION AND AUTOMATION";
    document.getElementById("acc-title-6").innerHTML = "<strong>DEPARTMENT OF VOCATIONAL STUDIES</strong></span>";
    document.getElementById("acc-title-7").innerHTML = "MULTI SPORTS AND FITNESS TRAINING";
    document.getElementById("acc-title-8").innerHTML = "<strong>DEPARTMENT OF PHYSICAL EDUCATION</strong>";
});
document.getElementById("btn-2").addEventListener("click", function () {
    document.getElementById("sch_date").innerHTML = "FEBRUARY 23, 2024";
    document.getElementById("btn-2").classList.add("active_schedule_btn");
    console.log("btn2");
    document.getElementById("btn-1").classList.remove("active_schedule_btn");
    document.getElementById("btn-3").classList.remove("active_schedule_btn");
    //document.getElementById("btn-4").classList.remove("active_schedule_btn");
    document.getElementById("acc-title-1").innerHTML = "COMFIESTA 24";
    document.getElementById("acc-title-2").innerHTML = "<strong>DEPARTMENT OF COMMERCE</strong>";
    document.getElementById("vn-title-1").innerHTML = "<p>1.GROUP DANCE INTTERCOLLEGIATE<br> 2.E SPORTS INTTERCOLLEGIATE<br>3.TREASURE HUNT INTTERCOLLEGIATE<br>4.JEWELLERY EXPO<br> 5.MEENA BAZAR<br>6.HANDICRAFT EXPO<br><strong>CONTACT:<br>HOD-9048982977,<br>COORDINATOR-9947518100</p> ";
    document.getElementById("acc-title-3").innerHTML = "HARMONIA 24";
    document.getElementById("acc-title-4").innerHTML = "<strong>DEPARTMENT OF HRM</strong>";
    document.getElementById("acc-title-5").innerHTML = "RESONANCE 24";
    document.getElementById("acc-title-6").innerHTML = "<strong>DEPARTMENT OF INTEGRATED CHEMISTRY</strong>";
    document.getElementById("acc-title-7").innerHTML = "BOLIGRAFO 2K 24";
    document.getElementById("acc-title-8").innerHTML = "<strong>DEPARTMENT OF ENGLISH</strong>";
    document.getElementById("acc-title-9").innerHTML = "BIOBLITZ 24";
    document.getElementById("acc-title-10").innerHTML = "<strong>DEPARTMENT OF BIOSCIENCES</strong>";
    document.getElementById("acc-title-11").innerHTML = "KHAYAAL 24";
    document.getElementById("acc-title-12").innerHTML = "<strong>DEPARTMENT OF ARABIC</strong>";
    document.getElementById("acc-title-13").innerHTML = "PSYGALA 2024";
    document.getElementById("acc-title-14").innerHTML = "<strong>DEPARTMENT OF PSYCHOLOGY</strong>";
    document.getElementById("acc-title-15").innerHTML = "ESPERANZA' 24";
    document.getElementById("acc-title-16").innerHTML = "<strong>DEPARTMENT OF BUSINESS ADMINISTRATION</strong>";
});
document.getElementById("btn-3").addEventListener("click", function () {
    document.getElementById("sch_date").innerHTML = "FEBRUARY 24, 2024";
    document.getElementById("btn-3").classList.add("active_schedule_btn");
    document.getElementById("btn-1").classList.remove("active_schedule_btn");
    document.getElementById("btn-2").classList.remove("active_schedule_btn");
    //document.getElementById("btn-4").classList.remove("active_schedule_btn");
    document.getElementById("acc-title-1").innerHTML = "GROUP DANCE COMPETITION";
    document.getElementById("acc-title-2").innerHTML = "<h6>FIRST PRIZE- 25,000/-<br>SECOND PRIZE - 15,000/-</h6>";
    document.getElementById("acc-title-3").innerHTML = "THEME WALK";
    document.getElementById("acc-title-4").innerHTML = "<h6>FIRST PRIZE - 35,000/-<br>SECOND PRIZE - 25,000/-</h6>";
    document.getElementById("acc-title-5").innerHTML = "SOLO DANCE COMPETITION";
    document.getElementById("acc-title-6").innerHTML = "<h6>FIRST PRIZE - 10,000/-<br>SECOND PRIZE - 5,000/-</h6>";
    document.getElementById("acc-title-7").innerHTML = "MUSIC BAND COMPETITION";
    document.getElementById("acc-title-8").innerHTML = "<strong>FIRST PRIZE - 35,000/-</strong>";
    document.getElementById("acc-title-9").innerHTML = "24 HOURS HACKTHON";
    document.getElementById("acc-title-10").innerHTML = "<h6>FIRST PRIZE : 10,000/- <br>SECOND PRIZE : 4*2500</h6>";
    document.getElementById("acc-title-11").innerHTML = "PROJECT COMPETITION";
    document.getElementById("acc-title-12").innerHTML = "<h6>FIRST PRIZE - 10,000/-<br>SECOND PRIZE - 5,000/-</h6>";
    document.getElementById("acc-title-13").innerHTML = "DRONE COMPETITION";
    document.getElementById("acc-title-14").innerHTML = "<h6>FIRST PRIZE - 10,000/-<br>SECOND PRIZE - 5,000/-</h6>";
    document.getElementById("acc-title-15").innerHTML = "MUSIC BAND COMPETITION";
    document.getElementById("acc-title-16").innerHTML = "<strong>FIRST PRIZE - 35,000/-</strong>";
});
// document.getElementById("btn-4").addEventListener("click", function () {
//     document.getElementById("sch_date").innerHTML = "SEPTEMBER 18, 2021";
//     document.getElementById("btn-4").classList.add("active_schedule_btn");
//     document.getElementById("btn-1").classList.remove("active_schedule_btn");
//     document.getElementById("btn-2").classList.remove("active_schedule_btn");
//     document.getElementById("btn-3").classList.remove("active_schedule_btn");
//     document.getElementById("acc-title-1").innerHTML = "INTRODUCTION TO WEB-PROGRAMMING";
//     document.getElementById("acc-title-2").innerHTML = "<strong>Henry Rich</strong> - Lead Programmer, SpaceX";
//     document.getElementById("acc-title-3").innerHTML = "PLAYING WITH FUNDAMENTALS OF JAVA";
//     document.getElementById("acc-title-4").innerHTML = "<strong>Errichto</strong> - International Grandmaster, Codeforce";
//     document.getElementById("acc-title-5").innerHTML = "CATERED LUNCH BUFFET";
//     document.getElementById("acc-title-6").innerHTML = "<strong>Sponsored</strong> - AirTM, PayPal, TechGeek";
//     document.getElementById("acc-title-7").innerHTML = "ENCODING DESIGN";
//     document.getElementById("acc-title-8").innerHTML = "<strong>John Doe</strong> - Co-Lead, AirTM";
// });
// fakeloader initialization
$(document).ready(function () {
    $.fakeLoader({
        timeToHide: 5000,
        bgColor: "rgb(27, 208, 126)",
        spinner: "spinner4"
    });
});
// Google Map API
let map;

function initMap() {
    var location = {
        lat: 39.045753,
        lng: -76.641273
    };
    map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: 12
    });
    /*
    
    */
    addMarker({
        coordinates: {
            lat: 38.9897,
            lng: -76.9378
        },
        content: '<h6>Axon - Maryland Branch</h6>'
    });
    addMarker({
        coordinates: {
            lat: 42.4072,
            lng: -71.3824
        },
        content: '<h6>Axon - Massachusetts Branch</h6>'
    });
    addMarker({
        coordinates: {
            lat: 39.5501,
            lng: -105.7821
        },
        content: '<h6>Axon - Colorado Branch</h6>'
    });
    addMarker({
        coordinates: {
            lat: 32.3547,
            lng: -89.3985
        },
        content: '<h6>Axon - Mississippi Branch</h6>'
    });
    addMarker({
        coordinates: {
            lat: 37.7749,
            lng: -122.4194
        },
        content: '<h6>Axon - California Branch</h6>'
    });

    function addMarker(properties) {
        var marker = new google.maps.Marker({
            position: properties.coordinates,
            map: map
        });
        if (properties.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: properties.content
            });
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            })
        }
    }
}
// $(function () {
//     $("html").niceScroll();
// });
// $("html").niceScroll({
//     cursorcolor: "#1bce7c", // change cursor color in hex
//     cursorwidth: "5px", // cursor width in pixel (you can also write "5px")
//     cursorborder: "1px solid #1bce7c", // css definition for cursor border
//     cursorborderradius: "6px", // border radius in pixel for cursor
//     scrollspeed: 35, // scrolling speed
//     mousescrollstep: 25, // scrolling speed with mouse wheel (pixel)
// });
// Newsletter POP UP
$(document).ready(function () {
    setTimeout(function () {
        $('#myModal').modal('show');
    }, 20000);
});
$("#closebtn").click(function(){
    $('.modal-backdrop').remove();
});
$("#closebutton").click(function(){
    $('.modal-backdrop').remove();
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
});