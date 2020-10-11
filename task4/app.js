const bitcoin=new BitCoin;
const ui=new UI;
var currencies;

document.getElementById('refresh').addEventListener('click',()=>{this.location.reload();});

bitcoin.getBitcoin('/data.json')
  .then(data=>{
    currencies=data.responseData;
    ui.getCurrency(data.responseData);
  })
  .catch(error=>console.log(error));

bitcoin.getCurrentPrice('USD')
  .then(data=>{ui.getPrice(data.bpi.USD.rate,'usd');})
  .catch(error=>console.log(error));
bitcoin.getCurrentPrice('GBP')
  .then(data=>{ui.getPrice(data.bpi.GBP.rate,'gbp');})
  .catch(error=>console.log(error));
bitcoin.getCurrentPrice('EUR')
  .then(data=>{ui.getPrice(data.bpi.EUR.rate,'eur');})
  .catch(error=>console.log(error));
bitcoin.getCurrentPrice('AED')
  .then(data=>{ui.updateValues(Object.entries(data.bpi)[1][1].description,Object.entries(data.bpi)[1][1].rate);})
  .catch(error=>console.log(error));

function getSelectedCurrency(currency){
  let currentRate;
  const selectText=currency.value;
  const selectedCountry=document.getElementById('selected-country');
  currencies.forEach((currency)=>{
    if(currency.currency=== selectText){
      bitcoinGetCurrentPrice(selectText);
    }
  });
}

function bitcoinGetCurrentPrice(currency){
  bitcoin.getCurrentPrice(currency)
  .then(data=>{
    ui.updateValues(Object.entries(data.bpi)[1][1].description,Object.entries(data.bpi)[1][1].rate);
  }).catch(error=>console.log(error));
}

function getInitial(country){
  bitcoin.getCurrentPrice(country)
  .then(data=>{
    ui.updateValues(Object.entries(data.bpi)[1][1].description,Object.entries(data.bpi)[1][1].rate);
  });
}

// function reloadData(){
//   bitcoin.getCurrentPrice('USD')
//   .then(data=>{ui.getPrice(data.bpi.USD.rate,'usd');})
//   .catch(error=>console.log(error));
// bitcoin.getCurrentPrice('GBP')
//   .then(data=>{ui.getPrice(data.bpi.GBP.rate,'gbp');})
//   .catch(error=>console.log(error));
// bitcoin.getCurrentPrice('EUR')
//   .then(data=>{ui.getPrice(data.bpi.EUR.rate,'eur');})
//   .catch(error=>console.log(error));
// }