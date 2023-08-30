interface Props{
    text: string
}

export function ButtonGradient ({text}: Props) {
    return (
        <button className="text-white text-lg font-noto rounded-3xl bg-gradient-to-r from-[#FF6489] to-[#F9B24E] w-96 h-12 justify-center items-center ">{text}</button>
        
    )
}
