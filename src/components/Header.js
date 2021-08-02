import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Header() {
    const history = useHistory()

    return (
        <div>
            <header className="header">
                {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark"> */}
                <nav className="">
                    <div className="homeLinkCont">
                        <Link className="navbar-brand" to='/'>Employee Management App</Link>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header
