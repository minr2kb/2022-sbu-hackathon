import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import { Dialog, DialogActions, DialogContent, Grid } from "@mui/material";
import Carousel from "nuka-carousel";

const stationInfo = [
	{
		stationId: 1,
		name: "Stonybrook Station",
		address:
			"New York State Route 25A & Chapman Street Stony Brook, New York",
		location: { lat: 40.91717647930936, log: -73.122509696353 },
	},
	{
		stationId: 2,
		name: "Melville Library",
		address: "100 Nicolls Rd, Stony Brook, NY 11794",
		location: { lat: 40.915660367308334, log: -73.1227446595873 },
	},
	{
		stationId: 3,
		name: "Stonybrook Houspital",
		address: "101 Nicolls Rd, Stony Brook, NY 11794",
		location: { lat: 40.90970069384407, log: -73.11540723075112 },
	},
	{
		stationId: 4,
		name: "Stonybrook Union",
		address: "250 John S. Toll Drive, Stony Brook, NY 11794",
		location: { lat: 40.91738292062733, log: -73.12256411725977 },
	},
];
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

function NearbyStation() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Grid
				style={{
					position: "absolute",
					height: "10vh",
					zIndex: 999,
					left: 0,
					top: 10,
					width: "100vw",
					justifyContent: "center",
				}}
			>
				<Carousel withoutControls>
					<Grid
						p={2}
						mt={2}
						container
						sx={{
							boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.2)",
							borderRadius: "15px",
							backgroundColor: "#FFF",
							width: "90vw",
							ml: "5vw",
							mb: 2,
						}}
						alignItems={"center"}
						onClick={handleOpen}
					>
						<img
							src={
								"https://library.stonybrook.edu/wp-content/uploads/2018/06/mainsquare-1024x893.jpg"
							}
							alt={"img"}
							width={"70px"}
							height={"70px"}
							style={{ objectFit: "cover" }}
						/>
						<Grid container alignItems={"center"} flex={1} ml={2}>
							<Typography
								variant="body5"
								color={"text.secondary"}
							>
								Nearby Station
							</Typography>

							<Grid container alignItems={"center"}>
								<Typography variant="body2">
									Melville Library
								</Typography>
								<LocationOnRounded
									color="primary"
									sx={{ fontSize: "18px", ml: 0.5 }}
								/>
							</Grid>
							<Typography variant="body5">0.1 miles</Typography>
						</Grid>
					</Grid>
					<Grid
						p={2}
						mt={2}
						container
						sx={{
							boxShadow: "0px 0px 15px 1px rgba(0,0,0,0.2)",
							borderRadius: "15px",
							backgroundColor: "#FFF",
							width: "90vw",
							ml: "5vw",
							mb: 2,
						}}
						alignItems={"center"}
						onClick={handleOpen}
					>
						<img
							src={
								"https://fastly.4sqi.net/img/general/600x600/51673875_lQFb-hoHwJVUiVvNT5v4TNuGs2MChdlS_qJ6fbwP_a4.jpg"
							}
							alt={"img"}
							width={"70px"}
							height={"70px"}
							style={{ objectFit: "cover" }}
						/>
						<Grid container alignItems={"center"} flex={1} ml={2}>
							<Typography
								variant="body5"
								color={"text.secondary"}
							>
								Nearby Station
							</Typography>

							<Grid container alignItems={"center"}>
								<Typography variant="body2">
									Stony Brook Station
								</Typography>
								<LocationOnRounded
									color="primary"
									sx={{ fontSize: "18px", ml: 0.5 }}
								/>
							</Grid>
							<Typography variant="body5">0.8 miles</Typography>
						</Grid>
					</Grid>
				</Carousel>
			</Grid>
			{/* <Dialog
				open={open}
				onClose={handleClose}
				maxWidth={"md"}
				scroll={"paper"}
				PaperProps={{
					sx: {
						borderRadius: "15px",
						width: "680px",
					},
				}}
			>
				<DialogContent>
					<Grid container alignItems={"center"} mt={1}>
						<Typography variant="body2">
							{stationInfo[1].name}
						</Typography>
						<LocationOnRounded
							color="primary"
							sx={{ fontSize: "18px", ml: 0.5 }}
						/>

						<Typography variant="body5" color={"text.secondary"}>
							Address: <br />
							{stationInfo[1].address}
						</Typography>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button
						variant="contained"
						fullWidth
						onClick={handleClose}
						sx={{ color: "#FFF" }}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog> */}
		</>
	);
}

export default NearbyStation;
