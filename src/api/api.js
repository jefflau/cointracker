import 'whatwg-fetch'

export function getEthBalance(address){
  return fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=YourApiKeyToken`)
    .then(res => res.json())
    .then(res => parseInt(res.result)/1000000000000000000)
    .then(console.log)
}

export function getBtcBalance(address){
  return fetch(`https://blockchain.info/q/addressbalance/${adderess}&cors=true`)
    .then(res => res.json())
    .then(res => parseInt(res.final_balance)/100000000)
    .then(console.log)
}

export function getPrice(coin, currency = "USD"){
  return fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=${currency}`)
    .then(res => res.json())
    .then(res => res.USD)
    .then(console.log)
}

getEthBalance('0xfbb1b73c4f0bda4f67dca266ce6ef42f520fbb98')
getBtcBalance('13vHWR3iLsHeYwT42RnuKYNBoVPrKKZgRv')
getPrice('ETH')
