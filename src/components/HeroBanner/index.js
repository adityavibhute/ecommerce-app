import { useEffect, useState } from "react";
import Card from '../Card';

const HeroBanner = () => {
    const slides = [
        './slide-one.jpeg',
        './slide-two.jpg',
        './slide-three.jpeg',
    ]

    useEffect(() => {
        const slideInterval = setInterval(next, 2000);
        return () => clearInterval(slideInterval);
    })

    const [current, setCurrent] = useState(0);

    const prev = () => {
        setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    }

    const next = () => {
        setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
    }

    return (
        <>
            <div className="overflow-hidden relative">
                <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}% )` }}>
                    {slides && slides.map((slide, index) => {
                        return <img width="100%" height="100%" alt={`hero-slide=${slide + index}`} key={slide} src={require(`${slide}`)} />
                    })}
                </div>
                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleControls"
                    data-testid="previous-click"
                    onClick={prev}
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Previous</span
                    >
                </button>
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselExampleControls"
                    data-testid="next-click"
                    onClick={next}
                >
                    <span className="inline-block h-8 w-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span
                    >
                </button>
                <div className="absolute bottom-4 right-0 left-0">
                    <div className="flex items-center justify-center gap-2">
                        {slides.map((_, i) => (
                            <div key={_} className={`
                        transition-all w-3 h-3 bg-white rounded-full 
                        ${current === i ? "p-2" : "bg-opacity-50"}`
                            } />
                        ))}
                    </div>
                </div>
            </div>
            <Card />
        </>
    )
};

export default HeroBanner;