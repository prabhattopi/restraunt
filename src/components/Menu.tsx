"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "../../node_modules/next/link"
import CartIcon from "./CartIcon"

let links = [
    { id: 1, title: "HomePage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/contact" },
]
const MenuPage = () => {
    const [open, setOpen] = useState(false)
    const user = false
    return (
        <div onClick={() => setOpen(!open)}>
            {!open ? (<Image src="/open.png" alt="" width={28} height={28} />) : (
                <Image src="/close.png" alt="" width={28} height={28} />)}
            {open && <div className="bg-red-500 text-white w-full absolute left-0 top-12 h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-8 z-10">

                {links.map(e => (
                        <Link onClick={() => setOpen(false)} href={e.url} key={e.id}>{e.title}</Link>
                    ))
                }

                {!user && <Link href="/login">Login</Link>}
                {user && <Link href="/orders">Orders</Link>}
                <CartIcon />
                {/* <Image src="" width={} height={} /> */}
            </div>}
        </div>
    )
}
export default MenuPage