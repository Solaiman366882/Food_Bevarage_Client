import { Link, useLoaderData } from "react-router-dom";
import './ProductsDetails.css'

const ProductsDetails = () => {
    const product = useLoaderData();
    const {_id,name,type,price,rating,photo,brand,shortDescription} = product || {};
    return (
        <div>
            <div className="product-details-banner">
                {/* <h2 className="name">{name}</h2> */}
                <div className="title-area">
                        <h4>See Our  ,</h4>
                        <h2>New Products <span>{name}</span></h2>
                </div>
                <div className="section-shape"></div>
            </div>
            <div className=" max-w-screen-xl mx-auto px-3 py-12 bg-white">
                <div className="grid grid-cols-2 gap-5 items-center">
                    <div className="product-left">
                        <img src={photo} alt="" />
                    </div>
                    <div className="product-right">
                        <h3>{name}</h3>
                        <p>{shortDescription}</p>
                        <div className="prod-r-details my-8 grid grid-cols-2 justify-center items-center gap-5">
                            <p>Type: {type}</p>
                            <p>Brand Name: {brand}</p>
                            <p>Price : ${price}</p>
                            <p>Ratings: {rating}/5</p>
                        </div>
                        <div className="flex justify-between items-center gap-5">
                            <Link className="flex-1" to={`/productUpdate/${_id}`}><button className="c-btn w-full">Update</button></Link>
                            <button className="c-btn flex-1">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;