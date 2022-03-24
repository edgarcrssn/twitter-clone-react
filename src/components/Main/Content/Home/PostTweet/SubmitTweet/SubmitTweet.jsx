import styled from "styled-components"
 
const StyledButton = styled.div`
    cursor: pointer;
    padding: 0 16px;
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.main};

    &:hover{
        transition: .2s;
        background-color: ${({ theme }) => theme.colors.main_darker};
    }

    span{
        line-height: 35px;
        font-size: 15px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.background};
    }
`

const SubmitTweet = ({ postTweet }) => {

    return(
        <StyledButton onClick={() => postTweet()}>
            <span>Tweeter</span>
        </StyledButton>
    )
}

export default SubmitTweet