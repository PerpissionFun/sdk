function openTrade(){

let pair = document.getElementById("pair").value;

let amount = document.getElementById("amount").value;

let leverage = document.getElementById("leverage").value;

alert(

"Position Opened\n"+
pair+"\n"+
amount+"\n"+
leverage+"x"

);

}
