import Link from "next/link"
import Image from "next/image"

const CartIcon=()=>{
return (
   <Link href="/cart" className="flex items-center gap-4">
       <div className="relative w-8 h-8">
        <Image src="/cart.png" alt="cart" fill/>
       </div>
       <span>Cart (3)</span>
   </Link>
)
}
export default CartIcon