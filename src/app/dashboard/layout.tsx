import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";


type Props = {
    children: ReactNode;
}

const layout = (props: Props) => {
  return (
    <div className=" flex mx-auto w-full">
        <Sidebar />
        <main className=" w-full">
            {props.children}
        </main>
    </div>
  )
}

export default layout