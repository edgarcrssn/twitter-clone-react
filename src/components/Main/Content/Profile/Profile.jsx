import styled from "styled-components"
import banner from "../../../assets/main-tweet-bg.jpg"
import logo from "../../../assets/logo.png"
import Tweet from "../Home/Feed/Tweet/Tweet"
import { useSelector } from 'react-redux'

const StyledHead = styled.div`
    cursor: pointer;

    position: sticky;
    z-index: 9999;
    top: 0;
    height: 50px;

    padding: 0 16px;

    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(15px);

    .svg-container{
        width: 34px;
        height: 34px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;

        &:hover{
            transition: .2s;
            background-color: #E7E7E8;
        }

        svg{
            width: 20px;
            height: 20px;
        }
    }

    .profile-infos{
        padding-left: 2em;

        display: flex;
        flex-direction: column;

        span{
            line-height: 1.2em;

            &.twittername{
                font-size: 20px;
                font-weight: 700;
            }
            &.tweets{
                color: ${({ theme }) => theme.colors.text_smaller};
                font-size: 13px;
            }
        }
    }
`

const StyledBanner = styled.div`
    cursor: pointer;
    width: 100%;
    height: 200px;

    > img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left center;
    }
`

const StyledProfile = styled.div`
    margin-bottom: 16px;
    padding: 12px 16px 0;

    .head{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        height: 70px;
    
        .img-container{
            cursor: pointer;
            position: relative;

            width: 130px;
            height: 130px;
            border-radius: 50%;
            border: 4px solid ${({ theme }) => theme.colors.background};
    
            transform: translateY(-60%);
    
            > img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
                object-position: center;
            }
        }
        .edit-button{
            cursor: pointer;

            background-color: transparent;
            border: 1px solid #E7E7E8;
            border-radius: 9999Px;

            &:hover{
                transition: .2s;
                background-color: ${({ theme }) => theme.colors.background_hover};
            }

            span{
                font-size: 15px;
                font-weight: 700;
                line-height: 2.5em;
                padding: 0 16px;
            }
        }
    }
    .identifier{
        margin-bottom: 12px;

        span{
            display: block;
            line-height: 1.3em;

            &.twittername{
                font-weight: 700;
                font-size: 20px;
            }
            &.arobase{
                font-size: 15px;
                color: ${({ theme }) => theme.colors.text_smaller};
            }
        }
    }
    .bio{
        p{
            font-size: 13px;
            line-height: 1.3em;
        }
    }
    .infos{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        margin: 12px 0;

        color: ${({ theme }) => theme.colors.text_smaller};
        font-size: 15px;

        > span{
            display: flex;
            flex-direction: row;
            align-items: center;

            margin-right: 16px;

            .svg-container{
                width: 19px;
                height: 19px;

                margin-right: 4px;

                display: flex;
                align-items: center;
                justify-content: center;

                svg{
                    width: 100%;
                    height: 100%;
                    fill: ${({ theme }) => theme.colors.text_smaller};
                }
            }

            a{
                text-decoration: none;
                color: ${({ theme }) => theme.colors.main};

                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    .followers{
        > span{
            color: ${({ theme }) => theme.colors.text_smaller};
            cursor: pointer;
            margin-right: 16px;

            strong{
                color: black;
                font-weight: 700;
            }

            &:hover{
                text-decoration: underline;
            }
        }
    }
`

const StyledCategories = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme}) => theme.colors.background_darker};

    > div{
        flex-grow: 1;
        padding: 0 16px;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover{
            background-color: #E7E7E8;
        }

        > span{
            padding: 16px 0;

            line-height: 1.3em;
            font-size: 15px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.text_smaller};

            position: relative;

            &.active{
                color: black;
            }

            .active-indicator{
                width: 100%;
                height: 4px;
                border-radius: 4px;
                background-color: ${({ theme }) => theme.colors.main};
                position: absolute;
                bottom: 0;
            }
        }
    }
