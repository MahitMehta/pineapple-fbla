import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav
            style={{ backdropFilter: "blur(10px)"}} 
            className="fixed bg-[#121212] bg-opacity-90 top-0 w-screen z-50 flex justify-between items-center px-[100px] py-2 border-b-[1px] border-[#2C2C2C]">
                <Link href="/">
                    <div className="flex justify-center items-center">
                        <Image 
                            src="/logo.png"
                            width={65}
                            height={55}
                            alt="PineApple Logo"
                        />
                        <div>
                            <h2 className="text-[#989898]">13&quot; model with M3 Pro chip</h2>
                            <h1 className="text-xl font-bold">PineApple</h1>
                        </div>
                   </div>
                </Link>
            <ul className="flex space-x-6 items-center">
                <Link href="/">
                    <li>Overview</li>
                </Link>
                <Link href="/">
                    <li>Tech Specs</li>
                </Link>
                <Link href="/">
                    <li>Compare</li>
                </Link>
                <Link href="/">
                    <button className="bg-[#0171E3] px-3 py-1 rounded-2xl">
                        Buy
                    </button>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;