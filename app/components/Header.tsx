"use client";

import Animate from '@/components/Animate';
import React from 'react';

const Header = () => {
    return (
        <header className="flex flex-col items-center mt-[75px]">
            <Animate.Element
                onDeactivatedClasses="translate-y-[100px] opacity-0" 
                className="font-bold text-3xl transition-all duration-500 delay-75">
                    PineApple Book 11
            </Animate.Element>
            <Animate.Element 
                as="h2" 
                onDeactivatedClasses="translate-y-[100px] opacity-0" 
                className="font-bold text-7xl mt-3 transition-all duration-500">
                    Efficieny Meets Gaming.
            </Animate.Element>
        </header>
    )
}

export default Header;