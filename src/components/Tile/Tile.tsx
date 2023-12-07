import { useState } from "react";
import "./Tile.css"; // Import your CSS file

interface Props {
	image1: string;
	image2: string;
}

const Tile = (props: Props) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<div className="flip-image-container" onClick={handleClick}>
			<div className={`flip-image-inner ${isFlipped ? "flipped" : ""}`}>
				<img src={props.image1} className="flip-image-front" alt="Image 1" />
				<img src={props.image2} className="flip-image-back" alt="Image 2" />
			</div>
		</div>
	);
};

export default Tile;
