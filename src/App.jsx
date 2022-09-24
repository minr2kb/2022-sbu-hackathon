import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyPage from "./pages/mypage/MyPage";
import Ranking from "./pages/ranking/Ranking";

const Layout = () => {};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route index path="/user" element={<MyPage />} />
				<Route index path="/ranking" element={<Ranking />} />
				{/* <Route path="/request/:reqId" element={<RequestDetail />} /> */}
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
