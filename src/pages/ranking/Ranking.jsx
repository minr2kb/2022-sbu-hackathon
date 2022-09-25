import React, { useEffect, useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";

import BottomNav from "../../components/bottomNav/BottomNav";
import Record from "../../components/record/Record";

import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import SettingsRounded from "@mui/icons-material/Settings";

import Podium from "./Podium";
import { userRecoil } from "../../recoil";

const Ranking = () => {
	const navigate = useNavigate();
	const [user, setUser] = useRecoilState(userRecoil);

	const [weightRank, setWeightRank] = useState([]);
	const [distanceRank, setDistanceRank] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://sbuhackathon2022.herokuapp.com/user/ranking?method=weight}`
			)
			.then(res => setWeightRank(res.data));
		axios
			.get(
				`https://sbuhackathon2022.herokuapp.com/user/ranking?method=distance`
			)
			.then(res => setDistanceRank(res.data));
	}, []);
	//
	// const podiumData = [
	//
	// {
	// 	//
	// 	id: "1tfjiELNrwYAJeafRYlT9RwOIiD", //
	// 	name: "Grace Hopper", //
	// }, //
	// {
	// 	//
	// 	id: "1tfjiFrbdLWlPI52dRLhNlD", //
	// 	name: "Yoshitake Miura", //
	// }, //
	// {
	// 	//
	// 	id: "1tfjiDIAS8f2UYgV9yi7rZD", //
	// 	name: "Ada Lovelace", //
	// }, //
	// {
	// 	//
	// 	id: "1tfjiEIWBZz2I9lOQYTEeMICALg", //
	// 	ame: "Grete Hermann", //
	// }, //
	// {
	// 	//
	// 	id: "1tfjiCMU9SdFM9BAaIF3mS5UpYf", //
	// 	name: "Ch Asakawa", //
	// }, //
	// ].map((winner, position) => {
	// 	return { ...winner, position }; // ;
	// });
	const podiumData = weightRank.map((winner, position) => {
		return { ...winner, position };
	});

	// useEffect(method => {
	// 	(async () => {
	// 		const res = await axios.get(
	// 			`https://sbuhackathon2022.herokuapp.com/user/ranking/?method={method}`
	// 		);
	// 		// setUsername(res.data.username);
	// 	})();
	// }, []);

	return (
		<Grid p={2.5} mb={7.5}>
			{/* HEADER */}
			<Grid
				container
				alignItems={"center"}
				justifyContent={"space-between"}
				height={"50px"}
				mb={2.5}
			>
				<IconButton onClick={() => navigate(-1)}>
					<ArrowBackRounded />
				</IconButton>
				<Typography>Ranking</Typography>
				<IconButton sx={{ color: "#ffffff" }}>
					<SettingsRounded />
				</IconButton>
			</Grid>

			{/* <div>5 top runners during last 7 days</div> */}
			<Grid
				container
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				{/* <Typography variant="body1">
					Longest among last 7 days
				</Typography> */}
			</Grid>
			<Grid p={2}>
				<Podium winners={podiumData} />
			</Grid>
			{/*  */}
			{distanceRank.map(data => (
				<Record data={data} />
			))}

			<BottomNav />
		</Grid>
	);
};

export default Ranking;
