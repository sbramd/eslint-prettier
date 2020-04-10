import styled from "styled-components/macro";
import { appLogoSpin } from "index.styles";

export const AppWrapper = styled.div`
	text-align: center;
`;

export const AppLogo = styled.img`
	height: 40vmin;

	@media (prefers-reduced-motion: no-preference) {
		animation: ${appLogoSpin} infinite 20s linear;
	}
`;

export const AppHeader = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export const AppLink = styled.a`
	color: #61dafb;
`;

export const AppPara = styled.p`
	font-size: large;
`;
