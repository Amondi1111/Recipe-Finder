import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import IngredientInput from './components/IngredientInput'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleSearch = (query) => {
    console.log("User Searched for:", query);
  }

    const handleIngredientSubmit = (ingredient) =>{
      console.log("User submitted ingredient:", ingredient);
    }


  return (
    <>

      <Header />
    
    <IngredientInput onSubmit={handleIngredientSubmit} /> 
        
    
      </>
  )
}

export default App
