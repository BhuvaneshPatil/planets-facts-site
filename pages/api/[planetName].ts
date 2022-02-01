// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/data.json";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.query) {
		let resData = data.filter(
			(item) => item.name.toLowerCase() == req.query["planetName"]
		)[0];
		console.log(resData);
		return res.status(200).json(resData);
	}
	return res.status(404).json({ err: "Not Found" });
}
