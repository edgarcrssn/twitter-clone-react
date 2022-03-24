import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import SearchBar from "./SearchBar/SearchBar"
import Trends from "./Trends/Trends"
import Suggestions from "./Suggestions/Suggestions"
import Footer from "./Footer/Footer"

const StyledAside = styled.aside`
    width: 40%;
`

const StyledContainer = styled.div`
    min-height: 100vh;
    /* position: sticky;
    top: 0; */
`

const Widgets = styled.div`
    margin-left: 32px;
    display: flex;
    flex-direction: column;

    > div{
        margin-bottom: 16px;

        &:first-of-type{
            margin-top: 16px;
        }
    }
`

const Aside = () => {
    return(
        <StyledAside>
            <Routes>
                <Route path="/explore" element={
                    <StyledContainer>
                        <Widgets>
                            <Suggestions />
                            <Footer />
                        </Widgets>
                    </StyledContainer>
                } />
                <Route path="/messages" element={
                    null
                } />
                <Route path="/profile" element={
                    <StyledContainer>
                        <SearchBar />
                        <Widgets>
                            <Suggestions />
                            <Trends />
                            <Footer />
                        </Widgets>
                    </StyledContainer>
                } />
                <Route path="*" element={
                    <StyledContainer>
                        <SearchBar />
                        <Widgets>
                            <Trends />
                            <Suggestions />
                            <Footer />
                        </Widgets>
                    </StyledContainer>
                } />
            </Routes>
        </StyledAside>
    )
}

export default Aside