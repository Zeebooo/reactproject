import React from "react";

class Kontaktaoss extends React.Component {
	render() {
		return (<>	<div className="form_container">
			<div className="form_info_container">
				<h1 className="baloo white text_shadow"> Kontakta oss </h1>
				<p> Lämna kontaktuppgifter och lite kort om vad du har på hjärtat så hör vi av oss inom 24 timmar!</p>
				<p> Gammliavägen 3</p>
				<p> 903 42 Umeå</p>
				<p> 090-77 53 05</p>
				<p> info@gammliapizzeria.se</p>
			</div>

			<div className="form_section_container">
				<h5>NAMN ELLER FÖRETAG</h5>
				<input className="box_shadow" id="name" placeholder="Ditt namn..." type="text" />
			</div>
			<div className="form_section_container">
				<h5>MEJLADRESS</h5>
				<input className="box_shadow" id="mail" placeholder="Din mejladress..." type="email" />
			</div>
			<div className="form_section_container">
				<h5>TELEFONNUMMER</h5>
				<input className="box_shadow" id="number" placeholder="Ditt telefonnummer..." type="text" />
			</div>
			<div className="form_section_container">
				<h5>ÄMNE</h5>
				<input className="box_shadow" id="subject" placeholder="Ämne..." type="text" />
			</div>
			<div className="form_section_container">
				<h5>MEDDELANDE</h5>
				<textarea className="box_shadow baloo2" id="message" placeholder="Skriv ditt meddelande"></textarea>
			</div>

			<div className="checkbox_container">
				<input type="checkbox" id="confirm" />
				<p className="baloo2 white text_shadow">Jag godkänner att Gammlia pizzeria använder min information för att kontakta mig och jag godkänner deras policy.</p>
			</div>

			<div className="submit_form_container">
				<input type="submit" id="submit_button" value="Skicka" />
			</div>
		</div>
			<div id="scroll_top" className="baloo review_gray box_shadow">Skrolla längst upp</div></>
		);
	}
}

export default Kontaktaoss;