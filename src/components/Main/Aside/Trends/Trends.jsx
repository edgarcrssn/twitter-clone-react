import styled from "styled-components"

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

        &.trends{
            cursor: pointer;
            display: flex;
            flex-direction: column;
            background-color: transparent;

            position: relative;

            span{
                line-height: 1.3em;

                &.category, &.tweets{
                    font-size: 13px;
                    color: ${({ theme }) => theme.colors.text_smaller};
                }
    
                &.subject{
                    padding: 2px 0;
                    font-size: 15px;
                    font-weight: 700;
                }
            }

            .svg-container{
                width: 35px;
                height: 35px;
                border-radius: 50%;

                display: flex;
                align-items: center;
                justify-content: center;

                position: absolute;
                top: 6px;
                right: 8px;

                background-color: transparent;

                > svg{
                    width: 19px;
                    height: 19px;
                    fill: ${({ theme }) => theme.colors.text_smaller};
                }

                &:hover{
                    transition: .2s;
                    background-color: #DDE8F1;

                    > svg{
                        fill: ${({ theme }) => theme.colors.main};
                    }
                }
            }

            &:hover{
                transition: .2s;
                background-color: ${({ theme }) => theme.colors.background_darker};
            }
        }
    }
`

const Trends = () => {

    const trends = [
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        },
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        },
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        },
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        },
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        },
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        },
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        },
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        },
        {
            category: "Football",
            subject: "Champions League",
            tweets: "12.3K"
        }
    ]

    return(
        <StyledContainer>
            <div className="head">
                <h3>Tendances pour vous</h3>
            </div>
            {trends.map((trend, index) => (
                <div className="trends" key={index}>
                    <span className="category">{trend.category}</span>
                    <span className="subject">{trend.subject}</span>
                    <span className="tweets">{trend.tweets} Tweets</span>
                    <div className="svg-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></g></svg>
                    </div>
                </div>
            ))}
        </StyledContainer>
    )
}

export default Trends