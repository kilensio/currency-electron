const fixioLatgestApi = 'http://data.fixer.io/api/latest'
const fixioSymbolsApi = 'http://data.fixer.io/api/symbols'
const accessKey = 'a973c432275f79c706d6b4af68318291'

const countryLink = 'http://country.io/currency.json'

const getRequest = async (request, accessKey) => {
  // try {
    const response = await axios.get(request, accessKey ? {
      params: {
        access_key: accessKey
      }
    } : undefined )

    return response.data

  // } catch (error) {
    // return error
    // throw error
  // }
}

const getDataLatest = async () => {
  let request = await getRequest(fixioLatgestApi, accessKey)
  return request.rates
}

const getDataSymbols = async () => {
  let request = await getRequest(fixioSymbolsApi, accessKey)
  return request.symbols
}

const getDataCountries = async () => {
  let request = await getRequest(countryLink)
  return request 
}

const getFlagImg = (countryCode) => {
  return `https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`
}

export const getCurrentItem = (code, { dataLatest, dataSymbols, dataCountries }) => {
  let obj = {}
  obj.currency = code
  obj.rate = dataLatest[code] ? dataLatest[code] : 'undefined'
  obj.fullName = dataSymbols[code] ? dataSymbols[code] : 'undefined'
  
  let country = ''
  for (let c in dataCountries) {
    if (dataCountries[c] !== code) continue
    country = c
    break
  }
  obj.imgSrc = country ? getFlagImg(country) : ''

  return obj
}

export const initStore = async (store) => {
  try {
    store.dataLatest = await getDataLatest()
    store.dataSymbols = await getDataSymbols()
    store.dataCountries = await getDataCountries()    

    return null

  } catch (error) {
    return error
  }
}