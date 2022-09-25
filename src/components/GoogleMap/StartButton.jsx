import React, { useEffect, useState } from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Pause from "@mui/icons-material/Pause";
import Dangerous from "@mui/icons-material/Dangerous";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

import FloatingButton from "./FloatingButton";
import { Fab, Grid, Typography } from "@mui/material";
import { isRunningRecoil, totalMilesRecoil } from "../../recoil";
import { useRecoilValue, useRecoilState } from "recoil";
import useInterval from "../../hooks/useInterval";
import Complete from "../record/Complete";

// Divide Time with a year
const d = new Date();
let minute = d.getMinutes;
let hour = d.getHours;

export default function SwipeableTemporaryDrawer() {
	const [isRunning, setIsRunning] = useRecoilState(isRunningRecoil);
	const totalMiles = useRecoilValue(totalMilesRecoil);
	const [isPaused, setIsPaused] = useState(false);
	const [time, setTime] = useState("00:00:00");
	const [pausedTime, setPausedTime] = useState(new Date().getTime());
	const [pausedTimeDiff, setPausedTimeDiff] = useState(0);
	const [isDone, setIsDone] = useState(false);

	const getTime = () => {
		let msec =
			new Date().getTime() -
			Number(localStorage.getItem("startTime")) -
			pausedTimeDiff;
		let hh = Math.floor(msec / 1000 / 60 / 60);
		msec -= hh * 1000 * 60 * 60;
		let mm = Math.floor(msec / 1000 / 60);
		msec -= mm * 1000 * 60;
		let ss = Math.floor(msec / 1000);
		msec -= ss * 1000;

		var hourtext = "00";
		hourtext = String(hh);
		if (hourtext.length === 1) {
			hourtext = "0" + hourtext;
		}

		//  Format Minutes
		var mintext = "00";
		mintext = String(mm);
		if (mintext.length === 1) {
			mintext = "0" + mintext;
		}

		//  Format Seconds
		var sectext = "00";
		sectext = String(ss);
		if (sectext.length === 1) {
			sectext = "0" + sectext;
		}

		setTime(hourtext + ":" + mintext + ":" + sectext);
	};

	const content = () => (
		<Grid
			sx={{
				width: "auto",
				p: 3,
				height: "33vh",
				borderRadius: "15px",
			}}
		>
			<Grid container justifyContent={"space-around"} mb={2} mt={3}>
				<Grid sx={{ textAlign: "center" }}>
					<Typography letiant="subtitle2">Time</Typography>
					<Typography letiant="h5">{time}</Typography>
				</Grid>
				<Grid sx={{ textAlign: "center" }}>
					<Typography letiant="subtitle2">Distance</Typography>
					<Typography letiant="h5">{totalMiles} km</Typography>
				</Grid>
			</Grid>
			<Grid container justifyContent={"space-around"} mt={7}>
				<Fab
					color={isPaused ? "grey" : "info"}
					variant="extended"
					onClick={() => {
						setIsPaused(!isPaused);
					}}
					sx={{ color: isPaused ? "#FFF" : "#000" }}
				>
					{isPaused ? (
						<PlayArrowRounded sx={{ mr: 1 }} />
					) : (
						<Pause sx={{ mr: 1 }} />
					)}
					{isPaused ? "Resume" : "Pause"}
				</Fab>
				<Fab
					color={"error"}
					variant="extended"
					onClick={() => {
						setIsPaused(true);
						setIsDone(true);
					}}
				>
					<Dangerous sx={{ mr: 1 }} />
					Finish
				</Fab>
			</Grid>
		</Grid>
	);

	useInterval(
		() => {
			getTime();
		},
		isRunning && !isPaused ? 1000 : null
	); // 5000ms 마다 반복 -> null이

	useEffect(() => {
		if (isPaused) setPausedTime(new Date().getTime());
		else
			setPausedTimeDiff(
				diff => diff + (new Date().getTime() - pausedTime)
			);
	}, [isPaused, isRunning]);

	useEffect(() => {
		if (isRunning) {
			setPausedTime(new Date().getTime());
			setPausedTimeDiff(0);
		}
	}, [isRunning]);

	return (
		<>
			<div
				container
				style={{
					position: "absolute",
					height: "10vh",
					zIndex: 999,
					left: "32vw",
					bottom: 80,
					width: "50vw",
					justifyContent: "center",
				}}
			>
				<FloatingButton />
			</div>
			<SwipeableDrawer
				hideBackdrop
				disableBackdropTransition={true}
				anchor={"bottom"}
				open={isRunning}
				PaperProps={{
					sx: { borderTopLeftRadius: 20, borderTopRightRadius: 20 },
				}}
			>
				{content("bottom")}
			</SwipeableDrawer>
			<Complete
				open={isDone}
				handleClose={() => {
					setPausedTimeDiff(0);
					setIsPaused(false);
					setTime("00:00:00");
					setIsRunning(false);
					setIsDone(false);
				}}
				distance={totalMiles}
				time={time}
			/>
		</>
	);
}
