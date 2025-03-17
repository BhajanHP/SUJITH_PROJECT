import '../App.css';
import img1 from './collabration.png';

function Card(props){
    return(
        <div className='card'>
            <img src={props.image} alt="image" height='50px' width='50px' className='servisesImg'></img>
           <b> <h6 className='card-h3'>{props.heading}</h6></b>
            <p className='card-p'>{props.content}</p>
            <a href=""><button className='know-more-button'>Know more</button></a>
        </div>
    )
}

export default Card;