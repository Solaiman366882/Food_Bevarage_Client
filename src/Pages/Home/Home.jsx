import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import FreshJuice from "../../components/FreshJuice/FreshJuice";
import Featured from "../../components/Featured/Featured";

const Home = () => {

    const brands = useLoaderData() || []; 

    return (
        <div>
            <Banner></Banner>
            <FreshJuice></FreshJuice>
            <div className="py-12">
                <Featured></Featured>
            </div>
            <section className="py-24 brand-section relative">
                <div className=" max-w-screen-xl mx-auto px-4">
                        <div className="title-area mb-8">
                            <h4>Meet Our</h4>
                            <h2>Popular <span>Brand</span></h2>
                        </div>
                    <div className="grid grid-cols-3 gap-5">
                        {
                            brands.map(brand => <Link key={brand.id} to={`/brand/${brand.brand_name}`}>
                                <div className="brand-card bg-white"> 
                                    <div className="brand-img">
                                        <img src={brand.brand_img} alt="" />
                                    </div>
                                    <h2>{brand.brand_name}</h2>
                                </div>
                            </Link>)
                        }
                    </div>
                </div>
                <div className=" section-shape"></div>
            </section>
        </div>
    );
};

export default Home;