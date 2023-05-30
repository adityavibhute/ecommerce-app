import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from '../components/Navigation';
import { MemoryRouter } from 'react-router-dom';

describe('test Navigation components', () => {
    it('should test Navigation component', () => {
        render(
            <MemoryRouter>
              <Navigation />
            </MemoryRouter>
          );
        expect(screen.getByText('Products')).toBeInTheDocument();
    });

    it('check list', () => {
      const { getByTestId } = render(
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      );
      const butn = getByTestId('navbar-test-toggler');
      fireEvent.click(butn);
      expect(getByTestId('navbar-collapse-tag')).toBeInTheDocument();
    });
});

