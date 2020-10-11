class UI{
  constructor(){
    this.tbody=document.getElementById('table-body');
    this.currencies;
  }

  getCurrency(currencies){
    let output=`<tr>
        <td>
          <i class="fas fa-dollar-sign"></i>
        </td>
        <td>United States Dollar</td>
        <td id="usd"></td>
      </tr>
      <tr>
        <td>
          <i class="fas fa-pound-sign"></i>
        </td>
        <td>British Pound Sterling</td>
        <td id="gbp"></td>
      </tr>
      <tr>
        <td>
          <i class="fas fa-euro-sign"></i>
        </td>
        <td>Euro</td>
        <td id="eur"></td>
      </tr>
      <tr>
      <td>
      <select name="currency-dropdown" id="currency-dropdown" onchange="getSelectedCurrency(this)">;
      <option value="${currencies[0].currency}">${currencies[0].currency}</option>`;
    currencies.forEach(currency=>{
      output+=`<option value="${currency.currency}">${currency.currency}</option>`;
    }) ;
    output+=`</select>
    </td>
    <td id="selected-country"></td>
    <td id="selected-country-price"></td>
    </tr>`;
    this.tbody.innerHTML=output;
  }

  updateValues(description,rate){
    document.getElementById('selected-country').innerHTML=description;
    document.getElementById('selected-country-price').innerHTML=rate;
  }

  getPrice(data){
  //  document.getElementById(country).innerHTML= data;
  document.getElementById('usd').innerHTML=data.usdPrice.bpi.USD.rate;
  document.getElementById('gbp').innerHTML=data.gbpPrice.bpi.GBP.rate;
  document.getElementById('eur').innerHTML=data.eurPrice.bpi.EUR.rate;
  document.getElementById('selected-country').innerHTML=Object.entries(data.cusPrice.bpi)[1][1].description;
  document.getElementById('selected-country-price').innerHTML=Object.entries(data.cusPrice.bpi)[1][1].rate;
  }
}





