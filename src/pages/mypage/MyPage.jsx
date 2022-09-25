import React, { useEffect, useState } from "react";
import {
	Avatar,
	Button,
	ButtonGroup,
	Dialog,
	DialogActions,
	DialogContent,
	Grid,
	IconButton,
	Pagination,
	Typography,
} from "@mui/material";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import SettingsRounded from "@mui/icons-material/Settings";
import BottomNav from "../../components/bottomNav/BottomNav";
import EditRounded from "@mui/icons-material/EditRounded";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";
import Calendar from "react-github-contribution-calendar";
import { ResponsiveLine } from "@nivo/line";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import { auth } from "../login/Firebase";

const distData = [
	{
		id: "distance",
		color: "#48BCA9",
		data: [
			{ x: "08.07", y: 3 },
			{ x: "08.10", y: 2 },
			{ x: "09.01", y: 3 },
			{ x: "09.03", y: 3 },
			{ x: "09.05", y: 2 },
			{ x: "09.06", y: 5 },
			{ x: "09.07", y: 3 },
			{ x: "09.10", y: 2 },
		],
	},
];
const weightData = [
	{
		id: "weight",
		color: "#48BCA9",
		data: [
			{ x: "08.07", y: 0.1 },
			{ x: "08.10", y: 1.3 },
			{ x: "09.01", y: 3.5 },
			{ x: "09.03", y: 0.3 },
			{ x: "09.05", y: 2.2 },
			{ x: "09.06", y: 1.5 },
			{ x: "09.07", y: 3.2 },
			{ x: "09.10", y: 1.2 },
		],
	},
];

const values = {
	"2022-09-01": 1,
	"2022-09-03": 1,
	"2022-09-06": 3,
	"2022-09-07": 2,
	"2022-09-08": 4,
	"2022-09-13": 1,
	"2022-09-19": 1,
	"2022-09-20": 3,
	"2022-09-21": 2,
	"2022-09-22": 4,
	"2022-08-01": 1,
	"2022-08-03": 1,
	"2022-08-06": 3,
	"2022-08-07": 2,
	"2022-08-08": 4,
	"2022-08-13": 1,
	"2022-08-19": 1,
	"2022-08-20": 3,
	"2022-07-21": 2,
	"2022-06-22": 4,
};

const panelColors = [
	"#EEEEEE",
	"#A5EBDF",
	"#70D4C4",
	"#48BCA9",
	"#2AA38F",
	"#0A9780",
];

const containerStyle = {
	width: "100%",
	height: "300px",
};

