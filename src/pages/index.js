import React from "react";

import SEO from "../components/seo";
import Layout from "../components/Layout";
import HomeImage from "../components/HomeImage";
import SocialIcons from "../components/SocialIcons";
import PresentationText from "../components/PresentationText ";
import ContainerFullWidth from "../components/ContainerFullWidth";

export default function Home() {
	return (
		<Layout>
			<ContainerFullWidth>
				<SEO title="Home" />
				<PresentationText />
				<HomeImage />
				<SocialIcons />
			</ContainerFullWidth>
		</Layout>
	);
}
