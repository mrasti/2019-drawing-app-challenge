import React from "react";

export default function Eraser({eraserOptions, setEraserOptions}) {
	const eraseAll = ()=>{
		var canvas = document.getElementsByClassName('canvas')[0];
		var ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

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
			<section>
				<label>
					<button 
						className="erase-all" 
						onClick={e => {eraseAll();}}>Clear Canvas</button>
				</label>
			</section>
		</div>
	);
}