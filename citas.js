(función(){

window.addEventListener ('load', function () {
console.log("hola0");
var sourceControlId = 56690128, / ** LA ID DEL CONTROL DEL ENVIADOR * /

targetControlId = 56689832, / ** LA ID DEL CONTROL DEL RECEPTOR ** /

sourceControlInstance = loader.getEngine (). getDocument (). getElementById (sourceControlId),

targetControlInstance = loader.getEngine (). getDocument (). getElementById (targetControlId);
console.log("hola1");
sourceControlInstance.setValue("gola");
sourceControlInstance.on ('change', function () {
console.log("hola");
targetControlInstance.setValue (sourceControlInstance.getValue ());

});

targetControlInstance.setValue (sourceControlInstance.getValue ());
console.log("hola3");
})

}) ();
