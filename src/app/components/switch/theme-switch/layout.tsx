import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <span>Mounted:False</span>
    );

    if (resolvedTheme === 'dark') {
        return <button onClick={() => { setTheme('light') }} title="Dark" className="h-5 w-5 bg-black"/>
    }

    if (resolvedTheme === 'light') {
        return <button onClick={() => { setTheme('dark') }} title="Light" className="h-5 w-5 bg-black"/>
    }
}