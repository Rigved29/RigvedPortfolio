import Hamburger from "./hamburger";
import { GoDesktopDownload } from "react-icons/go";

const Navbar = () => {

    return (
        <nav className="w-100per p-20 d-flex jc-space-between">
            <div className="d-flex g-10 align-items-center">
                <Hamburger />
                <p className="font-weight-700">Rigved<br />Shrivastava <span className="color-yellow font-weight-700">.</span></p>
            </div>
            <a href="/assets/resume/Resume2024.pdf" download="Rigved_Resume" className="download-btn" ><GoDesktopDownload className="icon" /> <span className="text">RESUME</span></a>
        </nav>
    )

}

export default Navbar;