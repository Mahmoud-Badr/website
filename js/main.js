
$(document).ready(function(){

    // $(".wrapper").on("scroll",function() {
    //     var sclTop = $(this).scrollTop();
    //     var scroll = (sclTop > 50)? true : false;
    //     if(scroll){
    //         $("body").addClass("site-header-fixed");
    //     }else{
    //         $("body").removeClass("site-header-fixed");
    //     }
    // });

    $(".site-ham-menu").on("click",function () {
        if ($("body").hasClass("menu-opend")) {
            $("body").removeClass("menu-opend");
        }else{
            $("body").addClass("menu-opend");
            $("body").removeClass("site-sidebar-opened");
        }
    });

    
    var KEYCODE_ESC = 27;
    var KEYCODE_ENTER = 13;

    $(".site-search-btn").on("click",function() {
        $("body").addClass("site-open-search");
        $(".site-search-form-con input").focus();
    });
    
    $(".site-search-form-close").on("click",function() {
        $("body").removeClass("site-open-search");
        $(".site-search-form-con input").blur();
    });

    $(".site-search-form-con input").keyup(function(e) {
        var value = $(this).val().trim();
        $(".site-search-form-con a").attr("href", "/search/"+value);
        // if(value){
        // }
        console.log(value);
    });	
    
    
    $(document).keyup(function(e) {
        if (e.keyCode == KEYCODE_ENTER){
            if ($("body").hasClass("site-open-search")) {
                var input = $(".site-search-form-con input");
                if (input.is(":focus") && input.val().trim()) {
                    window.location.href = "/search/"+input.val();
                }
            }
        }

        if (e.keyCode == KEYCODE_ESC){
            $("body").removeClass("site-open-search");
            $(".site-search-form-con input").blur();
        } 
    });	
    
    $(".site-flash-message button").on("click",function () {
        $(".site-flash-overlay").remove();
    });
    
    setTimeout(function(){
        $(".site-flash-overlay").remove();
    },5000);


});