import './Banner.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../../assets/images/1.jpg';
// import slider2 from '../../assets/images/1png.png';
import slider3 from '../../assets/images/slider-3.avif';
import slider4 from '../../assets/images/slider-4.jpg';
import slider5 from '../../assets/images/slider-5.jpg';
import slider6 from '../../assets/images/slider-6.jpg';


const Banner = () => {
        const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          cssEase: "linear"
        };
        return (
          <div className="w-full overflow-hidden relative">
            <div className="w-full relative">
                <Slider {...settings}>
                    <div className="single-slider  flex items-start justify-center">
                        <img src={slider1} className="h-[540px] object-cover block w-full" alt="" />
                    </div>
                    {/* <div className="single-slider  flex items-start justify-center">
                        <img src={slider2} className="h-[540px] object-cover block w-full" alt="" />
                    </div> */}
                    <div className="single-slider  flex items-start justify-center">
                        <img src={slider3} className="h-[540px] object-cover block w-full" alt="" />
                    </div>
                    <div className="single-slider  flex items-start justify-center">
                        <img src={slider4} className="h-[540px] object-cover block w-full" alt="" />
                    </div>
                    <div className="single-slider  flex items-start justify-center">
                        <img src={slider5} className="h-[540px] object-cover block w-full" alt="" />
                    </div>
                    <div className="single-slider  flex items-start justify-center">
                        <img src={slider6} className="h-[540px] object-cover block w-full" alt="" />
                    </div>
                </Slider>
            </div>
            <div className="w-full hero-banner py-5">
                <div className=" max-w-screen-xl px-5 relative">
                    <div className='banner-area-hero'>
                        <h1><span >Healthy</span> <span>Smoothie</span></h1>
                        <p>Health drink brands can also use digital marketing to reach consumers and communicate the health benefits of their beverages. This could include creating engaging social media campaigns or targeted ad campaigns.</p>
                        <button className="c-btn">Order now</button>
                    </div>
                </div>
            </div>
            <div className='section-shape'></div>
          </div>
        );
};

export default Banner;