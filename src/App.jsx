import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MyPage from "./pages/mypage/MyPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route index path="/user" element={<MyPage />} />
				{/* <Route path="/request/:reqId" element={<RequestDetail />} /> */}
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
