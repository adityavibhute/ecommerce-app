import { render, screen } from "@testing-library/react";
import { useUserContext } from "../UserContext";
import CartList from '../components/CartList';

jest.mock('../UserContext', () => ({
    // Replace 'YourContext' with the actual name of your context module
    // Provide a mock implementation of the useContext hook
    // Return the mocked context value
    __esModule: true,
    useUserContext: jest.fn(),
}));

describe("test CartList components", () => {
    test("should render the useUserContext", () => {
        const mockProducts = [{
            id: 3232,
            image: "path-to-image",
            title: "Name",
            price: "32"
        }];
        useUserContext.mockReturnValue({
            productDetails: {
              products: mockProducts,
            },
        });        
        render(<CartList />);
        expect(screen.getByText('Customer')).toBeInTheDocument();
    });
})