import React from "react";

export default (): JSX.Element => {
	const arr = [1, 2, 3];
	return (
		<div>
			{arr.map((x, i) => (
				<div key={i.toString()}>{x}</div>
			))}
		</div>
	);
};
