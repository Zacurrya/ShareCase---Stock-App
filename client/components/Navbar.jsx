import React from 'react'
export default function Navbar() {
    return (
        <header>
            <nav>
                <div className="Logo" width="80px" height="80px">
                    <h1>ShareCase</h1>
                    <img src="/images/Logo.png"  alt="ShareCase" />
                </div>
                <div>
                    <button type="button" className="MenuButton">
                        <img src="/images/Dropdown Icon.png" alt="Click to expand menu" width="40px"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}