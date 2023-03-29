import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Genres {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Genres[];
}

function useGenres() {
	const [genres, setGenres] = useState<Genres[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		apiClient
			.get<FetchGamesResponse>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});
		return () => controller.abort();
	}, []);

	return { genres, error, isLoading };
}

export default useGenres;
