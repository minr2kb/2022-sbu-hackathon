import { motion } from "framer-motion";

export default function PodiumStep({ podium, winner }) {
	const offset = podium.length - winner.position;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				placeContent: "center",
			}}
		>
			<motion.div
				style={{
					alignSelf: "center",
					marginBottom: ".25rem",
				}}
				initial="hidden"
				animate="visible"
				variants={{
					visible: {
						opacity: 1,
						transition: {
							delay: 0.5 + offset,
							duration: 0.1,
						},
					},
					hidden: { opacity: 0 },
				}}
			>
				<img
					src={`https://i.pravatar.cc/64?u=${winner.userID}`}
					alt=""
					style={{
						width: "2.5rem",
						overflow: "hidden",
						height: "2.5rem",
						borderRadius: 9999,
					}}
				/>
			</motion.div>

			<motion.div
				style={{
					width: "3.3rem",
					placeContent: "center",
					display: "flex",
					borderTopLeftRadius: ".5rem",
					borderTopRightRadius: ".5rem",
					borderColor: "rgb(72, 188, 167)",
					backgroundColor: "rgb(52, 151, 144)",
					marginBottom: -1,
					filter: `opacity(${0.1 + offset / podium.length})`,
				}}
				initial="hidden"
				animate="visible"
				variants={{
					visible: {
						height: 200 * (offset / podium.length),
						opacity: 1,
						transition: {
							delay: 1 + offset,
							duration: 1,
							ease: "backInOut",
						},
					},
					hidden: { opacity: 0, height: 0 },
				}}
			>
				<span style={{ color: "white", alignSelf: "flex-end" }}>
					{winner.position + 1}
				</span>
			</motion.div>
		</div>
	);
}
