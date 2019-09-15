$(document).ready(function(){


  var datos="apiKey=2213741-1568310058-egmat4jwcp25uyhd";
  var pageNrArray=Array(0,1,2,3);
  var prospects=0;
  var formularios=$.ajax({
    url: "https://www.123formbuilder.com/api/forms/5015992/submissions.json",
    data: datos+"&pageNrArray="+pageNrArray+"&pageSize=100",
    success: function(data){
        prospects=data.submissions;
        // console.log(formulario.submissions);
        $("div[data-id='56690128']>div[data-role=input-row]>input").blur(function(){
        var id=$(this)[0].value;
        for (var i = 0; i < prospects.length; i++) {
          if(prospects[i].refid==id){
            $("div[data-id='56689832']>div[data-role=input-row]>input").attr("value",prospects[i].refid);
          }
        }
      });

},

dataType: "JSON",
type:"POST"

});
});
