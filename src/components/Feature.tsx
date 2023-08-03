import Image from "next/image"
import { featuredProducts } from "../data"

const Feature = () => {
    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            {/* Wrapper */}
            <div className="w-max flex">


                {/* Single Items */}
                {
                    featuredProducts?.map(singleProduct => (
                        <div key={singleProduct.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">
                            {/* Image Container */}
                            {singleProduct.img && (<div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                                <Image src={singleProduct.img} alt={singleProduct.title} fill className="object-contain" />
                            </div>
                            )}
                            {/* Text Container */}
                            <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4">
                                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{singleProduct.title}</h1>
                                <p className="p-4 2xl:p-8">{singleProduct.desc}</p>
                                <span className="text-xl font-bold">${singleProduct.price}</span>
                                <button className="bg-red-500 text-white p-2 rounded-md">
                                    Add to Cart
              </button>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
export default Feature