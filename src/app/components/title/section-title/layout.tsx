import React from "react"

export default function SectionTitlt({ title }: { title: String }) {
    return <span className="text-orange-400 text-3xl justify-start items-center py-5 font-medium">{title}</span>
}