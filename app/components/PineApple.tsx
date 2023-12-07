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
        z-index: -1;
        transform: translate(-50%, -50%);
        width: 80%;
        height: 80%;
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
            className="relative">
            <Image
                width={1500}
                height={1000}
                style={{ 
                    objectFit: "contain"
                }}
                src="/pinebook.png"
                alt="pinebook"
            />
            <video
                className="absolute top-[97px] left-1/2 -translate-x-1/2"
                autoPlay
                muted
                ref={videoRef}
                width={1200}
                height={1000} 
                src="/windows-animation.mp4" 
            />
        </PineAppleContainer>
    )
}

export default PineApple;