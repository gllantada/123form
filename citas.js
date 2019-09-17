var numeric_validation_form_id = "5018036]";
var dropdown_textarea_form_id = "56690128]";
var image_form_id = "";


$(document).ready(function (e) {

    if(window.location.href.indexOf(dropdown_textarea_form_id) > -1) {
        $('div[data-id='+dropdown_textarea_form_id).change(function () {
        alert("gola");
        });
    }




});
