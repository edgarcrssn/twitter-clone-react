import styled from "styled-components"
import { Routes, Route } from "react-router-dom"
import Home from "./Home/Home"
import Explore from "./Explore/Explore"
import Communities from "./Communities/Communities"
import Notifications from "./Notifications/Notifications"
import Messages from "./Messages/Messages"
import Bookmarks from "./Bookmarks/Bookmarks"
import Profile from "./Profile/Profile"

const StyledSection = styled.section`
    width: 60%;
    border-left: 1px solid ${({ theme }) => theme.colors.background_darker};
    border-right: 1px solid ${({ theme }) => theme.colors.background_darker};
`

const Content = () => {
    return(
        <StyledSection>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/communities" element={<Communities />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </StyledSection>
    )
}

export default Content