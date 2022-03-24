import Content from "./Content/Content"
import Aside from "./Aside/Aside"
import styled from "styled-components"

const StyledMain = styled.main`
    display: flex;
    flex-direction: row;

    width: 100%;

    min-height: 100vh;
    padding-right: 7.2vw;
    margin-left: 25vw;
`

const Main = () => {
    return(
        <StyledMain>
            <Content />
            <Aside />
        </StyledMain>
    )
}

export default Main