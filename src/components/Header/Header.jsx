import Nav from "./Nav/Nav"
import Account from "./Account/Account"
import styled from "styled-components"

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 25vw;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 7.2vw;
`

const Header = () => {
    return(
        <StyledHeader>
            <Nav />
            <Account />
        </StyledHeader>
    )
}

export default Header