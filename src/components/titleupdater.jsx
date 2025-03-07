import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RoutePageTitleUpdater = () => {
	const location = useLocation();

	useEffect(() => {
		const titles = {
		"/": "Hem - Gammlia Pizzeria",
		"/lunch": "Lunch - Gammlia Pizzeria",
		"/meny": "Meny - Gammlia Pizzeria",
		"/kontaktaoss": "Kontakta oss - Gammlia Pizzeria",
		"/avhamtning": "Avhämtning - Gammlia Pizzeria",
		"/recensioner": "Recensioner - Gammlia Pizzeria",
		"/bildgalleri": "Bildgalleri - Gammlia Pizzeria"
	};
	document.title = titles[location.pathname] || "Gammlia Pizzeria";}, [location]);

	return null;
}

export default RoutePageTitleUpdater;