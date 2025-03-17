import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import { Link } from "react-router-dom"; 

import Creative from "./components/Creative";

function App() {
    return(
    
      <div className="App">
       <Router>
        <Routes>
           <Route path="/creative" element={<Creative />} /> {/* ✅ Ensure lowercase path */}
        </Routes>
        </Router>
  
      </div>
    )
  }
  
  export default App;