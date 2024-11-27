// Contains all Jqueries

//I have used .ready to ensure that jquery is loaded before
//using to avoid any errors
$(document).ready(function(){

    // FAQ Accordian Function
    $(".accordian").click(function () {
        $(this).next(".dropdown").slideToggle();
        $(this).toggleClass("active");
    });



    //Services Animations
    $("#bank-acc").click(function () {
        $("#card1").slideToggle("slow");
        $(this).toggleClass("avail");
    });


    $("#mortgage-services").click(function () {
        $("#card2").slideToggle("slow");
        $(this).toggleClass("avail");
    });


    $("#investments").click(function () {
        $("#card3").slideToggle("slow");
        $(this).toggleClass("avail");
    });


    $("#insurances").click(function () {
        $("#card4").slideToggle("slow");
        $(this).toggleClass("avail");
    });

    // About us section, implementing
    //Tabular formatting

    //This hides all the divs named .tabcontent
    $(".tabcontent").hide();

    //so whenever a tab button is clicked this function will be activated
    $(".tablinks").on("click", function () {

        var aboutName = $(this).data("about");


        //This checks if the tab is already pressed
        if ($(this).hasClass("active")) {

            //If the tab is active, then it hides the content and removes 
            //the active class
            $("#" + aboutName).slideUp();
            $(this).removeClass("active");

        } else {
            //if its not active then it then it hides other info sections and
            //removes the class
            $(".tab-info").slideUp();
            $(".tablinks").removeClass("active");

            // Then it shows the info-tab that matches the button and add the active
            // class to the clicked button
            $("#" + aboutName).slideDown();
            $(this).addClass("active");

        }
    });

})
