import juiceImg from '../../assets/images/juice.png';
import './FreshJuice.css'

const FreshJuice = () => {
    return (
        <section className="fresh-juice-section">
            <div className="max-w-screen-xl">
                <div className="fresh-juice-area flex ga-5 justify-center items-center">
                    <div className="fresh-juice-left flex-1">
                        <img src={juiceImg} alt="" />
                    </div>
                    <div className="fresh-juice-right flex-1">
                        <div className="title-area">
                            <h4>Drink for Health</h4>
                            <h2>Fresh Fruit <span>Juices</span></h2>
                            <p>Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua. Nam sint atqui voluptatibus an, pro ne malis semper perpetua.</p>
                            <button className="c-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreshJuice;