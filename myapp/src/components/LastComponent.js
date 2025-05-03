import Contact from "./Contact";
import Footer from "./Footer";
import Review from "./Review";

function LastComponent(){
    return(
        <div id='LastComponent'>
            <Review />
            <Contact />
            <div className="mainFooterDiv">
            <Footer />
            </div>

          
        </div>
    )
}

export default LastComponent;