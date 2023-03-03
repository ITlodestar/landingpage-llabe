$(document).ready(function () {
    let index_mobile = true;

    $(".question .under_bar, .question p").hide();
    $(".question").click(function (e) { 
        $(`#${this.id} .under_bar, #${this.id} p`).slideToggle();
        let badge = "#" + this.id + " .badge";
        if ($(badge).html() == '-') {
            $(badge).html('+');
        } else {
            $(badge).html('-');
        }
    });
    $('.mobile-header').click(function( e ) {
        $(".mobile-header").removeClass("active");
    })
    $("#hamburger").click(function (e) {
        if (index_mobile) {
            $("#hamburger").addClass("active");
            $(".mobile-header").addClass("active");
            index_mobile = false;
        } else {
            $("#hamburger").removeClass("active");
            $(".mobile-header").removeClass("active");
            index_mobile = true;
        }
    });
    
    $("#carousel-1").carousel({
        interval: 5000
    });
    
    $("#carousel-1.carousel .carousel-item").each(function () {
        const total = 3;
        let next = $(this).next();
    
        for (let i = 0; i < total - 1; i++) {
            if (!next.length) {
                next = $(this).siblings(":first");
            }
            next
                .children(":first-child")
                .clone()
                .appendTo($(this));
            next = next.next();
        }
    });
});

