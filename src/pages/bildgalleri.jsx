import React from "react";

class Bildgalleri extends React.Component{
	render(){
		return (<>	<div className="page_title_container">
			<img src="img/bildgalleri/bildgalleri.png" alt="page title" />
		</div>
	
		<div className="pictures_container_background">
			<div className="pictures_container">
				<img src="img/bildgalleri/bild1.png" alt="pizza" />
			</div>
			<div className="pictures_container">
				<img src="img/bildgalleri/bild2.png" alt="pizza" />
			</div>
			<div className="pictures_container">
				<img src="img/bildgalleri/bild3.png" alt="pizza" />
			</div>
			<div className="pictures_container">
				<img src="img/bildgalleri/bild4.png" alt="pizza" />
			</div>
			<div className="pictures_container">
				<img src="img/bildgalleri/bild5.png" alt="pizza" />
			</div>
			<div className="pictures_container">
				<img src="img/bildgalleri/bild6.png" alt="pizza" />
			</div>
		</div></>);
	}
}

export default Bildgalleri;