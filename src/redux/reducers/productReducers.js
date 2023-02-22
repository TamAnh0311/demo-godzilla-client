import {
  UPDATE_PRODUCT_SAGA,
  DELETE_PRODUCT_SAGA,
  GET_PRODUCTS,
  PRODUCT_FAILED,
  PRODUCT_SUCCESS
} from '../actions/types';

const initalState = {
  products: [],
  isLoading: false,
  error: null
};

// eslint-disable-next-line default-param-last
const productReducers = (state = initalState, action) => {
  let newProducts;
  switch (action.type) {
    case UPDATE_PRODUCT_SAGA:
    case DELETE_PRODUCT_SAGA:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_PRODUCTS:
      return {
        ...state,
        isLoading: true
      };
    case PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };

    case PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload.data,
        error: null
      };
    default:
      return state;
  }
};

export default productReducers;
