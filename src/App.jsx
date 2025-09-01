import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleSearch = (query) => {
    console.log("User Searched for:", query);

  };

  return (
    <>

      <Header />
      </>
  );
}

export default App
