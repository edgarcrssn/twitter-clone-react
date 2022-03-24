import logo from "../../assets/logo.png"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: transparent;
    cursor: pointer;

    border-radius: 9999px;
    padding: 12px;
    margin-bottom: 12px;
    width: 240px;

    &:hover{
        transition: .2s;
        background-color: ${({ theme }) => theme.colors.background_darker};
    }

    > .img-container{

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-position: center;
            object-fit: cover;
        }
    }

    > .twittername{
        padding: 0 12px;
        font-size: 15px;

        display: flex;
        flex-direction: column;

        span{
            line-height: 1.2em;

            &.pseudo{
                font-weight: 700;
            }

            &.arobase{
                color: ${({ theme }) => theme.colors.text_smaller};
            }   
        }
    }

    > .icon{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;

        svg{
            width: 19px;
            fill: ${({ theme }) => theme.colors.text_smaller};
        }
    }
`

const Account = () => {
    return(
        <StyledContainer>
            <div className="img-container">
                <img src={logo} alt="Profile" />
            </div>
            <div className="twittername">
                <span className="pseudo">Edgar</span>
                <span className="arobase">@edgarcrssn</span>
            </div>
            <div className="icon">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></g></svg>
                </div>
            </div>
        </StyledContainer>
    )
}

export default Account