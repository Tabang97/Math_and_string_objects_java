// TABANG DUDA

function TotalPrice(x, y){
    i = parseFloat(document.getElementById("Fquantity").value);
    var answer = document.getElementById("Ftotal");
    answer.value = Math.round(150.95 * i * 100) / 100 ;
    t = parseFloat(document.getElementById("Mquantity").value);
    var answer1 = document.getElementById("Mtotal");
    answer1.value = Math.round(180.95 * t * 100) / 100;
    x = parseFloat(document.getElementById("Ftotal").value);
    y = parseFloat(document.getElementById("Mtotal").value);

    var answer2 =document.getElementById("totalprice");
    answer2.value = x + y;
}