import { createSlice } from '@reduxjs/toolkit';
import { Data } from '../../data';

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        id: 1,
        name: 'Margheretta',
        imageUrl:
          'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=300',
        price: 299,
        discount: '10%',
        isVeg: true,
        isNonVeg: false,
        quantity: 1,
      },
      {
        id: 2,
        name: 'Tandoori Panner',
        imageUrl:
          'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/tandoori-paneer.4ef45717e972cf45b43c010e3cde5a22.1.jpg?width=300',
        price: 499,
        discount: '10%',
        sizes: [], //         sizes: ['S', 'M', 'L', 'XL'],
        isVeg: true,
        isNonVeg: false,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Veggie Supreme',
        imageUrl:
          'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg?width=300',
        price: 199,
        discount: '10%',
        sizes: [],
        isVeg: true,
        isNonVeg: false,
        quantity: 1,
      },
      {
        id: 4,
        name: 'Double Panner Supreme',
        imageUrl:
          'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-paneer-supreme.3cb382529b41d14d4a041b5cc5e64341.1.jpg?width=300',
        price: 399,
        discount: '10%',
        sizes: [],
        isVeg: true,
        isNonVeg: false,
        quantity: 1,
      },
    ],
  },
  reducers: {
    // WHATEVER YOU WRITE INSIDE IT IS CALLED AS ACTION CREATOR
    saveAllProducts: (state, action) => {
      console.log(action);
    },
  },
});

export const { saveAllProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
