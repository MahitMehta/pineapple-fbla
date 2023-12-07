"use client";

import Animate from "@/components/Animate";
import React from "react";

const Stats = () => {
    return (
        <section className="md:mt-0 mt-[100px] w-full p-10 max-w-screen-xl">
            <div className="flex w-full lg:space-x-5 min-h-[500px] lg:flex-row flex-col lg:space-y-0 space-y-5 ">
                <Animate.Element
                    onDeactivatedClasses="translate-y-[100px] opacity-0"
                    style={{
                        backgroundImage: "linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)"
                    }} 
                    className="flex-[3] relative rounded-2xl p-10 min-h-[500px] h-[50vh] flex justify-center items-center transition-all duration-500"
                >
                    <h2 className="left-5 top-5 absolute font-semibold">All-day battery Life</h2>
                    <h1 className="md:w-2/3 font-bold text-5xl md:text-6xl">Up to 18 hours of battery life. Game on the go.</h1>
                </Animate.Element>
                <Animate.Element 
                    onDeactivatedClasses="translate-y-[150px] opacity-0"
                    style={{
                        backgroundImage: "linear-gradient(-90deg, #00d2ff 0%, #3a47d5 100%)"
                    }}
                    className="flex-[2] relative flex-col min-h-[500px] h-[50vh] rounded-2xl flex justify-center items-center transition-all duration-700 delay-75">
                        <h2 className="left-5 top-5 absolute font-semibold">Thermal Efficiency</h2>
                        <div className="font-bold text-5xl md:text-6xl flex flex-col space-y-3">
                            <h1 className="opacity-75">No fans.</h1>
                            <h1 className="opacity-75">No noise.</h1>
                            <h1>Just Wins.</h1>
                        </div>
                </Animate.Element>
            </div>
        </section>
    )
}   

export default Stats;