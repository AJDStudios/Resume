import React, { useState } from "react";
import{ Link, useMatch, useResolvedPath } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"


function CustomLink ({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end:true }) 

	return (
		<li className={isActive ? "active" : ""}>
			<Link to = {to} {...props}>
				{children}
			</Link>
		</li>
	)
}

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)
    
    let theMenu
    let menuMask

    if(showMenu){
        theMenu = 
        <div className="menu">
            <ul className="nav-links">
                <CustomLink to="/Portfolio">Portfolio</CustomLink>
                <CustomLink to="/About">About</CustomLink>
                <CustomLink to="/Skills">Skills</CustomLink>
                <CustomLink to="/Contact">Contact</CustomLink>
            </ul>
        </div>

        menuMask = 
        <div className="menumask"
        onClick ={() => setShowMenu(false)}
        >

        </div>
    }

    return(
        <nav className="nav">
            <FontAwesomeIcon className="burger"
                icon= { faBars }
                onClick ={()=> setShowMenu(!showMenu)}
            />

            { menuMask }

            { theMenu }
        </nav>
    )
}

export default Navigation
