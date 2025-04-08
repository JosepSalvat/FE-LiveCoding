export interface Company {
	name: string;
	department: string;
	title: string;
}

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	birthDate: string;
	image: string;
	company: Company;
}
