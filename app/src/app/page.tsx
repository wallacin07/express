
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { DialogDemo } from "@/components/myComponents/Dialog";
import { Table } from "lucide-react";
import Image from "next/image";
// import {DataTableDemo} from '../app/Todo/componenteAleatorio'

export default function Home() {
  return (
    <>
      <SidebarProvider className="flex h-full w-full">
        <div className="flex justify-end items-center h-full w-full">
          <DialogDemo></DialogDemo>
        </div>
          <Sidebar></Sidebar>
      </SidebarProvider>
    </>
  );
}
