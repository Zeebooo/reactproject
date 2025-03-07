import React from "react";

class Lunch extends React.Component {
	render() {
		return (
			<>
				<div className="page_title_container">
					<img src="img/lunch/lunch.png" alt="page title" />
				</div>

				<div className="lunch_container">
					<div className="lunch_textbox baloo2 text_shadow box_shadow" style={{ color: "white" }}>
						<p>Letar du efter en god och prisvärd lunch i Umeå? Välkommen till Gammlia Pizzeria, där vi serverar en
							härlig lunch varje måndag till fredag mellan 10:30–14:00!
							För endast 110 kr får du en varierad lunchmeny som skiftar från dag till dag – alltid med smakrika
							rätter som passar alla. Självklart ingår även en fräsch salladsbuffé och en 33 cl dricka för att
							fullända måltiden.
							Ta en paus i vardagen och njut av en god lunch i trivsam miljö. Vi ses på Gammlia Pizzeria!
						</p>
					</div>

					<div className="video_container">
						<video src="img/lunch/lunch video.mp4" autoPlay muted controls></video>
					</div>
					<div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.5742624391737!2d20.281769278234194!3d63.827861277096375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b1ac1242971%3A0x54d8d4fc73c0247e!2sPizzeria%20Gammlia!5e0!3m2!1ssv!2sse!4v1739119421297!5m2!1ssv!2sse"
							width="600" height="450" style={{border:0}} loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></iframe>
					</div>


				</div>
			</>
		);
	}
}

export default Lunch;