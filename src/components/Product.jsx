/* eslint-disable react/prop-types */

export default function Product({ product }) {
    return (
        <div className="desc">

            <div >
                <div className="descimg"><img  src={product.image} alt={product.title} width={200} height={200} /></div>
                
                <div><h3 ><span className="detitle"> {product.title} </span> </h3></div>
                <div  style={{ display: 'flex' }}>
                    <p><span className="description"> {product.description} </span></p>

                    <h1> <span className="price"> {product.price} £ </span> </h1>

                    {/* <h6>{product?.rating?.rate}</h6>
                    <h6>{product?.rating?.count}</h6> */}
                </div>
            </div>
                   
        </div>
    )
}
