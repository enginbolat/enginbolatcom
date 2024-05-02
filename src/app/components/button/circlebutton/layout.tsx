const CirlceButton: React.FC<{
    link: any,
    path: string,
}> = ({ link, path }) => {
    return <a href={link} className="block px-2" target='_blank' rel='noopener noreferrer' >
        <div className="black rounded-full bg-orange-400 hover:bg-orange-600 xl:w-16 xl:h-16" />
    </a>
}

export default CirlceButton;