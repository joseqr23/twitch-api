const accessToken = "bp..."
const clientId = "3wr..."

const headers = {
	"Content-type": "application/json; charset=UTF-8",
	"Authorization": `Bearer ${accessToken}`,
	"Client-Id": `${clientId}`
};

async function getProfileData() {
	const urlChannel = "https://api.twitch.tv/helix/users?login=linder3hs"
	const response = await fetch(urlChannel, { headers: headers })
	const data = await response.json()
	//console.log("datos", data.data)
}
getProfileData()


let allFollowers = {}

async function getAllFollowers() {
	let allData = [];
	let cursorValue = '';
	let hasNextPage = true;
	let cont = 1

	while (hasNextPage) {
		const urlFollows = `https://api.twitch.tv/helix/users/follows?to_id=150058572&first=100${cursorValue}`;

		const response = await fetch(urlFollows, { headers });
		const data = await response.json();

		allData.push(...data.data);

		if (data.pagination && data.pagination.cursor) {
			cursorValue = `&after=${data.pagination.cursor}`;
		} else {
			hasNextPage = false;
		}
	}

	const followersList = document.getElementById("followers")

	allData.forEach((follower) => {

		followersList.innerHTML += `<li><p>${cont}-  ${follower.from_name}</p></li>`
		cont += 1

		// Guardarlo en un objeto.
		const id = follower.from_id
		allFollowers[id] = follower.from_name
	})

}
getAllFollowers();

console.log("Seguidores => ", allFollowers)