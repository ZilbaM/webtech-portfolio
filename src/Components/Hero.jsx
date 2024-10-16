import styled from 'styled-components'
import emoji from '../assets/emoji.svg'

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

const HeroSection = styled.div`
  background-color: var(--background-light);
  width: 100vw;
  padding: 4rem;
  height: 88vh;
  display: grid;
  grid-template-columns: 50% auto auto 1fr;
  grid-template-rows: 80fr auto 10fr 45fr;
  grid-template-areas: 
    ". . vertical-line ."
    "horizontal-line name1 emoji name2"
    ". portfolio . ."
    "underline underline . .";
    @media ${media.medium} {
      padding: 2rem;
      height: 50vh;
      grid-template-columns: 35% auto auto 1fr;
    }
    @media ${media.desktop} {
      padding: 2rem;
      height: 50vh;
      grid-template-columns: 30% auto auto 1fr;
    }
    @media ${media.tablet} {
    }
    @media ${media.mobile} {
    }
`

const GridCell = styled.div`
`

const VerticalLine = styled(GridCell)`
  grid-area: vertical-line;
  background-color: var(--secondary);
  margin: 0 auto;
  width: 5px;
  height: 100%;
`

const HorizontalLine = styled(GridCell)`
  grid-area: horizontal-line;
  margin: auto 0;
  background-color: var(--secondary);
  height: 5px;
  width: 95%;
`

const Name1 = styled(GridCell)`
  grid-area: name1;
  display:flex;
  
`

const Name2 = styled(GridCell)`
  grid-area: name2;
  display:flex;
`

const NameText = styled.p`
    color: var(--secondary);
    font-family: 'EB Garamond', serif;
    font-size: 6rem;
    font-weight: 600;
    margin:0;
    padding:0;
    line-height: .75;
    @media ${media.medium} {
      font-size: 5rem;
    }
    @media ${media.desktop} {
      font-size: 4rem;
    }
    @media ${media.tablet} {
      font-size: 3rem;
    }
    @media ${media.mobile} {
      font-size: 2rem;
    }
`

const Emoji = styled.img`
  grid-area: emoji;
  width:15px;
  aspect-ratio: 1;
  margin-top: auto;
`

const Portfolio = styled(GridCell)`
  grid-area: portfolio;
`
const PortfolioText = styled.p`
  color: var(--text-dark, #000);
  font-family: Sen;
  font-size: 3rem;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.06rem;
  @media ${media.medium} {
      font-size: 2.5rem;
  }
  @media ${media.desktop} {
      font-size: 2rem;
    }
    @media ${media.tablet} {
    font-size: 1.5rem;
  }
  @media ${media.mobile} {
      font-size: 1rem;
  }
  
`

const Underline = styled(GridCell)`
  grid-area: underline;
  position: relative;
  z-index: 3;
  @media ${media.desktop} {
    background-color: var(--accent);
    height: 6px;
    margin-top: 8px;
    border-radius: 100px;
    grid-column: 2/3;
  }
  @media ${media.tablet} {
    height: 5px;
  }
  @media ${media.mobile} {
  }
`

const ArrowSvg = styled.svg`
  width:80%;
  height: 200%;
  position:absolute;
  top: 0;
  right: 0;
  @media ${media.tablet} {
    display:none;
  }
  @media ${media.tablet} {
    display:none;
  }
  @media ${media.mobile} {
  }
`
    
