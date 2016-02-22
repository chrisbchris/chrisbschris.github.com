 
$( ".Darude" ).hover(function() {
  $( "musicer" ).show('slow').append('<div id="Darude"> <audio controls autoplay="autoplay" loop="true"> <source href="http://weblab011.com/code/town.mp3" type="audio/ogg"> <source src="http://weblab011.com/code/town.mp3" type="audio/mpeg"> </audio> </diV>');
   }, function() {
    $( "musicer").hide('slow'), $("#Darude").remove();
});

$( ".purity" ).hover(function() {
  $( ".musicer1" ).show('slow').append('<div id="metal"> <audio controls autoplay="autoplay" loop="true"> <source href="http://weblab011.com/code/sowhat.mp3" type="audio/ogg"> <source src="http://weblab011.com/code/sowhat.mp3" type="audio/mpeg"> </audio> </diV>');
   }, function() {
    $( ".musicer1").hide('slow'), $("#purity").remove();
});


$( ".secret" ).hover(function() {
  $( ".bigcatzz" ).show('slow');
   }, function() {
    $( ".bigcatzz").hide('slow');
});