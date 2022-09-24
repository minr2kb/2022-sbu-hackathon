import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import BottomNav from "../../components/bottomNav/BottomNav";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import SettingsRounded from "@mui/icons-material/Settings";

const Ranking = () => {
	return (
		<Grid>
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

			{/*  */}
			<BottomNav />
		</Grid>
	);
};

export default Ranking;
