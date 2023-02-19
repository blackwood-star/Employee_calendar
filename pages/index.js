// import Home from "./home"
import Header from "./header"
import Navbar from "./mainpage"
import Menubar from "./menu_bar"
import Sidebar from "./sidebar"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

// import { gapi } from "gapi-script";
// const gapi = require("gapi-script")

const Main = () => {
    let router = useRouter()
    const [ token,  setToken] = useState("")

    // useEffect(() => {
    //      const token = sessionStorage.getItem('Token')
    //      setToken(token)
    //      token ?  null : router.push("/login")
    // })
    
    return(
        <>
                <Sidebar />
            {/* <Menubar /> */}
            {/* <Sidebar /> */}
            {/* <Home /> */}
            {/* <Navbar />
           
            <Header header="I sight" message="open to all who wants to explore everthing from the same place"/> */}
        {/* <Login /> */}
        </>
    )
}

export default Main;