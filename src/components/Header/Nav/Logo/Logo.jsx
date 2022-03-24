import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLogoContainer = styled.div`
    margin: 2px 0;
    position: relative;
    width: 50px;
    height: 50px;

    svg{
        fill: ${({ theme }) => theme.colors.main};
        width: 28px;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 9999;
    }

    .hover-effect{
        position: absolute;
        width: 100%;
        height: 100%;

        z-index: 9;

        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.main_lighter};

        opacity: 0;
    }
`

const StyledLogoLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &:hover > .hover-effect{
        transition: .2s;
        opacity: 1;
    }
`

const Logo = () => {
    return(
        <>
            <StyledLogoContainer>
                <StyledLogoLink to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-1cvl2hr r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/></g></svg>
                    <div className="hover-effect"></div>
                </StyledLogoLink>
            </StyledLogoContainer>
        </>
    )
}

export default Logo