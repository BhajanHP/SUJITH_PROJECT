import PathSlider from "./PathSlider";
import CollapsibleNavbar from "./LandingPage";
import AboutUs from "./AboutUs";
import FloatingButtons from "./FloatingButtons";

function FirstPage(){
    return(
        <div id='firstComponent'>
            <CollapsibleNavbar />
            <PathSlider />
            <AboutUs />
            <FloatingButtons />

        </div>
    )
}

export default FirstPage;