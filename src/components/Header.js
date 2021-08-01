import React from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

function Header() {
    const history = useHistory()

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <Link className="navbar-brand" to='/'>Emp Mgmt App</Link>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Header
