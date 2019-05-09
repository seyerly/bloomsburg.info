/*
document.getElementById("bloomsburg_university_button").onclick = function () {

    if (document.getElementById("bloomsburg_university_button").className === "list-group-item") {
        document.getElementById("bloomsburg_university_button").className = "list-group-item active"
        document.getElementById("bloomsburg_dropdown").innerHTML = bu_text
    } else {
        document.getElementById("bloomsburg_university_button").className = "list-group-item"
        document.getElementById("bloomsburg_dropdown").innerHTML = ""
    }
};

document.getElementById("geisinger_button").onclick = function () {

    if (document.getElementById("geisinger_button").className === "list-group-item") {
        document.getElementById("geisinger_button").className = "list-group-item active"
        document.getElementById("geisinger_dropdown").innerHTML = geisinger_text
    } else {
        document.getElementById("geisinger_button").className = "list-group-item"
        document.getElementById("geisinger_dropdown").innerHTML = ""
    }
};
*/

function register_function(button, dropdown, text) {
    document.getElementById(button).onclick = function () {
        if (document.getElementById(button).className === "list-group-item") {
            document.getElementById(button).className = "list-group-item active";
            document.getElementById(dropdown).innerHTML = text;
        } else {
            document.getElementById(button).className = "list-group-item";
            document.getElementById(dropdown).innerHTML = "";
        }
    };
}

var buttons = ["bloomsburg_university_button", "geisinger_button", "wise_button", "autoneum_button",
                "berwick_button", "kawneer_button", "dt_button", "smuckers_button", "bh_button", "walmart_button"]
var dropdowns = ["bloomsburg_dropdown", "geisinger_dropdown", "wise_dropdown", "autoneum_dropdown",
    "berwick_dropdown", "kawneer_dropdown", "dt_dropdown", "smuckers_dropdown", "bh_dropdown", "walmart_dropdown"]

var geisinger_text = "Geisinger is one of the healthcare systems in Pennsylvania, offering many services that are not available anywhere else locally. With many nationally recognized, award-winning specialty areas and modern facilities, it offers virtually every type of care you and your family will ever need."
var bu_text = "Bloomsburg University of Pennsylvania, commonly referred to as Bloomsburg, BU or Bloom, is a comprehensive public university located in Bloomsburg, Pennsylvania, It is one of the 14 state universities of the Pennsylvania State System of Higher Education (PASSHE). Bloomsburg University is accredited by the Middle States Association of Colleges and Schools, as well as by AACSB, NCATE, ABET, and by many other specialized accrediting agencies. "
var wise_text = "Wise foods is a large manufacturer and distributor of prepackaged household food. Their primary focus is their beloved potato chips, which can be found in stores all throughout Pennsylvania."
var autoneum_text = "todo"
var berwick_text = "todo"
var kawneer_text = "todo"
var dt_text = "todo"
var smucker_text = "todo"
var bh_text = "todo"
var walmart_text = "todo"

var texts = [bu_text, geisinger_text, wise_text, autoneum_text, berwick_text, kawneer_text, dt_text,
            smucker_text, bh_text, walmart_text]

function register_all_buttons() {
    var i;
    for (i = 0; i < buttons.length; i++) {
        register_function(buttons[i], dropdowns[i], texts[i])
    }
}

register_all_buttons()