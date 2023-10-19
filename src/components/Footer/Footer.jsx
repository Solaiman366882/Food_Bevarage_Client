import logo from '../../assets/images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='footer-section'>
                <div className=' max-w-screen-xl mx-auto px-5'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h6>Contact us</h6>
                            <ul>
                                <li>Your mail @ gmail.com</li>
                                <li>Your mail @ gmail.com</li>
                                <li>(123) 4567 89000</li>
                            </ul>
                        </div>
                        <div className="">
                            <img className='mx-auto' src={logo} alt="" />
                            <p className="copy">© 2023 All Rights Reserved.</p>
                        </div>
                        <div >
							<h6>Visit</h6>
							<div >6Fifth Avenue 5501, Broadway, <br /> New York Morris Street <br/> London 1234</div>
						</div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;