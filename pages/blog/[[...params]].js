import { useRouter } from "next/router"

function houses() {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)

    if( params.length === 1 ) {
        return (
            <h1>this is the { params[0] } and { params[1]}</h1>
        )
    }else if( params.length == 2) {
        return (
            <h1>this is the { params[0] } and { params[1]} and { params[2] }</h1>
        )
    }
    return(
        <h1>hourse page</h1>
    )
}

export default houses