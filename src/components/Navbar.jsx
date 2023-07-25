import '../App.css'
import { Link } from "react-router-dom"

export default function Navbar() {
   let logoURL = "https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&w=1600" 
  return (
    <div className="navbar"> 

        <nav>
                <div>
               <img src={logoURL} width="75px" />
                </div> 

                <div className="qui">
                    <Link to={"/produits"}>
                            <h3>Nos Produits</h3>
                    </Link> 
                </div>
                <div className="qui">
                    <Link to={"/agences"}>
                            <h3>Nos points de vente</h3>
                    </Link> 
                </div>
                <div className="qui">
                    <Link to={"/"}>
                            <h3>Qui somme-nous ?</h3>
                    </Link> 
                </div>                            
        </nav>    

            <Link to={'/products'}>
                <button className="prod">Livres <span className="auto">informatique</span> </button>
            </Link>  

            
    </div>
  )
}
