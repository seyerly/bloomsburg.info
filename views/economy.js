document.getElementById("bloomsburg_university_button").onclick = function () {

    if (document.getElementById("bloomsburg_university_button").className === "list-group-item") {
        document.getElementById("bloomsburg_university_button").className = "list-group-item active"
        document.getElementById("bloomsburg_dropdown").innerHTML = bu_text
    } else {
        document.getElementById("bloomsburg_university_button").className = "list-group-item"
        document.getElementById("bloomsburg_dropdown").innerHTML = ""
    }
};



var bu_text = "Bloomsburg University of Pennsylvania, commonly referred to as Bloomsburg, BU or Bloom, is a comprehensive public university located in Bloomsburg, Pennsylvania, United States.[3][4] It is one of the 14 state universities of the Pennsylvania State System of Higher Education (PASSHE). Bloomsburg University is accredited by the Middle States Association of Colleges and Schools, as well as by AACSB, NCATE, ABET, and by many other specialized accrediting agencies. "