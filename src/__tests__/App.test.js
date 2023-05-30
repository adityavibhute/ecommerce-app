import {render, screen} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../App';
describe('APP components', () => {
    it('should test App component', () => {
        render(
            <Router>
              <App />
            </Router>
        );
        // Query for an element on the home page and assert its presence
        const homeElement = screen.getByText('Home');
        expect(homeElement).toBeInTheDocument();
    });

    it('renders products page correctly', () => {
        render(
          <Router initialEntries={['/products']}>
            <App />
          </Router>
        );
        const productRoute = screen.getByText('Products');
        expect(productRoute).toBeInTheDocument();
    });

    it('renders categories page correctly', () => {
        render(
          <Router initialEntries={['/categories']}>
            <App />
          </Router>
        );
        const categoryRoute = screen.getByText('Products');
        expect(categoryRoute).toBeInTheDocument();
    });
});