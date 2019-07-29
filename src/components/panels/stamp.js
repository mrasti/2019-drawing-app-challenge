import React from "react";

export default function Stamp({stampOptions, setStampOptions}) {
	const showImage = (e) => {
        var input = e.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                document.getElementById('img-thumbnail').src=e.target.result;
            };

            reader.readAsDataURL(input.files[0]);
        }
	}

	return(
		<div>
			<h1>Stamp</h1>
			<section>
				<label>
					Max Width: {stampOptions.stampWidth}
					<input
						value={stampOptions.stampWidth}
						name="stamp-width"
						type="range"
						min="100"
						max="1000"
						onChange={e => setStampOptions({...stampOptions, stampWidth: e.target.value})}
					/>
				</label>
			</section>
			<section>
				<label>
                    Upload:
                    <input type="file"
                        onChange={e => {showImage(e);}}/>
				</label>
			</section>
            <section>
                <img id="img-thumbnail" style={{width: "150px", height: "auto"}}></img>
            </section>
		</div>
	);
}