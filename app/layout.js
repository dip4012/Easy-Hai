import "@/styles/globals.css"

export const metadata = {
	title: "Easy Hai",
	description: "A learning platform for elderly people",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
