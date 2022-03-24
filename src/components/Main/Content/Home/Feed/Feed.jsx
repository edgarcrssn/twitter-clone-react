import Tweet from "./Tweet/Tweet"
import { useSelector } from 'react-redux'

const Feed = () => {

    let tweets = useSelector(state => state.feedReducer.tweets)

    return(
        <>
            {tweets.map((tweet, index) => (
                <Tweet tweet={tweet} key={index}/>
            ))}
        </>
    )
}

export default Feed