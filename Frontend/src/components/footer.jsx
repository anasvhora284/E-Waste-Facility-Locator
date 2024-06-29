import './footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    let navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleHome = () => {
        navigate("/");
    };

    const handleContact = () => {
        navigate("/contact");
    };

    const handleAbout = () => {
        navigate("/about");
    };

    const handleLocateFacility = () => {
        navigate("/locateFacility");
    };
    return ( 
        <>
                <div className="grid-container">
                    <div className = "grid-item" id="grid-item-1">Logo</div>
                    <div className = "grid-item" id="grid-item-2">
                        <div className="grid-item-title">
                            Quick access links:
                        </div>
                        <div className="grid-item-container">
                            <ul>
                                <li className="grid-items"><a href="" onClick={handleHome}>Home</a></li>
                                <li className="grid-items"><a href="" onClick={handleLocateFacility}>Locate</a></li>
                                <li className="grid-items"><a href="" >News</a></li>
                                <li className="grid-items"><a href="" onClick={handleAbout}>About</a></li>
                                <li className="grid-items"><a href="" onClick={handleContact}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className = "grid-item" id="grid-item-3">
                        <div className="grid-item-title">
                            If You need help:
                        </div>
                        <div className="grid-item-container">
                            <ul>
                                <li className="grid-items">
                                    <a href="">Contact Supprt,</a>
                                </li>
                                <li className="grid-items">
                                    <p>Our working hours are Monday - Friday</p>
                                </li>
                                <li className="grid-items">
                                    <p>For chat, email & phone: 10:00AM - 6:00PM (IST)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className = "grid-item" id="grid-item-4">
                        <div className="grid-item-title">
                            Office Location:
                        </div>
                        <div className="grid-item-container">
                            <ul>
                                <li className="grid-items">
                                    <p>135 E 57th street office,</p>
                                    <p>17-108 New York, NY, 10022</p>
                                </li>
                                <li className="grid-items">
                                    <p>+1 929 999 1766</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className = "grid-item" id="grid-item-5">
                        <div className="grid-item-container">
                            <ul>
                                <li className="grid-items"><p>We care about the security of our platform. If you have found a security issue, Please contact us at</p></li>
                                <li className="grid-items">example@gmail.com</li>
                                <li className="grid-items">Terms & Condition Privacy Policy Cookie Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>
     );
}
 
export default Footer;