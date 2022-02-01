import Link from "next/link";
import styled from "styled-components";
import { getColorFromPlanetName } from "../../../utils/dataFetchers/styleHelpers";

export const NavBar = styled.nav`
	border-bottom: 1px solid #979797;
	padding: 0 4%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavHeading = styled.h1`
	font-size: 1.75rem;
	color: #ffffff;
	width: 40%;
`;

export const NavPlanetList = styled.ol`
	list-style: none;
	width: 55%;
	display: flex;
`;

export const NavPlanetItem = styled.li`
	padding: 2rem 0.8rem;
	flex: 1;
	position: relative;
	text-align: center;
	font-family: "Spartan";
	font-size: 0.68rem;
	font-weight: 700;
	letter-spacing: 1px;
	cursor: pointer;
	&::after {
		content: "";
		position: absolute;
		width: ${(props) => (props.isActive ? "100%" : "0%")};
		height: 5px;
		left: ${(props) => (props.isActive ? "0" : "50%")};
		top: 0;
		background-color: ${(props) =>
			getColorFromPlanetName(props.planetName)};
		transition: all ease-in-out 0.2s;
	}
	& a {
		color: ${(props) => (props.isActive ? "#fff" : "rgb(193, 193, 200)")};
	}
	&:hover::after {
		width: 100%;
		left: 0;
	}
	&:hover a {
		color: #fff;
	}
`;

export const NavLink = styled.a`
	transition: all ease 0.2s;
	text-decoration: none;
`;
