import styled from 'styled-components'
import papertextureblue from '../assets/papertextureblue.webp'
import resume from '../assets/Resume_Basile_MAILLE.pdf'

const sizes = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    medium: '1200px',
  };
  
// Helper function for media queries
const media = {
mobile: `(max-width: ${sizes.mobile})`,
tablet: `(max-width: ${sizes.tablet})`,
desktop: `(max-width: ${sizes.desktop})`,
medium: `(max-width: ${sizes.medium})`,
};

const FooterSection = styled.footer`
    padding: 2rem;
    @media ${media.tablet} {
        padding: 1rem;
    }
`

const FooterWrapper = styled.div`
    background-color: var(--secondary);
    border-radius: 5px;
    height: 100%;
    width: 100%;
    position:relative;
    padding: 2rem 5rem;
    &:after {
        content: "";
        width:100%;
        height:100%;
        position:absolute;
        background-image: url(${papertextureblue});
        mix-blend-mode: overlay;
        background-size: cover;
        right:0;
        top: 0;
        clip: auto;
    }
    display:flex;
    align-items: center;
    gap: 3rem;
    @media ${media.medium} {
        padding: 2rem 3rem;
    }
    @media ${media.desktop} {
        padding: 2rem;
        gap: 2rem;
    }
    @media ${media.tablet} {
        padding: 2rem 1.5rem;
    }
    @media ${media.mobile} {
        padding: 2rem 1rem;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
    }
`

const FooterSocials = styled.div`
    display: flex;
    gap: 1rem;
`

const SocialsLogo = styled.a`
    width: 2rem;
    height: 2rem;
    z-index: 2;
    display:flex;
    justify-content: center;
    align-items: center;
    @media ${media.tablet} {
        width: 1.7rem;
        height: 1.7rem;
    }
    @media ${media.mobile} {
        width: 2rem;
        height: 2rem;
    }

`
const LogoSvg = styled.svg`
    width: 100%;
    height: 100%;
    fill: var(--background-light);
    transition: all .3s ease-in-out;
    &:hover {
        fill: var(--accent);
    }
`

const FooterEmail = styled.a`
    z-index: 2;
    font-family: 'EB Garamond';
    font-size: 2rem;
    text-decoration: none;
    font-weight: 300;
    transition: all .3s ease-in-out;
    background-color: var(--light-accent);
    color: var(--secondary);
    padding: 5px 1rem;
    cursor: pointer;
    &:hover {
        background-color: var(--accent);
    }
    @media ${media.medium} {
        font-size: 1.75rem;
    }
    @media ${media.desktop} {
        font-size: 1.5rem;
    }
    @media ${media.tablet} {
        font-size: 1.3rem;
    }
    @media ${media.mobile} {
        font-size: 1.5rem;
    }
    `

const FooterRights = styled.p`
    font-family: 'Sen';
    font-size: 1rem;
    color: white;
    text-transform: uppercase;
    margin-left: auto;
    text-align: center;
    @media ${media.desktop} {
        font-size: .8rem;
    }
    @media ${media.tablet} {
        font-size: .7rem;
    }
    @media ${media.mobile} {
        margin-left: 0;
        font-size: .8rem;
    }
`
    
function Footer() {

  return (
    <FooterSection>
        <FooterWrapper>
            <FooterSocials>
                <SocialsLogo href="https://google.com">
                    <LogoSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></LogoSvg>
                </SocialsLogo>
                <SocialsLogo href={resume}>
                    <LogoSvg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M213.333333 0l597.333333 0q52.992 0 90.496 37.504t37.504 90.496l0 768q0 52.992-37.504 90.496t-90.496 37.504l-597.333333 0q-52.992 0-90.496-37.504t-37.504-90.496l0-768q0-52.992 37.504-90.496t90.496-37.504zM341.333333 725.333333l341.333333 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-341.333333 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM341.333333 554.666667l341.333333 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-341.333333 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM810.666667 85.333333l-597.333333 0q-17.664 0-30.165333 12.501333t-12.501333 30.165333l0 768q0 17.664 12.501333 30.165333t30.165333 12.501333l597.333333 0q17.664 0 30.165333-12.501333t12.501333-30.165333l0-768q0-17.664-12.501333-30.165333t-30.165333-12.501333zM341.333333 384l341.333333 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-341.333333 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM341.333333 213.333333l170.666667 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-170.666667 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333z"></path></LogoSvg>
                </SocialsLogo>
            </FooterSocials>
            <FooterEmail onClick={() => {navigator.clipboard.writeText("maille.basile@gmail.com");alert("Email Address copied")}}>
                maille.basile@gmail.com
            </FooterEmail>
            <FooterRights>@Basile MAILLE - 2024 | All rights reserved</FooterRights>
        </FooterWrapper>
    </FooterSection>
  )
}

export default Footer
