import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dangnhap from "./Auth/Dangnhap";
import Dangky from "./Auth/Dangky";
import Gioithieu from "./Gioithieu";
import Lienhe from "./Lienhe";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dangnhap" element={<Dangnhap />} />
			<Route path="/dangky" element={<Dangky />} />
			<Route path="/gioithieu" element={<Gioithieu />} />
			<Route path="/lienhe" element={<Lienhe />} />
		</Routes>
	);
}

export default App;
