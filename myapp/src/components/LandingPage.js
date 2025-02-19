import '../App.css';
import img from './navbar.png';
import img2 from './afn@2x.png';

function LandingPage(){
    return(
    <div className='front-page'>
        <img src={img2} alt="logo" className='logo'></img>
        <img src={img} alt="landing-page" className='landingPageImg'></img>
        <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>OUR SERVICES</li>
            <li>PORTFOLIO</li>
            <li>TESTIMONALS</li>
            <li>CONTACT US</li>
        </ul>
        <div className='branding'>
        <h1>POWERING </h1>
        <h1>BRANDS </h1>
        <h1>DELIVERING </h1>
        <h1>IMPACTS</h1>
        </div>
    </div>
    )
}

export default LandingPage;



