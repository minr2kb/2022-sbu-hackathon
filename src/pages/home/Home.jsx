import { Grid } from "@mui/material";
import React from "react";
import GoogleMapComponent from "../../components/GoogleMap/GoogleMapComponent";
import NearbyStation from "../../components/GoogleMap/NearbyStation";
import BottomNav from "../../components/bottomNav/BottomNav";
import StartButton from "../../components/GoogleMap/StartButton";
import { useRecoilValue } from "recoil";
import { isRunningRecoil } from "../../recoil";

const Home = () => {
	const isRunning = useRecoilValue(isRunningRecoil);
	return (
		<Grid>
			<GoogleMapComponent />
			{!isRunning && <NearbyStation />}
			<BottomNav />
			<StartButton />
		</Grid>
	);
};

export default Home;
