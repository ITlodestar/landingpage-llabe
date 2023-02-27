$(document).ready(function(){
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
  });