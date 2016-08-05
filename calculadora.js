$(document).ready(function() {

  cardPileGenerator();
  

// Drag and Drop and Sum function
  $( function() {
    $( ".draggable" ).draggable({helper: "clone", start: function( event, ui ) { 
        o = $(this).text();
      }
    });
    $( "#cardSlots" ).droppable({
      drop: function( event, ui ) { 
        sum = parseInt($('#total_sum').text());
        $( this ).append('<div class="sum">'+o+'</div>');
        sum += parseInt(o)
        $( "#total_sum" ).empty();
        $( "#total_sum" ).append(sum);
      }
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