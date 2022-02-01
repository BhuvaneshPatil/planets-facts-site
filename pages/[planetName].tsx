import React, { useEffect, useState } from "react";
import { PlanetData } from "../types";
import { useRouter } from "next/router";
import { getPlanet } from "../utils/dataFetchers";
import {
	NavBar,
	NavHeading,
	NavLink,
	NavPlanetItem,
	NavPlanetList,
} from "../components/navbar/styles/navbar";
import GlobalStyles from "../styles/GolbalStyles.style";
import { PLANET_NAMES } from "../constants";
import Link from "next/link";
const PlanetPage = () => {
	const [data, setData] = useState(null);
	const router = useRouter();

	useEffect(() => {
		getPlanet(router.query["planetName"] as string).then((data) =>
			setData(data)
		);
	}, [router]);
	useEffect(() => {}, [data]);
	return (
		<div>
			<GlobalStyles />
			<NavBar>
				<NavHeading>THE PLANET</NavHeading>
				<NavPlanetList>
					{PLANET_NAMES.map((item) => {
						const tempName = item.name;
						return (
							<NavPlanetItem
								key={item.id}
								planetName={tempName}
								isActive={
									tempName === router.query["planetName"]
								}
								onClick={() => router.push(tempName)}
							>
								<Link href={`/${tempName}`} replace>
									<NavLink>{tempName.toUpperCase()}</NavLink>
								</Link>
							</NavPlanetItem>
						);
					})}
				</NavPlanetList>
			</NavBar>
		</div>
	);
};

export default PlanetPage;
