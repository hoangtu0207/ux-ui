import Footer from "./components/Footer";
import Header from "./components/Header";
import Trangchu from "./Trangchu";

export default function Home() {
	return (
		<div>
			<header>
				<Header />
			</header>
			<div>
				<Trangchu />
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}
