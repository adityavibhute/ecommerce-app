import { render, screen, fireEvent } from '@testing-library/react';
import HeroBanner from '../components/HeroBanner';
import { MemoryRouter } from 'react-router-dom';

describe('test HeroBanner components', () => {
    it('should test HeroBanner component', () => {
        render(
            <MemoryRouter>
              <HeroBanner />
            </MemoryRouter>
          );
        expect(screen.getByText('Previous')).toBeInTheDocument();
    });
    it('check for the next and prev click', () => {
      const { getByTestId } = render(
        <MemoryRouter>
          <HeroBanner />
        </MemoryRouter>
      );
      const nextButton = getByTestId('next-click');
      const prevButton = getByTestId('previous-click');
      fireEvent.click(nextButton);
      expect(screen.getByText('Next')).toBeInTheDocument();
      fireEvent.click(prevButton);
      expect(screen.getByText('Previous')).toBeInTheDocument();
    })
});
