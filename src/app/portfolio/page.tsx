import React from "react";
import { ProjectData } from '../data'
import Link from "next/link";
import { Navbar, SectionTitle } from "../components";

export default function Portfolio() {

    return <div className="flex flex-col bg-white">
        <div className="flex flex-col items-center justify-center max-md:px-12 max-lg:px-40 lg:px-40 pt-12">
            <div>
                {ProjectData.map((item, index) => {
                    return <div className="py-2 flex flex-col" key={index}>
                        <span className="text-black text-2xl font-bold py-2">{item.name}</span>
                        <Link href={item.link}>
                            <img src={item.image} alt={item.name} className="hover:cursor-pointer transation duration-300 transform hover:scale-95 hover:zoom-in hover:ease-in-out shadow rounded-xl" />
                        </Link>
                    </div>
                })}
            </div>
        </div>
        <div className="p-5 fixed bg-white w-full">
            <Link href='/'>
                <span className="text-black font-bold text-xl">ENGIN BOLAT</span>
            </Link>
        </div>
    </div>
}