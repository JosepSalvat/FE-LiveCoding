import type { User } from "../types";

interface UserCardProps {
	user: User;
}

export const UserCard: React.FC<UserCardProps> = ({
	user: { firstName, lastName, id },
}) => {
	return (
		<div
			style={{
				border: "1px solid #c9c9c9",
				height: "25px",
				width: "180px",
				textAlign: "left",
				padding: "24px",
				cursor: "pointer",
				borderRadius: "4px",
			}}
		>
			{firstName} {lastName}
		</div>
	);
};
