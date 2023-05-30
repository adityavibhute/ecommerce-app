import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Card from '../components/Card';

describe('test card components', () => {
    it('should test Card component', () => {
        render(
            <MemoryRouter>
              <Card />
            </MemoryRouter>
          );
        
        const checkElement = screen.getByText('Electronics');
        expect(checkElement).toBeInTheDocument();
    });
});