import React from "react";

import PenIcon from "./icons/pen-icon";
import EraserIcon from "./icons/eraser-icon";
import StampIcon from "./icons/stamp-icon";

export default function NavBar({activeTool, setActiveTool}) {
	return (
		<div className="nav-bar">
			<div
				className={activeTool==="pen" ? "nav-bar__tool active-nav-item" : "nav-bar__tool inactive-nav-item"}
				onClick={e => setActiveTool("pen")}
				title="Pen">
				<PenIcon />
			</div>
			<div
				className={activeTool==="eraser" ? "nav-bar__tool active-nav-item" : "nav-bar__tool inactive-nav-item"}
				onClick={e => setActiveTool("eraser")}
				title="Eraser">
				<EraserIcon />
			</div>
			<div
				className={activeTool==="stamp" ? "nav-bar__tool active-nav-item" : "nav-bar__tool inactive-nav-item"}
				onClick={e => setActiveTool("stamp")}
				title="Stamp">
				<StampIcon />
			</div>
		</div>
	);
}