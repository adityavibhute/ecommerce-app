import { useContext } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import UserContext from "../../UserContext";
import { storeState } from "../Store/store.constants";

const ProductSpecific = () => {
    const location = useLocation();
    const {
        state,
    } = location;
    const navigate = useNavigate();

    const {
      dispatch,
      productDetails,
    } = useContext(UserContext);

    const handleCartAddition = () => {
      productDetails.products.push(state);
      const data = {
        total: productDetails.total + 1,
        products: productDetails.products,
      }
      dispatch({ type: storeState.ADD_TO_CART, payload: data})
      navigate('/cart')
    }

    return(
        <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full h-64 object-cover object-center rounded" src={state?.image} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{state?.category}</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{state?.title}</h1>
              <p className="leading-relaxed py-3">{state?.description}</p>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">${state?.rating?.rate}</span>
                <button onClick={handleCartAddition} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProductSpecific;