'use client'
import React, { useState } from "react";
import Hamburger from "./hamburger";
import { GoDesktopDownload } from "react-icons/go";
import Sidebar from "./sidebar";

interface navProps {
    isSidebarOpen: boolean,
    setIsSidebarOpen: any,
    handleSidebarClose: () => void;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, handleSidebarClose }: navProps) => {

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState: boolean) => !prevState);

    }


    return (
        <nav className="w-100per p-bottom-6rem p-top-20 p-inline-1rem d-flex jc-space-between" onClick={(e) => handleSidebarClose()}>
            <div className="d-flex g-10 align-items-center">
                <Hamburger toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <p className="font-weight-700 margin-left-5">Rigved<br />Shrivastava <span className="color-yellow font-weight-700">.</span></p>
            </div>
            <a href="/assets/resume/Rigved_Resume_SDE.pdf" download="Rigved_Resume" className="download-btn" >
                {/* <GoDesktopDownload className="icon" />  */}
                <span className="text">RESUME</span></a>
            <Sidebar isSidebarOpen={isSidebarOpen} />
        </nav>
    )

}

export default Navbar;