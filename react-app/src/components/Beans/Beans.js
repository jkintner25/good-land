import { useSelector } from "react-redux";
import styled from "styled-components";
import Product from "./Product";

const ProductDisplay = styled.div`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
`

function Beans() {
  const products = useSelector(state=>state.products)

  return (
    <ProductDisplay>
    {products && Object.values(products).map(product => {
      return <Product key={product.id} product={product} />
    })}
    </ProductDisplay>
  )
};

export default Beans;
