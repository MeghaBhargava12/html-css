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
    const currencyResponse=await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`);
    const currencyPrice=await currencyResponse.json();
    // console.log(currencyPrice);
    return currencyPrice;
  }
}