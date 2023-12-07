"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Animate from "@/components/Animate";
import styled from "styled-components";
import { PlusIcon } from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);

const Gradient = styled.span`
    background:  linear-gradient(90deg, rgba(129,62,191,1) 0%, rgba(0,212,255,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Games = () => {
    const gamesContainerRef = useRef<HTMLElement | null>(null);
    const m3Ref = useRef<HTMLDivElement | null>(null);
    const descriptionRef = useRef<HTMLParagraphElement | null>(null);
   
    const game1Ref = useRef<HTMLDivElement | null>(null);
    const game2Ref = useRef<HTMLDivElement | null>(null);
    const game3Ref = useRef<HTMLDivElement | null>(null);
    const game4Ref = useRef<HTMLDivElement | null>(null);
    const game5Ref = useRef<HTMLDivElement | null>(null);
    const game6Ref = useRef<HTMLDivElement | null>(null);
    const game7Ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.timeline({
            repeat: 0,
            scrollTrigger: {
                trigger: gamesContainerRef.current,
                pinnedContainer: gamesContainerRef.current,
                scrub: 1,
                pin: true,
                pinSpacing: true
                
            }
        })
        .fromTo(game1Ref.current, {
            x: 0,
            y: 0
        }, {
            x: -300,
            y: -300,
            opacity: 0
        })
        .fromTo(game2Ref.current, {
            x: 0,
            y: 0
        }, {
            x: 0,
            y: -300,
            opacity: 0
        }, "-=0.5")
        .fromTo(game3Ref.current,{
            x: 0,
            y: 0
        }, {
            x: 300,
            y: -300,
            opacity: 0
        }, "-=0.5")
        .fromTo(game4Ref.current,{
            x: 0,
            y: 0
        }, {
            x: -300,
            y: 300,
            opacity: 0
        }, "-=0.5")
        .fromTo(game5Ref.current,{
            x: 0,
            y: 0
        }, {
            x: 0,
            y: 300,
            opacity: 0
        }, "-=0.5")
        .fromTo(game6Ref.current,{
            x: 0,
            y: 0
        }, {
            x: 300,
            y: 300,
            opacity: 0
        }, "-=0.5")
        .fromTo(game7Ref.current,{
            x: 0,
            y: 0
        }, {
            x: 300,
            y: 300,
            opacity: 0
        }, "-=0.5")
        .fromTo(m3Ref.current, {
            opacity: 0,
            scale: 0.4,
            repeat: 0
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            repeat: 0,
        }, "-=0.5").fromTo(descriptionRef.current, { 
            opacity: 0,
            y: 100,
            repeat: 0
        }, {
            opacity: 1,
            y: 0,
            repeat: 0
        })
    }, []);

    return (
        <>
        <Animate.Element 
            as="h2" 
            onDeactivatedClasses="translate-y-[100px] opacity-0" 
            className="mt-[200px] font-bold text-6xl px-3 lg:text-7xl text-center transition-all duration-500">
                Finally Harness Apple Silicon&apos;s<br/><Gradient>Full Graphical Power.</Gradient>
        </Animate.Element>
        <Animate.Element 
            as="p" 
            onDeactivatedClasses="translate-y-[100px] opacity-0" 
            className="mt-3 delay-75 font-medium px-3 text-center transition-all duration-500 max-w-4xl text-3xl text-[#86868b]">
            PineApple Book 11 combines Windows 11’s endless array of AAA games with PineApple’s <span className="text-white">all-new GPU architecture</span> to provide <span className="text-white"> stunning graphics</span>. 
        </Animate.Element>
        <Animate.Element 
            as="button"
            onDeactivatedClasses="translate-y-[100px] opacity-0" 
            className="mt-10 p-3 px-4 items-center justify-center flex bg-[rgb(31,31,32)] rounded-full font-bold transition-all duration-700 delay-75"
        >
            Go Deeper on the M3&apos;s GPU
            <PlusIcon width={35} className="ml-3 p-1 bg-[#0171E3] rounded-full" />
        </Animate.Element>
        <section className="relative w-full h-screen flex flex-col justify-center items-center" ref={gamesContainerRef}>
            <div ref={m3Ref} className="mt-[100px]">
                <Image
                    src="/mx_pro.jpg"
                    width={300}
                    height={300}
                    alt="M3 Pro"
                />
            </div>
            <div className="absolute flex flex-col items-center">
                <div className="flex space-x-3 items-center">
                    <div ref={game1Ref} className="z-10">
                        <Image
                            className="scale-125"
                            src="/fortnite.png"
                            width={225}
                            height={225}
                            alt="Fortnite"
                        />
                    </div>
                    <div ref={game2Ref} >
                    <Image
                        className="-translate-y-1/2"
                        src="/rocket_league.png"
                        width={225}
                        height={225}
                        alt="Fortnite"
                    />
                    </div>
                    <div ref={game3Ref}>
                        <Image
                            className="scale-[1.35]"
                            src="/valorant.png"
                            width={225}
                            height={225}
                            alt="Fortnite"
                        />
                    </div>
                </div>
                <div className="flex space-x-3 mt-5 items-center">
                    <div ref={game4Ref}>
                        <Image
                            src="/destiny.png"
                            width={225}
                            height={225}
                            alt="Fortnite"
                        />
                    </div>
                    <div ref={game5Ref} className="z-10">
                    <Image
                        className="translate-y-1/2 scale-150"
                        src="/forza.png"
                        width={225}
                        height={225}
                        alt="Fortnite"
                    />
                    </div>
                    <div ref={game6Ref}>
                        <Image
                             className="translate-y-1/2 scale-125"
                            src="/rr2.png"
                            width={225}
                            height={225}
                            alt="Fortnite"
                        />
                    </div>
                    <div ref={game7Ref}>
                        <Image
                            src="/gta6.png"
                            width={225}
                            height={225}
                            alt="Fortnite"
                        />
                    </div>
                </div>
            </div>
            <p 
                ref={descriptionRef}
                className="text-center px-6 font-medium max-w-4xl text-2xl lg:text-3xl mt-10 text-[#86868b]">
                The PineApple Book 11 blasts forward with the M3 Pro chip. Built on 3‑nanometer technology and featuring an all-new GPU architecture, the M3 Pro is the <span className="text-white">most advanced chip ever built</span> for a personal computer. PineApple’s <span className="text-white">new battery-efficient CPU</span> provides uninterpreted, <span className="text-white"> long hours of gaming</span>. 
            </p>
        </section>
        </>
    )
}

export default Games;