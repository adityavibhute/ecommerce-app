import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';


describe('test Footer components', () => {
    it('should test Footer component', () => {
        render(<Footer />);
        const element = screen.getByText('Enamel pin tousled raclette tacos irony');
        expect(element).toBeInTheDocument();
    });
});
