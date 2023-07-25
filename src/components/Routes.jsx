
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Agences from './Agences'
import Product from './Product'
import Products from './Products'
import Produits from './Produits'

export default function MyRoutes({ selectedProduct, ProductProps }) {
  return (
    <div>

     <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/agences' element={<Agences/>} />

        <Route path='/produits' element={<Produits/>} />

         {/* Route dynamique vers la page des produits */}
        <Route path='/products' element={<Products ProductProps={ProductProps} />} />

         {/* Route dynamique vers la page des agence */}
         {/* <Route path='/agences' element={<Agences AgenceProps={AgenceProps} />} /> */}
         {/* Route dynamique vers la page du produit selectioné */}

        {/* <Route path='/produits/:produitId' */}
                {/* //  On passe le produit séléctionné en props vers le composant du produit selectionné */}
                {/* element={<Produit produit={selectedProduit} />}
        /> */}

         {/* Route dynamique vers la page du produit selectioné */}
        <Route path='/products/:productId'
                //  On passe le produit séléctionné en props vers le composant du produit selectionné
                element={<Product product={selectedProduct} />}
        />

      </Routes> 

    </div>
  )
}
