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
		// setDistanceRank([
		// 	{
		// 		name: "Grace Hopper",
		// 		duration: "01:20:32",
		// 		weight: 2,
		// 		distance: "2.8",
		// 		region: "Stony Brook, NY",
		// 	},
		// 	{
		// 		name: "Yoshitake Miura",
		// 		duration: "00:42:17",
		// 		weight: 0.8,
		// 		distance: "1.2",
		// 		region: "Stony Brook, NY",
		// 	},
		// 	{
		// 		name: "Ada Lovelace",
		// 		duration: "00:12:09",
		// 		weight: 0.2,
		// 		distance: "0.8",
		// 		region: "Stony Brook, NY",
		// 	},
		// ]);
	}, []);
	//

	// const podiumData = [
	// 	{
	// 		id: "1tfjiELNrwYAJeafRYlT9RwOIiD",
	// 		name: "Grace Hopper",
	// 		userID: 1,
	// 	},
	// 	{
	// 		id: "1tfjiFrbdLWlPI52dRL5NlD",
	// 		name: "Yoshitake Miura",
	// 		userID: 2,
	// 	},
	// 	{
	// 		id: "1tfjiDIAS8f2UYgV2yi7rZD",
	// 		name: "Ada Lovelace",
	// 		userID: 3,
	// 	},
	// 	{
	// 		id: "1tfriEIWBZz2I9lOQYTEeMICALg",
	// 		name: "Grete Hermann",
	// 		userID: 4,
	// 	},
	// 	{
	// 		id: "2tfjiCMU9SdFM9BAaIF3mS5UpYf",
	// 		name: "Ch Asakawa",
	// 		userID: 5,
	// 	},
	// ].map((winner, position) => {
	// 	return { ...winner, position };
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
