import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../store/product';

function NewBeansForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  // const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [size, setSize] = useState(12)
  const [price, setPrice] = useState('')


  // const updateImage = (e) => {
  //   const imageFile = e.target.files[0];
  //   setImage(imageFile);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await dispatch(createProduct({ name, description, size, price }))
    console.log(response)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        {/* <div>
          <label>Image</label>
          <input
            type='file'
            id='image-upload-button'
            accept='image/*'
            onChange={updateImage}
          ></input> */}
        {/* {image && (
            <span
              htmlFor='image-upload-button'
              className='filename'
              name='image'
            >
              {image.name}
            </span>
          )} */}
        {/* </div> */}
        <div>
          <label>Description</label>
          <textarea
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Size</label>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value={12}>12</option>
          </select>
        </div>
        <div>
          <label>Price</label>
          <input
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
};

export default NewBeansForm;
