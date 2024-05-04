"use client"

import Link from "next/link";
import React from "react";

export default function Navbar() {

    function handleScrollTo(elementName: string) {
        const portfolioSection = document.getElementById(elementName);
        if (portfolioSection) {
            portfolioSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
    return (
        <div>
            {/* Display for desktop */}
            <div className="black max-md:hidden p-5 justify-between flex fixed w-full bg-white">
                <Link href="/">
                    <span className="font-semibold text-xl text-black">ENGIN BOLAT</span>
                </Link>
                <div>
                    <button onClick={() => { handleScrollTo("aboutMe") }}>
                        <span className="text-black text-lg">About Me</span>
                    </button>
                    <button onClick={() => { handleScrollTo("portfolio") }}>
                        <span className="text-black text-lg px-4">Portfolio</span>
                    </button>
                    <span className="text-black text-lg hidden">Contact Me</span>
                </div>
            </div>


            {/* Display for mobile */}
            <div className="hidden max-md:hidden bg-green-500">
                <span className="text-black">Navbar for mobile</span>
            </div>
        </div>
    );
}