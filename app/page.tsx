"use client";

import { useItemsStore } from "./store/items-store";

export default function Home() {
  const { users } = useItemsStore();

  return (
    <div className="text-white flex flex-col min-w-56 items-center justify-center">
      <h2 className="bg-purple-700 px-2 w-full">Users</h2>
      <ul className=" text-black w-full">
        {users.map((user, index) => (
          <li key={index} className="odd:bg-gray-300 even:bg-gray-100 px-2 ">
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
