import Link from "next/link"

const Footer=()=>{
    return (
        <section className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex justify-between items-center">

                <Link href="/" className="font-bold text-xl">BHOJAN</Link>
       <p>All RIGHTS RESERVED.</p>
        </section>
   
    )
   }
   export default Footer