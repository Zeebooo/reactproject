import React from "react";
import { HashLink as Link } from 'react-router-hash-link';


class Home extends React.Component{
	render() {
		return(
		<><div className="top_background_container box_shadow">
			<div className="image_container">
				<img src="img/logo.png" alt="Logo" />
				<p className="yellow text_shadow baloo"><b>Välkommen till Gammlia Pizzeria!
					Hos oss hittar du smakrika pizzor, fräscha sallader och mycket mer – alltid med färska råvaror och
					kärlek till mat. Kom in och njut av en god lunch eller en härlig middag i en trivsam miljö. Vi har
					öppet alla dagar i veckan och ser fram emot att servera dig!
					Välkommen in!</b></p>
				<Link to="/kontaktaoss" className="Button baloo">Kontakta oss här</Link>
			</div>
		</div><div className="home_meny_container" id="changable">
				<div className="pizza_container">
					<div className="pizza_text_container">
						<h3 className="yellow baloo text_shadow">PIZZOR</h3>
						<p className="yellow baloo text_shadow">
							Är du sugen på pizza? <Link to="/meny#start_meny"><b><ins>Kolla in vår meny</ins></b></Link> här och
							hitta din favorit!
						</p>
					</div>
				</div>
				<div className="vegetarisk_container">
					<div className="pizza_text_container">
						<h3 className="yellow baloo text_shadow">VEGETARISKA PIZZOR</h3>
						<p className="yellow baloo text_shadow">
							Är du ute efter en vegetarisk pizza? <Link to="/meny#vegetarian_meny"><b><ins>Kolla in vår
								meny</ins></b></Link> här och hitta din gröna favorit!
						</p>
					</div>
				</div>
			</div><div className="recensioner_container">
				<div className="recensioner_textbox">
					<h2 className="baloo ">Recensioner</h2>
					<p className="baloo2 ">Vill du berätta om ditt senaste besök eller läsa om andras?</p>
					<Link to="/recensioner" className="Button baloo">Se våra recensioner</Link>
				</div>
			</div><div className="bildgalleri_title_container">
				<h1 className="baloo text_shadow yellow"><a href="bildgalleri.html"></a><ins><b>BILDGALLERI</b></ins></h1>
			</div><div className="bildgalleri_container">
				<div className="left_container">
					<div className="small_pictures_container">
						<img src="img/bildgalleri/bild1.png" alt="pizza" />
							<img src="img/bildgalleri/bild2.png" alt="pizza" />
							</div>
							<div className="big_pictures_container">
								<img src="img/bildgalleri/bild3.png" alt="pizza" />
								</div>
						</div>
					<div className="right_container">
						<div className="big_pictures_container">
							<img src="img/bildgalleri/bild6.png" alt="pizza" />
							</div>
						<div className="small_pictures_container">
							<img src="img/bildgalleri/bild4.png" alt="pizza" />
								<img src="img/bildgalleri/bild5.png" alt="pizza" />
								</div>
							</div>
					</div></>)
					}
					}

					export default Home;