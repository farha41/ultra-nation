import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country';
import Cart from './Components/Cart/Cart';

function App() {

const[countries,setCountries]=useState([])
const [cart,setCart]=useState([])


useEffect(() =>{
fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => setCountries(data))
},[])

const handleAddCountry = (country) =>{
  const newCart = [...cart,country]
  setCart(newCart);
}


  return (
    <div className="App">
      <header className="App-header">
        <h1>Country:{countries.length}</h1>
        <h1>Country added:{cart.length}</h1>
        <Cart cart={cart}></Cart>
        <ul>
          {
            countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
