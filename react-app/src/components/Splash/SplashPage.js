import styled from "styled-components";
import beans from '../../images/beans.jpg'

const CoffeeBeansImage = styled.img`
  max-width: 1000px;
  height: auto;
  z-index: -999;
  border-radius: 80px;
`
const Headline = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: auto;
	height: 100%;
	margin: 0 0 0 8px;
	padding: 0;
	overflow: visible;
	& h1 {
		white-space: nowrap;
		width: 100%;
		color: white;
		font-size: 72px;
		text-align: start;
		text-shadow:
		-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 4px 4px #f5cb5c;
	}
`

function SplashPage() {

	return (
		<>
			<CoffeeBeansImage src={beans} alt="" />
			<Headline>
				<h1>Ethically Sourced</h1>
				<h1>Locally Roasted</h1>
			</Headline>
		</>
	);
};

export default SplashPage;
