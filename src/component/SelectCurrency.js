// setOptions(currencyOptions)

const SelectCurrency = (dataOptions, handlerOnChange) => {
  const selectElem = document.createElement('select')
  
  const setOptions = (selectElem) => {
    for (const v in dataOptions) {
      const opt = document.createElement('option')
      // const fullName = Object.keys(dataSymbols).find(symb => symb === v)
      
      opt.setAttribute('value', v)
      opt.innerText = dataOptions[v]
  
      selectElem.appendChild(opt)
    }
  }

  setOptions(selectElem)

  selectElem.addEventListener('change', (e) => {
    const current = selectElem[selectElem.selectedIndex].value
    handlerOnChange(current)
  })

  return selectElem
}

export default SelectCurrency