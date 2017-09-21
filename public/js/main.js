

$(document).ready(function(){

  let folderName = "BRH/";
  let mapName = "BRH-";
  let mapNumber = 1;
  let mapURL = '../assets/Images/' + folderName + mapName + mapNumber + ".jpg";

  //Set Initial Map
  $('.mdi-dungeon-canvas').css('background-image', 'url('+ mapURL +')');


  //Update Map OnClick
  $(".mdi-map-button").on("click", function(){
    mapNumber = $(this).attr('map');
    mapURL = '../assets/Images/' + folderName + mapName + mapNumber + ".jpg";

    $(this).closest('.panel').find('canvas').css('background-image', 'url('+ mapURL +')' );
  });
})
