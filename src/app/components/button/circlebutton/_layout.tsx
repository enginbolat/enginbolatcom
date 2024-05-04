import Link from "next/link";

interface CircleButtonProps {
    link: string;
    path: string;
}

export function CircleButton({ link, path }: CircleButtonProps) {
    return (
        <Link href={link} className="block" target="_blank">
            <img className="block rounded-xl hover:bg-gray-100 max-md:w-16 max-md:h-11 max-lg:w-16 max-lg:h-16 p-2" src={path} />
        </Link>
    );
}
