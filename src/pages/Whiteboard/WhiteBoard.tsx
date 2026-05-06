import { Sidebar } from "./components/Sidebar";
import { Canvas } from "./components/Canvas";

export const WhiteBoard = () => {
	return (
		<div className="grid grid-cols-[auto_1fr] h-full">
			<Sidebar />
			<Canvas />
		</div>
	);
};
