import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import SettingsRounded from "@mui/icons-material/Settings";
import BottomNav from "../../components/bottomNav/BottomNav";

const MyPage = () => {
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
				<Typography>My Page</Typography>
				<IconButton>
					<SettingsRounded />
				</IconButton>
			</Grid>
			<BottomNav />
		</Grid>
	);
};

export default MyPage;
