import Link from "next/link";

interface CircleButtonProps {
    link: string;
    path: string;
}

export function CircleButton({ link, path }: CircleButtonProps) {
    return (
        <Link href={link} className="block transation duration-300 transform hover:scale-110 hover:zoom-in hover:ease-in-out hover:-rotate-3" target="_blank">
            <img className="block rounded-xl hover:bg-gray-100 max-md:w-16 max-md:h-16 max-lg:w-14 max-lg:h-14 p-2" src={path} />
        </Link>
    );
}
