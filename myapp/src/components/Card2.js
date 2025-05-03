import '../App.css';
import img1 from './collabration.png';

function Card2(props){
    return(
        <div className='card2'>
            <img src={props.image} alt="image" height='40px' width='50px'></img>
            <h3  className='card2-h3'>{props.heading}</h3>
            <p className='card2-p'>{props.content}</p>

        </div>
    )
}

export default Card2;