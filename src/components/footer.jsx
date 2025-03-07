import React from "react";
import { NavLink } from "react-router-dom";

class footer extends React.Component{
	render() {
		return (
		<> 	<footer>
		<div className="logo_footer">
			<img src="img/logo.png" height="55" alt="logo" />
		</div>
		<div className="footer_container">
			<div className="footer_textbox baloo2">
				<h3 className="baloo yellow"><strong>ÖPPETTIDER</strong></h3>
				<ul className="white">
					<li data-day="1,2,3,4">Mån - Tors &nbsp; &nbsp; &nbsp;10:30-20:00  <span className="red_dot"></span>&nbsp;</li>
					<li data-day="5"> Fre &nbsp; &nbsp; &nbsp; 10:00 - 20:00 <span className="red_dot"> </span>&nbsp;</li>
					<li data-day="6,0"> Lör - Sön &nbsp; &nbsp; &nbsp; 12:00 - 20:00 <span className="red_dot"> </span>&nbsp; </li>
				</ul>
			</div>

			<div className="footer_textbox baloo2">
				<h3 className="baloo yellow"><strong>NAVIGERING</strong></h3>
				<ul className="white">
					<li> <NavLink to="/recensioner"> RECENSIONER</NavLink> </li>
					<li> <NavLink to="/meny"> MENY </NavLink></li>
					<li> <NavLink to="/kontaktaoss"> KONTAKTA OSS </NavLink> </li>
				</ul>
			</div>

			<div className="footer_textbox baloo2">
				<h3 className="baloo yellow"><strong>KONTAKA OSS</strong></h3>
				<ul className="white">
					<li>090-77 53 05&nbsp;</li>
					<li>info@gammliapizzeria.se&nbsp; </li>
				</ul>
			</div>
		</div>
	</footer></>
	);
	}
}

export default footer;