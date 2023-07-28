import Link from "next/link"
import MenuPage from "./Menu"
import CartIcon from "./CartIcon"
import Image from "next/image"

const Navbar=()=>{
    const user=false
    return (
      <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24">
        {/* Left Links */}
        <div className="hidden md:flex gap-4">
            <Link href="/">HomePage</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/contact">Contact</Link>

        </div>
        {/* Logo */}
        <div className="text-xl md:font-bold">
        <Link href="/">
         BHOJAN
        </Link>
        </div>
    {/* MobileMenu */}
    <div className="md:hidden">
        <MenuPage/>
    </div>
    {/* Right Links */}
    <div className="hidden md:flex gap-4 items-center">
        <div className="flex gap-2 items-center bg-orange-200 px-2 rounded-xl py-2">
            <Image src="/phone.png" alt="Phone" width={20} height={20}/>
            <span>123-123</span>
        </div>
        {
            user?(
                <Link href="/orders">Orders</Link>
            ):(
                <Link href="/login">Login</Link>
            )
        }
           
            <CartIcon/>
 

        </div>
      </div>
    )
   }
   export default Navbar