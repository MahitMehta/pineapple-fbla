import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="mt-[200px] w-full bg-[#121212] h-[75px] items-center flex justify-center">
            <div className="text-[#86868b] max-w-screen-xl flex w-full justify-between">
                <p>Copyright © 2023&nbsp; 
                    <a
                        href="https://www.mahitm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white transition-colors"
                    >
                        Mahit Mehta
                    </a>
                . All rights reserved.</p>
                <ul className="flex space-x-3">
                    <Link href="/" className="hover:underline">
                        <li>Privacy Policy</li>
                    </Link>
                    <span>|</span>
                    <Link href="/" className="hover:underline">
                        <li>Terms of Use</li>
                    </Link>
                    <span>|</span>
                    <Link href="/" className="hover:underline">
                        <li>Sales and Refunds</li>
                    </Link>
                    <span>|</span>
                    <Link href="/" className="hover:underline">
                        <li>Legal</li>
                    </Link>
                </ul>
            </div>
        </footer>
    );
}

export default Footer; 