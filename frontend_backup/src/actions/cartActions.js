import {
  ADD_TO_CART,
  REMOVE_ITEM_CART,
  SAVE_SHIPPING_INFO,
  CLEAR_CART
} from '../store/constants/cartConstants';

// Add to cart
export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await import('../data/products.json').then(module => module.default);
  const product = data.find(p => p._id === id);

  if (product) {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: product._id,
        name: product.name,
        price: product.price,
        image: product.images[0].url,
        stock: product.stock,
        quantity
      }
    });
  }
};

// Remove from cart
export const removeFromCart = (id) => async (dispatch) => {
  dispatch({
    type: REMOVE_ITEM_CART,
    payload: id
  });
};

// Save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data
  });
};

// Clear cart
export const clearCart = () => async (dispatch) => {
  dispatch({
    type: CLEAR_CART
  });
};




