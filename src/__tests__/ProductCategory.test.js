import { render } from "@testing-library/react";
import ProductCategory from '../components/ProductCategory';
import { MemoryRouter } from 'react-router-dom';

describe('test ProductCategory components', () => {
  it('should test ProductCategory component', async() => {
    const {getByText} = render(<MemoryRouter><ProductCategory /></MemoryRouter>);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
