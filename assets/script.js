$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
       console.log("document is ready");
       
        $(".fas").hover(
            function() {
                $(this).addClass('text-danger').css('cursor', 'help'); 
            },
            function() {
                $(this).removeClass('text-danger');
            }
        );
         
       // document ready  
       });