function Hero() {
  return (
    <HeroSection>
        <VerticalLine></VerticalLine>
        <HorizontalLine></HorizontalLine>
        <Name1>
            <NameText>basile</NameText>
        </Name1>
        <Emoji src={emoji}></Emoji>
        <Name2>
            <NameText>maille</NameText>
        </Name2>
        <Portfolio>
          <PortfolioText>portfolio</PortfolioText>
        </Portfolio>
        <Underline>
          <ArrowSvg preserveAspectRatio='none' viewBox="0 0 562 397" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M558.747 6C560.404 6 561.747 4.65685 561.747 3C561.747 1.34315 560.404 0 558.747 0V6ZM32.116 395.611C33.2821 396.788 35.1816 396.797 36.3586 395.631L55.5391 376.628C56.7161 375.462 56.7249 373.563 55.5588 372.386C54.3927 371.209 52.4932 371.2 51.3162 372.366L34.2669 389.257L17.3755 372.208C16.2094 371.031 14.3099 371.022 13.1329 372.188C11.9559 373.354 11.947 375.254 13.1132 376.431L32.116 395.611ZM383.247 3V0H383.194L383.141 0.00188632L383.247 3ZM92.5308 232.758C62.5866 246.039 36.9146 238.946 21.5312 223.917C6.04814 208.79 0.868372 185.619 11.8652 165.965L6.62913 163.035C-5.87401 185.381 0.196225 211.461 17.3382 228.208C34.5798 245.054 62.9078 252.461 94.9635 238.242L92.5308 232.758ZM11.8652 165.965C23.1751 145.752 37.8227 138.075 53.5723 138.995C69.6673 139.935 87.6469 149.882 105.172 166.667L109.322 162.334C91.3475 145.118 72.0771 134.066 53.9221 133.005C35.4217 131.925 18.8193 141.249 6.62913 163.035L11.8652 165.965ZM105.172 166.667C114.025 175.146 122.879 184.068 130.081 193.028C137.311 202.024 142.691 210.834 144.845 219.072C146.957 227.147 145.972 234.616 140.487 241.441C134.859 248.444 124.243 255.084 106.358 260.635L108.136 266.365C126.502 260.666 138.448 253.556 145.164 245.2C152.022 236.666 153.163 227.165 150.65 217.554C148.179 208.104 142.183 198.508 134.757 189.269C127.303 179.995 118.219 170.855 109.322 162.334L105.172 166.667ZM106.358 260.635C68.6834 272.327 49.9846 306.029 40.6938 336.051C36.0291 351.123 33.6711 365.458 32.4771 376.014C31.8796 381.297 31.5723 385.645 31.4143 388.681C31.3353 390.199 31.2936 391.39 31.2716 392.206C31.2606 392.615 31.2545 392.929 31.2512 393.145C31.2495 393.252 31.2486 393.335 31.248 393.392C31.2477 393.421 31.2475 393.443 31.2474 393.459C31.2473 393.466 31.2473 393.473 31.2473 393.477C31.2473 393.479 31.2472 393.482 31.2472 393.483C31.2472 393.485 31.2472 393.486 34.2472 393.5C37.2472 393.514 37.2472 393.515 37.2472 393.515C37.2472 393.514 37.2472 393.514 37.2472 393.513C37.2472 393.511 37.2472 393.507 37.2472 393.502C37.2473 393.492 37.2475 393.475 37.2477 393.452C37.2481 393.406 37.249 393.334 37.2505 393.237C37.2535 393.044 37.2591 392.753 37.2694 392.368C37.2901 391.599 37.33 390.458 37.4062 388.993C37.5588 386.062 37.8569 381.836 38.4391 376.689C39.6045 366.385 41.9027 352.439 46.4256 337.824C55.5098 308.471 73.3109 277.173 108.136 266.365L106.358 260.635ZM558.747 0H383.247V6H558.747V0ZM383.141 0.00188632C297.975 3.02347 240.369 55.1296 196.536 109.281C174.676 136.287 155.96 164.18 139.157 186.608C130.708 197.886 122.723 207.817 114.964 215.762C107.189 223.724 99.7837 229.541 92.5308 232.758L94.9635 238.242C103.211 234.584 111.238 228.165 119.256 219.954C127.291 211.727 135.461 201.549 143.959 190.206C161.051 167.392 179.395 139.993 201.2 113.056C244.697 59.3194 300.842 8.92551 383.354 5.99811L383.141 0.00188632Z" fill="var(--accent)"/>
          </ArrowSvg>
        </Underline>
    </HeroSection>
  )
}

export default Hero
