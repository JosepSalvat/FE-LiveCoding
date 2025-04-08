import { UserCard } from "./components/UserCard";
import useFetch from "./hooks/useFetch";
import type { User } from "./types";

function App() {
	const { data, loading, error } = useFetch<{ users: User[] }>(
		"https://dummyjson.com/users",
	);

	return (
		<div style={{ width: "100vw%", display: "flex" }}>
			{loading && <p>Cargando usuarios...</p>}
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
					gap: "16px",
					padding: "16px",
					border: "1px solid red",
				}}
			>
				{!loading &&
					data &&
					data.users.map((user) => <UserCard key={user.id} user={user} />)}
			</div>
			{error && <p style={{ color: "red" }}>Error: {error}</p>}
		</div>
	);
}

export default App;
