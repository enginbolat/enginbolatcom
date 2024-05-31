import React from "react"

export default function SectionTitlt({ title, navigationUrl, navigationTitle = 'See More' }: { title: String, navigationUrl?: string, navigationTitle?: string }) {
    return <div className="flex justify-between items-center text-end flex-row py-5">
        <span className="text-black text-3xl font-bold">{title}</span>
        {(navigationUrl?.length ?? 0) > 0 && <a href={navigationUrl}><span className="text-slate-500 text-lg ">{navigationTitle}</span></a>}
    </div>
}