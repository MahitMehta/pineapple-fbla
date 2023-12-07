import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav
            style={{ backdropFilter: "blur(10px)"}} 
            className="fixed bg-[#121212] bg-opacity-80 top-0 w-screen z-50 flex justify-between items-center px-8 lg:px-[100px] py-2 border-b-[1px] border-[#2C2C2C]">
                <Link href="/">
                    <div className="flex justify-center items-center">
                        <Image 
                            className="mr-3"
                            src="/logo.png"
                            width={15}
                            height={25}
                            alt="PineApple Logo"
                        />
                        <div>
                            <h2 className="text-[#989898]">13&quot; model with M3 Pro chip</h2>
                            <h1 className="text-xl font-bold">PineApple</h1>
                        </div>
                   </div>
                </Link>
            <ul className="flex space-x-6 items-center">
                <Link className="hidden lg:block" href="/">
                    <li>Overview</li>
                </Link>
                <Link className="hidden lg:block" href="/">
                    <li>Tech Specs</li>
                </Link>
                <Link className="hidden lg:block" href="/">
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