import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "204fded981ca455ca2a2a1536fd7d612",
	},
});
