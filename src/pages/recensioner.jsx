import React from "react";

class Recensioner extends React.Component {
	render() {
		return (<>	<div className="page_title_container">
			<img src="img/recensioner/Recensioner.png" alt="page title" />
		</div>

			<div className="recensioner_background">
				<div className="username_container box_shadow" style={{width: "40%"}}>
					<input className="review_gray baloo2" type="text" placeholder="Epost..." />
				</div>

				<div className="rating_container review_gray box_shadow">
					<span className="star">&#9733;</span>
					<span className="star">&#9733;</span>
					<span className="star">&#9733;</span>
					<span className="star">&#9733;</span>
					<span className="star">&#9733;</span>
				</div>
			</div>

			<div className="review_container baloo2 box_shadow">
				<div className="review_textbox">
					<textarea className="review_gray" placeholder="Lämna din recension här..."></textarea>
				</div>
			</div>

			<div className="submit_container baloo2">
				<button className="review_gray box_shadow"> Skicka </button>
			</div>

			<div className="placeholder_reviews_comtainer">
				<img src="img/Recension1.png" alt="recension example image" />
				<img src="img/Recension1.png" alt="recension example image" />
				<img src="img/Recension1.png" alt="recension example image" />
				<img src="img/Recension1.png" alt="recension example image" />
				<img src="img/Recension1.png" alt="recension example image" />
				<img src="img/Recension1.png" alt="recension example image" />
			</div></>);
	}
}

export default Recensioner;