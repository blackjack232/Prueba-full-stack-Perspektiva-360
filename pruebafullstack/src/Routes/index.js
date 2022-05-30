import { Route, Routes as Router } from "react-router-dom";
import PuntoOne from "../pages/PuntoOne";
import PuntoTwo from "../pages/PuntoTwo/Index";
import PuntoThree from "../pages/PuntoThree";
import Home from "../pages/Home";

const Routes = () => {
    return (
        <>
            <Router>
                <Route path="/" element={<Home />} />
                <Route path="/:One" element={<PuntoOne />} />
                <Route path="/Two" element={<PuntoTwo />} />
                <Route path="/Three" element={<PuntoThree />} />
            </Router>

        </>
    );
}

export default Routes;
