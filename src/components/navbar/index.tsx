import Hamburger from "./hamburger";


const Navbar = () => {

    return (
        <nav className="w-100per p-20 d-flex jc-space-between">
            <div className="d-flex g-10 align-items-center">
                <Hamburger />
                <p className="font-weight-700">Rigved<br />Shrivastava <span className="color-yellow font-weight-700">.</span></p>
            </div>
            <a href="#" download className="download-btn">RESUME</a>
        </nav>
    )

}

export default Navbar;