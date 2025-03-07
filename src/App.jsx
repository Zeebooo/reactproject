import Nav from './components/nav';
import Home from './pages/index';
import Meny from './pages/meny';
import Lunch from './pages/lunch';
import Footer from './components/footer';
import Avhamtning from './pages/avhamtning';
import Bildgalleri from './pages/bildgalleri';
import Kontaktaoss from './pages/kontaktaoss';
import Recensioner from './pages/recensioner';
import RoutePageTitleUpdater from './components/titleupdater';
import ScrollToTop from './components/scrolltop';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css'

function App() {

	return (
			<Router>
				<RoutePageTitleUpdater />
				<ScrollToTop />
				<Nav />
				<Routes>
					<Route path="/" exact element={<Home />}/>
					<Route path="/meny" element={<Meny />}/>
					<Route path="/lunch" element={<Lunch />}/>
					<Route path="/avhamtning" element={<Avhamtning />}/>
					<Route path="/bildgalleri" element={<Bildgalleri />}/>
					<Route path="/kontaktaoss" element={<Kontaktaoss />}/>
					<Route path="/recensioner" element={<Recensioner />}/>
				</Routes>
				<Footer />
			</Router>
	);
}
export default App;