const prices = {

BTC:65000,

ETH:3500,

SOL:150

};

function getPrice(symbol){

return prices[symbol];

}

module.exports = {

getPrice

};
