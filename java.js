function darkmode(){
    var doc = document.body
    doc.classList.toggle("darkmode")
}

var Modal = document.querySelector("#modal")
var openModal = document.querySelector("#OpenModal")
var dialog = document.querySelector("#dialog")
var everyone = document.querySelector("#everyone")

function omodal() {
    
    Modal.classList.toggle("close")
    dialog.classList.toggle("dial")
    everyone.classList.toggle("blur")
}
function cmodal() {
    Modal.classList.toggle("close")
    dialog.classList.toggle("dial")
    everyone.classList.toggle("blur")
}





  