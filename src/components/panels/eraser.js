import React from "react";

export default function Eraser({eraserOptions, setEraserOptions}) {

	return(
		<div>
			<h1>Eraser</h1>
			<section>
				<label>
					Eraser Width: {eraserOptions.strokeWidth}
					<input
						value={eraserOptions.strokeWidth}
						name="stroke-width"
						type="range"
						max="100"
						min="1"
						onChange={e => setEraserOptions({...eraserOptions, strokeWidth: e.target.value})}
					/>
				</label>
			</section>
		</div>
	);
}