`

const Profile = () => {

    let tweets = useSelector(state => state.feedReducer.tweets)

    return(
        <>
            <StyledHead className="head">
                <div className="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"/></g></svg>
                </div>
                <div className="profile-infos">
                    <span className="twittername">Edgar</span>
                    <span className="tweets">1 Tweet</span>
                </div>
            </StyledHead>
            <StyledBanner>
                <img src={banner} alt="Banner" />
            </StyledBanner>
            <StyledProfile>
                <div className="head">
                    <div className="img-container">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="edit-button">
                        <span>Éditer le profil</span>
                    </div>
                </div>
                <div className="identifier">
                    <div>
                        <span className="twittername">Edgar</span>
                    </div>
                    <div>
                        <span className="arobase">@edgarcrssn</span>
                    </div>
                </div>
                <div className="bio">
                    <p>
                        Bonjour ! Je m’appelle Edgar Cresson, j’ai 19 ans et je suis étudiant en deuxième année dans l’école MyDigitalSchool, à Lille.
                    </p>
                </div>
                <div className="infos">
                    <span>
                        <div className="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M12 14.315c-2.088 0-3.787-1.698-3.787-3.786S9.913 6.74 12 6.74s3.787 1.7 3.787 3.787-1.7 3.785-3.787 3.785zm0-6.073c-1.26 0-2.287 1.026-2.287 2.287S10.74 12.814 12 12.814s2.287-1.025 2.287-2.286S13.26 8.24 12 8.24z"/><path d="M20.692 10.69C20.692 5.9 16.792 2 12 2s-8.692 3.9-8.692 8.69c0 1.902.603 3.708 1.743 5.223l.003-.002.007.015c1.628 2.07 6.278 5.757 6.475 5.912.138.11.302.163.465.163.163 0 .327-.053.465-.162.197-.155 4.847-3.84 6.475-5.912l.007-.014.002.002c1.14-1.516 1.742-3.32 1.742-5.223zM12 20.29c-1.224-.99-4.52-3.715-5.756-5.285-.94-1.25-1.436-2.742-1.436-4.312C4.808 6.727 8.035 3.5 12 3.5s7.192 3.226 7.192 7.19c0 1.57-.497 3.062-1.436 4.313-1.236 1.57-4.532 4.294-5.756 5.285z"/></g></svg>
                        </div>
                        <span>Lille, France</span>
                    </span>
                    <span>
                        <div className="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"/><path d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"/></g></svg>
                        </div>
                        <span><a href="https://edgarcresson.fr">edgarcresson.fr</a></span>
                    </span>
                    <span>
                        <div className="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M7.75 11.083c-.414 0-.75-.336-.75-.75C7 7.393 9.243 5 12 5c.414 0 .75.336.75.75s-.336.75-.75.75c-1.93 0-3.5 1.72-3.5 3.833 0 .414-.336.75-.75.75z"/><path d="M20.75 10.333c0-5.01-3.925-9.083-8.75-9.083s-8.75 4.074-8.75 9.083c0 4.605 3.32 8.412 7.605 8.997l-1.7 1.83c-.137.145-.173.357-.093.54.08.182.26.3.46.3h4.957c.198 0 .378-.118.457-.3.08-.183.044-.395-.092-.54l-1.7-1.83c4.285-.585 7.605-4.392 7.605-8.997zM12 17.917c-3.998 0-7.25-3.402-7.25-7.584S8.002 2.75 12 2.75s7.25 3.4 7.25 7.583-3.252 7.584-7.25 7.584z"/></g></svg>
                        </div>
                        <span>Naissance le 21 juillet 2002</span>
                    </span>
                    <span>
                        <div className="svg-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"/><circle cx="7.032" cy="8.75" r="1.285"/><circle cx="7.032" cy="13.156" r="1.285"/><circle cx="16.968" cy="8.75" r="1.285"/><circle cx="16.968" cy="13.156" r="1.285"/><circle cx="12" cy="8.75" r="1.285"/><circle cx="12" cy="13.156" r="1.285"/><circle cx="7.032" cy="17.486" r="1.285"/><circle cx="12" cy="17.486" r="1.285"/></g></svg>
                        </div>
                        <span>A rejoint React en janvier 2022</span>
                    </span>
                </div>
                <div className="followers">
                    <span>
                        <strong>0 </strong>
                        abonnements
                    </span>
                    <span>
                        <strong>10M </strong>
                        abonnés
                    </span>
                </div>
            </StyledProfile>
            <StyledCategories>
                <div>
                    <span className="active">
                        Tweets
                        <div className="active-indicator"></div>
                    </span>
                </div>
                <div>
                    <span>Tweets et réponses</span>
                </div>
                <div>
                    <span>Médias</span>
                    </div>
                <div>
                    <span>J'aime</span>
                </div>
            </StyledCategories>
            {tweets.map((tweet, index) => {
                if(tweet.user.arobase === "edgarcrssn"){
                    return(
                        <Tweet tweet={tweet} key={index} />
                    )
                }
            })}
        </>
    )
}

export default Profile