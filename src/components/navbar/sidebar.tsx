
interface sidebarPropTypes {
    isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: sidebarPropTypes) => {

    const scrollToContact = () => {

        const element = window?.document?.getElementById('contact_me');
        const rect = element?.getBoundingClientRect();
        const distanceFromTop = rect?.top || 500;


        window.scrollTo({
            top: distanceFromTop - 200,
            behavior: 'smooth',
        });

    }

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
            <ul>
                {/* <li>About Me</li> */}
                <li onClick={scrollToContact}>Contact Me</li>
                <li><a href="https://github.com/Rigved29" target="_blank">Github</a></li>
                <li><a href="https://www.linkedin.com/in/rigved-shrivastava-7055671a5/" target="_blank">Linkedin</a></li>
                {/* <li>My journal</li> coming Soon*/}
            </ul>
        </div>
    )

}

export default Sidebar;