import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "react-router-dom";

// import useMediaQuery from "@mui/material/useMediaQuery";
// import { mobileMaxWidthMediaQuery } from "../../theme";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import RollerSkatingRoundedIcon from "@mui/icons-material/RollerSkatingRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const BottomNav = () => {
	const navigate = useNavigate();

	const handleChange = (event, newValue) => {
		navigate(`${newValue}`);
	};

	return (
		<>
			<BottomNavigation
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
					// color: "E0E0E0",
					boxShadow: 3,
				}}
				elevation={1}
				value={window.location.pathname}
				onChange={handleChange}
			>
				<BottomNavigationAction
					label="ranking"
					value="/ranking"
					icon={<EmojiEventsRoundedIcon />}
				/>
				<BottomNavigationAction
					label="run"
					value="/"
					icon={<RollerSkatingRoundedIcon />}
				/>
				<BottomNavigationAction
					label="profile"
					value="/user"
					icon={<PersonRoundedIcon />}
				/>
			</BottomNavigation>
		</>
	);
};

export default BottomNav;
