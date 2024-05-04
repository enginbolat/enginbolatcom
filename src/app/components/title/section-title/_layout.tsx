import React from "react"

export default function SectionTitlt({ title, seeMore = false, navigationUrl }: { title: String, seeMore?: boolean, navigationUrl?: string }) {
    return <div className="flex justify-between items-center text-end flex-row">
        <span className="text-black text-3xl py-5 font-bold">{title}</span>
        {seeMore && <a href={navigationUrl}><span className="text-gray-300 text-lg ">Read More</span></a>}
    </div>
}