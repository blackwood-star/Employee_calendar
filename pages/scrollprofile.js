import Image from "next/image"
import Link from "next/link"

const crew = "/Arunkumar.jpeg"

const group = [
    {url : "/Isaiya.webp", mail : "Isaiah@aorborc.com", name : "Isaiya Jeyaseelan"},
    {url : "/arun_white.jpg", mail : "arun@aorborc.com", name : "Arunramkumar"},
    {url : "/Shadhick.jpeg", mail : "shadhik@aorborc.com", name : "Shadhik Ali Usman"},
    {url : "/faiyas.jpg", mail : "faiyas@aorborc.com", name : "Mohammad Faiyas"},
    {url : "/AK.jpeg", mail : "arunkumar@aorborc.com", name : "Arunkumar"},
    {url : "/vasanth.jpeg", mail : "vasanth@aorborc.com", name : "Vasanth"},
    {url : "/Gokulraj.jpeg", mail : "gokul@aorborc.com", name : "Gokul"},
    {url : "/Rajkiran.jpeg", mail : "Raj@aorborc.com", name : "Rajkiran"},
    {url : "/reena_mary.png", mail : "reena@aorborc.com", name : "Reena"},
    {url : "/Sheela_Photo.jpeg", mail : "sheela@aorborc.com", name : "Sheela"},
    {url : "/Shelton.png", mail : "lourdu@aorborc.com", name : "Shelton"},
]

const showusercalendar = (user) => {
    return user
}

export default function Scrollprofile({setProfilemail}) {
    return(
        <div className="flex flex-col bg-white h-full w-full">
            <div className="w-full h-2/5 flex items-center">
                <div className="flex px-5 text-lg font-semibold text-gray-900">
                    Members
                </div>
            </div>
            <div className="flex overflow-x-scroll hide-scroll-bar h-3/5">
                <div className="flex rounded-full h-full items-center flex-nowrap mx-5 ">
                    { group.map((emp) => (
                        <div className="inline-block px-3">
                            <div onClick={ () => setProfilemail([emp.mail, emp.url, emp.name])} style={{backgroundImage : `url(${emp.url})`, backgroundSize : "cover", width : "100px", height : "100px"}} className="overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}