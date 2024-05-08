"use client"
import React from "react";

export default function Navbar() {
    function handleScrollTo(elementName: string) {
        const section = document.getElementById(elementName);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth", block: "end", inline: "nearest"
            });
        }
    }
    return (
        <div>
            <div className="fixed top-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center max-md:hidden max-xl:hidden justify-center border border-slate-100 rounded-full shadow">
                <div className="px-12 rounded-full bg-gray-50 p-5 justify-center items-center">
                    <NavigationButton
                        title="About Me"
                        onPress={() => {
                            console.log("About Me Clicked");
                            handleScrollTo("aboutMe")
                        }}
                    />
                    <NavigationButton
                        title="Portfolio"
                        onPress={() => {
                            console.log("Portfolio Clicked");
                            handleScrollTo("portfolio")
                        }}
                    />
                    <NavigationButton
                        title="Education"
                        onPress={() => {
                            console.log("Portfolio Clicked");
                            handleScrollTo("educationtimeline")
                        }}
                    />
                    <NavigationButton
                        title="Experience"
                        onPress={() => {
                            console.log("Portfolio Clicked");
                            handleScrollTo("experiencetimeline")
                        }}
                    />
                </div>
            </div>


            {/* Display for mobile */}
            <div className="hidden max-md:hidden bg-green-500">
                <span className="text-black">Navbar for mobile</span>
            </div>
        </div>
    );
}

function NavigationButton({ title, onPress }: { title: string, onPress: () => void }) {
    return <button onClick={onPress}>
        <span className="text-slate-600 text-lg pl-4 font-semibold hover:text-slate-950">{title}</span>
    </button>
}