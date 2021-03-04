
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  addCart: ['product'],
  removeCart: ['product'],
  removeAllCart: ['product'],
  addPluscart: ['product'],
  filterMode: ['filter'],
  setProduct: ['products'],
});

export const cartTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
let productsInit = []
export const INITIAL_STATE = {
  products: productsInit,
  cart: [],
  thongbaos: [],
  size: []
}; 

/* ------------- Reducers ------------- */

const addCart = (state, { product }) => {
  const cart = state.cart
  return {
    ...state, cart: [...state.cart.filter(c => c._id !== product._id), product],
    size: [...state.size, cart]
  }
};
const removeCart = (state, { product }) => {
  return { ...state, cart: state.cart.filter(c => c._id !== product._id) }
};
const removeAllCart = (state) => {
  const cart = state.cart
  return { ...state, cart: [], thongbaos: [...state.thongbaos, cart] }
};
const addPluscart = (state, { product }) => {
  const cart = state.cart
  const index = cart.findIndex(car => car._id === product._id)
  if (index >= 0) cart[index] = product
  return { ...state, cart }
};
const filterMode = (state, { filter }) => {
  const { all, Men, Woman } = filter
  return {
    ...state, products: productsInit.filter(c => {
      if (all) return true
      if (Men) return c.gender == 'Men'
      if (Woman) return c.gender == 'Woman'
    })
  }
}
const setProduct = (state, { products }) => {
  productsInit = products
  return { ...state, products }
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CART]: addCart,
  [Types.REMOVE_CART]: removeCart,
  [Types.REMOVE_ALL_CART]: removeAllCart,
  [Types.ADD_PLUSCART]: addPluscart,
  [Types.FILTER_MODE]: filterMode,
  [Types.SET_PRODUCT]: setProduct,

});



