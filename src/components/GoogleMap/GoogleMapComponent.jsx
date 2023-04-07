import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import useInterval from "../../hooks/useInterval";
import { isRunningRecoil, totalMilesRecoil } from "../../recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

function toRad(num) {
	return (num * Math.PI) / 180;
}
function CalDistance(mylocation, station) {
	console.log("station", station);
	console.log("mylocation", mylocation);
	var lat2 = mylocation.latitude;
	var lon2 = mylocation.longitude;
	var lat1 = station.latitude;
	var lon1 = station.longitude;

	var R = 6371; // km
	// //has a problem with the .toRad() method below.
	var x1 = lat2 - lat1;
	var dLat = toRad(x1);
	var x2 = lon2 - lon1;

	var dLon = toRad(x2);

	var a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRad(lat1)) *
			Math.cos(toRad(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	console.log("distance is " + d);
	return d.toFixed(2);
}

function GoogleMapComponent() {
	const [center, setCenter] = useState({ lat: 41.9153589, lng: -72.1225756 });
	const isRunning = useRecoilValue(isRunningRecoil);
	const setTotalMiles = useSetRecoilState(totalMilesRecoil);

	const containerStyle = {
		width: "100%",
		height: isRunning ? "70vh" : "100vh",
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
		libraries: ["geometry", "drawing"],
	});

	let count = useRef(0);

	let distanceData = useRef([]);
	let pointRecord = useRef([]);
	useInterval(
		() => {
			navigator.geolocation.getCurrentPosition(position => {
				setCenter({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
				// setCenter({
				// 	lat: 40.9151532,
				// 	lng: -73.1244591,
				// });

				count.current = count.current + 1;

				if (count.current % 10 === 0) {
					pointRecord.current = [
						...pointRecord.current,
						position.coords,
					];
					console.log(pointRecord.current);

					distanceData.current = [
						...distanceData.current,
						CalDistance(
							position.coords,
							pointRecord.current[pointRecord.current.length - 2]
						),
					];
				}
				console.log(count.current);
				console.log(pointRecord.current);
				console.log(distanceData.current);
				let sum = 0;
				distanceData.current.forEach(num => (sum += Number(num)));
				console.log("sum:", sum);
				setTotalMiles(sum);
			});
		},
		isRunning ? 1000 : null
		// 3000
	); // 5000ms 마다 반복 -> null이 되면 정지\

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(position => {
			setCenter({
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			});
			// setCenter({
			// 	lat: 40.9151532,
			// 	lng: -73.1244591,
			// });
		});
	}, []);

	return (
		<>
			{isLoaded && (
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={isRunning ? 17 : 15}
					options={{
						// disableDefaultUI: true,
						streetViewControl: false,
						fullscreenControl: false,
						mapTypeControl: false,
						zoomControl: true,
						zoomControlOptions: {
							position: 8.0,
						},
					}}
				>
					<MarkerF
						position={center}
						icon={{
							path: 0.0,
							fillColor: "#48BCA7",
							fillOpacity: 0.9,
							scale: 10,
							strokeColor: "#0A9780",
							strokeWeight: 3,
						}}
						clickable
					/>
					<MarkerF
						position={{ lat: 40.9154, lng: -73.1233 }}
						clickable
						// label={"Melvile Library"}
					/>
					<MarkerF
						position={{ lat: 40.9215, lng: -73.128 }}
						clickable
						// label={"Stony Brook Station"}
					/>
				</GoogleMap>
			)}
		</>
	);
}

export default GoogleMapComponent;
