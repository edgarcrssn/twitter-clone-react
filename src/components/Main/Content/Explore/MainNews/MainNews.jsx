import styled from "styled-components"
import profile from "../../../../assets/logo.png"
import imgbg from "../../../../assets/main-tweet-bg.jpg"

const StyledNews = styled.a`
    display: block;
    width: 100%;
    height: 330px;
    background-image: url(${imgbg});
    background-position: left center;
    background-size: cover;

    position: relative;

    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, rgba(0,0,0,.8) 0%, rgba(250,250,250,0) 100%);
    }

    > .content{
        width: 100%;

        position: absolute;
        bottom: 12px;
        left: 16px;

        .tweet{
            color: ${({ theme }) => theme.colors.background};

            .head{
                display: flex;
                flex-direction: row;
                align-items: center;

                font-size: 13px;

                .img-container{
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img{
                        width: 16px;
                        height: 16px;
                        border-radius: 50%;
                    }
                }
                .twittername{
                    padding: 0 4px;
                    font-weight: 700;
                }
            }
            .title{
                h3{
                    font-size: 23px;
                    font-weight: 700;
                    line-height: 1.3em;
                }
            }
        }
    }
`

const MainNews = () => {
    return(
        <StyledNews href="https://edgarcresson.fr" target="_blank">
            <div className="content">
                <div className="tweet">
                    <div className="head">
                        <div className="img-container">
                            <img src={profile} alt="Profile" />
                        </div>
                        <span className="twittername">Edgar</span>
                        <span className="date">&bull; Il y a 1 heure</span>
                    </div>
                    <div className="title">
                        <h3>Cliquez pour découvrir mon portfolio en ligne !</h3>
                    </div>
                </div>
            </div>
        </StyledNews>
    )
}

export default MainNews
