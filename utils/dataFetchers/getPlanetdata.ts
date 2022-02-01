import axios from "axios";
import type { PlanetData } from "../../types";

export const getPlanet = async (planetName: string) => {
	const data: PlanetData = await axios.get(
		`http://localhost:3000/api/${planetName}`
	);
	return data.data;
};
