$(document).ready(function() {
// executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
   
    $(".card").hover(
        function() {
            $(this).addClass('shadow-lg text-danger').css('cursor', 'pointer'); 
        }, function() {
            $(this).removeClass('shadow-lg text-danger');
        }
    );

    $(".card-title").hover(
        function() {
            $(this).addClass('text-primary').css('cursor', 'pointer'); 
        }, function() {
            $(this).removeClass('text-primary');
        }
    );

    $(".fas").hover(
        function() {
            $(this).addClass('text-primary').css('cursor', 'pointer'); 
        }, function() {
            $(this).removeClass('text-primary');
        }
    );
     
   // document ready  
   });