import '../App.css';
import img from './watch.png';

function Card4(props){
    return(
        <div className='card4'>
            <img src={props.image} alt='image not found'/>
            <h6 className='card4-h3'><b>{props.title}</b></h6>
        </div>
        
    )
}

export default Card4;