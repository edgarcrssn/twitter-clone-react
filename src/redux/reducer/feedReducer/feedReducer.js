import picture from "../../../components/assets/profile-picture.png"
import malo from "../../../components/assets/malo.jpeg"
import react from "../../../components/assets/react-logo.png"
import logo from "../../../components/assets/logo.png"

const initialState = {
    tweets : [
        {
            user: {
                picture: react,
                twittername: "React",
                arobase: "ReactJS"
            },
            content: {
                text: "Hello World! 🌍",
                image: null
            },
            stats: {
                comments: 1,
                retweets: 5,
                likes: 10
            },
            date: "1 janv. 1970"
        },
        {
            user: {
                picture: logo,
                twittername: "Edgar",
                arobase: "edgarcrssn"
            },
            content: {
                text: "Voici mon chat 🐱",
                image: malo
            },
            stats: {
                comments: "70.8K",
                retweets: "1.2M",
                likes: "18.9M"
            },
            date: "6j"
        },
        {
            user: {
                picture: picture,
                twittername: "Lorem",
                arobase: "Ipsum"
            },
            content: {
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt rerum autem. Aliquam, fugit nostrum! Quibusdam ullam ducimus voluptas, rem ad nostrum quidem minus iste earum maxime cupiditate perspiciatis assumenda necessitatibus laborum, id eveniet facere nesciunt, totam distinctio? Repudiandae mollitia animi quo similique maiores perferendis nemo ipsum cupiditate dolor.",
                image: null
            },
            stats: {
                comments: "",
                retweets: "",
                likes: 1
            },
            date: "22. déc 2021"
        },
        {
            user: {
                picture: picture,
                twittername: "Lorem",
                arobase: "Ipsum"
            },
            content: {
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt rerum autem. Aliquam, fugit nostrum! Quibusdam ullam ducimus voluptas, rem ad nostrum quidem minus iste earum maxime cupiditate perspiciatis assumenda necessitatibus laborum, id eveniet facere nesciunt, totam distinctio? Repudiandae mollitia animi quo similique maiores perferendis nemo ipsum cupiditate dolor.",
                image: null
            },
            stats: {
                comments: "",
                retweets: "",
                likes: 1
            },
            date: "22. déc 2021"
        },
        {
            user: {
                picture: picture,
                twittername: "Lorem",
                arobase: "Ipsum"
            },
            content: {
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptatum nesciunt rerum autem. Aliquam, fugit nostrum! Quibusdam ullam ducimus voluptas, rem ad nostrum quidem minus iste earum maxime cupiditate perspiciatis assumenda necessitatibus laborum, id eveniet facere nesciunt, totam distinctio? Repudiandae mollitia animi quo similique maiores perferendis nemo ipsum cupiditate dolor.",
                image: null
            },
            stats: {
                comments: "",
                retweets: "",
                likes: 1
            },
            date: "22. déc 2021"
        }
    ]
}

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case "POST_TWEET":
            const newTweet = {
                user: {
                    picture: logo,
                    twittername: "Edgar",
                    arobase: "edgarcrssn"
                },
                content: {
                    text: action.payload,
                    image: null
                },
                stats: {
                    comments: "",
                    retweets: "",
                    likes: ""
                },
                date: "1s"
            }
            let newTweets = [...state.tweets]
            newTweets.unshift(newTweet)

            return Object.assign({}, state, {tweets: newTweets})

        default:
            return state
    }
}

export default feedReducer