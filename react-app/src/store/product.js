const CREATE_PRODUCT = 'product/CREATE_PRODUCT';
const READ_PRODUCT = 'product/READ_PRODUCT';
const UPDATE_PRODUCT = 'product/UPDATE_PRODUCT'
const DELETE_PRODUCT = 'product/DELETE_PRODUCT';

const create = payload => ({
  type: CREATE_PRODUCT,
  payload
});

const read = payload => ({
  type: READ_PRODUCT,
  payload
});

const update = payload => ({
  type: UPDATE_PRODUCT,
  payload
});

const remove = payload => ({
  type: DELETE_PRODUCT,
  payload
});

export const createProduct = ({ name, description, size, price }) => async dispatch => {

  const response = await fetch("/api/products/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      size,
      price
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(create(data));
    return data;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
}

export const readProducts = () => async dispatch => {
  const response = await fetch("/api/products/")
  const data = await response.json();
  if (response.ok) {
    dispatch(read(data));
  } else {
    return data;
  }
};

const initialState = {};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_PRODUCT: {
      const newState = { ...state }
      newState[payload.id] = payload
      return newState
    }
    case READ_PRODUCT: {
      const newState = {}
      payload.products.forEach(product => {
        newState[product.id] = product
      })
      return newState;
    }
    default:
      return state;
  }
}
