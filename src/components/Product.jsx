/* eslint-disable react/prop-types */

export default function Product({ product }) {
    return (
        <div className="desc">

           
                <div className="descimg"><img  src={product.image} alt={product.title} width={200} height={200} /></div>
                
                <div><h3 ><span className="detitle"> {product.title} </span> </h3></div>
                <div>
                <p><span className="description"> {product.description} </span></p>
                </div>

                <div  style={{ display: 'flex' }}>
                   
                    <h2> <span className="price"> {product.price} £ </span> </h2>

                    {/* <h6>{product?.rating?.rate}</h6>
                    <h6>{product?.rating?.count}</h6> */}
                </div>

           
                   
        </div>
    )
}
