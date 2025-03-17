import '../App.css';
import Card4 from './Card4';
import img1 from './watch.png';
import img2 from './Shoes.png';
import img3 from './phone.png';
import img4 from './coffee.png';



function Projects(){
    return(
        <div id = "Portfolio" className='projects-container'>
             <h1 className='projects-container-h1'>Check Our Projects With Real Results</h1>
            <p className='projects-container-h3'>Dive into our portfolio and discover the remarkable success stories behind campaign </p>
            <p className='projects-container-h3'>Explore our work how we can elevate your brand to new heights </p>
            
        <div className='projects'>
         <Card4 image={img1} title='Branding and Creative'/>
           <Card4 image={img2} title='3D Animation'/>
           <Card4 image={img3} title='Photoshoot and Video marketing'/>
           <Card4 image={img4} title='E-commerce creatives'/>
        </div>
        </div>
    )
}

export default Projects;