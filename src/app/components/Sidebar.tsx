"use client"
import { ChartBarIcon, HomeIcon } from "@heroicons/react/24/outline";
import { useSelectedLayoutSegment } from "next/navigation";

function className(...classes: string[]){
    return classes.filter(Boolean).join('')
}

const Sidebar = () => {

    const sidebarOption = [
        {name: "Dashboard", href: "/dashboard", icon: HomeIcon, current : true},
        {name: "analytics", href: "/dashboard/analytics", icon: ChartBarIcon, current : true},
    ]

  return (
    <div className="p-3">
        <div className=" hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
            <div className=" flex grow flex-col gapy-y-5 overflow-auto bg-white px-6 pb-4 border-r-2 ">sidebar</div>
            <div>test 1234</div>
        </div>
    </div>
  )
}

export default Sidebar