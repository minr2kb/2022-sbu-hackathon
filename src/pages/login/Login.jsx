import React, { useEffect, useState } from "react";

import { Grid, Button, IconButton, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//
// import { signInWithGoogle } from "./Firebase";

// import
const Login = () => {
	const navigate = useNavigate();
	// const clientId = "";
	// const [userID, setUserID] = useState(0);

	// const [displayLogo, setDisplayLogo] = useState(true);
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setDisplayLogo(false);
	// 	}, 2000);
	// }, []);

	const firebaseConfig = {
		apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
		authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
		projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
		storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.REACT_APP_FIREBASE_APP_ID,
		measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	// const analytics = getAnalytics(app);
	const auth = getAuth(app);

	const user = new GoogleAuthProvider();

	const signInWithGoogle = (onSuccess, onFailure) => {
		signInWithPopup(auth, user)
			.then(result => {
				console.log(result);
				// const name = result.user.displayName;
				// const email = result.user.email;
				// const profilePic = result.user.photoURL;
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				onSuccess();
				// localStorage.setItem("name", name);
				// localStorage.setItem("email", email);
				// localStorage.setItem("profilePic", profilePic);
			})
			.catch(err => {
				onFailure();
			});
	};

	const onFailure = err => {
		console.log("failed:", err);
		navigate("/login");
	};
	const onSuccess = err => {
		console.log("onSuccess");
		navigate("/");
		// axios
		// 	.post(`https://sbuhackathon2022.herokuapp.com/user`, {
		// 		userInfo: {
		// 			userID: user.uid,
		// 			username: "loginsuccess",
		// 			nickname: "loginok",
		// 		},
		// 	})
		// 	.then(response => console.log(response))
		// 	.catch(err => console.log(err));
	};

	// useEffect(() => {
	// 	axios
	// 		.post(`https://sbuhackathon2022.herokuapp.com/user/`, {
	// 			userKey: user.uid,
	// 		})
	// 		.then(response => console.log(response))
	// 		.catch(err => console.log(err));
	// }, [user]);

	return (
		<Grid>
			<img
				// className={displayLogo ? "logo__load" : "logo__load--inactive"}
				src={"/image/pyton.JPG"}
				alt="logo__load"
				style={{
					width: "100vw",
					height: "100vh",
					position: "absolute",
					left: 0,
					top: 0,
					objectFit: "cover",
					zIndex: -1,
					opacity: 0.8,
				}}
			/>
			{/* <div></div> */}
			<Grid
				container
				alignItems={"center"}
				justifyContent={"space-around"}
				height={"50px"}
				mb={2.5}
				mt={"20vh"}
			>
				<Typography variant="h2" sx={{ color: "#FFF" }}>
					Plog-In
				</Typography>
			</Grid>
			<Grid
				container
				alignItems={"center"}
				justifyContent={"space-around"}
				// flexDirection={"row"}
				mt={"55vh"}
			>
				<Button
					variant="contained"
					sx={{
						// border: "solid 1px #EEE",
						color: "black",
						height: "53px",
						mb: 1,
						mt: 1,
						boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.1)",
					}}
					// fullWidth
					color="white"
					onClick={() => {
						signInWithGoogle(onSuccess, onFailure);
						console.log("onclick Google Login");
					}}
					// onSuccess={onSuccess}
					// onFailure={onFailure}
				>
					<img
						src={
							"https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
						}
						alt="google_icon"
						width="18dp"
						height="18dp"
					/>
					<Typography
						sx={{
							ml: "15px",
							fontSize: 15,
						}}
					>
						Sign In with Google
					</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

export default Login;
