import store from "./store/store.js"
import { getCurrentItem, initStore } from "./store/actions.js"
import SelectCurrency from "./component/SelectCurrency.js"
import CurrencyInfo from "./component/CurrencyInfo.js"

const currencyOptions = document.querySelector('.currency-options')
const currencyContainer = document.querySelector('.container')
const currentDate = document.getElementById('Date')

const handlerChange = (code) => {
  let oldChild = currencyContainer.querySelector('.currency')
  currencyContainer.replaceChild(CurrencyInfo(getCurrentItem(code, store)), oldChild)
}

const init = async () => {
  currentDate.innerText = 'Date: ' + (new Date()).toLocaleDateString()

  let error = await initStore(store)
  // let error = 'error'
  if (error) {
    currencyContainer.innerText = error
    return
  }
  
  const select = SelectCurrency(store.dataSymbols, handlerChange)
  currencyOptions.appendChild(select)
  currencyContainer.appendChild(CurrencyInfo(getCurrentItem(select.value, store)))
}

window.addEventListener('DOMContentLoaded', () => {
  init()
})