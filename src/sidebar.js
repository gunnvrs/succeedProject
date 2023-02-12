import React from "react";
import Navbar from "./Navbar";
import Appup from "./Appup";
import Appmix from "./Appmix";

const Sidebar = () => {
    return (
        <div className="sidebar">
                <Navbar/>
                <Appup/>
                <Appmix/>
        </div>

    )
}

export default Sidebar