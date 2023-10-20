import PropTypes  from 'prop-types'
import '../SingleProducts/SingleProducts.css'
import Swal from 'sweetalert2';

const CartCard = ({product,setCartData,cartData}) => {
    const {_id,photo,name,price} = product || {};

    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
                fetch(`https://food-bevarage-server-1xfd3g24f-solaimans-projects-9ae0c3bf.vercel.app/cart/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if(data.deletedCount > 0)
                        {
                            Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )
                            const remaining =  cartData?.filter(product => product._id !== _id);
                            setCartData(remaining)
                        }
                        //deletedCount
                    })
            }
          })

        
    }

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
                        <button onClick={handleDelete} className='c-btn'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    product:PropTypes.object,
    setCartData:PropTypes.func,
    cartData:PropTypes.array
}
export default CartCard;