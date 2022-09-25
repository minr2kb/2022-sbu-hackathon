import React from "react";
import {
	Avatar,
	Button,
	ButtonGroup,
	Grid,
	Typography,
	IconButton,
} from "@mui/material";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";

const basedata = {
	region: "Stony Brook, NY",
	date: "22.09.24",
	distance: 3.7,
	weight: 2.3,
	duration: "50:38:23",
};
const Record = ({ data = basedata }) => {
	// const recordData = { date: "22.09.24", distance: 3.7, weight: 2.3 };
	const recordData = data;
	const userID = 0;

	return (
		// <Grid
		// 	container
		// 	alignItems={"center"}
		// 	p={1.5}
		// 	justifyContent={"space-around"}
		// 	direction={"row"}
		// 	sx={{
		// 		boxShadow: "2px 2px 10px 2px #EEE",
		// 		borderRadius: "15px",
		// 		// height: "50px",
		// 	}}
		// >
		// 	{/* <Grid> */}
		// 	<Grid container alignItems={"center"}>
		// 		<Avatar sx={{ width: 30, height: 30 }} mr={1.5} />
		// 		<Typography variant="body5"> {recordData.date}</Typography>
		// 		{/* <Typography> </Typography> */}
		// 	</Grid>
		// 	{/* </Grid> */}
		// 	<Grid>
		// 		<Typography> {recordData.distance} miles</Typography>
		// 		{/* <Typography variant="body3"></Typography> */}
		// 	</Grid>
		// 	<Grid>
		// 		<Typography> {recordData.weight} kg </Typography>
		// 		{/* <Typography variant="body3">{recordData.weight} kg</Typography> */}
		// 	</Grid>
		// 	{/* container alignItems={"center"} */}
		// </Grid>

		<Grid
			p={2}
			mt={2.5}
			container
			sx={{
				boxShadow: "2px 2px 10px 2px #EEE",
				borderRadius: "15px",
			}}
			alignItems={"center"}
		>
			<Grid p={1}>
				{/* <Typography variant="subtitle2">1</Typography> */}
				<Avatar /*sx={{ width: 30, height: }} */ mr={1.5} />
			</Grid>
			<Grid container alignItems={"center"} flex={1} ml={1}>
				<Grid
					container
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Typography variant="body2">{userID}</Typography>
					<Grid container alignItems={"center"}>
						<Typography variant="body5">
							{recordData.region}
						</Typography>

						<LocationOnRounded
							color="primary"
							sx={{ fontSize: "18px", ml: 0.5 }}
						/>
					</Grid>
				</Grid>
				<Typography variant="body5" color={"text.secondary"}>
					{recordData.distance} miles / {recordData.weight}kg /
					{recordData.duration}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Record;
