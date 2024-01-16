"use client";

import Image from "next/image";
import { useItemsStore } from "./store/items-store";

export default function Home() {
  const { users } = useItemsStore();

  return (
    <>
      <title>List</title>
      <div className="text-white flex flex-col min-w-56 items-center justify-center gap-4">
        <div className="w-full justify-center items-center flex flex-col">


        <h2 className="bg-purple-700 px-2 w-full">Users</h2>
        <ul className=" text-black w-full">
          {users.map((user, index) => (
            <li key={index} className="odd:bg-gray-300 even:bg-gray-100 px-2 ">
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <a href="https://zod.dev/" className="w-52 h-24 border-purple-700 hover:bg-purple-700/20 active:scale-95 border rounded-md flex justify-center items-center transition-all hover:-translate-y-1 gap-2" target="_blank">
              <Image src="https://zod.dev/logo.svg" alt="Zod logo" width={50} height={50}/> Zod
            </a>
            <a href="https://zustand-demo.pmnd.rs/" className="w-52 h-24 border-purple-700 hover:bg-purple-700/20 active:scale-95 border rounded-md flex justify-center items-center transition-all hover:-translate-y-1 gap-2" target="_blank">
            <img src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560" alt="Zod logo" width={100} height={100}/>
              Zustand
            </a>

            
        </div>
      </div>
    </>
  );
}
