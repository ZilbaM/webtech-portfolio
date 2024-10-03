import styled from 'styled-components'
import emoji from '../assets/emoji.svg'

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
    ". underline . .";
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
`

const Underline = styled(GridCell)`
  grid-area: underline;
  background-color: var(--accent);
  height: 8px;
  margin-top: 8px;
  border-radius: 100px;

`

const MiddleLine = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    justify-content: center;
`
const Line = styled.div`
  background-color: var(--secondary);
  width: 5px;
  height: 100%;
`
    
function Hero({children}) {
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
        <Underline></Underline>
    </HeroSection>
  )
}

export default Hero
