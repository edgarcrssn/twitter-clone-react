import styled from "styled-components"

const StyledFooter = styled.footer`
    width: 100%;
    padding: 0 16px;
    margin-bottom: 96px;

    *{
        font-size: 12px;
        color: ${({ theme }) => theme.colors.text_smaller};
    }

    span:not(.not-a-link):hover{
        cursor: pointer;
        text-decoration: underline;
    }

    span{
        line-height: 1.3em;
        margin: 2px 0;

        &.padding{
            padding-right: 12px;
        }
    }

    .more{
        display: inline-flex;
        flex-direction: row;
        align-items: center;

        span{
            padding-right: 2px;
        }

        svg{
            height: 13px;
            fill: ${({ theme }) => theme.colors.text_smaller};
        }
    }
`

const Footer = () => {
    return(
        <StyledFooter>
            <span className="padding">Conditions d’utilisation</span>
            <span>Politique de Confidentialité</span>
            <br />
            <span className="padding">Politique relative aux cookies</span>
            <span>Accessibilité</span>
            <br />
            <span className="padding">Informations sur les publicités</span>
            <div className="more">
                <span>Plus</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"><g><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></g></svg>
            </div>
            <br />
            <span className="not-a-link">© 2022 Twitter, Inc.</span>
        </StyledFooter>
    )
}

export default Footer