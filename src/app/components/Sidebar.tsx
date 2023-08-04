"use client";
import { ChartBarIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

function className(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {

  const sidebarOption = [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
    { name: "analytics", href: "#", icon: ChartBarIcon, current: false, },
    { name: "Page1", href: "/dashboard/page1", icon: ChartBarIcon, current: false, },
  ];

  return (
    <div className="p-3">
      <div className=" hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className=" flex grow flex-col gapy-y-5 overflow-auto bg-white px-6 pb-4 border-r-2">
          <div className=" flex h-16 shrink-0 items-center">
            
            <h1 className=" text-3xl font-bold">LaoSkyway</h1>
          </div>

          <nav className=" flex flex-1 flex-col">
                <ul role="list" className=" flex flex-1 flex-col gap-y-7 ">
                    <li>
                        <ul role="list" className=" -mx-2 space-y-1">
                            {sidebarOption.map((option) => (
                                <li key={option.name}>
                                    <Link href={option.href} className={className(option.current? " bg-gray-700 text-white" : " text-gray-400 hover:text-white hover: bg-white "," group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold")}>
                                        <option.icon className=" text-gray-300 group-hover:text-white h-6 w-6 shrink-0" />
                                        {option.name}
                                    </Link>
                                    
                                </li>
                            ))
                            }
                        </ul>
                    </li>
                </ul>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
