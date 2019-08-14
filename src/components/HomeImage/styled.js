import styled from "styled-components";

export const HomeImage = styled.div`
	width: 304px;
	height: 396px;
	position: relative;
	top: 100px;
	left: 500px;

	img {
		border-radius: 10px;
	}

	&:before {
		content: "";
		width: 288px;
		height: 396px;
		border-radius: 10px;
		position: absolute;
		top: -30px;
		left: 30px;
		border: 8px solid #271f38;
	}
`;
