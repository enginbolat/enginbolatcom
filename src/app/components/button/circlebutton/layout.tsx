const CirlceButton: React.FC<{
    link: any,
    path: string,
}> = ({ link, path }) => {
    return <a href={link} className="block px-2" target='_blank' rel='noopener noreferrer' >
        <img className="block rounded-xl hover:bg-gray-100 xl:w-16 xl:h-16 p-2" src={path}/>
    </a>
}

export default CirlceButton;