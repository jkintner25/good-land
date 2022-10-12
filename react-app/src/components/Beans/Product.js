import { useState } from "react";
import styled from "styled-components";
import bag from '../../images/bag.jpg';

const ProductRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`

const ImgColumn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  `

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 350px;
  padding: 12px 0 0 30px;
  margin-left: 20px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 8px 8px #f5cb5c;
  & h1 {
    color: #f5cb5c;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black, 3px 3px black;
  }
  & p {
    margin: 8px 0;
  }
`

const ProductImage = styled.img`
  height: 300px;
  width: auto;
`

const AddToCartButton = styled.button`
  width: 40px;
  cursor: pointer;
`

const QuantitySelector = styled.select`
  width: 34px;
`

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  return (
    <ProductRow>
      <ImgColumn>
        <ProductImage src={bag} alt='product-image' />
      </ImgColumn>
      <InfoColumn>
        <h1>{product.name}</h1>
        <div>
          <p>Flavor Profile:</p>
          <p>{product.description}</p>
        </div>
        <p>Size: {product.size}oz</p>
        <p>${product.price}</p>
        <div>
          <QuantitySelector value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            <option key={1} value={1}>1</option>
            <option key={2} value={2}>2</option>
            <option key={3} value={3}>3</option>
            <option key={4} value={4}>4</option>
            <option key={5} value={5}>5</option>
          </QuantitySelector>
          <AddToCartButton>+</AddToCartButton>
        </div>
      </InfoColumn>
    </ProductRow>
  )
};

export default Product;
