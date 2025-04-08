import { useState, useEffect } from "react";

type UseFetchResponse<T> = {
	data: T | null;
	loading: boolean;
	error: string | null;
};

function useFetch<T>(url: string): UseFetchResponse<T> {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const result = await response.json();
				setData(result);
			} catch (err) {
				if (err instanceof Error) {
					setError(err.message);
				} else {
					setError("Unknown error");
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
}

export default useFetch;
