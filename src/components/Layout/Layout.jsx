import Header from "components/Header/Header"
import { Suspense } from "react"

export const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<div>Loading...</div>}></Suspense>
			</main>
		</>
	)
}