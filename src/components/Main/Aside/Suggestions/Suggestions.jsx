import styled from "styled-components"
import vue from "../../../assets/vuejs.png"
import angular from "../../../assets/angular.png"

const StyledContainer = styled.div`
    background-color: #F6F9F9;
    border-radius: 15px;

    > div{
        padding: 12px 16px;

        &:last-of-type{
            margin-bottom: 12px;
        }

        &.head{
            h3{
                font-size: 20px;
                font-weight: 800;
            }
        }

        &.suggestions{
            cursor: pointer;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            background-color: transparent;

            &:hover{
                transition: .2s;
                background-color: ${({ theme }) => theme.colors.background_darker};
            }

            > div{
                display: flex;
                flex-direction: row;
                align-items: center;

                > .img-container{
                    img{
                        width: 48px;
                        height: 48px;
                        border-radius: 50%;
                        object-fit: cover;
                        object-position: center;
                    }
                }
    
                > .user-infos{
                    font-size: 15px;
    
                    padding: 0 12px;
                    display: flex;
                    flex-direction: column;
    
                    > span{
                        line-height: 1.3em;
    
                        &.twittername{
                            font-weight: 700;

                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        &.arobase{
                            color: ${({ theme }) => theme.colors.text_smaller};
                        }
                    }
    
                }
            }

            > .button-container{

                span{
                    font-size: 14px;
                    background-color: black;
                    color: white;
                    font-weight: 700;
                    padding: 8px 16px;
                    border-radius: 9999px;

                    opacity: 1;

                    &:hover{
                        transition: .2s;
                        opacity: .8;
                    }
                }
            }
        }
    }
`

const Suggestions = () => {

    const suggestions = [
        {
            profile_picture: vue,
            twittername: "VueJS",
            arobase: "vuejs"
        },
        {
            profile_picture: angular,
            twittername: "AngularJS",
            arobase: "angularjs"
        }
    ]

    return(
        <StyledContainer>
            <div className="head">
                <h3>Suggestions</h3>
            </div>
            {suggestions.map((suggestion, index) => (
                <div className="suggestions" key={index}>
                    <div>
                        <div className="img-container">
                            <img src={suggestion.profile_picture} alt="Profile" />
                        </div>
                        <div className="user-infos">
                            <span className="twittername">{suggestion.twittername}</span>
                            <span className="arobase">@{suggestion.arobase}</span>
                        </div>
                    </div>
                    <div className="button-container">
                        <span>Suivre</span>
                    </div>
                </div>
            ))}
        </StyledContainer>
    )
}

export default Suggestions