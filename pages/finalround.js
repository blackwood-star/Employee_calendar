import Script from 'next/script'
import { useState } from 'react'
import { Fragment } from 'react'
import Scrollprofile from './scrollprofile'
import { HiClock, HiUserGroup } from 'react-icons/hi';
import { AiFillCustomerService } from "react-icons/ai";
import Calendar from "./calendar"
import EventList from "./EventList"

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks',
  },
  {
    id: 1,
    date: 'January 12th, 2022',
    time: '3:00 PM',
    datetime: '2022-01-12T15:00',
    name: 'Michael Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Tim Hortons',
  },
  {
    id: 1,
    date: 'January 12th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-12T17:00',
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Costa Coffee at Braehead',
  },
  {
    id: 1,
    date: 'January 14th, 2022',
    time: '10:00 AM',
    datetime: '2022-01-14T10:00',
    name: 'Lindsay Walton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Silverburn',
  },
  {
    id: 1,
    date: 'January 14th, 2022',
    time: '12:00 PM',
    datetime: '2022-01-14T12:00',
    name: 'Courtney Henry',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Silverburn',
  }
  // More meetings...
]
const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const mycollection = []
    const myarray = []
    const time = (new Date()).toISOString()
    const [Fireme, setFireme] = useState([])
    const [profilemail, setProfilemail] = useState(["Isaiah@aorborc.com", "/Isaiya.webp", "Isaiya Jeyaseelan"])
    
    {/* Access Token */}
    var myhead = new Headers();
    myhead.append("Content-Transfer-Encoding", "application/x-www-form-urlencoded");
    myhead.append("Content-Type", "text/plain");
    myhead.append("Cookie", "__Host-GAPS=1:6DEJXrjwyALFcHGSFJ1bD5PW474WGQ:3N70P295KhdZnYWB");

    var raw = "{\n    \"refresh_token\" : \"1//0gI8bofkeTg03CgYIARAAGBASNwF-L9IrM-6rgAP_DBK-D6vKbC_Jhp11LaWRw3V0o-klOp13BpI2c0ZbC5i3nkH94aZGCd8PbBg\",\n    \"client_id\" : \"692168921946-mdrvoee9gu6gla8r4rttqpnkgunqeevc.apps.googleusercontent.com\",\n    \"client_secret\" : \"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\",\n    \"grant_type\" : \"refresh_token\"\n}";

    var requestOptions = {
        method: 'POST',
        headers: myhead,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://accounts.google.com/o/oauth2/token", requestOptions)
    .then(response => response.text())
    .then((result) => {
        const myresults = JSON.parse(result)
        const token = myresults.access_token

        if(token) {
            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token);
            myHeaders.append("Content-Type", "application/json");
        
            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };
            fetch("https://www.googleapis.com/calendar/v3/calendars/" + profilemail[0] + "/events?timeMin="+time+"&maxResults=5&showDeleted=false&singleEvents=true&orderBy=startTime", requestOptions)
            .then(response => response.text())
            .then((result) => { 
                const strip = JSON.parse(result)
                const myitems = strip.items
                const itemcount = Object.keys(myitems).length
                for(var i = 0; i < itemcount; i++) {
                        const createtime = myitems[i].start.dateTime.split("T")
                        const eventdate = createtime[0]
                        const eventtime = createtime[1]
                        const eventname = myitems[i].summary
                        const attentees = myitems[i].attendees  
                        const Meetinglink = myitems[i].hangoutLink  
                        // const attenteescount = Object.keys(attentees).length 
                        // for(var m=0; m < attenteescount; m++ ) {
                        //     myarray[m] = attentees[m].displayName
                        // }
                        mycollection[i] = { date : eventdate, time : eventtime, name : eventname, members : attentees, meet : Meetinglink, }  
                }
                setFireme(mycollection)
            })
            .catch(error => console.log('error', error));
        }
    })
    .catch(error => console.log('error', error));
  return (
    <div className="h-full w-full layout overflow-scroll">
        {/* People profile */}
        <div className="w-full" style={{ height : "30%"}}>
          <Scrollprofile setProfilemail={ setProfilemail } />
        </div>
        {/* Name of the person */}
        <div className="w-full flex items-center justify-between px-5" style={{ height : "10%" }}>
          <div className="text-lg font-semibold text-gray-900">Upcoming meetings { "[ " + profilemail[2] + " ]"}</div>
          <div className="text-lg font-semibold text-gray-900">
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Sort By<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
        {/* Event List */}
        <div className="w-full flex" style={{ height : "60%"}}>
          <div className="lg:w-3/5 w-full h-full overflow-scroll eventsinfo">
              <div className="w-full h-auto px-4 flex flex-col">
                {Fireme.map((meeting) => (
                  <div key={meeting.id} className="h-full flex py-6 px-2 m-2 overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <div className="h-14 w-14 flex-none overflow-hidden rounded-full shadow-lg"><img src={ profilemail[1] } alt="" /></div>
                    <div className="h-full flex-auto px-4">
                      <div className="h-1/2 font-semibold text-gray-900 text-md">{meeting.name}</div>
                      <div className="h-1/2 flex items-center">
                        {/* Date */}
                        <div className="pr-4 h-full">
                          <div className="h-full flex items-center">
                            <div><CalendarIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                            <div><span className="date p-1.5">Date</span></div><span className="text-gray-300">|</span>                           
                            <div className="date p-1.5" dateTime={ meeting.dateTime }>{ meeting.date}</div>                          
                          </div>
                        </div>
                        {/* Time */}
                        <div className="px-4 h-full">
                          <div className="h-full flex items-center">
                            <div className=""><HiClock className="h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                            <div><span className="date p-1.5">Time</span></div><span className="text-gray-300">|</span>                           
                            <div className="date p-1.5">{meeting.time}</div>                          
                          </div>
                        </div>
                        {/* people */}
                        <div className="px-4 h-full">
                          <div className="h-full flex items-center">
                            <div className=""><HiUserGroup className="h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                            <div><span className="date p-1.5">Members</span></div><span className="text-gray-300">|</span>                           
                            <div className="date p-1.5" title={meeting.members.map((people) => (
                                people.email
                              ))}>People
                            </div>                          
                          </div>
                        </div>
                         {/* meet */}
                         <div className="px-4 h-full">
                          <div className="h-full flex items-center">
                            <div className=""><AiFillCustomerService className="h-5 w-5 text-gray-400" aria-hidden="true" /></div>
                            <div><span className="date p-1.5">Meet</span></div><span className="text-gray-300">|</span>                           
                            <div className="date p-1.5"><a href={ meeting.meet } target="_blank">Meet</a></div>                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
          </div>
          {/* calendar */}
          <div className="lg:w-2/5 w-full h-full">
              <EventList />
          </div>
        </div>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js" integrity="sha512-rpLlll167T5LJHwp0waJCh3ZRf7pO6IT1+LZOhAyP6phAirwchClbTZV3iqL3BMrVxIYRbzGTpli4rfxsCK6Vw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
    </div>
  )
}