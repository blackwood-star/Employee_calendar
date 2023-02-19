import User from "../components/user"

function Userlist({ users }) {
    return (
        <>
            {/* {
                users.map((user) => {
                    return (
                        <div key={ user.id }>
                            <User user={user} />
                        </div>
                    )
                })   
            }  */}
        </>
    )
}
export default Userlist

export async function getStaticProps() {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const response = await fetch("")
    const data = await response.json()
    
    return {
        props : {
            users : data
        }
    }
}