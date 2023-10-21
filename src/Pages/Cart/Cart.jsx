import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartCard from "../../components/CartCard/CartCard";
import { AuthContext } from "../../Provider/AuthProvider";

const Cart = () => {

    const{user} = useContext(AuthContext)
    const loadedCartData = useLoaderData();
    const [cartData,setCartData] = useState(loadedCartData);
    useEffect(() => {
        const  currentUserCartData = loadedCartData.filter(data => data?.userEmail === user.email)
        setCartData(currentUserCartData)
    },[])

    return (
        <div>
            <div className="product-details-banner">
                <div className="title-area">
                        <h4>Dear User,</h4>
                        <h2>You have Selected <span>{cartData.length} Products</span></h2>
                </div>
                <div className="section-shape"></div>
            </div>
            <div className=" max-w-screen mx-auto px-4 py-12">
                {
                    cartData.length > 0 ? 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            cartData?.map(product => <CartCard key={product._id} cartData={cartData} product={product} setCartData={setCartData}></CartCard>)
                        }
                    </div>
                    :
                    <div className="min-h-[50vh] flex justify-center items-center"><h1 className="text-3xl font-bold text-gray-400">Sorry, No Data Found</h1></div> 
                }
            </div>
        </div>
    );
};

export default Cart;