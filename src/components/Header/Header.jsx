import { Outlet } from "react-router-dom";
import { Container } from "index.styled";
import {
	HeaderElement,
	HeaderInner,
	HeaderNavigation,
	HeaderLinksList,
	HeaderLink,
	StyledNavLink
} from "./Header.styled";
import { Suspense } from "react";

const Header = () => {
	return (
		<>
			<HeaderElement>
				<Container>
					<HeaderInner>
						<HeaderNavigation>
							<HeaderLinksList>
								<HeaderLink>
									<StyledNavLink to="/" end>Home</StyledNavLink>
								</HeaderLink>
								<HeaderLink>
									<StyledNavLink to="/movies">Movies</StyledNavLink>
								</HeaderLink>
							</HeaderLinksList>
						</HeaderNavigation>
					</HeaderInner>
				</Container>
			</HeaderElement>
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
		</>
	)
}

export default Header;