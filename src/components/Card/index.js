import { Link } from "react-router-dom";
import { categories } from "./categories";

const Card = () => {
    return (
        <section className="bg-[#F3F4F6] pt-20 pb-10">
            <h2 className="text-4xl font-extrabold dark:text-white">Categories</h2>
            <p className="pb-8 my-4 text-lg text-gray-500">Browse through a wide range of the latest electronics consoles, clothes, mobile you’ve been dreaming of. </p>
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    {
                        categories && categories.map((category) => <div key={category.name} className="w-full px-4 md:w-1/2 xl:w-1/3">
                            <div className="mb-10 overflow-hidden rounded-lg bg-white">
                                <img
                                    src={require(`${category.image}`)}
                                    alt={`card-section=${category.name}`}
                                    className="w-full"
                                    width="100%"
                                    height="100%"
                                />
                                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                                    <h3>
                                        <Link
                                            to={category.link}
                                            className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                                        >
                                            {category.name}
                                        </Link>
                                    </h3>
                                    <p className="text-body-color mb-7 text-base leading-relaxed">
                                        {category.desciption}
                                    </p>
                                    <Link
                                        to={category.link}
                                        className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                                    >
                                        {category.button}
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    )
}

export default Card;