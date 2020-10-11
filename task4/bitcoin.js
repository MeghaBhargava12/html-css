class BitCoin{
  async getBitcoin(url){
    // const proxyURL="https://cors-anywhere.herokuapp.com/"
    const response=await fetch(url);
    const responseData=await response.json();
  
    return {
      responseData
    };

  }
  async getCurrentPrice(currency){
    const cus=await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`);
    const usd=await fetch(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`);
    const gbp=await fetch(`https://api.coindesk.com/v1/bpi/currentprice/GBP.json`);
    const eur=await fetch(`https://api.coindesk.com/v1/bpi/currentprice/EUR.json`);
    const cusPrice=await cus.json();
    const usdPrice=await usd.json();
    const gbpPrice=await gbp.json();
    const eurPrice=await eur.json();
    return {cusPrice,usdPrice,gbpPrice,eurPrice};
  }
}