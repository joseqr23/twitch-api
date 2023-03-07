import dotenv from "dotenv"
dotenv.config();

const accessToken = process.env.ACCESS_TOKEN
const clientId = process.env.CLIENT_ID
const idProfile = process.env.PROFILE_ID

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${accessToken}`,
	"Client-Id": `${clientId}`
};


export const getProfileData = async (req, res) => {

	try {
		const { user } = req.params;
		const urlProfile = `https://api.twitch.tv/helix/users?login=${user}`
		const response = await fetch(urlProfile, { headers: headers })
		const data = await response.json()

		res.status(200).json({ ok: true, data: data.data })
	}
	catch (error) {
		console.log(error)
	}
}
getProfileData() 


export const getAllFollowers = async (_req, res) => {
	let allData = [];
	let allFollowers = {};
	let cursorValue = '';
	let hasNextPage = true;

	try {
		while (hasNextPage) {
			let cont = 1;

			const urlFollows = `https://api.twitch.tv/helix/users/follows?to_id=${idProfile}&first=100${cursorValue}`;
			const response = await fetch(urlFollows, { headers });
			const data = await response.json();

			allData.push(...data.data);

			if (data.pagination && data.pagination.cursor) {
				cursorValue = `&after=${data.pagination.cursor}`;
			} else {
				hasNextPage = false;
			}

			allData.forEach((follower) => {
				allFollowers[cont] = follower.from_name
				cont += 1

			})
		}
		res.status(200).json({ ok: true, count: allData.length, data: allFollowers })
	} 
	catch (error) {
		res.status(500).json({ ok: false, message: error });
	}
};