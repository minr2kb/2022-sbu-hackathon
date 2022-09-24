import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function GoogleMapComponent() {
	return (
		<Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY} render={}></Wrapper>
	);
}
