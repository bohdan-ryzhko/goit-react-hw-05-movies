import Header from "components/Header/Header"
import { Container } from "index.styled"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={<Container>Loading...</Container>}>
					<Outlet />
				</Suspense>
			</main>
		</>
	)
}