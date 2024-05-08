

const PortfolioCard: React.FC<{
    path: string;
    title: string;
    link: string;
}> = ({
    path,
    title,
    link,
}) => {
        return <a href={link} className="hover:cursor-pointer transation duration-300 transform hover:scale-105 hover:zoom-in hover:ease-in-out shadow rounded-xl">
            <div className="relative bg-transparent group rounded-xl border border-gray-200 cursor-pointer shadow">
                <img
                    src={path}
                    className=' rounded-xl object-cover cursor-pointer shadow'
                />
                <div className="cursor-pointer rounded-l-lg rounded-br-xl absolute right-0 bottom-0 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-lg bg-zinc-500 bg-opacity-30">
                    <span>{title}</span>
                </div>
                <div className="absolute inset-0 cursor-pointer" />
            </div>
        </a>
    }

export default PortfolioCard;