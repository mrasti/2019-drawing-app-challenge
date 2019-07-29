import React from "react";

import Pen from "./panels/pen";
import Eraser from "./panels/eraser";
import Stamp from "./panels/stamp";

export default function ToolPanel({
	activeTool,
	penOptions,
	setPenOptions
}) {
	return (
		<div className="tool-panel">
			<div className={activeTool==="pen" ? "active-tool" : "inactive-tool"}>
				<Pen
					penOptions={penOptions}
					setPenOptions={setPenOptions}
				/>
			</div>
			<div className={activeTool==="eraser" ? "active-tool" : "inactive-tool"}>
				<Eraser
					eraserOptions={penOptions}
					setEraserOptions={setPenOptions}
				/>
			</div>
			<div className={activeTool==="stamp" ? "active-tool" : "inactive-tool"}>
				<Stamp
					stampOptions={penOptions}
					setStampOptions={setPenOptions}
				/>
			</div>
		</div>
	);
}