import React from "react";
import {
	FaTwitterSquare,
	FaGithubSquare,
	FaFacebookSquare
} from "react-icons/fa";

import * as S from "./style";

export default function SocialIcons() {
	return (
		<S.SocialIconsList>
			<FaTwitterSquare />
			<FaGithubSquare />
			<FaFacebookSquare />
		</S.SocialIconsList>
	);
}
