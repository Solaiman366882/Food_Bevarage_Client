import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUpdate = () => {
    const product = useLoaderData();
    const handleUpdateProduct = e => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const photo = form.photo.value;
        const brand = form.brand.value;
        const shortDescription = form.shortDescription.value;
        const updatedProduct = {
            name,
            type,
            price,
            rating,
            photo,
            brand,
            shortDescription
        }
        fetch(`https://food-bevarage-server-mu.vercel.app/product/update/${product._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0)
                {
                    Swal.fire({
                        title: 'Success',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
                
            })

    }
    return (
        <div>
        <section>
            <div className=" max-w-screen-xl mx-auto px-5" >
                <div className="py-10">
                    <div className="title-area">
                        <h4>Want to ,</h4>
                        <h2>Update <span>Product</span></h2>
                    </div>
                    <div className="form-area">
                        <form onSubmit={handleUpdateProduct} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="single-input">
                                <input type="text" name="name" defaultValue={product.name} placeholder="Enter Product name" />
                            </div>
                            <div className="single-input">
                                <input type="text" name="type" defaultValue={product.type} placeholder="Enter Product type" />
                            </div>
                            <div className="single-input">
                                <input type="text" name="price" defaultValue={product.price} placeholder="Enter Price" />
                            </div>
                            <div className="single-input">
                                <input type="text" name="rating" defaultValue={product.rating} placeholder="Enter Ratings" />
                            </div>
                            <div className="single-input">
                                <input type="text" name="photo" defaultValue={product.photo} placeholder="Enter Photo URL" />
                            </div>
                            <div className="single-input">
                                <select className="brand-select" defaultValue={product.brand}  name="brand" id="">
                                    <option value="no-brand" defaultChecked>Select Brand</option>
                                    <option value="Coca-Cola">Coca-Cola</option>
                                    <option value="McDonalds" >McDonalds</option>
                                    <option value="Starbucks" >Starbucks</option>
                                    <option value="PepsiCo" >PepsiCo</option>
                                    <option value="Nestle" >Nestle</option>
                                    <option value="Kellogg's" disabled>Kelloggs</option>
                                </select>
                            </div>
                            <div className="single-input md:col-span-2">
                                <input type="text" name="shortDescription" defaultValue={product.shortDescription} placeholder="Enter a short Description" />
                            </div>
                            <div className="submit-btn-area md:col-span-2">
                                <input className="form-btn w-full" type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
};

export default ProductUpdate;