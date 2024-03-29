import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useRouter } from "next/router";
import { useState } from "react";
import { app, database } from "../firebaseConfig"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { useEffect } from "react"

export default function Register(){
    const databaseRef = collection(database, 'Users')
    const auth = getAuth();
    const router = useRouter();
    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const addData = (user) => {
       
    }

    const signup = () => {
        
        if(document.getElementById("password").value && document.getElementById("user").value){
        
            addDoc(databaseRef, {
                User : user,
                password : Number(password)
            }).then(() => {
                setUser('')
                setPassword(null)
                sessionStorage.setItem('Token', "lourdushelton")
                alert("Registered")
                router.push("/")
            }).catch((err) => {
                console.error(err)
            })

            document.getElementById("user").innerHTML = null;
            document.getElementById("password").innerHTML = null;   
        }else{
            alert("Input Field Can't Be Empty");
        }
    }

    const signupwithgoogle = () => {
        signInWithPopup(auth, googleProvider).then((response) =>{
            sessionStorage.setItem('Token', response.user.accessToken)
            router.push("/")
        })
    }   

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(token){
            router.push("/")
        }

    }, [])

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your google account</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label htmlFor="user" className="sr-only">User Name</label>
                            <input id="user" type="text" name="user" required autoComplete="user" value={user} onChange={(event) => setUser(event.target.value)} className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="User Name" />
                        </div>
                        <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input id="password" type="password" name="password" required autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" required />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        {/* <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div> */}
                    </div>

                    <div>
                        <button type="button" onClick={ signup } className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                { /* Heroicon name: mini/lock-closed */ }
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Register
                        </button>
                        <button onClick={signupwithgoogle} className="mt-2 group relative flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                { /* Heroicon name: mini/lock-closed */ }
                                <svg className="h-5 w-5 text-emerald-500 group-hover:text-emerald-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                </svg>
                            </span>
                            signup with google
                        </button>
                    </div>
                </form>
            </div>
        </div> 
    )
}