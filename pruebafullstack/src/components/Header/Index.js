import React from "react";
import { Link } from "react-router-dom";


const Header = ({One})=> {
    console.log("estoy en header",One);
    return (

        <div className="container-header">
            <ul >
                <Link  to={"/"} className={`${One}? link-no:link-home`}>HOME</Link>
                <Link to={"/One"} className="link-projects" >PUNTO ONE</Link>
                <Link to={"/Two"} className="link-projects">PUNTO DOS</Link>
                <Link to={"/Three"} className="link-projects">PUNTO TRES</Link>
            </ul>
        </div>

    )

}
export default Header