import "./App.css";
import Tile from "./components/Tile/Tile";
import TileHolder from "./components/tileHolder/TileHolder";

function App() {
	return (
		<>
			<TileHolder images={["test1", "test2"]}></TileHolder>
		</>
	);
}

export default App;
