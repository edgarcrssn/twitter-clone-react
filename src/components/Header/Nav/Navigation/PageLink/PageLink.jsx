import { Link } from "react-router-dom"
import styled from "styled-components"
import { Routes, Route } from 'react-router-dom'

const StyledLink = styled(Link)`
    font-size: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};

    display: block;
    line-height: 50px;
    width: 100%;

    &.inactive{
        pointer-events: none;
        opacity: .2;
    }

    > .container{
        padding: 0 12px;
        display: inline-block;
        border-radius: 9999px;
        background-color: transparent;
    }

    &:hover > .container{
        transition: .2s;
        background-color: #E7E7E8;
    }

    .flex{
        display: flex;
        flex-direction: row;
        align-items: center;

        .img-container{
            width: 27px;
            height: 27px;

            display: flex;
            align-items: center;
            justify-content: center;

            > svg{
                width: 100%;
                height: 100%;
            }
        }

        .name{
            padding: 0 16px;

            &.selected{
                font-weight: 700;
            }
        }
    }
`

const Page = ({ page }) => {
    return(
        <>
            <StyledLink to={page.link} className={page.inactive ? "inactive" : ""}>
                <div className="container">
                    <div className="flex">
                        <div className="img-container">
                            <Routes>
                                <Route path={page.link} element={page.img_filled} />
                                <Route path="*" element={page.img} />
                            </Routes>
                        </div>
                        <div>
                            <Routes>
                                <Route path={page.link} element={<span className="name selected">{page.name}</span>} />
                                <Route path="*" element={<span className="name">{page.name}</span>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </StyledLink>
        </>
    )
}

export default Page