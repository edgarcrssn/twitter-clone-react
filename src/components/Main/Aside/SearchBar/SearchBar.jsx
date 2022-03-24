import styled from "styled-components"

const StyledContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    position: sticky;
    z-index: 9999;
    top: 0;
    padding: 5px 0 5px 32px;

    &.explore{
        padding: 5px 16px;
    }
    
    .search-bar{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    
        input{
            all: unset;
        }
    
        .svg-container, input{
            height: 40px;
            border: 1px solid ${({ theme }) => theme.colors.background_darker};
            background-color: ${({ theme }) => theme.colors.background_darker};
        }
    
        .svg-container{
            border-right: transparent;
            border-radius: 9999px 0 0 9999px;
            padding-left: 16px;
    
            display: flex;
            align-items: center;
            justify-content: center;
    
            svg{
                fill: ${({ theme }) => theme.colors.text_smaller};
                width: 20px;
                height: 20px;
            }
        }
    
        input{
            font-size: 15px;
            border-left: transparent;
            width: 100%;
            border-radius: 0 9999px 9999px 0;
            box-sizing: border-box;
            padding: 12px;
    
            &::placeholder{
                color: ${({ theme }) => theme.colors.text_smaller};
            }


        }
    
        input:focus{
            background-color: transparent;
            border: 1px solid ${({ theme }) => theme.colors.main};
            border-left: transparent;
    
            & + .svg-container{
                background-color: transparent;
                border: 1px solid ${({ theme }) => theme.colors.main};
                border-right: transparent;
    
                > svg{
                    fill: ${({ theme }) => theme.colors.main};
                }
            }
        }
    }
`

const SearchBar = ({ explore }) => {

    return(
        <StyledContainer className={explore ? "explore" : ""}>
            <div className="search-bar">
                <input type="text" placeholder="Recherche Twitter"/>
                <div className="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"/></g></svg>
                </div>
            </div>
        </StyledContainer>
    )
}

export default SearchBar