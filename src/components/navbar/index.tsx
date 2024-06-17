'use client'
import React, { useState } from "react";
import Hamburger from "./hamburger";
import { GoDesktopDownload } from "react-icons/go";
import Sidebar from "./sidebar";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    }

    return (
        <nav className="w-100per p-20 d-flex jc-space-between">
            <div className="d-flex g-10 align-items-center">
                <Hamburger toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
                <p className="font-weight-700">Rigved<br />Shrivastava <span className="color-yellow font-weight-700">.</span></p>
            </div>
            <a href="/assets/resume/Resume2024.pdf" download="Rigved_Resume" className="download-btn" ><GoDesktopDownload className="icon" /> <span className="text">RESUME</span></a>
            <Sidebar isSidebarOpen={isSidebarOpen} />
        </nav>
    )

}

export default Navbar;