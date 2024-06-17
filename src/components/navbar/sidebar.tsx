
interface sidebarPropTypes {
    isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: sidebarPropTypes) => {

    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
            <ul>
                <li>About Me</li>
                <li>Contact Me</li>
                <li>My journal</li>
            </ul>
        </div>
    )

}

export default Sidebar;