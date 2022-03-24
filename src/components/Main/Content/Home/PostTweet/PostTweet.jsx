import styled from "styled-components"
import logo from "../../../../assets/logo.png"
import Options from "./Options/Options"
import SubmitTweet from "./SubmitTweet/SubmitTweet"
import { useState } from "react"
import { useDispatch } from "react-redux"
import rootActions from "../../../../../redux/actions/rootActions"

const StyledPostTweet = styled.div`
    padding: 12px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background_darker};

    display: flex;
    flex-direction: row;

    .profile-picture-container{
        width: 48px;
        height: 48px;
        margin-right: 12px;

        img{
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
    }

    .content{
        width: 100%;

        .textarea{
            textarea{
                all: unset;
                width: 100%;
                background-color: #fff;
                font-size: 20px;
                padding: 12px 0;
            }
        }

        .buttons{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }
`

const PostTweet = () => {

    const [tweetValue, setTweetValue] = useState("")

    const dispatch = useDispatch()

    const postTweet = () => {
        dispatch(rootActions.feedActions.postTweet(tweetValue))
        setTweetValue("")
    }

    return(
        <StyledPostTweet>
            <div className="profile-picture-container">
                <img src={logo} alt="Profile" />
            </div>
            <div className="content">
                <div className="textarea">
                    <textarea placeholder="Quoi de neuf ?" rows="1" value={tweetValue} onChange={(e) => setTweetValue(e.target.value)}></textarea>
                </div>
                <div className="buttons">
                    <Options />
                    <SubmitTweet postTweet={postTweet} />
                </div>
            </div>
        </StyledPostTweet>
    )
}

export default PostTweet