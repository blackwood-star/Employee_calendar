import { HiFingerPrint } from "react-icons/hi2";
import { useState, useEffect } from "react"
import { data } from "autoprefixer"
import { useRouter } from "next/router"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app, database } from "../firebaseConfig"
import { collection, addDoc, getDocs } from "firebase/firestore"


const Login = () => {
    const db = collection(database, "Users")
    const router = useRouter()
    const databaseRef = collection(database, 'Users')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const [errormessage, setErrorMessage ] = useState("")

    const checkdata = async() => {
        if(document.getElementById("password").value && document.getElementById("user").value) {
            const user = document.getElementById("user").value
            const password = document.getElementById("password").value
            await getDocs(db).then(async (response) => {
                response.docs.map((data) => {
                    const credentials = {...data.data(), id: data.id}
                    if(credentials.User == user && credentials.password == password ) {
                        sessionStorage.setItem("Token", "lourdushelton");
                        router.push("/")
                     }else{
                        setErrorMessage( "wrong user" )
                    }
                })
            })
        }
    }
    
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600" alt="Your Company" />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Log in</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"></a>
                </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label for="user" className="sr-only">User Name</label>
                            <input id="user" name="user" type="user" autocomplete="user" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="User Name" />
                        </div>
                        <div>
                        <label for="password" className="sr-only">Password</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <label for="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>
                </form>
                <div>
                        <button onClick={ checkdata } className="m-0 group relative flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                { /* Heroicon name: mini/lock-closed */ }
                                <svg className="h-5 w-5 text-teal-500 group-hover:text-teal-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                </div>
                <div className="mt-3 text-center text-red-600">
                      { (errormessage) ? <div className="text-center flex flex-row justify-center border-2 rounded border-red-500"><div className="px-2 py-1 text-2xl "><HiFingerPrint className="w-25" /></div><div>{errormessage}</div></div> : null  }
                </div>
            </div>
        </div>
    )
}

export default Login;