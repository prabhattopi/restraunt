import Image from "next/image"
import {singleProduct} from "@/data"
import Price from "@/components/Price"
const singleProductPage=()=>{
return (
    <div className="p-4 lg:px-20 xl:p-40 h-screen flex flex-col justify-around text-red-500 md:flex-row ">
        {/* Image container */}

{
singleProduct.img && (<div className="relative w-full h-1/2">
<Image src={singleProduct.img} alt="" className="object-contain" fill/>
</div>)
}

{/* Text container */}
<div className="h-1/2">
    <h1 className="">{singleProduct.title}</h1>
    <p>{singleProduct.desc}</p>
    <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>

</div>
    </div>
)

}
export default singleProductPage