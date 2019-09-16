(función(){

window.addEventListener ('load', function () {

var sourceControlId = "56690128", / ** LA ID DEL CONTROL DEL ENVIADOR * /

targetControlId = "56689832", / ** LA ID DEL CONTROL DEL RECEPTOR ** /

sourceControlInstance = loader.getEngine (). getDocument (). getElementById (sourceControlId),

targetControlInstance = loader.getEngine (). getDocument (). getElementById (targetControlId);

sourceControlInstance.on ('value-change', function () {

targetControlInstance.setValue (sourceControlInstance.getValue ());

});

targetControlInstance.setValue (sourceControlInstance.getValue ());

})

}) ();

//
// Cuando desee pasar valor entre campos de diferentes tipos , abra su bloc de notas y copie el código provisto a continuación:
//
// "(función(){
//
// window.addEventListener ('load', function () {
//
// var sourceControlId = 34743361, / ** LA ID DEL CONTROL DEL ENVIADOR * /
//
// targetControlId = 34743365, / ** LA ID DEL CONTROL DEL RECEPTOR ** /
//
// domAbstractionLayer = loader.getDOMAbstractionLayer (),
//
// sourceControlInstance = loader.getEngine (). getDocument (). getElementById (sourceControlId);
//
// sourceControlInstance.on ('value-change', function () {
//
// domAbstractionLayer.setControlValueById (
//
// Cadena (targetControlId),
//
// domAbstractionLayer.getControlValueById (
//
// Cadena (sourceControlId)
//
// )
//
// );
//
// });
//
// domAbstractionLayer.setControlValueById (
//
// Cadena (targetControlId),
//
// domAbstractionLayer.getControlValueById (
//
// Cadena (sourceControlId)
//
// )
//
// );
//
// });
//
// }) ();
//



// $(document).ready(function() {
//   $("div").css("background-color","red");
//
// });
// function(){
 //  var datos="apiKey=2213741-1568310058-egmat4jwcp25uyhd";
 //        console.log("hola1");
 //        var pageNrArray=Array(0,1,2,3);
 //        var prospects=0;
 //        var formularios=$.ajax({
 //          url: "https://www.123formbuilder.com/api/forms/5015992/submissions.json",
 //          data: datos+"&pageNrArray="+pageNrArray+"&pageSize=100",
 //          success: function(data){
 //              prospects=data.submissions;
 //                 console.log(prospects);
 //                 alert("hola2");
 //              // console.log(formulario.submissions);
 //              $("div[data-id='56690128']>div[data-role=input-row]>input").blur(function(){
 //                     console.log("hola3");
 //              var id=$(this)[0].value;
 //              for (var i = 0; i < prospects.length; i++) {
 //                if(prospects[i].refid==id){
 //                  $("div[data-id='56689832']>div[data-role=input-row]>input").attr("value",prospects[i].refid);
 //                }
 //              }
 //            });
 //
 //  },
 //
 //  dataType: "JSON",
 //      type:"POST"
 //
 // });
// 9};
