import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";

import BottomNav from "../../components/bottomNav/BottomNav";
import Record from "../../components/record/Record";

import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import SettingsRounded from "@mui/icons-material/Settings";

import Podium from "./Podium";

const Ranking = () => {
	const podiumData = [
		{
			id: "1tfjiELNrwYAJeafRYlT9RwOIiD",
			name: "Grace Hopper",
		},
		{
			id: "1tfjiFoinFrbdLWlPI52dRLhNlD",
			name: "Yoshitake Miura",
		},
		{
			id: "1tfjiDIAS8f2UYgV9ynCqWi7rZD",
			name: "Ada Lovelace",
		},
		{
			id: "1tfjiEIWBZz2I9lOQYTEeMICALg",
			name: "Grete Hermann",
		},
		{
			id: "1tfjiCMU9SdFM9BAaIF3mS5UpYf",
			name: "Chieko Asakawa",
		},
	].map((winner, position) => ({ ...winner, position }));

	return (
		<Grid p={2.5} mb={1.5}>
			{/* HEADER */}
			<Grid
				container
				alignItems={"center"}
				justifyContent={"space-between"}
				height={"50px"}
				mb={2.5}
			>
				<IconButton>
					<ArrowBackRounded />
				</IconButton>
				<Typography>Ranking</Typography>
				<IconButton sx={{ color: "#ffffff" }}>
					<SettingsRounded />
				</IconButton>
			</Grid>

			{/* <div>5 top runners during last 7 days</div> */}
			<Grid p={2}>
				<Podium winners={podiumData} />
			</Grid>
			{/*  */}
			<Record />
			<BottomNav />
		</Grid>
	);
};

export default Ranking;
