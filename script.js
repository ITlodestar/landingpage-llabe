$(document).ready(function(){
    let index_mobile = true;
    $(".question .under_bar, .question p").hide();
    $(".question").click(function(e){
        $(`#${this.id} .under_bar,#${this.id} p`).slideToggle();
        let badge = "#" + this.id + " .badge"; 
        if($(badge).html() == '-') {
            $(badge).html('+');
        } else {
            $(badge).html('-');
        }
    });
    $("#humger").click(function(e){ 
        if(index_mobile) {
            $("#humger").addClass("active");
            $(".mobile-header").addClass("active");
            index_mobile = false;
        } else {
            $("#humger").removeClass("active");
            $(".mobile-header").removeClass("active");
            index_mobile = true;
        }
    });
  });