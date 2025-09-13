import PathSlider from "./PathSlider";
import CollapsibleNavbar from "./LandingPage";
import AboutUs from "./AboutUs";

function FirstPage(){
    return(
        <div id='firstComponent'>
            <CollapsibleNavbar />
            <PathSlider />
            <AboutUs />

        </div>
    )
}

export default FirstPage;