import { useLoaderData, useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SingleProduct from "../../components/SingleProducts/SingleProduct";
import { useEffect, useState } from "react";

const BrandDetails = () => {
    const loadedProducts = useLoaderData();
    const brandName = useParams() || {};
    const [brand,setBrand] = useState({});
    const [products,setProducts] = useState([])


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };

    useEffect(() => {

        const selectedProducts = loadedProducts?.filter(product => product.brand === brandName.name)
        setProducts(selectedProducts);

        //find brand
        fetch('/brand.json')
            .then(res => res.json())
            .then(data => {
                const findBrand = data?.find(brand => brand.brand_name === brandName.name)
                setBrand(findBrand)
            })
            .catch(err => console.log(err))

    },[])
    // console.log(products.length);
    // console.log(brandName,brand.add_img[0]);

    const slide1 = brand.add_img?.slideOne || '';
    const slide2 = brand.add_img?.slideTwo || '';
    const slide3 = brand.add_img?.slideThree || '';
    // const slide1 = brand['add_img[0]'] || '';
    // const slide2 = brand['add_img[1]'] || '';
    // const slide3 = brand['add_img[2]'] || '';

    return (
        <div>
            <section className="pb-10 pt-3 px-5">
                <div className=" max-w-screen-xl border border-black mx-auto overflow-hidden">
                    <Slider {...settings}>
                        <div className="single-slider flex items-start justify-center">
                            <img src={slide1} className="h-[300px lg:h-[540px] object-cover block w-full" alt="" />
                        </div>
                        <div className="single-slider  flex items-start justify-center">
                            <img src={slide2} className="h-[300px] lg:h-[540px] object-cover block w-full" alt="" />
                        </div>
                        <div className="single-slider  flex items-start justify-center">
                            <img src={slide3} className="h-[300px] lg:h-[540px] object-cover block w-full" alt="" />
                        </div>
                    </Slider>
                </div>
                <div className=" max-w-screen-xl mx-auto py-12 bg-white">
                    <div className="title-area">
                        <h4>See Our  ,</h4>
                        <h2>New <span>Products</span></h2>
                    </div>
                    <div>
                        {
                            
                            products.length === 0 ? 

                            <div className="min-h-[50vh] flex justify-center items-center"><h1 className="text-3xl font-bold text-gray-400">Sorry, Out of Stock</h1></div> 

                            :<><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                                {
                                    
                                    products?.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
                                }
                            </div></>
                            
                            
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrandDetails;