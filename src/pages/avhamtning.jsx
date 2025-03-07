import React from "react";

class Avhamtning extends React.Component {
	render() {
		return (<>    <div className="page_title_container">
			<img src="img/avhämtning/Avhämtning.png" alt="page title" />
		</div>

			<div className="page_info_container">
				<div className="info_textbox baloo2 green_fade box_shadow">
					<p style={{color: "white"}} className="text_shadow">
						Om du av någon anledning inte kan njuta av vår fantastiska mat här på Gammlia Pizzeria,
						erbjuder vi en trevlig och enkel möjlighet att ta med maten hem. Beställ, hämta, åk hem och njut!
					</p>
				</div>
			</div>

			<div className="picture_background">
				<div className="avhämtning_picture_container">
					<img src="img/avhämtning/image1.png" alt="picture of restaurant" />
				</div>

				<div className="avhämtning_picture_container">
					<img src="img/avhämtning/image2.png" alt="pizza" />
				</div>

				<div className="avhämtning_picture_container">
					<img src="img/avhämtning/image3.png" alt="pizza" />
				</div>

				<div className="avhämtning_picture_container">
					<img src="img/avhämtning/image4.png" alt="pizza" />
				</div>
			</div></>);
	}
}

export default Avhamtning;