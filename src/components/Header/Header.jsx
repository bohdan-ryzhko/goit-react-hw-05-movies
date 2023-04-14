import { Outlet } from "react-router-dom";
import { Container } from "index.styled";
import {
	HeaderElement,
	HeaderInner,
	HeaderNavigation,
	HeaderLinksList,
	HeaderLink,
	StyledNavLink
} from "./Header.styles";

const Header = () => {
	return (
		<>
			<HeaderElement>
				<Container>
					<HeaderInner>
						<HeaderNavigation>
							<HeaderLinksList>
								<HeaderLink>
									<StyledNavLink to="/home" end>Home</StyledNavLink>
								</HeaderLink>
								<HeaderLink>
									<StyledNavLink to="/movies">Movies</StyledNavLink>
								</HeaderLink>
							</HeaderLinksList>
						</HeaderNavigation>
					</HeaderInner>
				</Container>
			</HeaderElement>
			<Outlet />
		</>
	)
}

export default Header;