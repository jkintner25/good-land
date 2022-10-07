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
	top: 124px;
	align-items: center;
	width: 984px;
	height: 561.88px;
	margin: 0 0 0 8px;
	padding: 0;
	overflow: visible;
	& h1 {
		white-space: nowrap;
		width: 100%;
		height: 100%;
		padding: 200px 0 0 0;
		color: white;
		cursor: default;
		font-size: 80px;
		text-align: center;
		text-shadow:
		-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 3px 3px #f5cb5c;
	}
	& h3 {
		white-space: nowrap;
		width: 80%;
		color: white;
		cursor: default;
		font-size: 30px;
		text-align: start;
		text-shadow:
		-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 1.5px 1.5px #f5cb5c;
	}
`

function SplashPage() {

	return (
		<>
			<CoffeeBeansImage src={beans} alt="" />
			<Headline>
				<h1>From our home to yours.</h1>
				<h3>Birmingham, &nbsp; AL</h3>
			</Headline>
		</>
	);
};

export default SplashPage;
