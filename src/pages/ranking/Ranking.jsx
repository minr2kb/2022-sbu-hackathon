import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import BottomNav from "../../components/bottomNav/BottomNav";
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
		<Grid p={2.5}>
			{/* HEADER */}
			<Grid
				container
				alignItems={"center"}
				justifyContent={"space-between"}
				height={"50px"}
			>
				<IconButton>
					<ArrowBackRounded />
				</IconButton>
				<Typography>Ranking</Typography>
				<IconButton>
					<SettingsRounded />
				</IconButton>
			</Grid>
			<div>5 top runners during last 7 days</div>
			<Podium winners={podiumData} />

			{/*  */}
			<BottomNav />
		</Grid>
	);
};

export default Ranking;
