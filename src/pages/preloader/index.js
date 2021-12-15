import React from 'react'
import logo from "../../assets/images/nusa-akses2.png"

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader-logo animate__animated animate__pulse">
                <img src={logo} alt="" width="120" />
            </div>
        </div>
    )
}

export default Preloader
