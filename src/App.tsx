import "./App.css";
import TileHolder from "./components/tileHolder/TileHolder";
import { TileType } from "./Types/Types.tsx";
import tile1 from "./assets/tiles_photos/green1.png";
import tile2 from "./assets/tiles_photos/green2.png";
import tile3 from "./assets/tiles_photos/green3.png";
import tile4 from "./assets/tiles_photos/green4.png";
import tile5 from "./assets/tiles_photos/green5.png";
import testBackground from "./assets/tiles_photos/green_full.png";

function App() {
	const green1: TileType = {
		image1: tile1,
		image2: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
	};
	const green2: TileType = {
		image1: tile2,
		image2: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
	};
	const green3: TileType = {
		image1: tile3,
		image2: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
	};
	const green4: TileType = {
		image1: tile3,
		image2: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
	};
	const green5: TileType = {
		image1: tile4,
		image2: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
	};
	const green6: TileType = {
		image1: tile5,
		image2: "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
	};

	const images_array = [green6, green5, green4, green3, green2, green1];

	return (
		<div style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
			<>
				<TileHolder items={images_array} backGroundImage={testBackground}></TileHolder>
			</>
		</div>
	);
}

export default App;
