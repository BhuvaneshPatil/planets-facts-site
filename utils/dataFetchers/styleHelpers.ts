import { COLOR_SCHEME } from "../../constants";

export const getColorFromPlanetName = (planetName: string) => {
	return COLOR_SCHEME[planetName.toUpperCase()];
};
