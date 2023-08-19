import "@/styles/globals.css"

export const metadata = {
	title: "Easy Hai",
	description: "A learning platform for elderly people",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="w-full scroll-smooth">
			<body className="w-screen min-h-screen">{children}</body>
		</html>
	)
}
