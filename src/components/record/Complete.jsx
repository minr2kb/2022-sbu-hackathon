import React, { useEffect, useState } from "react";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Grid,
	Typography,
} from "@mui/material";
import QRCode from "react-qr-code";
import { auth } from "../../pages/login/Firebase";
import LocationOnRounded from "@mui/icons-material/LocationOnRounded";

const Complete = ({ open, handleClose, distance, time }) => {
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		if (auth?.currentUser) setUser(auth?.currentUser);
	}, [auth]);

	return (
		<Dialog
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
				<Typography variant="body2">
					Congratz! Scan the QR at the station to record your
					plogging!
				</Typography>
				<Grid
					container
					alignItems={"center"}
					justifyContent={"center"}
					mt={2}
					mb={1}
				>
					{user && <QRCode size={256} value={user?.uid} />}
				</Grid>
				<Grid>
					<Typography variant="body5">
						{new Date().getFullYear()}-{new Date().getMonth() + 1}-
						{new Date().getDate()}
					</Typography>
				</Grid>
				<Grid container alignItems={"center"} mt={1}>
					<Typography variant="body2">Stony Brook, NY</Typography>
					<LocationOnRounded
						color="primary"
						sx={{ fontSize: "18px", ml: 0.5 }}
					/>
				</Grid>
				<Grid>
					<Typography variant="body5" color={"text.secondary"}>
						{distance} miles / {time}
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
					Done!
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Complete;
