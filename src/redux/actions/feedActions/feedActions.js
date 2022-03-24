const postTweet = (payload) => {  
    return {
        type: "POST_TWEET",
        payload: payload
    }
}

const feedActions = {
    postTweet
}

export default feedActions