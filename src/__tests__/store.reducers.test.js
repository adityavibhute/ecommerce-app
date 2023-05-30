import { updateProducts, initialState } from '../components/Store/store.reducers';
import { storeState } from '../components/Store/store.constants';

describe('test reducer', () => {
    it('should check with initial vals', () => {
        expect(updateProducts(initialState, {})).toEqual(initialState);
    })
    it('should check with add cart', () => {
        const addCartAction = {
            type: storeState.ADD_TO_CART,
            payload: {
                total: 0,
                products: [{
                    image: 'product-image.jpg',
                    category: 'Category',
                    title: 'Product Title',
                    description: 'Product Description',
                    rating: {
                      rate: 9.5,
                    },
                    id: 32,
                }]
            }
        }
        expect(updateProducts([], addCartAction)).toEqual(addCartAction.payload);
    })
})