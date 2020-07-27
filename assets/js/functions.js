

function scrollToPoint(event) {
    event.preventDefault();
    
    const elementToScrollTo = $(event.data.scrollTo)[0];
    
    $('html, body').animate({
        scrollTop: $(elementToScrollTo).offset().top - 100
    }, 'medium');
}


$(document).ready(function() {
    
    
    // Add scroll animation
    $(".nav-link").each(function(index) {
        console.log(index);
        const data = {scrollTo : $(this).attr("href")}
        $(this).on("click", data, scrollToPoint);
    })


    // Content section caching
    var allContentSection = $(".content-section, .form-section");
    allContentSection.each(function(index, element) {
        var el = $(element);
        if(el.visible(true)){
            el.addClass("already-visible");
        }
    })


    // Add slide in animation
    $(window).scroll(function(event) {
        allContentSection.each(function(index, element) {
            var el = $(element);
            if(el.visible(true) && !el.hasClass("already-visible") && index % 2 == 1) {
                el.addClass("come-in-left");

            }
            else if(el.visible(true) && !el.hasClass("already-visible") && index % 2 == 0){
                el.addClass("come-in-right");
            }
            else if(!el.visible(true)){
                el.removeClass("come-in-left");
                el.removeClass("come-in-right");
                el.removeClass("already-visible");
            }
            
            
        })
    })

    // Add modal functionality
    var modal = $("#myModal");
    var images = $(".clickable-image");

    images.each(function(index, element) {
        $(element).on("click", function() {
            $(modal).css("display", "block");
            console.log($(element).attr("big"));
            if($(element).attr("big")){
                $(modal).children(".modal-content").addClass("big-modal");
            }

            $(modal).children(".modal-content").attr("src", $(element).attr("src"));
            $("header").css("display", "none");
        })
    })
    
    var span = $(".close");
    span.on("click", function() {
        $(modal).css("display", "none");
        $(modal).children(".modal-content").removeClass("big-modal");
        $("header").css("display", "block");
    })

    

})