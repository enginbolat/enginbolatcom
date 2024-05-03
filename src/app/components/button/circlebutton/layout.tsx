const CirlceButton: React.FC<{
    link: any,
    path: string,
}> = ({ link, path }) => {
    return <a href={link} className="block" target='_blank' rel='noopener noreferrer' >
        <img className="block rounded-xl hover:bg-gray-100 1 max-md:w-16 max-md:h-12 max-lg:w-16 max-lg:h-16 p-2" src={path}/>
    </a>
}

export default CirlceButton;