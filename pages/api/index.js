
import Events from "../components/Events"


export default function handler(req, res) {
    const handleClick = async () => {
    const gapi = await import('gapi-script').then((pack) => pack.gapi)
    }

    handleClick()
    res.status(200).json({ name: 'John Doe' })
}