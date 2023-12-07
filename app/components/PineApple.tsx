"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const PineAppleContainer = styled.div`
    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -100;
        transform: translate(-50%, -50%);
        width: 80%;
        max-width: calc(1500px * 0.8);
        height: 80%;
        background: transparent;
        box-shadow: 0px 0px 250px 0px rgba(71, 146, 255, 0.35);
    }
`;

const PineApple = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            //videoRef.current.playbackRate = 3.0;
        }
    }, []);

    return (
        <PineAppleContainer 
            className="mt-[75px] relative w-[75vw] max-w-[1500px] h-[50vw] max-h-[1000px]">
            <Image
                layout="fill"
                draggable={false}
                style={{ 
                    objectFit: "contain",
                    objectPosition: "top"
                }}
                src="/mac-bezel.png"
                alt="pinebook"
            />
            <video
                className="absolute w-[80%] max-w-[1200px] max-h-[900px] top-[2.5%] left-1/2 -translate-x-1/2 -z-10"
                autoPlay
                muted
                ref={videoRef}
                src="/windows-animation.mp4" 
            />
        </PineAppleContainer>
    )
}

export default PineApple;