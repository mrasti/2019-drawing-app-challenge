import React from "react";

export default function Pen({penOptions, setPenOptions}) {

	return(
		<div>
			<h1>Pen</h1>
			<section>
				<label>
					<h4>Stroke Color:</h4>
					<input type="color" value={penOptions.strokeStyle} onChange={e => setPenOptions({...penOptions, strokeStyle: e.target.value})}/>
				</label>
			</section>
			<section>
				<label>
					<h4>Stroke Width:</h4>
					<input
						type="range"
						min="1" 
						max="100"
						value={penOptions.strokeWidth}
						onChange={e => setPenOptions({...penOptions, strokeWidth: e.target.value})}
						name="stroke-width"
					/>
				</label>
			</section>
			<section>
				<h4>Line Type:</h4>
				<div className="line-types">
					<label>
						<input
							type="radio"
							value="solid"
							onChange={e => setPenOptions({...penOptions, lineType: e.target.value})}
							checked={penOptions.lineType === "solid"}
						/>
						<span className="line-types__option">Solid</span>
					</label>
					<label>
						<input
							type="radio"
							value="dash"
							onChange={e => setPenOptions({...penOptions, lineType: e.target.value})}
							checked={penOptions.lineType === "dash"}
						/>
						<span className="line-types__option">Dashed</span>
					</label>
					<label>
						<input
							type="radio"
							value="dot"
							onChange={e => setPenOptions({...penOptions, lineType: e.target.value})}
							checked={penOptions.lineType === "dot"}
						/>
						<span className="line-types__option">Dotted</span>
					</label>
				</div>
			</section>
		</div>
	);
}