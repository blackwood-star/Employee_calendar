import { useState } from "react";

export default function Secure() {
    const time = (new Date()).toISOString()
    const [Fireme, setFireme] = useState([])
    const mycollection = []

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer ya29.a0AX9GBdWfI7YQibYD_nVsa9nDb79C5aRktLuP3lPvydlE5PCpIzZecVt7hOkUnKJ_CukhX3U1CJnFQlkN9CKxgRQhzRKGONoPcPxgcOxORtPCSxcS6kPHzmg4lodk5kVdqINRL6gFYfUNi1yoxIirqnZ6jxhr5idRaCgYKAWASAQASFQHUCsbCQS-2fWmEgGSK7NDTdLYKEA0167");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin="+time+"&maxResults=5&showDeleted=false&singleEvents=true&orderBy=startTime", requestOptions)
    .then(response => response.text())
    .then((result) => { 
        const strip = JSON.parse(result)
        const myitems = strip.items
        setFireme(myitems)
    //     const itemcount = Object.keys(myitems).length
    //    for(var i = 0; i < itemcount; i++) {
    //         console.log(myitems[i].summary +" "+ myitems[i].start.dateTime +" "+ myitems[i].start.date)
    //     }

    })
    .catch(error => console.log('error', error));

    return(
        <div>
            {
                Fireme.map((data) => (
                    <div>
                        <div>{data.summary}</div>
                    </div>
                ))
            }
        </div>
    )
}