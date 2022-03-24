import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledButton = styled.div`
    margin: 4px 0;
    width: 225px;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.main};

    &:hover{
        transition: .2s;
        background-color: ${({ theme }) => theme.colors.main_darker};
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    line-height: 50px;

    > div{
        display: flex;
        align-items: center;
        justify-content: center;
        
        span{
            font-size: 17px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.background};
        }
    }

`

const TweetButton = () => {
    return(
        <>
            <StyledButton>
                <StyledLink to="/compose/tweet">
                    <div>
                        <span>Tweeter</span>
                    </div>
                </StyledLink>
            </StyledButton>
        </>
    )
}

export default TweetButton