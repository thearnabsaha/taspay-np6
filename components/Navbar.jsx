const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div className="container">
                    <div className="left">
                        <h1>Taspay</h1>
                    </div>
                    <div className="right">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;