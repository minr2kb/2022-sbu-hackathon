import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import MyPage from "./pages/mypage/MyPage";
import Ranking from "./pages/ranking/Ranking";
import Login from "./pages/login/Login";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userRecoil } from "./recoil";
import { auth } from "./pages/login/Firebase";

const Layout = () => {
	return (
		<Grid>
			<Outlet />
		</Grid>
	);
};

function App() {
	const [user, setUser] = useState(undefined);
	// useEffect(() => {
	// 	console.log("auth?.currentUser?.uid:", auth?.currentUser?.uid);
	// 	if (auth?.currentUser?.uid && !user)
	// 		(async () => {
	// 			const res = await axios.get(
	// 				`https://sbuhackathon2022.herokuapp.com/user/${auth.currentUser.uid}`
	// 			);
	// 			setUser(res.data);
	// 		})();
	// }, [user, auth]);

	useEffect(() => {
		auth.onAuthStateChanged(() => {
			if (auth?.currentUser) {
				console.log(auth?.currentUser);
				setUser(auth?.currentUser);
			}
		});
	}, []);

	return (
		// <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
		<BrowserRouter>
			<Routes>
				{user && (
					<Route path={"/"} element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="user" element={<MyPage />} />
						<Route path="ranking" element={<Ranking />} />
					</Route>
				)}
				<Route path="*" element={<Login />} />
			</Routes>
		</BrowserRouter>
		// </LoadScript>
	);
}

export default App;
