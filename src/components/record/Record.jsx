import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { Avatar, Grid, Typography } from "@mui/material";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";

const basedata = {
	userID: 0,
	region: "Stony Brook, NY",
	date: "22.09.24",
	distance: 3.7,
	weight: 2.3,
	duration: "50:38:23",
};

const Record = ({ data = basedata }) => {
	// const recordData = { date: "22.09.24", distance: 3.7, weight: 2.3 };
	const recordData = data;
	const [username, setUsername] = useState("something");

	useEffect(() => {
		axios
			.get(
				`https://sbuhackathon2022.herokuapp.com/user/${recordData.userID}`
			)
			.then(res => setUsername(res.data.username));
	}, [recordData]);

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
					<Typography variant="body2">{username}</Typography>
					<Grid container alignItems={"center"}>
						<Typography variant="body5">
							{recordData.region}
						</Typography>
					</Grid>
				</Grid>
				<Grid container alignItems={"center"}>
					<LocationOnRounded
						color="primary"
						sx={{ fontSize: "15px", mr: 0.5 }}
					/>
					<Typography variant="body5" color={"text.secondary"}>
						Stony Brook, NY / {recordData.distance} miles /{" "}
						{recordData.weight}kg /{recordData.duration}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Record;
