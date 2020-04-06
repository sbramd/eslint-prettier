import React from "react";
import styled from "styled-components";

// console.log(process.env.NODE_ENV, process.env.REACT_APP_NOT_SECRET_CODE);

export default (): JSX.Element => {
	const arr = [1, 2, 3];
	return (
		<div>
			<Button>Normal</Button>
			<Button primary>Primary</Button>
			{arr.map((x, i) => (
				<div key={i.toString()}>{x}</div>
			))}
		</div>
	);
};

const Button = styled.button<{ primary?: boolean }>`
	background: ${(props): string => (props.primary ? "green" : "blue")};
	color: ${(props): string => (props.primary ? "white" : "black")};
	padding: 12px;
	border: 2px solid #036;
	border-radius: 3px;
	display: flex;
`;
