import styled from 'styled-components'

const HeroSection = styled.div`
  background-color: var(--background-light);
  width: 100vw;
  padding: 4rem;
  height: 88vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto auto minmax(0, 1fr);
  grid-template-rows: 75fr 18fr 10fr 45fr;
  grid-template-areas: 
    ". . . . vertical-line ."
    "horizontal-line horizontal-line horizontal-line name1 group group"
    ". . . portfolio . ."
    ". . . underline . .";
`

const GridCell = styled.div`
  background-color: red;
`

const VerticalLine = styled(GridCell)`
  grid-area: vertical-line;
  background-color: var(--secondary);
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
const NameText = styled.p`
    color: var(--secondary);
    font-family: 'EB Garamond', serif;
    font-size: 6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

const Group = styled(GridCell)`
  grid-area: group;
`

const Portfolio = styled(GridCell)`
  grid-area: portfolio;
`

const Underline = styled(GridCell)`
  grid-area: underline;
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
    <>
        <HeroSection>
            <VerticalLine></VerticalLine>
            <HorizontalLine></HorizontalLine>
            <Name1>
            <NameText>basile</NameText>
            </Name1>
            <Group></Group>
            <Portfolio></Portfolio>
            <Underline></Underline>
        </HeroSection>
        <MiddleLine>
            <Line></Line>
        </MiddleLine>
    </>
  )
}

export default Hero
