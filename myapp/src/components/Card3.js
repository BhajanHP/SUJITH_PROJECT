

import '../App.css';

function Card3(props){
    return(
        <div className='card3'>
            <p card3-p1>⭐⭐⭐⭐⭐</p>
            <h5 className='card3-h2'>{props.name}</h5>
           <h6 className='card3-h3'>{props.desg}</h6>
            <p className='card3-p'>{props.review}</p>
        </div>
    )
}

export default Card3;