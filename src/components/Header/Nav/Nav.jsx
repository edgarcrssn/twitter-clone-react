import Logo from "./Logo/Logo"
import Navigation from "./Navigation/Navigation"
import TweetButton from "./TweetButton/TweetButton"
import styled from "styled-components"

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Nav = () => {
    return(
        <StyledNav>
            <Logo />
            <Navigation />
            <TweetButton />
        </StyledNav>
    )
}

export default Nav