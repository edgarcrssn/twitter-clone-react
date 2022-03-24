import styled from "styled-components"
import TweetStats from "./TweetStats/TweetStats"

const StyledArticle = styled.article`
    padding: 12px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background_darker};
    display: flex;
    flex-direction: row;

    font-size: 15px;

    background-color: ${({ theme }) => theme.colors.background};
    cursor: pointer;

    position: relative;

    &:hover{
        transition: .2s;
        background-color: ${({ theme }) => theme.colors.background_hover};
    }

    .more{
        position: absolute;
        right: 6px;
        top: 4px;

        width: 35px;
        height: 35px;
        border-radius: 50%;

        cursor: pointer;    
        background-color: transparent;

        display: flex;
        align-items: center;
        justify-content: center;

        > svg{
            fill: ${({ theme }) => theme.colors.text_smaller};
            width: 19px;
            height: 19px;
        }

        &:hover{
            transition: .2s;
            background-color: ${({ theme }) => theme.colors.main_lighter};

            > svg{
                transition: .2s;
                fill: ${({ theme }) => theme.colors.main};
            }
        }
    }

    .img-container{
        margin-right: 16px;

        img{
            object-position: center;
            object-fit: contain;
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
    }

    .content{
        width: 100%;

        .twittername{
            font-weight: 700;
        }
        .smaller{
            color: ${({ theme }) => theme.colors.text_smaller};
        }
        .arobase, .date{
            padding: 0 4px;
        }

        p{
            line-height: 1.3em;
            padding: 6px 0;
        }

        img{
            margin-top: 6px;
            object-fit: cover;
            object-position: center;
            border-radius: 10px;
            max-width: 100%;
            max-height: 500px;
        }

        .stats{
            padding-top: 4px;
        }
    }
`

const Tweet = ({ tweet }) => {

    const displayImage = (img) => {
        if(img){
            return(
                <img src={img} alt="" />
            )
        }
    }

    return(
        <StyledArticle>
            <div className="more">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></g></svg>
            </div>
            <div className="img-container">
                <img src={tweet.user.picture} alt="Profile" />
            </div>
            <div className="content">
                <div>
                    <span className="twittername">{tweet.user.twittername}</span>
                    <span className="arobase smaller">@{tweet.user.arobase}</span>
                    <span className="smaller">&bull;</span>
                    <span className="date smaller">{tweet.date}</span>
                </div>
                <p>{tweet.content.text}</p>
                {displayImage(tweet.content.image)}
                <div className="stats">
                    <TweetStats stats={tweet.stats}/>
                </div>
            </div>
        </StyledArticle>
    )
}

export default Tweet