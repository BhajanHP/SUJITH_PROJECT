import '../App.css';
import Card2 from './Card2';
import img1 from './Images/expertize_copy.png';
import img2 from './Images/collabration_copy.png';
import img3 from './Images/impact_copy.png';

function ChooseUS(){
    return (
        <div className='chooseUS-container' data-aos="fade-up">
            <h1 className='chooseUS-container-h1' style={{  fontWeight: 700 }}>Why Choose US</h1>
            <h3 className='chooseUS-container-h2' style={{  fontWeight: 600 }}> Creativity That Delivers Results</h3>
            <p className='chooseUS-container-p' style={{  fontWeight: 600 }}>We craft designs that are not only beautiful but also staratigically impactful. Here is why client love working with us</p>
            <p className='chooseUS-container-p'></p>
        <div className='chooseUS card-container' data-aos="zoom-in">
            <Card2  image={img1} heading="Expertize" content="We combine Industry-leading design skills with Innovative thinking"/>
            <Card2 image={img2} heading="Collaboration" content="We work closely with you to ensure vision is brought to life."/>
            <Card2 image={img3} heading="Impact" content="Our designs create real connectionsand drive measurable results"/>
        </div>
        </div>
    )
}

export default ChooseUS;