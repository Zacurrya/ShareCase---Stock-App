export default function Navbar() {
    return (
        <header>
            <nav>
                <a className="Logo" href="http://localhost:5173/" width="80px" height="80px">
                    <h1>ShareCase</h1>
                    <img src="/images/Logo.png"  alt="ShareCase" />
                </a>
                <div>
                    <button type="button" className="MenuButton">
                        <img src="/images/Dropdown Icon.png" alt="Click to expand menu" width="40px"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}