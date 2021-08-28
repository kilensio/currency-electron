const CurrencyInfo = (info) => {
  let currencyInfo = document.createElement('div')
  currencyInfo.className = 'currency'
  currencyInfo.innerHTML = update(info)
  
  function update(info) {
    let img
    if (info.imgSrc) {
      img = `<img src="${info.imgSrc}" alt="${info.currency}" class="currency__icon"></img>`
    }
    return `<div class="currency__top">
      ${img ? img : ''}<span class="currency__name">${info.fullName}</span>
    </div>
    <div class="currency__rate">
      <span><b>1</b> EUR = </span><span><b class="currency__rate-numb">${info.rate}</b> <span class="currency__rate-name">${info.currency}</span></span></div>
    </div>`
  }

  return currencyInfo
}

export default CurrencyInfo