export default function Navbar() {

    function openSidebar() {
        const sidebarEl = document.querySelector(".sidebar");
        sidebarEl.style.display = "block";
    }

    function closeSidebar() {
        const sidebarEl = document.querySelector(".sidebar");
        sidebarEl.style.display = "none";
    }

    return (
        <>
            <nav className="topbar">
                <div className="container-lg px-3 px-lg-0">
                    <div className="nav-logo">
                        <a href="#">engager.</a>
                    </div>

                    <ul className="d-none d-md-flex">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#premium">Products</a>
                        </li>
                        <li>
                            <a href="#setup">How It Works</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>

                    <button type="button" onClick={() => openSidebar()} className="hamburger-icon d-block d-md-none">
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </nav>

            <nav className="sidebar">
                <div className="text-end">
                    <button type="button" onClick={() => closeSidebar()} className="close-btn">
                        <i className="bi bi-x"></i>
                    </button>
                </div>

                <div className="sidebar-list">
                    <a href="#">Home</a>
                    <a href="#premium">Products</a>
                    <a href="#setup">How It Works</a>
                    <a href="#contact">Contact Us</a>
                </div>
            </nav>
        </>
    )
}