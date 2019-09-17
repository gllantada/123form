(función(){

window.addEventListener ('load', function () {

var sourceControlId = "56690128", / ** LA ID DEL CONTROL DEL ENVIADOR * /

targetControlId = 56689832, / ** LA ID DEL CONTROL DEL RECEPTOR ** /

sourceControlInstance = loader.getEngine().getDocument ().getElementById(sourceControlId),

targetControlInstance = loader.getEngine().getDocument ().getElementById(targetControlId);
sourceControlInstance.setValue("gola");
sourceControlInstance.on ('change', function () {
alert("gola");
targetControlInstance.setValue (sourceControlInstance.getValue ());

});

targetControlInstance.setValue (sourceControlInstance.getValue ());
})

}) ();
