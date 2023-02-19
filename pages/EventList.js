
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function EventList() {
  const [value, onChange] = useState(new Date());

  return (
        <div className="h-full w-full flex items-center justify-center">
            <div class="w-4/5">
                <Calendar onChange={onChange} value={value} />
            </div>
        </div>
  );
}