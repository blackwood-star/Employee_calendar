import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Final from "./finalround"

import {
  Bars3Icon,
  CalendarIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MapIcon,
  MegaphoneIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, current: true },
  { name: 'Calendar', icon: CalendarIcon, current: false },
  { name: 'Teams', icon: UserGroupIcon, current: false },
  { name: 'Directory', icon: MagnifyingGlassCircleIcon, current: false },
  { name: 'Announcements', icon: MegaphoneIcon, current: false },
  { name: 'Office Map', icon: MapIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function sidebar() {

  return (
    <>
      <div className="flex h-screen w-full p-4">
        <div className="h-full w-full rounded-lg border-2 border-dashed">
            <div className="w-full h-full border-gray-200" >
                <Final />
            </div>
        </div>
      </div>
    </>
  )
}
