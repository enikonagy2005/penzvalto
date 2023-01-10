function atvalto() {
    var forint = document.getElementById("forint").value;
    var euro = document.getElementById("kiiras1").innerHTML = "A forint euróban: "+forint/404;
    var dollar = document.getElementById("kiiras2").innerHTML ="A forint dollárban: "+forint/376.48; 
    var jen = document.getElementById("kiiras3").innerHTML = "A forint jenben: "+forint/2.88;
    return false
}