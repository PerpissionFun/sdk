async function connectWallet(){

if(window.solana){

await window.solana.connect();

alert("Wallet Connected");

}

else{

alert("Install Phantom Wallet");

}

}
