import React from "react";
import { ThumbsUp } from "lucide-react";
import Likebutton from  '../components/likeButton';

class Meny extends React.Component {
	render() {
		return (
			<>
				<div id="start_meny" className="page_title_container">
					<img src="img/meny/meny_titel.png" height="100" alt="title of the page" />
				</div>

				<div className="meny_container">
					<div className="meny_title_container red_fade box_shadow">
						<div className="meny_title_container_content baloo yellow bold">
							<h3 className="text_shadow">PIZZOR</h3>
							<img src="img/meny/pizza.png" alt="pizza" />
						</div>
					</div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>1. MARGERITA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Ost </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 99:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>2. VESUVIO</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Ost, skinka </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 109:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>3. SORENA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Räkor, färska champinjoner </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
							<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 115:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>4. CAPRIOCCIOSA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Skinka, färska champinjoner </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 115:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>5. HAWAII </p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Skinka, ananas </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 115:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>6. BUSSOLA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Skinka, räkor </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 115:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>7. ALTONE</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Tonfisk, lök </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 115:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>8. DISCO</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Köttfärs, färsk vitlök, färska tomater</p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 115:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>9. MALIN SPECIAL</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Skinka, lök, vitlök, ruccola, bearnaisesås</p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 119:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>10. MILANO</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Färska champinjoner, köttfärs, lök</p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 119:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>11. MARINARA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Räkor, tonfisk, musslor </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 124:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>12. VENEZIA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Köttfärs, lök, paprika, ägg </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 124:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow red_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>13. MAXIM</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Skinka, räkor, färska champinjoner </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 124:- </p>
						</div>
					</div>

					<div id="vegetarian_meny" className="meny_title_container green_fade box_shadow">
						<div className="meny_title_container_content baloo yellow bold">
							<h3 className="text_shadow">VEGETARISKA PIZZOR</h3>
							<img src="img/meny/vegetariskpizza.png" alt="vegetarisk pizza" />
						</div>
					</div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>14. TUMBA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Färska champinjoner </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 104:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow green_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>15. BAHAMAS</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Färsk ananas, banan, curry </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 109:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow green_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>16. FALAFELPIZZA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Falafal, tomat, peperoni, lök, vitlöksås</p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 124:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow green_fade"></div>

					<div className="meny_options_container">
						<div className="meny_textbox text_shadow">
							<div className="pizza_name baloo yellow bold">
								<p>17. SPENATPIZZA</p>
							</div>
							<div className="pizza_ingredients baloo2 white">
								<p> Färska champinjoner, lök, fetaost, kalamataoliver, spenat, färsk vitlök </p>
							</div>
						</div>
						<div className="price_textbox baloo2 yellow bold text_shadow">
						<div className="like_button_container white">
								<Likebutton />
							</div>
							<p> 115:- </p>
						</div>
					</div>
					<div className="meny_divider box_shadow green_fade"></div>
				</div>
			</>
		);
	}
}

export default Meny;