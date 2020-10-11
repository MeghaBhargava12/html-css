const bitcoin=new BitCoin;
const ui=new UI;
let selection='AED';
var currencies;

document.body.addEventListener('load',setPrice(selection));
document.getElementById('refresh').addEventListener('click',()=>{setPrice(selection)});

bitcoin.getBitcoin('/data.json')
  .then(data=>{
    currencies=data.responseData;
    ui.getCurrency(data.responseData);
  })
  .catch(error=>console.log(error));

  function setPrice(currency){
    console.log('called');
bitcoin.getCurrentPrice(currency)
  .then(data=>{ui.getPrice(data)})
  .catch(error=>console.log(error));
  }

function getSelectedCurrency(currency){
  let currentRate;
  const selectText=currency.value;
  selection=selectText;
  const selectedCountry=document.getElementById('selected-country');
  currencies.forEach((currency)=>{
    if(currency.currency=== selectText){
      setPrice(selectText);
    }
  });
}


