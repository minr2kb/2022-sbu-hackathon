import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import useMediaQuery from "@mui/material/useMediaQuery";
import { mobileMaxWidthMediaQuery } from "../../theme";

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import RollerSkatingRoundedIcon from "@mui/icons-material/RollerSkatingRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const BottomNav = () => {
	const [value, setValue] = React.useState("recents");
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<BottomNavigation
				sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
				value={value}
				onChange={handleChange}
			>
				<BottomNavigationAction
					label="ranking"
					value="ranking"
					icon={<EmojiEventsRoundedIcon />}
				/>
				<BottomNavigationAction
					label="run"
					value="run"
					icon={<RollerSkatingRoundedIcon />}
				/>
				<BottomNavigationAction
					label="profile"
					value="profile"
					icon={<PersonRoundedIcon />}
				/>
			</BottomNavigation>
		</>
	);
};

export default BottomNav;
