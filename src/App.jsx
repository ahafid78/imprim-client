import './App.css'
import Routes from './components/Routes'
import Navbar from './components/Navbar'
import { useState } from 'react'


function App() {
  const [selectedProduct, setSelectedProduct] = useState({});
  //Créer une function qui store l'objet du produit selectionné dans le state
  function ProductProps(e, product) {
    // e.preventDefault();
    setSelectedProduct(product)
  }
  
  return (
    <div>
      <Navbar />
      <Routes selectedProduct={selectedProduct} ProductProps={ProductProps} />
    </div>
     
    
  )
}

export default App
