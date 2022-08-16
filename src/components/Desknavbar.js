import{ Link, useMatch, useResolvedPath } from "react-router-dom";

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

function DeskNavBar(){
    return(
        <nav className="desknav">
            <div className="deskmenu">
                <ul className="desknav-links">
                    <CustomLink to="/Portfolio">Portfolio</CustomLink>
                    <CustomLink to="/About">About</CustomLink>
                    <CustomLink to="/Skills">Skills</CustomLink>
                    <CustomLink to="/Contact">Contact</CustomLink>
                </ul>
            </div>
        </nav> 
    )
}   

export default DeskNavBar