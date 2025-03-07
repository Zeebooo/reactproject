import React from "react";
import { NavLink } from "react-router-dom";

class nav extends React.Component {
	render() {
		return (
			<>	<nav>
				<div className="banner baloo">
					<div className="logo_nav">
						<img src="img/logo.png" height="75" alt="Logo" />
					</div>

					<div className="navtext baloo">
						<NavLink to="/" className={({ isActive }) => isActive ? "nav_link nav_link_active" : "nav_link"}>HEM</NavLink>
						<NavLink to="/meny" className={({ isActive }) => isActive ? "nav_link nav_link_active" : "nav_link"}>MENY</NavLink>
						<NavLink to="/lunch" className={({ isActive }) => isActive ? "nav_link nav_link_active" : "nav_link"}>LUNCH</NavLink>
						<NavLink to="/avhamtning" className={({ isActive }) => isActive ? "nav_link nav_link_active" : "nav_link"}>AVHÄMTNING</NavLink>
						<NavLink to="/bildgalleri" className={({ isActive }) => isActive ? "nav_link nav_link_active" : "nav_link"}>BILDGALLERI</NavLink>
						<NavLink to="/kontaktaoss" className={({ isActive }) => isActive ? "nav_link nav_link_active" : "nav_link"}>KONTAKTA OSS</NavLink>
						<NavLink to="/recensioner" className={({ isActive }) => isActive ? "nav_link nav_link_active" : "nav_link"}>RESENCIONER</NavLink>

					</div>
				</div>
			</nav></>
		);
	}
}

export default nav;