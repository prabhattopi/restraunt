import Image from "next/image"


const Slider=()=>{
return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
        {/* TEXT Container */}
        <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
            <h1 className="text-5xl text-center uppercase p-2 md:text-6xl">Test</h1>
            <button className="bg-red-500 text-white px-8 py-4 font-bold rounded-lg">Order Now</button>
        </div>
      {/* Image Container */}
       <div className="h-1/2 w-full relative">
          <Image src="/slide1.png" alt="" fill className="object-cover"/>
       </div>
     
    </div>
)
}

export default Slider