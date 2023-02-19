import React, {ReactNode, SyntheticEvent} from 'react';
import ApiCalendar from 'react-google-calendar-api';

export default function Myworld() {
const config = {
    "clientId": "692168921946-mdrvoee9gu6gla8r4rttqpnkgunqeevc.apps.googleusercontent.com",
    "apiKey": "AIzaSyCBLTByi29EN1oqOLoUP493OpY91vKGps8",
    "scope": "https://www.googleapis.com/auth/calendar",
    "discoveryDocs": [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
    ]
}
  
const apiCalendar = new ApiCalendar(config)
    console.log(new Date())
}