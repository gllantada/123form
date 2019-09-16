$(document).ready(function() {
  var $iframe = $("#1568609764695_377447865051328D").contents();

  if($("#1568609764695_377447865051328D").contents().find("div[data-id='56690128']").length!=0){
   console.log("encontrado")
  }else{
  setTimeout((function(){

      if($("#1568609764695_377447865051328D")[0].contents().find("div[data-id='56690128']").length!=0){
       console.log("encontrado")
     }else{
       console.log("nunca se encotnro")
     }
     if ($("div[data-id='56690128']").length!=0) {
       console.log("tampoco")
     }

     }),4000);
  }
});
