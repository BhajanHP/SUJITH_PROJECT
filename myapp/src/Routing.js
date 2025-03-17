import React from "react";

import Creative from "./components/Creative";
import { BrowserRouter } from "react-router-dom";

function Routing(){
    return (
        <BrowserRouter>
             <Route path='Creative' element={<Creative/>}></Route>
        </BrowserRouter>
    )
}