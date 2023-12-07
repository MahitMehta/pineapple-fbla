import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="mt-[200px] w-full bg-[#121212] min-h-[75px] items-center flex justify-center py-6 lg:py-0">
            <div className="text-[#86868b] max-w-screen-xl flex w-full text-center lg:flex-row flex-col-reverse items-center justify-between px-10">
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
                <ul className="flex text-xs lg:text-base space-x-3 pb-2 lg:pb-0 text-center">
                    <li>
                        <Link href="/" className="hover:underline">
                            Privacy Policy
                       </Link>
                    </li>
                    <span>|</span>
                    <Link href="/" className="hover:underline">
                        <li>Terms of Use</li>
                    </Link>
                    <span>|</span>
                    <li>
                        <Link href="/" className="hover:underline">
                            Sales and Refunds
                        </Link>
                    </li>
                    <span>|</span>
                    <li>
                        <Link href="/" className="hover:underline">
                            Legal
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer; 