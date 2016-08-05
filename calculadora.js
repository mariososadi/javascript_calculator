$(document).ready(function() {

  cardPileGenerator();

    $( function() {
      $( ".draggable" ).draggable({helper: "clone"});
    });


    $( function() {
      $( "#cardSlots" ).droppable({accept: ".draggable",
      });
    });



// Card Pile generator
  function cardPileGenerator(){
    $( '#cardPile' ).each( function( key, el ) {
      for ( var i = 0; i < 10; i++ ) { 
      	$(this).append('<div class="draggable">'+ i +'</div>'); 
      };
    });
  }



});