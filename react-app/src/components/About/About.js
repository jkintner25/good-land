import styled from 'styled-components';
import portrait from '../../images/portrait.jpeg'

const MainRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 1000px;
  height: 700px;
  align-items: space-between;
  margin: 0 0 0 40px;
`

export const Column = styled.div`
  justify-content: center;
  align-items: center;
  & p {
    padding: 50px 80px;
    line-height: 32px;
  }
  & p::first-letter {
    font-size: 36px;
  }
  & h2 {
    text-align: end;
    padding: 0 80px 0 0;
  }
`

const Headshot = styled.img`
  height: 700px;
  width: auto;
  border-radius: 40px;
`

function About() {

  return (
    <MainRow>
      <Column>
        <Headshot src={portrait} alt='dan-portrait' />
      </Column>
      <Column>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
          tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
          quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
          sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
          minima nesciunt dolorem!</p>
          <h2>Daniel Terpin</h2>
      </Column>
    </MainRow>
  )
};

export default About;
