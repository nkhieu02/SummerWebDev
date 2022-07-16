import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countrySearch, setCountriesSearch] = useState('');
  useEffect(() => {
    console.log('effect');
    axios.get("https://restcountries.com/v3.1/all")
      .then(resource => {
        console.log("Resouces loaded");
        setCountries(resource.data);
      })
  }, [])

  const handleOnChangeSearch = (event) => {
    console.log(event.target.value);
    setCountriesSearch(event.target.value);
  }
  return (
    <div>
      found countries: <input value={countrySearch} onChange={handleOnChangeSearch} />
      <Filter value={countrySearch} data={ [...countries]}/>
    </div>
  )
}

export default App;