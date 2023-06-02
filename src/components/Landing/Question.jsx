import lessIcon from "../../Assets/Icons/Less.svg"
import moreIcon from "../../Assets/Icons/More.svg"

export default function({question, answer, extended, handleClick}){
    return (
        <div className="flex justify-between gap-8 items-start border-b-[1px] border-slate-300 pb-4 mb-4">
            <div className="text">
                <h4 className="h5 | !pt-0">{question}</h4>
                <p className={`${!extended && "hidden"} text-slate-500 font-light duration-100`}>{answer}</p>
            </div>
            <img src={extended?lessIcon:moreIcon} onClick={handleClick} alt="" />
        </div>
    )
}