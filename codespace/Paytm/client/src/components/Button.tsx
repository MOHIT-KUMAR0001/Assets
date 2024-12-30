interface mytype {
    btnTitle: string
    Submit: () => void
}
const Button = ({ btnTitle, Submit }: mytype) => {
    return (
        <button className="bg-green-600 text-white h-20 w-[150px] text-2xl rounded-md" onClick={Submit}>{btnTitle}</button>
    )
}

export default Button;