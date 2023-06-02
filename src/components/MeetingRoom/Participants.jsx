import { useState } from "react"
import profile from "../../Assets/Avatars/avatar02.png";

export default function(){

    const [participantArr, setParticipantArr] = useState([
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        },
        {
            name: "Badie Alili",
            profilePic: profile
        }
    ])


    return (
        <div className="flex flex-col pt-4 pb-6 max-h-[calc(100vh-65px)] overflow-y-auto">
            {
                participantArr.map(({name, profilePic})=>{
                    return(
                        <div className="flex gap-4 border-b border-slate-300 py-2">
                            <img className="w-12" src={profilePic} alt="" />
                            <p className="mt-2 text-lg text-slate-900">{name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}