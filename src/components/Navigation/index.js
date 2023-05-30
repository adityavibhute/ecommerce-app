import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";
import './Navigation.css';

const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navbarTogglerActive = navbarOpen ? 'navbarTogglerActive' : '';
    const hideNav = !navbarOpen ? 'hidden' : '';
    const productList = useContext(UserContext);

    const onClickNav = () => {
        setNavbarOpen(!navbarOpen);
    }

    return (
        <>
            <header
                className="flex w-full items-center bg-white"
            >
                <div className="container mx-auto">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="w-60 max-w-full px-4">
                            <Link to="/" className="block w-full py-5">
                                <img
                                    src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                                    alt="logo"
                                    className="w-full"
                                    width="100%"
                                    height="100%"
                                />
                            </Link>
                        </div>
                        <div className="flex w-full items-center justify-between px-4">
                            <div>
                                <button
                                    data-testid="navbar-test-toggler"
                                    onClick={onClickNav}
                                    id="navbarToggler"
                                    className={`${navbarTogglerActive} ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden`}
                                >
                                    <span
                                        className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                                    ></span>
                                    <span
                                        className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                                    ></span>
                                    <span
                                        className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                                    ></span>
                                </button>
                                <nav
                                    data-testid="navbar-collapse-tag"
                                    id="navbarCollapse"
                                    className={`absolute right-4 top-full w-full max-w-[250px] ${hideNav} rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none`}
                                >
                                    <ul className="block lg:flex">
                                        <li>
                                            <Link
                                                to="/"
                                                className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            {/* <a
                                            href="#"
                                            className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                        > */}
                                            <Link
                                                className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                                to="products">
                                                Products
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                                <Link
                                    to="/cart"
                                    className="py-3 px-7"
                                >
                                    <span className="relative inline-block">
                                        <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
                                            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                        </svg>
                                        { productList?.productDetails && productList?.productDetails?.total ? <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{productList.productDetails.total}</span> : '' }
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div >
            </header>
        </>
    )
}

export default Navigation;
