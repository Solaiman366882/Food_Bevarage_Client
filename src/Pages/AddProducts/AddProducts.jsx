

const AddProducts = () => {
    return (
        <div>
            <section>
                <div className=" max-w-screen-xl mx-auto px-5" >
                    <div className="py-10">
                        <div className="title-area">
                            <h4>Want to ,</h4>
                            <h2>Add New Products<span>Product</span></h2>
                        </div>
                        <div className="form-area">
                            <form className="grid grid-cols-2 gap-5">
                                <div className="single-input">
                                    <input type="text" name="name" placeholder="Enter Product name" />
                                </div>
                                <div className="single-input">
                                    <input type="text" name="type" placeholder="Enter Product type" />
                                </div>
                                <div className="single-input">
                                    <input type="text" name="price" placeholder="Enter Price" />
                                </div>
                                <div className="single-input">
                                    <input type="text" name="ratings" placeholder="Enter Ratings" />
                                </div>
                                <div className="single-input">
                                    <input type="text" name="photo" placeholder="Enter Photo URL" />
                                </div>
                                <div className="single-input">
                                    <select className="brand-select" name="brand" id="">
                                        <option value="no-brand" defaultChecked>Select Brand</option>
                                        <option value="Coca-Cola">Coca-Cola</option>
                                        <option value="McDonalds" >McDonalds</option>
                                        <option value="Starbucks" >Starbucks</option>
                                        <option value="PepsiCo" >PepsiCo</option>
                                        <option value="Nestle" >Nestle</option>
                                        <option value="Kellogg's" disabled>Kelloggs</option>
                                    </select>
                                </div>
                                <div className="single-input col-span-2">
                                    <input type="text" name="shortDescription" placeholder="Enter a short Description" />
                                </div>
                                <div className="submit-btn-area col-span-2">
                                    <input className="form-btn w-full" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddProducts;