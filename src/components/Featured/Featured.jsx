import juiceImg1 from '../../assets/images/beverage-1.jpg';
import juiceImg2 from '../../assets/images/beverage-2.jpg';
import juiceImg3 from '../../assets/images/beverage-3.jpg';
import juiceImg4 from '../../assets/images/beverage-4.jpg';
import juiceImg5 from '../../assets/images/beverage-5.jpg';
import juiceImg6 from '../../assets/images/beverage-6.jpg';
import juiceImg7 from '../../assets/images/beverage-7.jpg';
import juiceImg8 from '../../assets/images/beverage-8.jpg';

const Featured = () => {
    return (
        <section className='featured-section'>
            <div className="title-area bg-white">
                    <h4>See Our  ,</h4>
                    <h2>Featured <span>Juice</span></h2>
            </div>
            <div className=" max-w-screen-xl mx-auto px-4 pt-12">
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className="single-feature"><img className='w-full h-64 object-cover' src={juiceImg1} alt="" /></div>
                        <div className="single-feature"><img className='w-full h-64 object-cover' src={juiceImg2} alt="" /></div>
                        <div className="single-feature"><img className='w-full h-64 object-cover' src={juiceImg3} alt="" /></div>
                        <div className="single-feature"><img className='w-full h-64 object-cover' src={juiceImg4} alt="" /></div>
                        <div className="single-feature"><img className='w-full h-64 object-cover' src={juiceImg5} alt="" /></div>
                        <div className="single-feature"><img className='w-full h-64 object-cover' src={juiceImg6} alt="" /></div>
                        <div className="single-feature"><img className='w-full h-64 object-cover' src={juiceImg7} alt="" /></div>
                        <div className="single-feature md:col-span-2"><img className='w-full h-64 object-cover' src={juiceImg8} alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;