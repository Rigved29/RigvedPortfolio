
interface hamburgerProptypes {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const Hamburger = ({ toggleSidebar, isSidebarOpen }: hamburgerProptypes) => {

    return (
        <div className="hamburger" onClick={(e) => {
            e.stopPropagation();
            toggleSidebar();
        }}>
            <div className={isSidebarOpen ? "cross-line" : 'hamburger-line'}></div>
            <div className={isSidebarOpen ? "cross-line" : 'hamburger-line'}></div>
        </div>
    )

}

export default Hamburger;