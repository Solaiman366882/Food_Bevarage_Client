import PropTypes from 'prop-types';
import './SingleProducts.css'
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {

    const {_id,photo,name,price} = product || {};
    return (
        <div >
            <div className='product-card flex flex-col justify-between h-full'>
                <div className='card-img'>
                    <img src={photo} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <div className='flex justify-between items-center'>
                        <p>Price: ${price}</p>
                        <Link to={`/product/${_id}`}><button className='c-btn'>Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

SingleProduct.propTypes = {
    product:PropTypes.object
}
export default SingleProduct;