const MyPage = () => {
	const [page, setPage] = useState(1);
	const [chartMode, setChartMode] = useState("distance");
	const [openModal, setOpenModal] = useState(false);
	const [user, setUser] = useState(undefined);
	const navigate = useNavigate();

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
		libraries: ["geometry", "drawing"],
	});

	const handleClickOpen = () => {
		setOpenModal(true);
	};

	const handleClose = () => {
		setOpenModal(false);
	};

	useEffect(() => {
		if (auth?.currentUser) setUser(auth?.currentUser);
	}, [auth]);

	return (
		<Grid p={2.5} pb={9}>
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
				<Typography>My Page</Typography>
				<IconButton>
					<SettingsRounded />
				</IconButton>
			</Grid>
			{/* Profile Section */}
			<Grid
				p={2}
				container
				sx={{
					boxShadow: "2px 2px 10px 2px #EEE",
					borderRadius: "15px",
				}}
			>
				<Avatar
					src={user?.photoURL}
					sx={{ width: 65, height: 65, mr: 3 }}
				/>
				<Grid container alignItems={"center"} flex={1}>
					<Grid container alignItems={"center"}>
						<Typography>
							{user?.displayName || "John Doe"}
						</Typography>
						<IconButton size="small">
							<EditRounded sx={{ fontSize: "18px" }} />
						</IconButton>
					</Grid>
					<Grid container alignItems={"center"} mt={-0.5}>
						{/* <LocationOnRounded
							color="primary"
							sx={{ fontSize: "15px", mr: 0.5 }}
						/> */}
						<Typography variant="body4">
							{user?.email || "john.doe@gmail.com"}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid mt={5} mb={3} container justifyContent={"center"}>
				<ButtonGroup>
					<Button
						variant={
							chartMode === "distance" ? "contained" : "outlined"
						}
						sx={{
							color:
								chartMode === "distance" ? "#FFF" : "primary",
						}}
						onClick={() => {
							setChartMode("distance");
						}}
					>
						Distance
					</Button>
					<Button
						variant={
							chartMode === "weights" ? "contained" : "outlined"
						}
						sx={{
							ml: 1,
							color: chartMode === "weights" ? "#FFF" : "primary",
						}}
						onClick={() => {
							setChartMode("weights");
						}}
					>
						Weights
					</Button>
				</ButtonGroup>
			</Grid>
			<Grid
				sx={{
					width: "calc(100% + 20px)",
					height: "250px",
					ml: -2.5,
				}}
			>
				<ResponsiveLine
					data={chartMode === "distance" ? distData : weightData}
					xScale={{ type: "point" }}
					yScale={{
						type: "linear",
						min: 0,
						max: "auto",
					}}
					yFormat=" >-.1f"
					axisTop={null}
					axisRight={null}
					enableArea={true}
					curve="monotoneX"
					pointSize={5}
					pointBorderWidth={2}
					pointLabelYOffset={-12}
					colors={["#48BCA9"]}
					// enableGridX={false}
					// enableGridY={false}
					enablePoints
					margin={{ top: 5, left: 40, bottom: 70, right: 15 }}
					axisBottom={{
						orient: "bottom",
						// tickSize: 5,
						// tickPadding: 5,
						tickRotation: 0,
						// // legend: "transportation",
						// legendOffset: 36,
						// legendPosition: "middle",
					}}
				/>
			</Grid>
			<Grid>
				<Typography>Recent Activities</Typography>
			</Grid>
			<Grid
				container
				justifyContent={"center"}
				mt={2}
				ml={-1}
				width={"calc(100% + 10px)"}
			>
				<Calendar
					values={values}
					until={new Date().toISOString().slice(0, 10)}
					panelColors={panelColors}
					panelAttributes={{ rx: 3, ry: 3 }}
				/>
			</Grid>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9]
				.slice(5 * (page - 1), 5 * page)
				.map((v, i) => (
					<Grid
						key={`recent-activity-${i}`}
						p={2}
						mt={2}
						container
						sx={{
							boxShadow: "2px 2px 10px 2px #EEE",
							borderRadius: "15px",
						}}
						alignItems={"center"}
						onClick={handleClickOpen}
					>
						<Grid p={1}>
							<Typography variant="subtitle2">{v}</Typography>
						</Grid>
						<Grid container alignItems={"center"} flex={1} ml={1}>
							<Grid container alignItems={"center"}>
								<Typography variant="body2">
									Stony Brook, NY
								</Typography>
								<LocationOnRounded
									color="primary"
									sx={{ fontSize: "18px", ml: 0.5 }}
								/>
							</Grid>
							<Typography
								variant="body5"
								color={"text.secondary"}
							>
								2.4 miles / 0.3 kg / 50:24:38
							</Typography>
						</Grid>
					</Grid>
				))}
			<Grid container justifyContent={"center"} mt={3} mb={3}>
				<Pagination
					variant="text"
					count={2}
					page={page}
					size="large"
					color="primary"
					onChange={(e, value) => setPage(value)}
				/>
			</Grid>
			<BottomNav />
			<Dialog
				open={openModal}
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
					{isLoaded && (
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={{ lat: 40.9153543, lng: -73.1225758 }}
							zoom={15}
							options={{
								// disableDefaultUI: true,
								streetViewControl: false,
								fullscreenControl: false,
								mapTypeControl: false,
							}}
						/>
					)}
					<Grid>
						<Typography
							variant="body5"
							// color={"text.secondary"}
						>
							2022-09-22
						</Typography>
					</Grid>
					<Grid container alignItems={"center"} mt={1}>
						<Typography variant="body2">Stony Brook, NY</Typography>
						<LocationOnRounded
							color="primary"
							sx={{ fontSize: "18px", ml: 0.5 }}
						/>

						<Typography variant="body5" color={"text.secondary"}>
							2.4 miles / 0.3 kg / 50:24:38
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
			</Dialog>
		</Grid>
	);
};

export default MyPage;
