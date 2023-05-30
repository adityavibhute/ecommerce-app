import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { storeState } from '../components/Store/store.constants';
import ProductSpecific from '../components/ProductSpecific';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

const mockState = {
  image: 'product-image.jpg',
  category: 'Category',
  title: 'Product Title',
  description: 'Product Description',
  rating: {
    rate: 9.5,
  },
};

const mockProductDetails = {
  total: 0,
  products: [],
};

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

beforeEach(() => {
  useContext.mockReturnValue({
    dispatch: mockDispatch,
    productDetails: mockProductDetails,
  });

  useLocation.mockReturnValue({
    state: mockState,
  });

  useNavigate.mockReturnValue(mockNavigate);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('test ProductSpecific components', () => {
  it('should test ProductSpecific component', () => {
    render(
      <MemoryRouter>
        <ProductSpecific />
      </MemoryRouter>
    );
    expect(screen.getByText('Add to Cart')).toBeInTheDocument();
  });
  it('clicking Add to Cart button adds the product to the cart and navigates to /cart', () => {
    const { getByText } = render(<ProductSpecific />);

    const addToCartButton = getByText('Add to Cart');

    fireEvent.click(addToCartButton);

    expect(mockProductDetails.products).toContain(mockState);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: storeState.ADD_TO_CART,
      payload: {
        total: mockProductDetails.total + 1,
        products: mockProductDetails.products,
      },
    });
    expect(mockNavigate).toHaveBeenCalledWith('/cart');
  });
});
