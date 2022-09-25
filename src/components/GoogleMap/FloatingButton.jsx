import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { isRunningRecoil } from "../../recoil";
import { useSetRecoilState } from "recoil";

export default function FloatingButton() {
	const setIsRunning = useSetRecoilState(isRunningRecoil);
	return (
		<Box sx={{ "& > :not(style)": { m: 1 } }}>
			<Fab
				variant="extended"
				color="primary"
				sx={{ p: 3, color: "#FFF" }}
				onClick={() => {
					navigator.geolocation.getCurrentPosition(position => {
						console.log({
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						});
						localStorage.setItem(
							"startLoca",
							JSON.stringify({
								lat: position.coords.latitude,
								lng: position.coords.longitude,
							})
						);
					});
					localStorage.setItem(
						"startTime",
						JSON.stringify(new Date().getTime())
					);
					setIsRunning(true);
				}}
			>
				<NavigationIcon sx={{ mr: 1 }} color={"white"} />
				Start
			</Fab>
		</Box>
	);
}
