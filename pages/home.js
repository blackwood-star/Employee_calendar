import { app, database } from "../firebaseConfig"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { collection, addDoc, getDocs } from "firebase/firestore"
import Styles from "../styles/Home.module.css"

export default function Home() {
    const databaseRef = collection(database, 'Users')
    let router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(null)
    const [fireData, setFireData] = useState([])

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(token) {
            getData()
        }

        // if(!token){
        //     router.push("http://localhost:3000")
        // }
    }, [])

    // const mycruce = query(databaseRef, where("Email", "==", true))
    // console.log(mycruce)

    const addData = () => {
        addDoc(databaseRef, {
            Email : email,
            password : Number(password)
        }).then(() => {
            alert("data added")
            setEmail('')
            setPassword(null)
        }).catch((err) => {
            console.error(err)
        })
    }

    const getData = async () => {
        await getDocs(databaseRef).then((response) => {
            setFireData(response.docs.map((data) =>{
                return {...data.data(), id: data.id}
            }))
        })
    }

    const updateData = (id) =>{
        // console.log(id);
    }

    return(
        <div class="h-screen w-100 bg-teal-50 flex justify-center items-center">
            <div class="">
                <h1 className="my-4 text-4xl text-center">Home Page</h1>

                <div>
                    <input type="text" className={Styles.inputbox} required value={ email } onChange={event => setEmail(event.target.value)} /><br />
                    <input type="number" className={Styles.inputbox} required value={ password } onChange={event => setPassword(event.target.value)}/>
                </div>

                <div class="text-center">
                    <button class="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addData}>add data</button>
                </div>

                <div className="flex justify-center">
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                </div>

                <div>
                    { fireData.map((data) => {
                        return (
                            <div className="flex flex-between">
                                <div>{ data.Email }</div>
                                <p>{ data.password }</p>
                                <button onClick={ () => updateData(data.id) } class="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">update</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}