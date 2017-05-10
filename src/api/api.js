import 'whatwg-fetch'

export function getETHBalance(address){
  return fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=YourApiKeyToken`)
    .then(res => res.json())
    //.then(res => {console.log(res); return res} )
    .then(res => parseInt(res.result)/1000000000000000000)
}

export function getBTCBalance(address){
  return fetch(`https://blockchain.info/q/addressbalance/${address}?format=json&cors=true`)
    .then(res => res.json())
    //.then(res => {console.log(res); return res} )
    .then(res => parseInt(res)/100000000)
}

export function getPrice(coin, currency = "USD"){
  return fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=${currency}`)
    .then(res => res.json())
    .then(res => res.USD)
}

// getETHBalance('0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98')
// getBTCBalance('13vHWR3iLsHeYwT42RnuKYNBoVPrKKZgRv')
// getPrice('ETH')
